import {GradingStatus, Submission, SubmissionStatus} from "../models/submission";
import {Review, ReviewJson} from "../models/review";
import {User} from "../models/user";
import {Assignment} from "../models/assignment";
import * as ko from 'knockout';
import {hideOverlay, showOverlay} from "../services/ajax";
import {Server} from "../services/server";


function closeSubmissionStatus(status: SubmissionStatus) {
    switch (status.toLowerCase()) {
        case SubmissionStatus.COMPLETED.toLowerCase(): case SubmissionStatus.SUBMITTED.toLowerCase():
            return "This assignment is closed or already completed, so the student cannot edit the assignment further.<br>Use this button to reopen the assignment.<br>";
        default:
            return "This assignment is currently OPEN for the student to edit.<br>Use this button to close the assignment.<br>";
    }
}

function colorSubmissionStatus(status: SubmissionStatus) {
    switch (status.toLowerCase()) {
        case SubmissionStatus.COMPLETED.toLowerCase(): case SubmissionStatus.SUBMITTED.toLowerCase():
            return "btn-info";
        default:
            return "btn-success";
    }
}

export function explainGradingStatus(status: GradingStatus) {
    switch (status.toLowerCase()) {
        case GradingStatus.FULLY_GRADED.toLowerCase():
           return "<strong>Submission is currently graded and the feedback is visible to them</strong> (unless the assignment is hidden in the LMS).<br>Use this button to hide and make further changes to their feedback.<br>";
       case GradingStatus.PENDING_MANUAL.toLowerCase(): case GradingStatus.PENDING.toLowerCase():
           return "<strong>Feedback is currently hidden while you add more feedback</strong>.<br>Use this button to release the feedback to the student and update their grade in Canvas.<br>";
       case GradingStatus.FAILED.toLowerCase():
           return "Something went wrong during the grading upload. Check your internet connection, make sure you have recently opened the BlockPy dashboard, and try again.<br>";
       case GradingStatus.NOT_READY.toLowerCase():
           return "<strong>Feedback is currently hidden while you add more feedback</strong>. They might still be working on the assignment.<br>Use this button to release the feedback to the student and update their grade in Canvas.<br>";
    }
}

export function colorGradingStatus(status: GradingStatus) {
    switch (status.toLowerCase()) {
        case GradingStatus.FULLY_GRADED.toLowerCase():
           return "btn-info";
       case GradingStatus.PENDING_MANUAL.toLowerCase(): case GradingStatus.PENDING.toLowerCase():
           return "btn-success";
       case GradingStatus.FAILED.toLowerCase():
           return "btn-danger";
       case GradingStatus.NOT_READY.toLowerCase():
           return "btn-warning";
    }
}

export function labelGradingStatus(status: GradingStatus) {
    switch (status.toLowerCase()) {
        case GradingStatus.FULLY_GRADED.toLowerCase():
           return "Hide and revise feedback";
       case GradingStatus.PENDING_MANUAL.toLowerCase(): case GradingStatus.PENDING.toLowerCase():
           return "Publish feedback to students";
       case GradingStatus.FAILED.toLowerCase():
           return "Failed to release feedback!";
       case GradingStatus.NOT_READY.toLowerCase():
           return "Publish feedback to students early";
    }
}

export enum ReviewModelState {
    DRAFT= "DRAFT",
    SAVED= "SAVED",
    EDITING= "EDITING",
    EXPANDED= "EXPANDED",
    COLLAPSED= "COLLAPSED"
}


export class Tag {
    id: number;
    name: string;
    kind: string;
    description: string;
    level: string;
    version: number;
    ownerId: number;
    courseId: number;
}

function findReviewByLocation(reviews: KnockoutObservableArray<SingleReviewInterface>, location: number): SingleReviewInterface|null {
    let potentialReview = reviews().find((review: SingleReviewInterface) => parseInt(review.review.location(), 10) === location);
    return potentialReview || null;
}

export class LineReviewInterfaceJson {
    location: number;
    reviews: KnockoutObservableArray<SingleReviewInterface>;
    isGrader: KnockoutObservable<boolean>;
    canSeeFeedback: KnockoutReadonlyComputed<boolean>;
    canEditFeedback: KnockoutReadonlyComputed<boolean>;
    parent: KnockoutObservable<SubmissionReviewInterface>;
}

