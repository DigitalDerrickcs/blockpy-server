import * as ko from 'knockout';
import {Model, ModelJson, ModelStore} from "./model";
import {TwoWayReadonlyMap} from "../components/plugins";

export interface ReviewJson extends ModelJson {
    comment: string;
    location: string;
    generic: boolean;
    tag_id: number | null;
    score: number | null;
    submission_id: number | null;
    author_id: number;
    assignment_version: number;
    submission_version: number;
    version: number;
    forked_id: number | null;
    forked_version: number | null;
}

export class Review extends Model<ReviewJson> {
    comment: KnockoutObservable<string>;
    location: KnockoutObservable<string>;
    generic: KnockoutObservable<boolean>;
    tagId: KnockoutObservable<number | null>;
    score: KnockoutObservable<number|null>;
    submissionId: KnockoutObservable<number | null>;
    authorId: KnockoutObservable<number>;
    assignmentVersion: KnockoutObservable<number>;
    submissionVersion: KnockoutObservable<number>;
    version: KnockoutObservable<number>;
    forkedId: KnockoutObservable<number | null>;
    forkedVersion: KnockoutObservable<number | null>;


    FIELDS: TwoWayReadonlyMap = new TwoWayReadonlyMap({
        "date_modified": "dateModified",
        "date_created": "dateCreated",
        "comment": "comment",
        "location": "location",
        "generic": "generic",
        "tag_id": "tagId",
        "score": "score",
        "submission_id": "submissionId",
        "author_id": "authorId",
        "assignment_version": "assignmentVersion",
        "submission_version": "submissionVersion",
        "version": "version",
        "forked_id": "forkedId",
        "forked_version": "forkedVersion",
    });

    constructor(data: ReviewJson) {
        super(data);
        this.koFromJson(data);
    }
}


export class ReviewStore extends ModelStore<ReviewJson, Review> {
    GET_FIELD: string = "submissions";

    getPayload(): any {
        return {
            submission_ids: this.getDelayedIds().join(","),
            course_id: this.courseId
        };
    }

    getUrl(): string {
        return "submission/get_ids";
    }

    makeEmptyInstance(id: number): Review {
        return new Review({
            assignment_version: 0,
            author_id: 0,
            comment: "",
            forked_id: null,
            forked_version: null,
            generic: false,
            location: "",
            score: 0,
            submission_id: null,
            submission_version: 0,
            tag_id: null,
            version: 0,
            id: id,
            date_created: null,
            date_modified: null
        });
    }

    getLocalStorageKey(): string {
        return `BLOCKPY_COURSE_${this.courseId}_REVIEWS`;
    }
}
