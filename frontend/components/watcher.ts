/**
 * Watch grouping mode to combine assignments xor users
 * Live polling mode
 * Show recent events
 */

import * as ko from 'knockout';
import {Log, LogJson, REMAP_EVENT_TYPES} from "../models/log";
import {ajax_get} from "./ajax";
import {User, UserStore} from "../models/user";
import {
    formatDuration,
    prettyPrintDate,
    prettyPrintDateTime,
    prettyPrintDateTimeString,
    prettyPrintTime
} from "./dates";
import {Assignment, AssignmentStore} from "../models/assignment";
import {last, pushObservableArray} from "./plugins";
import './model_selector';
import {ModelSet} from "./model_selector";
import {launchEditor} from "./editor";
import {Submission, SubmissionJson} from "../models/submission";
import {Server} from "./server";

// TODO: Load events on page load, mode or setting
// TODO: Prevent both All from being loaded if SxA is too big?

// TODO: Global Watch Mode buttons (tied to state of their respective set of buttons)
export enum WatchMode {
    SUMMARY, FULL, SUMMARY_CODE
}

// TODO: Feedback | Last compile error | Hide
export class SubmissionState {
    loaded: boolean;
    friendly: string;
    code: string;
    feedback: string;
    lastRan: string;
    lastEdit: string;
    lastOpened: string;
    completed: boolean;
    score: number;
    mode: string;
    fullscreen: boolean;
    log: Log;

    constructor(current: SubmissionState, log: Log) {
        this.makeNextState(current, log);
    }

    getPrettyTime(): string {
        return prettyPrintDateTimeString(this.log.clientTimestamp());
    }

    getPrettyLastEdit(watchMode?: WatchMode): string {
        let current = watchMode !== WatchMode.SUMMARY ? this.log.clientTimestamp() : null;
        return formatDuration(this.lastEdit, current);
    }

    getPrettyLastRan(watchMode?: WatchMode): string {
        let current = watchMode !== WatchMode.SUMMARY ? this.log.clientTimestamp() : null;
        return formatDuration(this.lastRan, current);
    }

    getPrettyLastOpened(watchMode?: WatchMode): string {
        let current = watchMode !== WatchMode.SUMMARY ? this.log.clientTimestamp() : null;
        return formatDuration(this.lastOpened, current);
    }

    copyState(other: SubmissionState) {
        if (other === null) {
            this.code = "";
            this.friendly = "Not Loaded";
            this.feedback = "Not yet executed";
            this.lastRan = null;
            this.lastEdit = null;
            this.lastOpened = null;
            this.completed = false;
            this.score = 0;
            this.mode = "unknown";
            this.fullscreen = false;
            this.log = null;
        } else {
            this.code = other.code;
            this.feedback = other.feedback;
            this.lastRan = other.lastRan;
            this.lastEdit = other.lastEdit;
            this.lastOpened = other.lastOpened;
            this.completed = other.completed;
            this.score = other.score;
            this.mode = other.mode;
            this.fullscreen = other.fullscreen;
            this.log = null;
        }
    }

    makeNextState(current: SubmissionState, log: Log) {
        this.copyState(current);
        this.log = log;
        this.friendly = REMAP_EVENT_TYPES[log.eventType()];
        switch (log.eventType()) {
            case "File.Create":
                this.code = log.message();
                this.lastEdit = log.clientTimestamp();
                break;
            case "File.Edit":
                this.code = log.message();
                this.lastEdit = log.clientTimestamp();
                break;
            case "Session.Start":
                this.lastOpened = log.clientTimestamp();
                break;
            case "Run.Program":
                this.lastRan = log.clientTimestamp();
                break;
            case "Intervention":
                this.completed = this.completed || log.category() === "Complete";
                this.feedback = `<strong>${log.label()}</strong><div>${log.message()}</div>`;
                break;
            case "X-View.Change":
                this.mode = log.message();
                break;
            case "X-Submission.LMS":
                this.score = parseInt(log.message(), 10);
                break;
        }
    }
}

