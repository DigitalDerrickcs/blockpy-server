import * as ko from 'knockout';
import {Model, ModelJson, ModelStore} from "../models/model";
import {User, UserJson} from "../models/user";
import {areArraysEqualSets, pushObservableArray} from "./plugins";
import {Assignment, AssignmentJson} from "../models/assignment";

interface ModelSetJson {
    name: string;
    ids: number[];
    default: boolean;
}

export class ModelSet {
    name: KnockoutObservable<string>;
    ids: KnockoutObservableArray<number>;
    default: KnockoutObservable<boolean>;

    constructor(params: ModelSetJson) {
        this.name = ko.observable(params.name);
        this.ids = ko.observableArray<number>(params.ids);
        this.default = ko.observable(params.default);
    }

    getIds(): string {
        return this.ids().join(",");
    }

    toJson(): ModelSetJson {
        return {
            name: this.name(),
            ids: this.ids(),
            default: this.default()
        }
    }

    getStored() {
        if (this.default()) {
            return "";
        } else {
            return this.getIds();
        }
    }
}

interface ModelSetSelectorJson<J extends ModelJson, T extends Model<J>> {
    store: ModelStore<J, T>;
    modelSet: KnockoutObservable<ModelSet>;
    default: string;
}

export enum SelectMode {
    ALL="ALL", SINGLE="SINGLE", SET="SET"
}


export class ModelSetSelector<J extends ModelJson, T extends Model<J>> {
    protected store: ModelStore<J, T>;
    sets: KnockoutObservableArray<ModelSet>;
    currentSet: KnockoutObservable<ModelSet>;

    private readonly editorVisible: KnockoutObservable<boolean>;
    private readonly selectMode: KnockoutObservable<SelectMode>;
    private readonly available: KnockoutObservableArray<T>;
    private readonly selectedOptions: KnockoutObservableArray<number>;
    private readonly singleSet: KnockoutObservable<ModelSet>;
    private readonly singleOption: KnockoutObservable<number>;
    private bulkEditor: KnockoutObservable<string>;
    protected prettyResult: KnockoutReadonlyComputed<T[]>;
    private readonly isLoading: KnockoutObservable<boolean>;

    constructor(params: ModelSetSelectorJson<J, T>) {
        // Create the complete list of users
        this.store = params.store;
        this.available = ko.observableArray<T>([]);
        this.isLoading = ko.observable(true);
        this.store.getAllAvailable().then((models: T[]) => {
            pushObservableArray(this.available, models);
            this.sets()[0].ids(models.map((u: T) => u.id));
            this.loadDefault(params.default);
            this.isLoading(false);
        });

        // Create single person model
        this.selectMode = ko.observable<SelectMode>(SelectMode.ALL);
        this.singleSet = ko.observable<ModelSet>(new ModelSet({default: false, ids: [], name: "Just this one"}))
        this.singleOption = ko.observable<number>(null);
        // Load in existing user sets, or create default one
        let sets = this.loadFromLocalStorage().map((item:ModelSetJson)=> new ModelSet(item));
        this.sets = ko.observableArray<ModelSet>(sets);
        // Set the current user set to be the default user set
        this.currentSet = params.modelSet;
        this.currentSet(this.sets()[0]);
        // Hide the editor
        this.editorVisible = ko.observable(false);

        // MultiSelect of selectable users
        this.selectedOptions = ko.observableArray<number>([]);
        // Bulk add emails/IDs
        this.bulkEditor = ko.observable<string>("");

        this.currentSet.subscribe(() => {
            if (this.editorVisible()) {
                this.selectedOptions(this.currentSet().ids());
            }
        });

        this.singleOption.subscribe(() => {
            this.singleSet().ids([this.singleOption()]);
            this.currentSet(this.singleSet());
        });

        this.selectMode.subscribe(() => {
            switch (this.selectMode()) {
                case SelectMode.ALL: case SelectMode.SET:
                    this.currentSet(this.sets()[0]);
                    break;
                case SelectMode.SINGLE:
                    this.currentSet(this.singleSet());
            }
        }, this);

        this.selectedOptions.subscribe((changes) => {
            if (this.currentSet().default()) {
                let anyDeletions = changes.some((change) => change.status === "deleted");
                if (anyDeletions) {
                    let newOptions = this.selectedOptions();
                    this.startAdding(newOptions);
                }
            }
        }, this, "arrayChange");

        this.prettyResult = ko.pureComputed<T[]>( () => {
            return this.currentSet().ids().map((id: number) => this.store.getInstance(id));
        }, this);
    }

