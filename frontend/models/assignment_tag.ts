import * as ko from 'knockout';
import {Model, ModelJson, ModelStore} from "./model";
import {TwoWayReadonlyMap} from "../services/plugins";

export interface AssignmentTagJson extends ModelJson {
    name: string;
    owner_id: number | null;
    course_id: number | null;
    kind: string;
    description: string;
    level: string;
    version: string;
}

export class AssignmentTag extends Model<AssignmentTagJson> {
    name: KnockoutObservable<string>;
    ownerId: KnockoutObservable<number|null>;
    courseId: KnockoutObservable<number|null>;
    kind: KnockoutObservable<string>;
    description: KnockoutObservable<string>;
    level: KnockoutObservable<string>;
    version: KnockoutObservable<string>;

    FIELDS: TwoWayReadonlyMap = new TwoWayReadonlyMap({
        "date_modified": "dateModified",
        "date_created": "dateCreated",
        "name": "name",
        "owner_id": "ownerId",
        "course_id": "courseId",
        "kind": "kind",
        "description": "description",
        "level": "level",
        "version": "version"
    });

    constructor(data: AssignmentTagJson) {
        super(data);
        this.koFromJson(data);
    }
}


export class AssignmentTagStore extends ModelStore<AssignmentTagJson, AssignmentTag> {
    GET_FIELD: string = "assignment_tags";

    getPayload(): any {
        return {
            assignment_tag_ids: this.getDelayedIds().join(","),
            course_id: this.courseId
        };
    }

    getUrl(): string {
        return "assignment_tags/get_ids";
    }

    makeEmptyInstance(id: number): AssignmentTag {
        return new AssignmentTag({
            name: "",
            owner_id: null,
            course_id: null,
            kind: "objective",
            description: "",
            level: "familiar",
            version: "0.0.1",
            id: id,
            date_created: null,
            date_modified: null
        });
    }

    getLocalStorageKey(): string {
        return `BLOCKPY_COURSE_${this.courseId}_ASSIGNMENT_TAG`;
    }
}