export class SubmissionHistory {
    // Past history of all submission states, timed on logs
    states: KnockoutObservableArray<SubmissionState>;
    // Identity information
    user: User;
    assignment: Assignment;
    submission: Submission;

    // Current viewing state
    watchMode: KnockoutObservable<WatchMode>;
    currentStateIndex: KnockoutObservable<string|number>;

    // Cosmetic functions
    private currentState: KnockoutReadonlyComputed<SubmissionState>;
    private isVcrActive: KnockoutReadonlyComputed<boolean>;
    private getWatchModeClass: KnockoutReadonlyComputed<string>;
    // Visuals
    private isSummary: KnockoutReadonlyComputed<boolean>;
    private isFull: KnockoutReadonlyComputed<boolean>;
    private hideFeedback: KnockoutReadonlyComputed<boolean>;

    constructor(user: User, assignment: Assignment) {
        this.states = ko.observableArray<SubmissionState>([]);
        this.currentStateIndex = ko.observable(0);
        this.user = user;
        this.assignment = assignment;
        this.watchMode = ko.observable(WatchMode.SUMMARY);
        this.isVcrActive = ko.pureComputed(() => {
            return this.watchMode() !== WatchMode.SUMMARY;
        }, this);
        this.getWatchModeClass = ko.pureComputed(() => {
            switch (this.watchMode()) {
                case WatchMode.SUMMARY:
                    return "fa-eye";
                case WatchMode.FULL:
                    return "fa-arrows-alt-h";
                case WatchMode.SUMMARY_CODE:
                    return "fa-eye-slash";
            }
        }, this);
        this.currentState = ko.pureComputed(() => {
            if (this.states().length > 0) {
                if (this.watchMode() !== WatchMode.SUMMARY) {
                    return this.states()[this.getCurrentStateIndex()];
                } else {
                    return last(this.states());
                }
            } else {
                console.error("No states are currently loaded!");
            }
        }, this);
        this.isSummary = ko.pureComputed(() => {
            return this.watchMode() === WatchMode.SUMMARY;
        }, this);
        this.isFull = ko.pureComputed(() => {
            return this.watchMode() === WatchMode.FULL;
        }, this);
        this.hideFeedback = ko.pureComputed(() => {
            return this.watchMode() === WatchMode.SUMMARY_CODE;
        }, this);
    }

    private getCurrentStateIndex(): number {
        return parseInt(<string>this.currentStateIndex(), 10);
    }

    addLogs(logs: Log[]) {
        let states: SubmissionState[] = [];
        let latestState: SubmissionState = this.states().length ? last(this.states()) : null;
        for (let i=0; i< logs.length; i+=1) {
            let nextState = new SubmissionState(latestState, logs[i]);
            states.push(nextState);
            latestState = nextState;
        }
        pushObservableArray(this.states, states);
        //console.log(states);
    }

    reload() {
        ajax_get("blockpy/load_history", {
            assignment_id: this.submission.assignmentId(),
            course_id: this.submission.courseId(),
            user_id: this.submission.userId(),
            with_submission: true
        }).then((data) => {
            if (data.success) {
                let latestLogId = this.states.length>0 ? this.states()[this.states.length-1].log.id : -1;
                this.addLogs(data.history.filter((log: LogJson) => latestLogId < log.id).map((log: LogJson) => new Log(log)));
                this.submission.fromJson(data.submissions[0]);
            } else {
                console.error(data);
            }
        });
        console.log("Need to update myself!");
    }

    // Map CodeStates to event IDs so we can quickly get code? Or playback history to status at each step...