export class LineReviewInterface {
    location: KnockoutObservable<number>;
    reviewInterface: KnockoutReadonlyComputed<SingleReviewInterface>;
    private quickButtonIcon: KnockoutReadonlyComputed<string>;
    isGrader: KnockoutObservable<boolean>;
    canSeeFeedback: KnockoutReadonlyComputed<boolean>;
    canEditFeedback: KnockoutReadonlyComputed<boolean>;
    parent: KnockoutObservable<SubmissionReviewInterface>;

    constructor(params: LineReviewInterfaceJson) {
        this.parent = params.parent;
        this.location = ko.observable(params.location);
        this.reviewInterface = ko.pureComputed(() => findReviewByLocation(params.reviews, this.location()));
        this.isGrader = params.isGrader;
        this.canSeeFeedback = params.canSeeFeedback;
        this.canEditFeedback = params.canEditFeedback;

        this.quickButtonIcon = ko.pureComputed(() => {
            const reviewInterface = this.reviewInterface();
            if (reviewInterface === null) {
                if (this.isGrader()) {
                    return "fa-plus-circle";
                } else {
                    return "fa-circle";
                }
            }
            switch (reviewInterface.state()) {
                case ReviewModelState.DRAFT:
                    return "fa-save";
                case ReviewModelState.EDITING:
                    return "fa-save";
                case ReviewModelState.SAVED:
                    return "fa-chevron-circle-right";
                case ReviewModelState.EXPANDED:
                    return "fa-chevron-circle-left";
            }
        });
    }

    addLineFeedback() {
        let location = this.location();
        if (!this.reviewInterface()) {
            let draftReview = new Review({
                assignment_version: this.parent().assignment.version(),
                author_id: this.parent().author.id,
                comment: "New Comment",
                date_created: ""+new Date(),
                date_modified: ""+new Date(),
                forked_id: null,
                forked_version: null,
                generic: false,
                id: null,
                location: ""+location,
                score: null,
                submission_id: this.parent().submission.id,
                submission_version: this.parent().submission.version(),
                tag_id: null,
                version: 0
            });
            let draftReviewInterface = new SingleReviewInterface({
                inherits: "nothing",
                parent: this.parent(),
                review: draftReview,
                state: ReviewModelState.DRAFT
            }, false);
            this.parent().reviews.push(draftReviewInterface);
        }
    }

    collapse() {
        this.reviewInterface().state(ReviewModelState.COLLAPSED);
    }

    edit() {
        if (this.reviewInterface()) {
            if (this.reviewInterface().state() === ReviewModelState.EDITING) {
                this.reviewInterface().state(ReviewModelState.EXPANDED);
            } else {
                this.reviewInterface().state(ReviewModelState.EDITING);
            }
        }
    }

    remove() {
        if (this.reviewInterface()) {
            this.reviewInterface().remove();
        }
    }

    quickButtonClick(component: any, event: any) {
        if (!this.canEditFeedback()) {
            if (this.reviewInterface()) {
                this.takeFocus(null, {currentTarget: event.currentTarget.nextElementSibling});
            }
            return;
        }
        if (this.reviewInterface() === null) {
            this.addLineFeedback();
            this.takeFocus(null, {currentTarget: event.currentTarget.nextElementSibling});
            return;
        }
        switch (this.reviewInterface().state()) {
            case ReviewModelState.DRAFT:
                this.reviewInterface().create();
                break;
           case ReviewModelState.EDITING:
                this.reviewInterface().update();
                break;
            case ReviewModelState.SAVED:
                this.reviewInterface().state(ReviewModelState.EDITING);
                break;
            case ReviewModelState.EXPANDED:
                this.reviewInterface().state(ReviewModelState.EDITING);
                break;
        }
    }

    fixPopoverPosition(elements: HTMLElement[]) {
        let popover, button;
        elements.map((element) => {
            if (element.classList) {
                if (element.classList.contains("popover")) {
                    popover = element;
                }
                if (element.classList.contains("line-review-quick-button")) {
                    button = element;
                }
            }
        });
        let offset = $(button).offset();
        let width = $(button).width()+5;
        $(popover).offset({"top": -$(button).height()/2+5, "left": width});
        //popover.style.top = -$(button).height()/2;
        //popover.style.left = width;
        $(popover).show();
    }

