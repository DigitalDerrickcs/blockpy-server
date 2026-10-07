import * as ko from 'knockout';
import {Model, ModelJson, ModelStore} from "../models/model";
import {User, UserJson} from "../models/user";
import {areArraysEqualSets, pushObservableArray} from "../services/plugins";
import {Assignment, AssignmentJson} from "../models/assignment";


export class UserSettingsEditor {
    constructor(params: any) {

    }

    getDefaultGroupSetName(): string {
        return "All assignments";
    }

    getNewGroupSetName(): string {
        return "New assignment set";
    }
}

export const USER_SETTINGS_EDITOR_HTML = `
<div>
Render style:

Sort Order:
First, Last
Last, First
Email
BlockPy ID
Date Created
</div>
`;

ko.components.register("user-settings-editor", {
    viewModel: UserSettingsEditor,
    template: USER_SETTINGS_EDITOR_HTML
});
