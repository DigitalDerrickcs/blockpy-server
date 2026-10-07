import Sk from "../../custom_types/skulpt";

export class SkulptExecutionEngine {
    public fs: Record<string, string>;
    private sysmodules: any = undefined;
    private globals: any = null;

    constructor(public settings: Record<string, any>) {
        this.fs = {};
    }

    configure(settings?: Record<string, any>) {
        if (settings === undefined) {
            settings = {};
        }
        this.settings = {
            __future__: Sk.python3,
            read: this.readFile.bind(this),
            filewrite: this.writeFile.bind(this),
            output: this.output.bind(this),
            inputfun: this.input.bind(this),
            ...settings,
        };
        Sk.configure(this.settings);
        Sk.output = this.output.bind(this);
        Sk.inBrowser = this.readFile.bind(this);
        Sk.timeoutHandler = this.handleTimeout.bind(this);
        Sk.execLimitFunction = () => 7000;
        Sk.execLimit = 7000;
        Sk.retainGlobals = false;


    }

    readFile(filename: string) {
        console.log("Reading file " + filename, this.fs, Sk.builtinFiles["files"][filename]);
        if (filename in this.fs) {
            return this.fs[filename];
        } else if (Sk.builtinFiles === undefined) {
            throw new Sk.builtin.OSError("Built-in modules not accessible.");
        } else if (Sk.builtinFiles["files"][filename] !== undefined) {
            return Sk.builtinFiles["files"][filename];
        }
        throw new Error(`File ${filename} not found`);
    }

    writeFile(filename: string, data: string) {
        this.fs[filename] = data;
    }

    appendFile(filename: string, data: string) {
        if (filename in this.fs) {
            this.fs[filename] += data;
        } else {
            this.fs[filename] = data;
        }
    }

    output(data: string) {
        console.log(data);
    }

    input(promptText: string) {
        return prompt(promptText);
    }

    handleTimeout(timePassed: number) {
        const disableTimeout = false;
        let promptMessage = this.getTimeoutPrompt(timePassed/1000 > 30);
        let delay = prompt(promptMessage, ""+(Sk.execLimit/1000));
        if (delay !== null || parseInt(delay, 10)==0) {
            delay = Sk.execLimit + parseInt(delay, 10) * 1000;
            Sk.execLimit = delay;
            Sk.execLimitFunction = () =>
                disableTimeout ? Infinity : delay;
        }
        return delay;
    }

    clearExistingStudentImports() {
        let sysmodules = this.sysmodules;
        // Remove any existing __main__ modules
        if (sysmodules !== undefined) {
            for (let filename of ["__main__"]) {
                let skFilename = new Sk.builtin.str(filename);
                /*if (sysmodules.quick$lookup(skFilename)) {
                    sysmodules.pop$item(skFilename);
                }*/
                sysmodules.pop$item(skFilename);
            }
        }
        return sysmodules;
    }

    getTimeoutPrompt(longTimeout: boolean) {
        if (longTimeout) {
            return "The program has taken a REALLY long time to run (30 or more seconds). You might want to cancel and check your code. Or, you can add more seconds to wait below.";
        } else {
            return "The program is taking a while to run. How many more seconds would you like to wait?";
        }
    }

    private backupSystem() {
        this.sysmodules = Sk.sysmodules;
        this.globals = Sk.globals;
        Sk.globals = {};
        this.sysmodules = this.clearExistingStudentImports();
        // Horrific hack, to prevent Tifa from caching a bad version of the students' import
        Sk.clearExistingStudentImports = this.clearExistingStudentImports;
    }

    private restoreSystem() {
        // @ts-ignore
        Sk.sysmodules = this.sysmodules;
        Sk.globals = this.globals;
    }

    execute(filename: string, code: string) {
        this.backupSystem();
        return Sk.misceval.asyncToPromise(() =>
            Sk.importMainWithBody(filename, false,
                                  code, true,
                                  this.sysmodules)
        ).then((result) => {
            this.restoreSystem();
            return result;
        });
    }
}