    takeFocus = (component: any, event: any) => {
        $(".popover").css({"z-index": 1060});
        $(event.currentTarget).css({"z-index": 1061});
    };
}

export enum InheritOptions {
    NOTHING="nothing",
    TAG="tag",
    REVIEW="review"
}

export interface SingleReviewInterfaceJson {
    review: Review;
    parent: SubmissionReviewInterface;
    state: ReviewModelState;
    inherits: string;
}

export class SingleReviewInterface {
    // The review is always the same, never changes
    review: Review;
    parent: SubmissionReviewInterface;
    state: KnockoutObservable<ReviewModelState>;
    inherits: KnockoutObservable<string>;
    private getScoreText: KnockoutReadonlyComputed<string>;
    getScore: KnockoutReadonlyComputed<number>;
    private getText: KnockoutReadonlyComputed<string>;

    constructor(params: SingleReviewInterfaceJson, startSaved: boolean) {
        this.review = params.review;
        this.parent = params.parent;
        if (startSaved) {
            this.state = ko.observable(ReviewModelState.SAVED);
        } else {
            this.state = ko.observable(params.state);
        }
        this.inherits = ko.observable(params.inherits);
        // If we change inherits type, then clear out other settings
        this.inherits.subscribe(this.clearOtherInherits.bind(this));
        this.getScoreText = ko.pureComputed<string>( ()=>this.calculateScoreText());
        this.getScore = ko.pureComputed<number>( () => this.calculateScore());
        this.getText = ko.pureComputed<string>( ()=> this.calculateText());
    }

    isLineReview(): boolean {
        return this.review.location() !== "" && this.review.location() !== null;
    }

    isEditing(): boolean {
        return this.state() === ReviewModelState.EDITING || this.state() === ReviewModelState.DRAFT;
    }

    clearOtherInherits(newInheritMode: string) {
        if (newInheritMode === InheritOptions.REVIEW) {
            this.review.tagId(null);
        } else if (newInheritMode === InheritOptions.TAG) {
            this.review.forkedId(null);
        } else {
            this.review.tagId(null);
            this.review.forkedId(null);
        }
    }

    calculateScoreText(): string {
        let score = this.calculateScore();
        if (score > 0) {
            return "+"+score;
        } else if (score == null) {
            return "";
        } else {
            return ""+score;
        }
    }

    calculateScore(): number {
        let score = this.review.score();
        if (score === null) {
            let parent = this.getParentReview();
            if (parent !== null) {
                score = parent.score();
            }
        } else {
            score = parseInt(""+score, 10);
        }
        return score;
    }

    getParentReview(): Review|null {
        let genericReviewId = this.review.forkedId();
        if (genericReviewId === null) {
            return null;
        }
        let genericReview = this.parent.lookupGenericReviews[genericReviewId];
        if (genericReview != null) {
            return genericReview;
        } else {
            return null;
        }
    }

    getParentTag(): Tag|null {
        let tagId = this.review.tagId();
        if (tagId === null) {
            return null;
        }
        let tag = this.parent.lookupTags[tagId];
        if (tag != null) {
            return tag;
        } else {
            return null;
        }
    }

    calculateText(): string {
        let text = this.review.comment();
        switch (this.inherits()) {
            case "nothing": return text;
            case "tag":
                let tag = this.getParentTag();
                if (tag !== null) {
                    text = tag.name+(text ? "- "+text : "");
                }
                return text;
            case "review":
                let parent = this.getParentReview();
                if (parent !== null) {
                    text = parent.comment()+(text ? "- "+text : "");
                }
                return text;
        }
    }

    remove() {
        this.parent.server.reviewStore.remove(this.review).then(() => {
            this.parent.reviews.remove(this);
        });
    }

    edit() {
        this.state(ReviewModelState.EDITING);
    }

    create() {
        this.parent.server.reviewStore.create(this.serialized()).then((savedReview: Review) => {
            this.review.id = savedReview.id;
            this.state(ReviewModelState.SAVED);
        });
    }

    update() {
        this.parent.server.reviewStore.update(this.serialized()).then((savedReview: Review) => {
            this.state(ReviewModelState.SAVED);
        });
    }

