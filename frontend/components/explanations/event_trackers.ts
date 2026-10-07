export abstract class EventTracker {
    constructor (protected handler: any) {}
    abstract start(): void;
    abstract stop(): void;
}

class CopyEventTracker extends EventTracker {
    start() {
        console.log("Starting copy event tracker");
        document.addEventListener("copy", this.handler);
    }

    stop() {
        document.removeEventListener("copy", this.handler);
    }
}

class PasteEventTracker extends EventTracker {
    start() {
        document.addEventListener("paste", this.handler);
    }

    stop() {
        document.removeEventListener("paste", this.handler);
    }
}

class VisibilityChangeEventTracker extends EventTracker {
    start() {
        document.addEventListener("visibilitychange", this.handler);
    }

    stop() {
        document.removeEventListener("visibilitychange", this.handler);
    }
}

class WindowBlurEventTracker extends EventTracker {
    start() {
        window.addEventListener("blur", this.handler);
    }

    stop() {
        window.removeEventListener("blur", this.handler);
    }
}

class WindowFocusEventTracker extends EventTracker {
    start() {
        window.addEventListener("focus", this.handler);
    }

    stop() {
        window.removeEventListener("focus", this.handler);
    }
}

class MouseOutEventTracker extends EventTracker {
    start() {
        document.addEventListener("mouseout", (e) => {
            // @ts-ignore
            if (!e.relatedTarget && !e.toElement) {
                this.handler();
            }
        });
    }

    stop() {
        document.removeEventListener("mouseout", this.handler);
    }
}

export function makeEventTrackers(handleMaker: any) {
    return [
        new CopyEventTracker(handleMaker("copy")),
        new PasteEventTracker(handleMaker("paste")),
        new VisibilityChangeEventTracker(handleMaker("visibilitychange")),
        new WindowBlurEventTracker(handleMaker("blur")),
        new WindowFocusEventTracker(handleMaker("focus")),
        new MouseOutEventTracker(handleMaker("mouseout"))
    ]
}