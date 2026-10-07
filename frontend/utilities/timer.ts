import * as ko from 'knockout';

export class Timer {
    instance: NodeJS.Timeout | null;
    time: ko.Observable<number>;
    _startTime: number;
    where: string;

    constructor(where: string) {
        this.time = ko.observable(0);
        this.instance = null;
        this.where = where;
    }

    reset() {
        if (this.instance != null) {
            clearInterval(this.instance);
        }
        this.instance = null;
        $(this.where).text("");
    }

    stop() {
        if (this.instance != null) {
            clearInterval(this.instance);
        }
        this.instance = null;
        const newTime = (Date.now() - this._startTime)/1000;
        this.time(newTime);
        $(this.where).text(Math.round(newTime)+" seconds");
    }

    start() {
        this.reset();
        this._startTime = Date.now();
        this.instance = setInterval(this.update.bind(this), 1000);
        const newTime = (Date.now() - this._startTime)/1000;
        this.time(newTime);
        $(this.where).text(Math.round(newTime)+" seconds");
    }

    update() {
        const newTime = (Date.now() - this._startTime)/1000;
        this.time(newTime);
        $(this.where).text(Math.round(newTime)+" seconds");
    }

}