    loadHistorySelector(event: Event) {
        let selector = this.getSelector(event);
        selector.empty();
        let i;
        let optGroup: JQuery<JQuery.Node> = null;
        for (i=0; i <this.states().length; i+= 1) {
            let entry: Log = this.states()[i].log;
            let formattedDate = prettyPrintDate(entry.clientTimestamp());
            if (optGroup === null || optGroup.attr("label") != formattedDate) {
                optGroup = $("<optgroup></optgroup>");
                optGroup.attr("label", formattedDate);
                selector.append(optGroup);
            }
            let eventType = REMAP_EVENT_TYPES[entry.eventType()] || entry.eventType();
            let displayed = prettyPrintTime(entry.clientTimestamp()) +" - "+eventType;
            let option = $("<option></option>", {text: displayed});
            option.attr("value", i);
            optGroup.append(option);
        }
        this.currentStateIndex(i-1);
        //selector.val(Math.max(0, i-1));
    }

    switchWatchMode(data: any, event: Event) {
        switch (this.watchMode()) {
            case WatchMode.FULL:
                this.watchMode(WatchMode.SUMMARY_CODE);
                break;
            case WatchMode.SUMMARY_CODE:
                this.watchMode(WatchMode.SUMMARY);
                break;
            case WatchMode.SUMMARY:
                this.loadHistorySelector(event);
                this.watchMode(WatchMode.FULL);
                break;
        }
    }

    getSelector(event: Event) {
        return $(event.target).closest("div").find(".history-select");
    }

    moveToMostRecent(data: any, event: Event) {
        this.currentStateIndex(this.states().length-1);
    }

    moveToBack(data: any, event: Event) {
        this.currentStateIndex(Math.max(0, this.getCurrentStateIndex()-1));
    }

    seekToBack(data: any, event: Event) {
        let currentId = this.getCurrentStateIndex();
        let currentState: SubmissionState;
        do {
            currentId -= 1;
            currentState = this.states()[currentId];
        } while (currentId>0 && !currentState.log.isEditEvent());
        this.currentStateIndex(currentId);
    }

    moveToNext(data: any, event: Event) {
        this.currentStateIndex(Math.min(this.states().length-1, this.getCurrentStateIndex()+1));
    }

    seekToNext(data: any, event: Event) {
        let currentId = this.getCurrentStateIndex();
        let currentState: SubmissionState;
        do {
            currentId += 1;
            currentState = this.states()[currentId];
        } while (currentId<this.states().length-1 && !currentState.log.isEditEvent());
        this.currentStateIndex(currentId);
    }

    moveToStart(data: any, event: Event) {
        /*this.getSelector(event).val(0);
        this.viewLog(event);*/
        this.currentStateIndex(0);
    }

    launchEditor() {
        launchEditor(this.assignment, this.submission);
    }
}

// TODO: Open all of students' submissions
// TODO: Open all of assignment's submissions
// TODO: "Last Logged Event" -> "This log event: "
export const SubmissionHistoryCard = `
<div class="col-md-12 mb-4 rounded bg-light">
    <!-- ko if: submissionHistory.states().length>0 -->
    <div class="row">
        <div class="col-md-6">
            <div data-bind="component: {name: 'user-short', params: user}"></div>
            <div data-bind="component: {name: 'assignment-short', params: assignment}"></div>
            <div>Score: <span data-bind="text: currentState().completed ? 'Correct' : 'Incomplete'"></span> (<span data-bind="text: currentState().score"></span>)</div>
            <div>Open submission in <a href="#" data-bind="click: $parent.launchEditor.bind($parent)">Readonly Editor</a></div>
            <div>View code/history</div>
        </div>
        <div class="col-md-6">
            <div>Last Logged Event: <span data-bind="text: currentState().getPrettyTime()"></span></div>
            <div>Last Edited: <span data-bind="text: currentState().getPrettyLastEdit(watchMode())"></span></div>
            <div>Last Ran: <span data-bind="text: currentState().getPrettyLastRan(watchMode())"></span></div>
            <div>Last Opened: <span data-bind="text: currentState().getPrettyLastOpened(watchMode())"></span></div>    
        </div>
        <div class="col-md-12">
            <submission-history-vcr params="submissionHistory: submissionHistory"></submission-history-vcr>
        </div>
        <div class="mt-2" data-bind="css: { 'col-md-6': submissionHistory.isFull(), 'col-md-12': submissionHistory.hideFeedback() },
                                     ifnot: submissionHistory.isSummary()">
            <pre class="python-code-block"><code data-bind="highlightedCode: currentState().code" class="python" style="height: 200px"></code></pre>
        </div>
        <div class="col-md-6 mt-2" data-bind="if: submissionHistory.isFull()">
            <div data-bind="html: currentState().feedback"></div>
        </div>
    </div>
    <!-- /ko -->
    <!-- ko ifnot: submissionHistory.states().length>0 -->
    <div class="row">
        <div class="col-md-6">
            <div data-bind="component: {name: 'user-short', params: user}"></div>
            <div data-bind="component: {name: 'assignment-short', params: assignment}"></div>
            <div>Not yet started!</div>
        </div>
    </div>
    <!-- /ko -->
</div>
`;

