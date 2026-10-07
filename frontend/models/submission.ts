import * as ko from 'knockout';
import {Model, ModelJson, ModelStore} from "./model";
import {TwoWayReadonlyMap} from "../services/plugins";

export enum SubmissionStatus {
    // Not yet begun - the value if the submission does not exist
    INITIALIZED = "Initialized",
    // Started -> not yet run
    STARTED = "Started",
    // inProgress -> Run, but not yet marked formally as "submitted"
    IN_PROGRESS = "inProgress",
    // Submitted -> formally marked
    SUBMITTED = "Submitted",
    // Completed -> Either formally Submitted and FullyGraded, or auto graded as "correct"
    COMPLETED = "Completed"
}

export enum GradingStatus {
    FULLY_GRADED = 'FullyGraded',
    PENDING = 'Pending',
    PENDING_MANUAL = 'PendingManual',
    FAILED = 'Failed',
    NOT_READY = 'NotReady',
}

export interface SubmissionJson extends ModelJson {
    code: string;
    extra_files: string;
    url: string;
    endpoint: string;
    score: number;
    correct: boolean;
    submission_status: SubmissionStatus;
    grading_status: GradingStatus;
    assignment_id: number | null;
    assignment_group_id: number | null;
    assignment_version: number;
    course_id: number | null;
    user_id: number | null;
    version: number;
    time_limit: string | null;
    feedback: string;
    date_started: string | null;
}

export class Submission extends Model<SubmissionJson> {
    code: KnockoutObservable<string>;
    extraFiles: KnockoutObservable<string>;
    url: KnockoutObservable<string>;
    endpoint: KnockoutObservable<string>;
    score: KnockoutObservable<number>;
    correct: KnockoutObservable<boolean>;
    submissionStatus: KnockoutObservable<SubmissionStatus>;
    gradingStatus: KnockoutObservable<GradingStatus>;
    assignmentId: ko.Observable<number | null>;
    assignmentGroupId: KnockoutObservable<number | null>;
    assignmentVersion: ko.Observable<number>;
    courseId: ko.Observable<number | null>;
    userId: ko.Observable<number | null>;
    version: KnockoutObservable<number>;
    dateStarted: KnockoutObservable<string | null>;
    feedback: KnockoutObservable<string | null>;
    timeLimit: KnockoutObservable<string | null>;

    FIELDS: TwoWayReadonlyMap = new TwoWayReadonlyMap({
        "date_modified": "dateModified",
        "date_created": "dateCreated",
        "code": "code",
        "extra_files": "extraFiles",
        "url": "url",
        "endpoint": "endpoint",
        "score": "score",
        "correct": "correct",
        "submission_status": "submissionStatus",
        "grading_status": "gradingStatus",
        "assignment_id": "assignmentId",
        "assignment_group_id": "assignmentGroupId",
        "assignment_version": "assignmentVersion",
        "course_id": "courseId",
        "user_id": "userId",
        "version": "version",
        "date_started": "dateStarted",
        "feedback": "feedback",
        "time_limit": "timeLimit"
    });

    constructor(data: SubmissionJson) {
        super(data);
        this.koFromJson(data);
    }

    getAsSubmissionKey(): string {
        return [this.courseId(), this.userId(), this.assignmentId()].join(",");
    }

    checkGrading(expected: GradingStatus) {
        return this.gradingStatus().toLowerCase() === expected.toLowerCase();
    }

    checkSubmission(expected: SubmissionStatus) {
        return this.submissionStatus().toLowerCase() === expected.toLowerCase();
    }

    isFullyGraded(): boolean {
        return this.checkGrading(GradingStatus.FULLY_GRADED);
    }

}


export class SubmissionStore extends ModelStore<SubmissionJson, Submission> {
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

    makeEmptyInstance(id: number): Submission {
        return new Submission({
            assignment_group_id: null,
            assignment_id: null,
            assignment_version: 0,
            code: "",
            correct: false,
            course_id: null,
            endpoint: "",
            extra_files: "",
            grading_status: GradingStatus.NOT_READY,
            score: 0,
            submission_status: SubmissionStatus.INITIALIZED,
            url: "",
            user_id: undefined,
            version: 0,
            id: id,
            date_created: null,
            date_modified: null,
            date_started: null,
            feedback: null,
            time_limit: null
        });
    }

    getLocalStorageKey(): string {
        return `BLOCKPY_COURSE_${this.courseId}_SUBMISSIONS`;
    }
}