    getDefaultGroupSetName(): string {
        return "Everything";
    }

    getNewGroupSetName(): string {
        return "New set";
    }

    loadFromLocalStorage(): ModelSetJson[] {
        // Need CourseID for this too
        let sets = localStorage.getItem(this.store.getLocalStorageKey());
        if (sets === null) {
            return [{name: this.getDefaultGroupSetName(), default: true, ids: []}];
        } else {
            return JSON.parse(sets);
        }
    }

    startEditing() {
        this.editorVisible(true);
        this.selectedOptions(this.currentSet().ids());
    }

    startAdding(ids?: number[]): ModelSet {
        let newSet = new ModelSet({name: this.getNewGroupSetName(), default: false, ids: ids || []});
        this.sets.push(newSet);
        this.currentSet(newSet);
        this.editorVisible(true);
        return newSet;
    }

    addAsEmails() {
        // Parse the bulkEditor for emails
        // Add them to the currently selectedOptions
        // Clear the bulkEditor for any identified people
    }

    loadDefault(value: string) {
        console.log(value);
        if (value === "first") {
            this.selectMode(SelectMode.SINGLE);
            this.singleOption(this.available()[0].id);
        } else if (value === "all" || value.trim() === "") {
            this.selectMode(SelectMode.ALL);
            this.currentSet(this.sets()[0]);
        } else {
            let ids = value.split(",").map((id: string) => parseInt(id, 10));
            switch (ids.length) {
                case 0: case this.available().length:
                    this.selectMode(SelectMode.ALL);
                    this.currentSet(this.sets()[0]);
                    break;
                case 1:
                    if (this.available().some((model: T) => model.id === ids[0])) {
                        this.selectMode(SelectMode.SINGLE);
                        this.singleOption(ids[0]);
                    }
                    break;
                default:
                    this.sets().forEach((modelSet: ModelSet) => {
                        if (areArraysEqualSets(modelSet.ids(), ids)) {
                            this.selectMode(SelectMode.SET);
                            this.currentSet(modelSet);
                        }
                    });
                    break;
            }
        }
    }

    deleteSet(): boolean {
        if (this.currentSet().default()) {
            this.editorVisible(false);
            return false;
        }
        if (confirm("Are you sure you want to delete this set?")) {
            let deleted = this.currentSet();
            this.currentSet(this.sets()[0]);
            this.sets.remove(deleted);
            this.saveToLocalStorage();
            this.editorVisible(false);
            return true;
        }
        return false;
    }

    saveSet() {
        this.currentSet().ids(this.selectedOptions());
        this.saveToLocalStorage();
        this.editorVisible(false);
    }

    cancelEdit() {
        this.editorVisible(false);
    }

    private saveToLocalStorage() {
        let modelSetJson = JSON.stringify(this.sets().map((m: ModelSet) => m.toJson()));
        localStorage.setItem(this.store.getLocalStorageKey(), modelSetJson);
    }
}

