import * as ko from 'knockout';
import {AssignmentGroup, AssignmentGroupJson} from "../models/assignment_group";
import {ajax_get} from "../services/ajax";

export class GroupList {
    groups: KnockoutObservableArray<AssignmentGroup>;

    constructor() {
        this.groups = ko.observableArray<AssignmentGroup>([]);
        $().ready(() => this.load());
    }

    load() {
        ajax_get("get/", {course_id: 3}).then((data) => {
            this.groups(data.groups.map( (g: AssignmentGroupJson) => new AssignmentGroup(g)));
        });
    }
}

export const GroupListTemplate = `
    <div>Groups:
        <div data-bind="foreach: groups">
            <div data-bind="component: {name: 'assignment-group', params: $data}"></assignment-group>
        </div>
    </div>
`;

ko.components.register("group-list", {
    viewModel: GroupList,
    template: GroupListTemplate
});