    cancel() {
        switch (this.state()) {
            case ReviewModelState.EDITING:
                // Persist change to server
                this.state(ReviewModelState.SAVED);
                break;
            case ReviewModelState.DRAFT:
                this.parent.reviews.remove(this);
                break;
        }
    }

    save() {
        if (this.state() === ReviewModelState.DRAFT) {
            this.create();
        } else {
            this.update();
        }
    }

    serialized(): Partial<ReviewJson> {
        let tag_id, forked_id;
        console.log(this.review.tagId(), this.review.forkedId());
        tag_id = this.review.tagId() != null ? this.review.tagId() : null;
            forked_id = this.review.forkedId() != null ? this.review.forkedId() : null;
            if (tag_id && forked_id) {
                tag_id = null;
            }
        if (this.inherits() !== undefined) {
            if (this.inherits() === 'tag') {
                forked_id = null;
            } else if (this.inherits() ==='review') {
                tag_id = null;
            } else {
                forked_id = null;
                tag_id = null;
            }
        }
        return {
            id: this.review.id,
            comment: this.review.comment(),
            generic: this.review.generic(),
            location: this.review.location(),
            tag_id: tag_id,
            score: (this.review.score() == null) ? null : this.review.score(),
            author_id: this.review.authorId(),
            assignment_version: this.review.assignmentVersion(),
            submission_version: this.review.submissionVersion(),
            version: this.review.version(),
            forked_id: forked_id,
            date_created: this.review.dateCreated(),
            submission_id: this.review.submissionId(),
            forked_version: this.review.forkedVersion()
        };
    };
}


function parseReviewInheritance(review: Review): InheritOptions {
    if (review.tagId() != null) {
        return InheritOptions.TAG;
    } else if (review.forkedId() != null) {
        return InheritOptions.REVIEW;
    } else {
        return InheritOptions.NOTHING;
    }
}

export interface SubmissionReviewInterfaceJson {
    server: Server;
    // This is the (initially empty) list of SingleReviewInterfaces wrapping Review objects
    reviewInterfaces: KnockoutObservableArray<SingleReviewInterface>;
    reviews: Review[];
    // All others are simply data
    submission: Submission;
    assignment: Assignment;
    author: User;
    genericReviews: Review[];
    tags: Tag[];
    isGrader: KnockoutObservable<boolean>;
    previewStudentMode: KnockoutObservable<boolean>;
    isLtiActive: boolean;
    hasAutoFeedback: KnockoutReadonlyComputed<boolean>;
    canSeeFeedback: KnockoutReadonlyComputed<boolean>;
    canEditFeedback: KnockoutReadonlyComputed<boolean>;
    mainReviewInterface: KnockoutObservable<SubmissionReviewInterface>;
}

const DEFAULT_MARKS = [
    "Passed human review",
    "Caught Cheating"
];

// Main container of data about this submission and its reviews
export class SubmissionReviewInterface {
    server: Server;
    // The submission being reviewed
    submission: Submission;
    author: User;
    assignment: Assignment;
    // Reviews used in just this submission
    reviews: KnockoutObservableArray<SingleReviewInterface>;
    // Read-only Reviews available from the global site context
    genericReviews: Review[];
    // Read-only Tags available from the global assignment context
    tags: Tag[];

    // UI
    isGrader: KnockoutObservable<boolean>;
    isLtiActive: KnockoutObservable<boolean>;
    previewStudentMode: KnockoutObservable<boolean>;

    mainReviewInterface: KnockoutObservable<SubmissionReviewInterface>;

    // Fast-lookups of the read-only Generic Reviews and Tags
    readonly lookupGenericReviews: Record<number, Review>;
    readonly lookupTags: Record<number, Tag>;

    private canSeeFeedback: KnockoutReadonlyComputed<boolean>;
    private canEditFeedback: KnockoutReadonlyComputed<boolean>;
    private canMarkCorrect: KnockoutReadonlyComputed<boolean>;
    private canMarkCheating: KnockoutReadonlyComputed<boolean>;
    private totalScore: KnockoutReadonlyComputed<number>;
    private releaseFeedbackExplanation: KnockoutReadonlyComputed<string>;
    private releaseFeedbackColor: KnockoutReadonlyComputed<string>;
    private releaseFeedbackLabel: KnockoutReadonlyComputed<string>;
    private closeSubmissionExplanation: KnockoutReadonlyComputed<string>;
    private closeSubmissionColor: KnockoutReadonlyComputed<string>;
    private closeSubmissionLabel: KnockoutReadonlyComputed<string>;
    private hasAutoFeedback: KnockoutReadonlyComputed<boolean>;

