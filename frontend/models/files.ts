import * as ko from 'knockout';
import {Model, ModelJson} from "./model";
import {TwoWayReadonlyMap} from "../services/plugins";
import {Assignment} from "./assignment";
import {Submission} from "./submission";
import {Server} from "../services/server";
import {ajax_get} from "../services/ajax";

export type BlockPyFileRecord = Record<string, [string, string][]>;


export class FileStore {
    protected courseId: number|null;

    private timer: number;
    isLoading: ko.PureComputed<boolean>;

    protected readonly server: Server;

    constructor(server: Server, courseId: number|null) {
        this.server = server;
        this.courseId = courseId;
        this.timer = null;
        this.isLoading = ko.pureComputed(() => {
            // TODO: Fix this
            return false;
        }, this);
    }

    listFiles(placements: string[], submission: KnockoutObservable<Submission>): Promise<BlockPyFileRecord> {
        const url = "blockpy/list_files";
        const payload = {
            submission_id: submission().id,
            only_placements: placements.join(","),
            course_id: submission().courseId,
        };
        return new Promise((resolve, reject) => {
            ajax_get(url, payload).then((data: any) => {
                if (data.success) {
                    resolve(data.files);
                } else {
                    reject(data);
                }
            });
        });
    }

    downloadFile(url: string) {

    }
}