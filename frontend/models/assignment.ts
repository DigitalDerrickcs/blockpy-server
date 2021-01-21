import * as ko from 'knockout';
import {Model, ModelJson, ModelStore} from "./model";
import {capitalize, TwoWayReadonlyMap} from "../components/plugins";
import {ajax_get} from "../components/ajax";
import {AssignmentGroup, AssignmentGroupJson} from "./assignment_group";

export interface AssignmentJson extends ModelJson {
    id: number;
    name: string;
    url: string;

    type: string;
    instructions: string;
    reviewed: boolean;
    hidden: boolean;
    public: boolean;
    ip_ranges: string;
    settings: string;

    on_run: string;
    on_change: string;
    on_eval: string;
    starting_code: string;
    extra_instructor_files: string;
    extra_starting_files: string;

    forked_id: number;
    forked_version: number;
    owner_id: number;
    course_id: number;
    version: number;
}

export class Assignment extends Model<AssignmentJson> {
    id: number;
    name: KnockoutObservable<string>;
    url: KnockoutObservable<string>;
    type: KnockoutObservable<string>;
    instructions: KnockoutObservable<string>;
    reviewed: KnockoutObservable<boolean>;
    hidden: KnockoutObservable<boolean>;
    public: KnockoutObservable<boolean>;
    ipRanges: KnockoutObservable<string>;
    settings: KnockoutObservable<string>;
    onRun: KnockoutObservable<string>;
    onChange: KnockoutObservable<string>;
    onEval: KnockoutObservable<string>;
    startingCode: KnockoutObservable<string>;
    extraInstructorFiles: KnockoutObservable<string>;
    extraStartingFiles: KnockoutObservable<string>;
    forkedId: KnockoutObservable<number>;
    forkedVersion: KnockoutObservable<number>;
    ownerId: KnockoutObservable<number>;
    courseId: KnockoutObservable<number>;
    version: KnockoutObservable<number>;

    title: KnockoutReadonlyComputed<string>;
    group: KnockoutObservable<AssignmentGroup|null>;

    FIELDS: TwoWayReadonlyMap = new TwoWayReadonlyMap({
        "name": "name",
        "url": "url",
        "type": "type",
        "instructions": "instructions",
        "reviewed": "reviewed",
        "hidden": "hidden",
        "public": "public",
        "ip_ranges": "ipRanges",
        "settings": "settings",
        "on_run": "onRun",
        "on_change": "onChange",
        "on_eval": "onEval",
        "starting_code": "startingCode",
        "extra_instructor_files": "extraInstructorFiles",
        "extra_starting_files": "extraStartingFiles",
        "forked_id": "forkedId",
        "forked_version": "forkedVersion",
        "owner_id": "ownerId",
        "course_id": "courseId",
        "version": "version",
        "date_modified": "dateModified",
        "date_created": "dateCreated"
    });

    constructor(data: AssignmentJson) {
        super(data);
        this.group = ko.observable<AssignmentGroup>(null);
        this.koFromJson(data);
        this.title = ko.pureComputed<string>(() => {
            if (this.type().toLowerCase() === "maze") {
                return "Maze "+this.name();
            } else {
                return this.name();
            }
        }, this);
    }
}

export class AssignmentStore extends ModelStore<AssignmentJson, Assignment> {
    GET_FIELD: string = "assignments";

    getPayload(): any {
        return {
            assignment_ids: this.getDelayedIds().join(","),
            course_id: this.courseId
        };
    }

    getUrl(): string {
        return "assignments/get_ids";
    }

    makeEmptyInstance(id: number): Assignment {
        return new Assignment({
            id: id,
            date_created: null,
            date_modified: null,
            name: "Unknown",
            url: "",
            type: "unknown",
            instructions: "",
            reviewed: false,
            hidden: false,
            public: false,
            ip_ranges: "",
            settings: "",
            on_run: "",
            on_change: "",
            on_eval: "",
            starting_code: "",
            extra_instructor_files: "",
            extra_starting_files: "",
            forked_id: 0,
            forked_version: 0,
            owner_id: 0,
            course_id: 0,
            version: 0
        });
    }

    getLocalStorageKey(): string {
        return `BLOCKPY_COURSE_${this.courseId}_ASSIGNMENTS`;
    }


    getAllAvailable() {
        let payload = this.getPayload();
        let url = this.getUrl();
        return new Promise((resolve, reject) => {
            ajax_get(url, payload).then((data) => {
                if (data.success) {
                    let assignments: AssignmentJson[] = data.assignments;
                    let groups: AssignmentGroupJson[] = data.groups;
                    let created: Assignment[] = [];
                    for (let i=0; i<assignments.length; i+= 1) {
                        let assignment = this.newInstance(assignments[i]);
                        if (groups[i] !== null) {
                            let group = this.server.assignmentGroupStore.newInstance(groups[i]);
                            assignment.group(group);
                        }
                        created.push(assignment);
                    }
                    resolve(created);
                } else {
                    reject(data);
                }
            });
        });
    }
}

export const AssignmentTemplate = `
    <div>Assignment: <span data-bind="text: name"></span></div>
`;

export const AssignmentShortTemplate = `
    <div>Assignment: <span data-bind="text: name"></span> (<span data-bind="text: url"></span>)</div>
`;

ko.components.register("assignment", {
    viewModel: Assignment,
    template: AssignmentTemplate
});

ko.components.register("assignment-short", {
    template: AssignmentShortTemplate
})