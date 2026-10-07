import {UserJson, UserStore} from "../models/user";
import {AssignmentJson, AssignmentStore} from "../models/assignment";
import {AssignmentGroupJson, AssignmentGroupStore} from "../models/assignment_group";
import {CourseJson, CourseStore} from "../models/course";
import {ReviewJson, ReviewStore} from "../models/review";
import {SubmissionJson, SubmissionStore} from "../models/submission";
import {FileStore} from "../models/files";

export interface ServerIds {
    userIds?: number[];
    courseIds?: number[];
    assignmentIds?: number[];
    assignmentGroupIds?: number[];
    reviewIds?: number[];
    submissionIds?: number[];
}

export interface ServerData {
    users?: UserJson[];
    courses?: CourseJson[];
    assignments?: AssignmentJson[];
    assignmentGroups?: AssignmentGroupJson[];
    reviews?: ReviewJson[];
    submissions?: SubmissionJson[];
}

/**
 * Principle: None of the UI models hold the canonical lists. They all have references to this Server,
 * who holds the unique Stores, each of which has their own canonical lists.
 */
export class Server {
    courseId: number;

    userStore: UserStore;
    courseStore: CourseStore;
    assignmentStore: AssignmentStore;
    assignmentGroupStore: AssignmentGroupStore;
    reviewStore: ReviewStore;
    submissionStore: SubmissionStore;
    fileStore: FileStore;

    isLoading: ko.PureComputed<boolean>;

    constructor(courseId: number, initialIds?: ServerIds, initialData?: ServerData) {
        this.courseId = courseId;
        this.userStore = new UserStore(this, courseId, initialIds.userIds, initialData.users);
        this.courseStore = new CourseStore(this, courseId, initialIds.courseIds, initialData.courses);
        this.assignmentStore = new AssignmentStore(this, courseId, initialIds.assignmentIds, initialData.assignments);
        this.assignmentGroupStore = new AssignmentGroupStore(this, courseId, initialIds.assignmentGroupIds, initialData.assignmentGroups);
        this.reviewStore = new ReviewStore(this, courseId, initialIds.reviewIds, initialData.reviews);
        this.submissionStore = new SubmissionStore(this, courseId, initialIds.submissionIds, initialData.submissions);
        this.fileStore = new FileStore(this, courseId);

        this.isLoading = ko.pureComputed<boolean>(() => {
            let a = this.assignmentStore.isLoading();
            let u = this.userStore.isLoading();
            let c = this.courseStore.isLoading();
            let g = this.assignmentGroupStore.isLoading();
            let r = this.reviewStore.isLoading();
            let s = this.submissionStore.isLoading();
            return a || u || c || g || r || s;
        }, this);
    }

    makeBlockPyRequest(payload: any) {
        let now = new Date();
        payload['timestamp'] = now.getTime();
        payload['timezone'] = now.getTimezoneOffset();
        return payload;
    }

}