    // Views onto the master list of `reviews`, categorizing their types
    private generalReviews: KnockoutReadonlyComputed<SingleReviewInterface[]>;
    private lineReviews: KnockoutReadonlyComputed<SingleReviewInterface[]>;
    
    constructor(params: SubmissionReviewInterfaceJson) {
        this.mainReviewInterface = params.mainReviewInterface;
        this.server = params.server;
        this.mainReviewInterface(this);
        // Readonly data setup
        this.submission = params.submission;
        this.author = params.author;
        this.assignment = params.assignment;
        this.lookupGenericReviews = {};
        this.lookupTags = {};
        this.tags = params.tags.map(
            (tag: Tag) => {
                this.lookupTags[tag.id] = tag;
                return tag;
            }
        );
        this.hasAutoFeedback = ko.pureComputed<boolean>(() => {
            let settingsRaw = this.assignment.settings();
            let settings = JSON.parse(settingsRaw || "{}");
            return settings.disableFeedback || false;
        });
        this.genericReviews = params.genericReviews.map(
            (review: Review) => {
                this.lookupGenericReviews[review.id] = review;
                return review;
            }
        );
        // Actual review management
        this.reviews = params.reviewInterfaces;
        ko.utils.arrayPushAll(this.reviews(), params.reviews.map(
            (review: Review) => {
                let sri = new SingleReviewInterface({
                    review: review,
                    parent: this, // Get actual proper review from ID
                    state: ReviewModelState.SAVED,
                    inherits: parseReviewInheritance(review)
                }, false);
                return sri;
            }
        ));
        // Views onto the reviews
        this.generalReviews = ko.pureComputed<SingleReviewInterface[]>(() => {
            return this.reviews().filter((sri: SingleReviewInterface): boolean => {
                return !sri.isLineReview();
            });
        });
        this.lineReviews = ko.pureComputed<SingleReviewInterface[]>(() => {
            return this.reviews().filter((sri: SingleReviewInterface): boolean => {
                return sri.isLineReview();
            });
        });
        // UI Seeing/Editing Stuff
        this.isGrader = params.isGrader;
        this.previewStudentMode = params.previewStudentMode;
        this.isLtiActive = ko.observable(params.isLtiActive);
        this.canSeeFeedback = params.canSeeFeedback;
        this.canEditFeedback = params.canEditFeedback;

        this.totalScore = ko.pureComputed<number>( () => {
            let totalReviewScore = this.reviews().map( (reviewInterface: SingleReviewInterface) =>
                reviewInterface.calculateScore() ? reviewInterface.calculateScore() : 0
            ).reduce( (score, total) => score+total, 0);
            return this.submission.score()*100 + totalReviewScore;
        });

        this.releaseFeedbackExplanation = ko.pureComputed<string>( () => explainGradingStatus(this.submission.gradingStatus()));
        this.releaseFeedbackColor = ko.pureComputed<string>( () => colorGradingStatus(this.submission.gradingStatus()));
        this.releaseFeedbackLabel = ko.pureComputed<string>( () => labelGradingStatus(this.submission.gradingStatus()));
        this.closeSubmissionExplanation = ko.pureComputed<string>(() => closeSubmissionStatus(this.submission.submissionStatus()));
        this.closeSubmissionColor = ko.pureComputed<string>( () => colorSubmissionStatus(this.submission.submissionStatus()));
        this.closeSubmissionLabel = ko.pureComputed<string>( () =>
            this.submission.checkSubmission(SubmissionStatus.COMPLETED) ?
                "Reopen submission" : "Close submission"
        );
        [this.canMarkCorrect, this.canMarkCheating] = DEFAULT_MARKS.map((mark) => {
            return ko.pureComputed<boolean>(() =>
                (undefined === this.reviews().find((review) =>
                    review.review.comment() === mark)))
        });

    }