ko.components.register("submission-history-card", {
    template: SubmissionHistoryCard
});

export const SubmissionHistoryVCR = `
    <form class="form-inline">
        <button class="btn btn-outline-secondary mr-2 btn-sm" type="button"
            data-bind="click: submissionHistory.switchWatchMode.bind(submissionHistory)">
            <span class='fas' data-bind="class: submissionHistory.getWatchModeClass()"></span>
        </button>
        <button class="btn btn-outline-secondary mr-2 btn-sm"
                data-bind="click: submissionHistory.reload.bind(submissionHistory)">
                <span class="fas fa-sync"></span> Sync
        </button>
        <div data-bind="visible: submissionHistory.isVcrActive()">
            <button class="btn btn-outline-secondary mr-2 btn-sm" type="button"
                data-bind="click: submissionHistory.moveToStart.bind(submissionHistory)">
                <span class='fas fa-step-backward'></span> Start
            </button>
            <button class="btn btn-outline-secondary mr-2 btn-sm" type="button"
                data-bind="click: submissionHistory.seekToBack.bind(submissionHistory)">
                <span class='fas fa-fast-backward'></span>
            </button>
            <button class="btn btn-outline-secondary mr-2 btn-sm" type="button"
                data-bind="click: submissionHistory.moveToBack.bind(submissionHistory)">
                <span class='fas fa-backward'></span> Back
            </button>
            <select class="history-select form-control custom-select mr-2 custom-select-sm"
                data-bind="value: submissionHistory.currentStateIndex"
                aria-title="History Selector">
            </select>
            <button class="btn btn-outline-secondary mr-2 btn-sm" type="button"
                data-bind="click: submissionHistory.moveToNext.bind(submissionHistory)">
                <span class='fas fa-forward'></span> Next
            </button>
            <button class="btn btn-outline-secondary mr-2 btn-sm" type="button"
                data-bind="click: submissionHistory.seekToNext.bind(submissionHistory)">
                <span class='fas fa-fast-forward'></span>
            </button>
            <button class="btn btn-outline-secondary mr-2 btn-sm" type="button"
                data-bind="click: submissionHistory.moveToMostRecent.bind(submissionHistory)">
                <span class='fas fa-step-forward'></span> Most Recent
            </button>
        </div>
    </form>
`;

ko.components.register("submission-history-vcr", {
    template: SubmissionHistoryVCR
});

export enum WatchGroupingMode {
    NONE, ASSIGNMENT, USER
}


export class Watcher {
    // Search options
    courseId: KnockoutObservable<number>;
    assignmentIds: string;
    userIds: string;
    userSet: KnockoutObservable<ModelSet>;
    assignmentSet: KnockoutObservable<ModelSet>;

    // Stores
    server: Server;

    // Actual data
    submissions: KnockoutObservableArray<SubmissionHistory>;
    cauToSubmission: { [cau: string]: SubmissionHistory};

    // Cosmetics
    grouping: KnockoutObservable<WatchGroupingMode>;


