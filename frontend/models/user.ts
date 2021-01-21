import * as ko from 'knockout';
import {Model, ModelJson, ModelStore} from "./model";
import {capitalize, TwoWayReadonlyMap} from "../components/plugins";
import {ajax_get} from "../components/ajax";
import {Server} from "../components/server";

export interface RoleJson extends ModelJson {
    id: number;
    name: string;
    user_id: number;
    course_id: number;
}

export class Role extends Model<RoleJson> {
    id: number;
    userId: KnockoutObservable<number>;
    courseId: KnockoutObservable<number>;
    name: KnockoutObservable<string>;
    FIELDS: TwoWayReadonlyMap = new TwoWayReadonlyMap({
        "user_id": "userId",
        "course_id": "courseId",
        "name": "name",
        "date_modified": "dateModified",
        "date_created": "dateCreated"
    });

    constructor(data: RoleJson) {
        super(data);
        this.koFromJson(data);
    }
}

export interface UserJson extends ModelJson {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    roles?: RoleJson[];
}

export function cleanRole(role: string) {
    let components = role.split("/");
    role = components[components.length-1];
    return capitalize(role);
}

export class User extends Model<UserJson> {
    id: number;
    email: KnockoutObservable<string>;
    firstName: KnockoutObservable<string>;
    lastName: KnockoutObservable<string>;
    roles: KnockoutObservableArray<Role>;
    FIELDS: TwoWayReadonlyMap = new TwoWayReadonlyMap({
        "email": "email",
        "first_name": "firstName",
        "last_name": "lastName"
    });

    // Computed fields
    name: KnockoutReadonlyComputed<string>;
    primaryRole: KnockoutReadonlyComputed<string>;
    title: KnockoutReadonlyComputed<string>;
    displayMode: KnockoutObservable<UserDisplayMode>;

    constructor(data: UserJson) {
        super(data);
        this.koFromJson(data);
        this.name = ko.pureComputed(() => {
            return this.firstName() + " " + this.lastName();
        }, this);
        this.primaryRole = ko.pureComputed(() => {
            if (!this.roles().length) {
                return "User";
            } else {
                return this.roles().map((role: Role) => cleanRole(role.name())).join("/");
            }
        }, this);
        this.title = ko.pureComputed(() => {
            if (!this.displayMode) {
                return this.name();
            }
            switch (this.displayMode()) {
                case UserDisplayMode.LAST_FIRST:
                    return this.lastName() + ", " + this.firstName();
                case UserDisplayMode.EMAIL:
                    return this.email();
                case UserDisplayMode.BLOCKPY_ID:
                    return ""+this.id;
                default:
                case UserDisplayMode.FIRST_LAST:
                    return this.name();
            }
        }, this);
    }

    koFromJson(data: UserJson) {
        super.koFromJson(data);
        let roles: Role[] = [];
        if (data.roles) {
            roles = data.roles.map((role: RoleJson) => new Role(role));
        }
        this.roles = ko.observableArray(roles);
    }

    fromJson(data: UserJson) {
        super.fromJson(data);
        this.roles.removeAll();
        if (data.roles) {
            data.roles.forEach((role: RoleJson) => this.roles.push(new Role(role)));
        }
    }

    toJson(): UserJson {
        let result: UserJson = super.toJson();
        result.roles = this.roles().map((role: Role) => role.toJson());
        return result;
    }
}

export enum UserDisplayMode {
    FIRST_LAST="First name last name",
    LAST_FIRST="Last name, first name",
    EMAIL="Email",
    BLOCKPY_ID="Internal BlockPy ID",
    //DATE_CREATED="Date created"
}

export class UserStore extends ModelStore<UserJson, User> {
    GET_FIELD: string = "users";
    private readonly displayOptions: UserDisplayMode[];
    sortMode: KnockoutObservable<UserDisplayMode>;
    private displayMode: KnockoutObservable<UserDisplayMode>;