    releaseFeedback() {
        showOverlay();
        let newStatus = !this.submission.checkGrading(GradingStatus.FULLY_GRADED) ?
            GradingStatus.FULLY_GRADED : GradingStatus.PENDING_MANUAL;
        let endpoint = window["$URL_ROOT"] + "grading/update_grading_status";
        $.post(endpoint, {
            submission_id: this.submission.id,
            new_grading_status: newStatus,
        }, (data) => {
            if (data.new_status) {
                this.submission.gradingStatus(data.new_status);
                $("#summary-grading-status-"+this.submission.id).text(data.new_status_human);
            } else {
                alert("Grading status update failed!\n"+JSON.stringify(data));
            }
        }).always(hideOverlay);
    }

    closeSubmission() {
        showOverlay();
        let newStatus = !this.submission.checkSubmission(SubmissionStatus.COMPLETED) ?
            SubmissionStatus.COMPLETED : SubmissionStatus.IN_PROGRESS;
        let endpoint = window["$URL_ROOT"] + "grading/update_submission_status";
        $.post(endpoint, {
            "submission_id": this.submission.id,
            "new_submission_status": newStatus,
        }, (data) => {
            if (data.new_status) {
                this.submission.submissionStatus(data.new_status);
                $("#summary-submission-status-"+this.submission.id).text(data.new_status_human);
            } else {
                alert("Submission status update failed!\n"+JSON.stringify(data));
            }
        }).always(hideOverlay);
    }

    addGeneralFeedback() {
        let draftReview = new Review({
            assignment_version: this.assignment.version(),
            author_id: this.author.id,
            comment: "New Comment",
            date_created: ""+new Date(),
            date_modified: ""+new Date(),
            forked_id: null,
            forked_version: null,
            generic: false,
            id: null,
            location: null,
            score: null,
            submission_id: this.submission.id,
            submission_version: this.submission.version(),
            tag_id: null,
            version: 0
        });
        let draftReviewInterface = new SingleReviewInterface({
            inherits: "nothing",
            parent: this,
            review: draftReview,
            state: ReviewModelState.DRAFT
        }, false);
        this.reviews.push(draftReviewInterface);
    }

    markAs(title: string) {
        const existingReview = this.reviews().find((review) => review.review.comment() === title);
        if (existingReview !== undefined) {
            return;
        }
        let score = title === "Passed human review" ? (100 - this.submission.score()*100) || 100 : -10000000;
        let draftReview = new Review({
            assignment_version: this.assignment.version(),
            author_id: this.author.id,
            comment: title,
            date_created: ""+new Date(),
            date_modified: ""+new Date(),
            forked_id: null,
            forked_version: null,
            generic: false,
            id: null,
            location: null,
            score: score,
            submission_id: this.submission.id,
            submission_version: this.submission.version(),
            tag_id: null,
            version: 0
        });
        let draftReviewInterface = new SingleReviewInterface({
            inherits: "nothing",
            parent: this,
            review: draftReview,
            state: ReviewModelState.DRAFT
        }, false);
        this.reviews.push(draftReviewInterface);
        this.server.reviewStore.create(draftReviewInterface.serialized()).then((savedReview: Review) => {
            draftReview.id = savedReview.id;
            draftReviewInterface.state(ReviewModelState.SAVED);
        });
    }
}

