import * as ko from 'knockout';
import {Model, ModelJson, ModelStore} from "./model";
import {capitalize, TwoWayReadonlyMap} from "../services/plugins";
import {ajax_get} from "../services/ajax";

export interface AssignmentGroupJson extends ModelJson {
    id: number;
    name: string;
    url: string;

    position: number;

    forked_id: number;
    forked_version: number;
    owner_id: number;
    course_id: number;
    version: number;
}

export class AssignmentGroup extends Model<AssignmentGroupJson> {
    id: number;
    name: KnockoutObservable<string>;
    url: KnockoutObservable<string>;
    position: KnockoutObservable<number>;
    forkedId: KnockoutObservable<number>;
    forkedVersion: KnockoutObservable<number>;
    ownerId: KnockoutObservable<number>;
    courseId: KnockoutObservable<number>;
    version: KnockoutObservable<number>;

    FIELDS: TwoWayReadonlyMap = new TwoWayReadonlyMap({
        "name": "name",
        "url": "url",
        "position": "position",
        "forked_id": "forkedId",
        "forked_version": "forkedVersion",
        "owner_id": "ownerId",
        "course_id": "courseId",
        "version": "version",
        "date_modified": "dateModified",
        "date_created": "dateCreated"
    });

    constructor(data: AssignmentGroupJson) {
        super(data);
        this.koFromJson(data);
    }
}

export class AssignmentGroupStore extends ModelStore<AssignmentGroupJson, AssignmentGroup> {
    GET_FIELD: string = "assignment_groups";

    getPayload(): any {
        return {
            assignment_group_ids: this.getDelayedIds().join(","),
            course_id: this.courseId
        };
    }

    getUrl(): string {
        return "assignment_groups/get_ids";
    }

    makeEmptyInstance(id: number): AssignmentGroup {
        return new AssignmentGroup({
            id: id,
            date_created: null,
            date_modified: null,
            name: "Unknown",
            url: "",
            position: 0,
            forked_id: 0,
            forked_version: 0,
            owner_id: 0,
            course_id: 0,
            version: 0
        });
    }

    getLocalStorageKey(): string {
        return `BLOCKPY_COURSE_${this.courseId}_ASSIGNMENT_GROUPS`;
    }
}

export const AssignmentGroupTemplate = `
    <div>Assignment Group: <span data-bind="text: name"></span></div>
`;


ko.components.register("assignment-group", {
    viewModel: AssignmentGroup,
    template: AssignmentGroupTemplate
});