export const MODEL_SET_SELECTOR_HTML = (setName: string) => `
    <div>
        <!-- Mode Select -->
        <div class="form-check form-check-inline">
            <input class="form-check-input"
                   data-bind="checked: selectMode, disable: isLoading"
                   type="radio" name="${setName}" id="${setName}1" value="ALL">
            <label class="form-check-label" for="${setName}1">
                All
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input"
                   data-bind="checked: selectMode, disable: isLoading"
                   type="radio" name="${setName}" id="${setName}2" value="SINGLE">
            <label class="form-check-label" for="${setName}2">
                Only
            </label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input"
                   data-bind="checked: selectMode, disable: isLoading"
                   type="radio" name="${setName}" id="${setName}3" value="SET">
            <label class="form-check-label" for="${setName}3">
                ${setName} set
            </label>
        </div>
        
        <!-- Single Person -->
        <div data-bind="if: selectMode()==='SINGLE'">
        <form class="form-inline">
        <select data-bind="options: available, value: singleOption, optionsText: 'name', optionsValue: 'id'"
                class="form-control custom-select ml-2 custom-select-sm"
        ></select>
        </form>
        </div>
        
        <!-- Subset -->
        <div data-bind="if: selectMode()==='SET'">
        <form class="form-inline">
            Show ${setName} set:
            <select data-bind="options: sets,
                               optionsText: 'name',
                               valueAllowUnset: true,
                               value: currentSet"
                    class="form-control custom-select ml-2 custom-select-sm">
            </select>
            <button type="button" class="btn btn-sm btn-outline-secondary ml-2"
                    data-bind="click: startEditing, visible: !editorVisible()">
                    <span class="fas fa-edit"></span>
                    Edit this ${setName} set</button>
            <button type="button" class="btn btn-sm btn-outline-secondary ml-2"
                    data-bind="click: startAdding, visible: !editorVisible()">
                    <span class="fas fa-plus"></span>
                    Add new ${setName} set</button>
                                             
        </form>
        <div data-bind="if: editorVisible">
            <label>Current ${setName} set name:
                <input type="text" data-bind="value: currentSet().name, disable: currentSet().default">
            </label><br>
           <select multiple=multiple style="width: 100%"
                 data-bind="selectedOptions: selectedOptions, valueAllowUnset: true,
                              options: available, optionsText: 'name', optionsValue: 'id', 
                              select2: { placeholder: '${setName}', allowClear: true }"></select>

            <!-- Incomplete
            <label style="min-width: 100%">Bulk Editor (separated by commas):
                <button type="button" class="btn btn-outline-secondary btn-sm"
                    data-bind="click: addAsEmails">Add as Emails</button>
                <br>
                <textarea data-bind="value: currentSet().emails,
                                     disable: currentSet().default"
                 style="min-width: 100%"></textarea></label><br>
             -->
            <button type="button" class="btn btn-danger btn-sm float-right mt-2"
                    data-bind="click: deleteSet">Delete current ${setName} set</button>
            <button type="button" class="btn btn-success btn-sm mt-2"
                    data-bind="click: saveSet">Save ${setName} set</button>
            <button type="button" class="btn btn-outline-secondary btn-sm mt-2 ml-4"
                    data-bind="click: cancelEdit">Cancel changes</button>
        </div>
        </div>
        <div data-bind="ifnot: editorVisible">
            <div data-bind="if: isLoading">
                <div class="spinner-loader" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            <div data-bind="ifnot: isLoading">
                Included ${setName}(s): 
                <span data-bind="foreach: prettyResult">
                    <span data-bind="text: name"></span>, 
                </span>
            </div>
        </div>
    </div>`

export class UserSetSelector extends ModelSetSelector<UserJson, User> {

    constructor(params: ModelSetSelectorJson<UserJson, User>) {
        super(params);
    }

    getDefaultGroupSetName(): string {
        return "All students";
    }

    getNewGroupSetName(): string {
        return "New user set";
    }
}

export class AssignmentSetSelector extends ModelSetSelector<AssignmentJson, Assignment> {
    constructor(params: ModelSetSelectorJson<AssignmentJson, Assignment>) {
        super(params);
    }

    getDefaultGroupSetName(): string {
        return "All assignments";
    }

    getNewGroupSetName(): string {
        return "New assignment set";
    }
}

ko.components.register("user-set-selector", {
    viewModel: UserSetSelector,
    template: MODEL_SET_SELECTOR_HTML("User")
});
ko.components.register("assignment-set-selector", {
    viewModel: AssignmentSetSelector,
    template: MODEL_SET_SELECTOR_HTML("Assignment")
});