    constructor(server: Server, courseId: number|null, initialIds: number[], initialData: UserJson[]) {
        super(server, courseId, initialIds, initialData);
        this.sortMode = ko.observable(<UserDisplayMode>localStorage.getItem(`BLOCKPY_COURSE_USER_SORT_MODE`) || UserDisplayMode.FIRST_LAST);
        this.displayMode = ko.observable(<UserDisplayMode>localStorage.getItem(`BLOCKPY_COURSE_USER_DISPLAY_MODE`) || UserDisplayMode.FIRST_LAST);

        this.sortMode.subscribe(() => {
            localStorage.setItem(`BLOCKPY_COURSE_USER_SORT_MODE`, this.sortMode());
            // Notify the user set selector?
        });
        this.displayMode.subscribe(() => {
            localStorage.setItem(`BLOCKPY_COURSE_USER_DISPLAY_MODE`, this.displayMode());
        });
        this.displayOptions = Object.values(UserDisplayMode);
    }

    sortMethod(left: User, right: User): number {
        switch (this.sortMode()) {
            case UserDisplayMode.FIRST_LAST:
                return (left.firstName() === right.firstName()) ?
                    left.lastName().localeCompare(right.lastName()) :
                    left.firstName().localeCompare(right.firstName());
            case UserDisplayMode.LAST_FIRST:
                return (left.lastName() === right.lastName()) ?
                    left.firstName().localeCompare(right.firstName()) :
                    left.lastName().localeCompare(right.lastName());
            case UserDisplayMode.BLOCKPY_ID:
                return (left.id - right.id);
            default:
            case UserDisplayMode.EMAIL:
                return (left.email().localeCompare(right.email()));
            /*case UserDisplayMode.DATE_CREATED:
                return left.dateCreated() === null ? 1 : right.dateCreated() === null ? -1 :
                    (left.dateCreated().localeCompare(right.dateCreated()));*/
        }
    }

    cleanData(models: User[]): User[] {
        return models.sort(this.sortMethod.bind(this));
    }

    getPayload(): any {
        return {
            user_ids: this.getDelayedIds().join(","),
            course_id: this.courseId
        };
    }

    getUrl(): string {
        return "courses/users";
    }

    getLocalStorageKey(): string {
        return `BLOCKPY_COURSE_${this.courseId}_USERS`;
    }

    makeEmptyInstance(id: number): User {
        let u = new User({
            id: id,
            email: "",
            date_created: null,
            date_modified: null,
            first_name: "",
            last_name: "Unknown"
        });
        u.displayMode = this.displayMode;
        return u;
    }
}

export const UserTemplate = `
    <div>User: <span data-bind="text: title"></span></div>
`;

export const UserShortTemplate = `
    <div><span data-bind="text: primaryRole"></span>: <span data-bind="text: title"></span></div>
`;

export const UserDisplaySettingsEditor = `
<div>
    <button class="btn btn-outline-secondary btn-sm float-right" type="button"
            data-toggle="collapse" data-target="#user-display-settings"
            aria-expanded="false" aria-controls="collapseExample">
        User Settings <span class="fas fa-expand-arrows-alt"></span>
    </button>
    <div id="user-display-settings" class="collapse">
    <form>
        <div class="card card-body">
        <div class="form-group row">
            <label class="col-sm-4 col-form-label" for="display-mode-select">
                Render user names as: 
            </label>
            <div class="col-sm-8">
                <select id="display-mode-select" class="custom-select" data-bind="options: options, value: displayMode"></select>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-4 col-form-label" for="sort-mode-select">
                Sort user names as: 
            </label>
            <div class="col-md-8">
                <select id="sort-mode-select" class="custom-select" data-bind="options: options, value: sortMode"></select>
            </div>
        </div>
        </div>
    </div>
    </form>
</div>
`;

ko.components.register("user", {
    viewModel: User,
    template: UserTemplate
});

ko.components.register("user-short", {
    template: UserShortTemplate
})

ko.components.register("user-display-settings-editor", {
    template: UserDisplaySettingsEditor
})