export const SUBMISSION_REVIEW_INTERFACE_TEMPLATE = `
<!-- ko if: canSeeFeedback -->

<!-- Errors -->
<!-- ko if: !isLtiActive() && canEditFeedback() -->
    <div class="alert alert-warning" role="alert">
        You are not in a grading LTI session for this course.
        Launch an LTI session by opening the BlockPy Dashboard from within Canvas.
        This will store a cookie that lets Canvas recognize that you can grade questions!
    </div>
<!-- /ko -->

<!-- Controls -->
<!-- ko if: canEditFeedback -->
<div class="row">
<p class="col-2">
    <button type="button" class="btn btn-sm"
        data-bind="text: closeSubmissionLabel, click: closeSubmission,
                    class: closeSubmissionColor"></button>
</p><p class="col-10">
    <span data-bind="html: closeSubmissionExplanation"></span>
</p>
<p class="col-2">
    <button type="button" class="btn btn-sm"
        data-bind="text: releaseFeedbackLabel, click: releaseFeedback,
                    class: releaseFeedbackColor"></button>
</p><p class="col-10">
    <span data-bind="html: releaseFeedbackExplanation"></span>
</p>
<p class="col-2">
    <button type="button" class="btn btn-sm btn-info"
        data-bind="click: ()=>markAs('Passed human review'), enabled: canMarkCorrect,
                    css: { disabled: !canMarkCorrect()} ">Mark as Fully Correct</button>
</p><p class="col-10">
    Use this button to add a new General Feedback (<code>Passed human review</code>) that is worth all the remaining points of the assignment.<br>
</p>
<p class="col-2">
    <button type="button" class="btn btn-sm btn-info"
        data-bind="click: ()=>markAs('Caught Cheating'), enabled: canMarkCheating,
                    css: { disabled: !canMarkCheating()} ">Mark as Caught Cheating</button>
</p><p class="col-10">
    Use this button to add a new General Feedback (<code>Caught Cheating</code>) that is worth a huge number of negative points, sure to take their score down to zero.<br>
</p>
</div>
<!-- /ko -->


<!-- Summary Area -->
<div class="col-xl-6 col-md-12">
<table class="review-report table table-bordered table-hover table-sm">
    <thead>
        <th>Grading</th>
        <th>Score</th>
    </thead>
    <tr data-bind="visible: hasAutoFeedback() || submission.correct()">
        <td>Passed all autograder tests?</td>
        <td data-bind="html: submission.correct() ? '✔' : '❌'"></td>
    </tr>
    <tr data-bind="visible: hasAutoFeedback() || submission.score() > 0">
        <td>Autograder submission score:</td>
        <td data-bind="text: 100*submission.score()"></td>
    </tr>
    <tr data-bind="visible: generalReviews().length > 0">
        <th>General Feedback</th>
        <th></th>
    </tr>
    <!-- ko foreach: generalReviews -->
    <tr>
        <td data-bind="text: $data.getText(), css: {'draft-comment': $data.state() === 'DRAFT'}"></td>
        <td data-bind="text: $data.getScoreText()"></td>
    </tr>
    <!-- /ko -->
    <tr data-bind="visible: lineReviews().length > 0">
        <th>Feedback on specific lines</th>
        <th></th>
    </tr>
    <!-- ko foreach: lineReviews -->
    <tr>
        <!-- TODO: Markdown -->
        <td data-bind="markdowned: {value: $data.getText(), assignment: null, submission: null}, css: {'draft-comment': $data.state() === 'DRAFT'}"></td>
        <td data-bind="text: $data.getScoreText()"></td>
    </tr>
    <!-- /ko -->
    <tr class="table-active total-row">
        <td>Total</td>
        <td data-bind="text: totalScore()+'/100'"></td>
    </tr>
</table>
</div>

<!-- General Feedback -->
<div class="col-xl-6 col-md-12" data-bind="visible: generalReviews().length > 0 || canEditFeedback()">
    <h4>General Feedback</h4>

    <!-- ko if: canEditFeedback -->
    <button type="button" class="btn btn-sm btn-success"
        data-bind="click: addGeneralFeedback">Add feedback</button>
    <!-- /ko -->

    <div class="list-group d-flex w-100 justify-content-between"
         data-bind="foreach: generalReviews">
        <!-- ko if: state() !== 'SAVED' -->
        <div data-bind='component: {name: "individual-review-editor", params: $data}'></div>
        <!-- /ko -->
        <!-- ko if: state() === 'SAVED' -->
        <div data-bind='component: {name: "individual-review-show", params: $data}'></div>
        <!-- /ko -->
    </div>

</div>

<!-- Line Feedback -->
<!--<div class="col-xl-6 col-md-12">
    <h4>Line Feedback</h4>
</div>-->

<!-- /ko -->`;


