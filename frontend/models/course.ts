import * as ko from 'knockout';
import {Model, ModelJson, ModelStore} from "./model";
import {capitalize, TwoWayReadonlyMap} from "../services/plugins";
import {ajax_get} from "../services/ajax";

export enum ServiceType {
    NATIVE= "native",
    LTI = "lti"
}

export enum CourseVisibility {
    PRIVATE="private",
    PUBLIC="public",
    ARCHIVED="archived"
}

export interface CourseJson extends ModelJson {
    id: number;
    name: string;
    url: string;
    owner_id: number;
    service: ServiceType;
    external_id: string;
    endpoint: string;
    visibility: CourseVisibility;
    term: string;
    settings: string;
    locked: boolean;
}

export class Course extends Model<CourseJson> {
    id: number;
    name: KnockoutObservable<string>;
    url: KnockoutObservable<string>;
    ownerId: KnockoutObservable<number>;
    service: KnockoutObservable<ServiceType>;
    externalId: KnockoutObservable<string>;
    endpoint: KnockoutObservable<string>;
    visibility: KnockoutObservable<CourseVisibility>;
    term: KnockoutObservable<string>;
    settings: KnockoutObservable<string>;
    locked: KnockoutObservable<boolean>;

    FIELDS: TwoWayReadonlyMap = new TwoWayReadonlyMap({
        "name": "name",
        "url": "url",
        "owner_id": "ownerId",
        "service": "service",
        "external_id": "externalId",
        "endpoint": "endpoint",
        "visibility": "visibility",
        "term": "term",
        "settings": "settings",
        "date_modified": "dateModified",
        "date_created": "dateCreated",
        "locked": "locked"
    });

    constructor(data: CourseJson) {
        super(data);
        this.koFromJson(data);
    }

    isPinned(): boolean {
        let settings;
        try {
            settings = JSON.parse(this.settings());
        } catch (e) {
            return false;
        }
        if (settings != null) {
            return settings.pinned === true;
        }
    }

    setSetting(key: string, value: any) {
        let settings;
        try {
            settings = JSON.parse(this.settings());
        } catch (e) {
            settings = {};
        }
        settings[key] = value;
        this.settings(JSON.stringify(settings));
    }
}

export class CourseStore extends ModelStore<CourseJson, Course> {
    GET_FIELD: string = "courses";

    getPayload(): any {
        return {
            course_id: this.courseId
        };
    }

    getUrl(): string {
        return "courses";
    }

    getLocalStorageKey(): string {
        return `BLOCKPY_COURSE_${this.courseId}_COURSES`;
    }

    makeEmptyInstance(id: number): Course {
        return new Course({
            id: id,
            date_created: null,
            date_modified: null,
            endpoint: "",
            external_id: "",
            name: "Unknown Course",
            owner_id: null,
            service: null,
            settings: "",
            term: "Unknown term",
            url: "",
            visibility: null,
            locked: false
        });
    }
}

export const CourseTemplate = `
    <div>Course: <span data-bind="text: name"></span></div>
`;

ko.components.register("course", {
    viewModel: Course,
    template: CourseTemplate
});