    constructor(data: any) {
        // TODO: Handle userIds to default load some students in a new set
        this.courseId = ko.observable<number>(data.courseId);
        this.userIds = data.userIds;
        this.assignmentIds = data.assignmentIds;
        this.userSet = ko.observable<ModelSet>(null);
        this.assignmentSet = ko.observable<ModelSet>(null);
        this.grouping = ko.observable<WatchGroupingMode>(WatchGroupingMode.NONE);
        this.submissions = ko.observableArray<SubmissionHistory>([]);
        this.cauToSubmission = {};
        this.server = data.server;
        //$(this.getLatest.bind(this));
    }

    addLogs(logJsons: LogJson[]) {
        let sortedLogs: Record<string, Log[]> = {};
        for (let i=0; i<logJsons.length; i+=1) {
            let log: Log = new Log(logJsons[i]);
            let submissionId = log.getAsSubmissionKey();
            if (!(submissionId in this.cauToSubmission)) {
                let user = this.server.userStore.getInstance(log.subjectId());
                let assignment = this.server.assignmentStore.getInstance(log.assignmentId());
                this.cauToSubmission[submissionId] = new SubmissionHistory(user, assignment);
                this.submissions.push(this.cauToSubmission[submissionId]);
            }
            if (!(submissionId in sortedLogs)) {
                sortedLogs[submissionId] = [];
            }
            sortedLogs[submissionId].push(log);
        }
        for (let submissionId in sortedLogs) {
            this.cauToSubmission[submissionId].addLogs(sortedLogs[submissionId]);
        }
    }

    addSubmissions(submissionJsons: SubmissionJson[]) {
        for (let i=0; i<submissionJsons.length; i+=1) {
            let submission: Submission = new Submission(submissionJsons[i]);
            let submissionId = submission.getAsSubmissionKey();
            if (!(submissionId in this.cauToSubmission)) {
                let user = this.server.userStore.getInstance(submission.userId());
                let assignment = this.server.assignmentStore.getInstance(submission.assignmentId());
                this.cauToSubmission[submissionId] = new SubmissionHistory(user, assignment);
                this.submissions.push(this.cauToSubmission[submissionId]);
            }
            this.cauToSubmission[submissionId].submission = submission;
        }
    }

    clearData() {
        this.cauToSubmission = {};
        this.submissions.removeAll();
    }

    // TODO: Get latest for just a single submission
    getLatest() {
        localStorage.setItem("BLOCKPY_SERVER_USERIDS", this.userSet().getStored());
        localStorage.setItem("BLOCKPY_SERVER_ASSIGNMENTIDS", this.assignmentSet().getStored());
        ajax_get("blockpy/load_history", {
            assignment_id: this.assignmentSet().getIds(),
            course_id: this.courseId(),
            user_id: this.userSet().getIds(),
            with_submission: true
        }).then((data) => {
            if (data.success) {
                this.clearData();
                this.addLogs(data.history);
                this.addSubmissions(data.submissions);
            } else {
                console.error(data);
            }
        });
    }
}

export const WatcherTemplate = `
    <div>
    User(s):
        <user-set-selector params="store: server.userStore, modelSet: userSet, default: userIds"></user-set-selector>
    </div>
    <div class="mt-4 mb-4">
    Assignment(s):
        <assignment-set-selector params="store: server.assignmentStore, modelSet: assignmentSet, default: assignmentIds"></assignment-set-selector>
    </div>
    <div class="mb-4 mt-4">
        <button class="btn btn-primary" data-bind="click: getLatest">Load Events</button>
    </div>
    <div>
        <div data-bind="foreach: submissions" class="row">
            <submission-history-card params="submissionHistory: $data, currentState: currentState, watchMode: watchMode,
                                             user: user, assignment: assignment"></submission-history-card>    
        </div>
    </div>
`;

ko.components.register("watcher", {
    viewModel: Watcher,
    template: WatcherTemplate
});