export const INDIVIDUAL_REVIEW_EDITOR_TEMPLATE = `
<!-- Template for Individual Review Editing -->
<div class="form-group draft-review">
    <div class="form-inline mb-2">
        <label class="mr-2" for="iret-inherit">Inherit from:</label>
        <select class="custom-select form-control" id="iret-inherit"
            data-bind="value: inherits">
            <option value="nothing">Nothing</option>
            <option value="tag">Tag</option>
            <option value="review">Review</option>
        </select>
    </div>
    <!-- ko if: inherits() == 'tag' -->
    <div class="form-inline mb-2">
        <label class="mr-2" for="iret-tag">Tag:</label>
        <select class="custom-select" id="iret-tag"
            data-bind="value: review.tagId, options: $root.tags, valueAllowUnset: true,
                       optionsText: 'name', optionsValue: 'id'">
        </select>
    </div>
    <!-- /ko -->
    <!-- ko if: inherits() == 'review' -->
    <div class="form-inline mb-2">
        <label class="mr-2" for="iret-forked">Parent:</label>
        <select class="custom-select" id="iret-forked"
            data-bind="value: review.forkedId, options: $root.genericReviews,
                        valueAllowUnset: true,
                        optionsText: 'comment', optionsValue: 'id'">
        </select>
    </div>
    <!-- /ko -->
    <div class="mb-2">
        <label class="mr-2" for="iret-comment">Additional Comment:</label>
        <textarea data-bind="value: review.comment" class="form-control form-control-sm" id="iret-comment"></textarea>
    </div>
    <div class="form-inline mb-2">
        <label class="mr-2" for="iret-score">Score Modifier:</label>
        <input data-bind="value: review.score" class="form-control form-control-sm" id="iret-score" size="5"/>
        <span class="ml-2">/100</span>
        <!-- ko if: (review.score() == null || review.score() === '') && (getScore() != null && getScore() !== '') -->
        <span class="ml-2">(Modifier blank, will use <code data-bind="text: getScore"></code>)</span>
        <!-- /ko -->
    </div>
    <button type="button" class="btn btn-outline-secondary btn-sm mr-2"
            data-bind="click: cancel">Cancel</button>
    <div class="float-right">
        <button type="button" class="btn btn-success btn-sm mr-2"
            data-bind="click: save">Save</button>
    </div>
</div>`;

ko.components.register("individual-review-editor", {
    template: INDIVIDUAL_REVIEW_EDITOR_TEMPLATE
});

export const INDIVIDUAL_REVIEW_SHOW_TEMPLATE = `
<!-- ko if: $root.canSeeFeedback -->
<div class="individual-review-show-box">
    <code data-bind="text: getScore"></code>
    <span data-bind="text: getText"></span>
    <!-- ko if: $root.canEditFeedback() -->
    <button type="button" class="btn btn-sm btn-danger float-right"
        data-bind="click: remove">Remove</button>
    <button type="button" class="btn btn-sm btn-outline-secondary mr-2 float-right"
        data-bind="click: edit">Edit</button>
    <!-- /ko -->
</div>
<!-- /ko -->
`;

ko.components.register("individual-review-show", {
    template: INDIVIDUAL_REVIEW_SHOW_TEMPLATE
});

export const LINE_REVIEW_BUTTON_TEMPLATE = `
<!-- ko if: canSeeFeedback -->
<div data-bind="template: {afterRender: fixPopoverPosition }"
    class="line-review-box">
<span class="line-review-quick-button fas"
      data-bind="click: quickButtonClick,
                 class: quickButtonIcon"></span>
<div class="popover bs-popover-right static-popover"
    data-bind="css: {inactive: reviewInterface() == null},
               click: takeFocus" style="display:none">
<!-- ko if: reviewInterface() !== null -->
    <div class="arrow"></div>
    <div class="popover-body popover-header-sm">
    <!-- ko if: !reviewInterface().isEditing() -->
        <code data-bind="text: reviewInterface().getScoreText()"></code>
        <span data-bind="text: reviewInterface().getText()"></span>
        <!-- ko if: canEditFeedback() -->
        <span class="fas fa-trash float-right popover-control"
              data-bind="click: remove"></span>
        <span class="fas fa-edit float-right mr-2 popover-control"
              data-bind="click: edit"></span>
        <span class="fas fa-chevron-left float-right mr-2 popover-control"
              data-bind="click: collapse"></span>
        <!-- /ko -->
    <!-- /ko -->
    <!-- ko if: reviewInterface().isEditing() -->
        <div data-bind='component: {name: "individual-review-editor", params: reviewInterface}'></div>
    <!-- /ko -->
    </div>
<!-- /ko -->
</div>
</div>
<!-- /ko -->
`;

ko.components.register("line-review", {
    viewModel: LineReviewInterface,
    template: LINE_REVIEW_BUTTON_TEMPLATE
});

ko.components.register("submission-review-interface", {
    viewModel: SubmissionReviewInterface,
    template: SUBMISSION_REVIEW_INTERFACE_TEMPLATE
})