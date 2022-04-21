import { loadProjects_from_localStorage, updateProjects_in_localStorage } from './controlData.js';
import { displayProject } from './displayProject.js';
import { createDiv, createBtn, createInput } from './helpers_display.js';
import { Project, Item } from './classes.js';
import { displayOverview } from './displayOverview.js';


export function checkItemDone(args) {

    const projects = loadProjects_from_localStorage();

    let projectId = args[0];
    let itemId = args[1];

    const project = projects[projectId];
    const item = project.items[itemId];

    item.done = ! item.done;

    updateProjects_in_localStorage(projects);
    displayProject(projectId);
}


export function deleteItem(args) {

    const projects = loadProjects_from_localStorage();

    let projectId = args[0];
    let itemId = args[1];

    const project = projects[projectId];
    const items = project.items;

    items.splice(itemId, 1);

    updateProjects_in_localStorage(projects);

    displayProject(projectId);
}


export function editItem(args) {

    const projects = loadProjects_from_localStorage();

    let projectId = args[0];
    let itemId = args[1];

    const project = projects[projectId];
    const item = project.items[itemId];

    const div_items = document.getElementById("div-items");

    // hidden popup form (to edit items when needed)
    const div_popup = createDiv("div-popup", ["div-popup"], [[]], "EDIT ITEM " + item.name, div_items);

        const div_name = createDiv("div-name", [], [[]], "name        ", div_popup);
        const input_name = createInput("input-name", ["input-popup", "name"], [[]], "", item.name, div_name);
   
        const div_descr = createDiv("div-descr", [], [[]], "description ", div_popup);
        const input_descr = createInput("input-descr", ["input-popup", "description"], [[]], "",item.description, div_descr);

        const div_date = createDiv("div-date", [], [[]], "due date    ", div_popup);
        const input_date = createInput("input-date", ["input-popup", "date"], [[]], "", item.dueDate, div_date);

        const div_priority = createDiv("div-priority", [], [[]], "priority    ", div_popup);
        const input_priority = createInput("input-priority", ["input-popup", "priority"], [[]], "", item.priority, div_priority);

        const btn_submit = createBtn("btn-submit", ["btn-submit"], [["projectId", projectId], ["itemId", itemId]], "apply changes", div_popup);
        const btn_cancel = createBtn("btn-cancel", ["btn-cancel"], [[]], "cancel", div_popup);

        btn_submit.onclick = (e) => {

            item.name = input_name.value;
            item.description = input_descr.value;
            item.dueDate = input_date.value;
            item.priority = input_priority.value;          

            updateProjects_in_localStorage(projects);
            displayProject(projectId);
        }

        btn_cancel.onclick = (e) => {

            displayProject(projectId);
        }
}



export function addItem(args) {

    const projects = loadProjects_from_localStorage();

    let projectId = args[0];

    const project = projects[projectId];

    const div_items = document.getElementById("div-items");

    // hidden popup form (to edit items when needed)
    const div_popup = createDiv("div-popup", ["div-popup"], [[]], "NEW ITEM ", div_items);

        const div_name = createDiv("div-name", [], [[]], "name        ", div_popup);
        const input_name = createInput("input-name", ["input-popup", "name"], [[]], "name", "", div_name);
   
        const div_descr = createDiv("div-descr", [], [[]], "description ", div_popup);
        const input_descr = createInput("input-descr", ["input-popup", "description"], [[]], "description", "", div_descr);

        const div_date = createDiv("div-date", [], [[]], "due date    ", div_popup);
        const input_date = createInput("input-date", ["input-popup", "date"], [[]], "due date", "", div_date);

        const div_priority = createDiv("div-priority", [], [[]], "priority    ", div_popup);
        const input_priority = createInput("input-priority", ["input-popup", "priority"], [[]], "priority", "", div_priority);

        const btn_submit = createBtn("btn-submit", ["btn-submit"], [["projectId", projectId]], "create new item", div_popup);
        const btn_cancel = createBtn("btn-cancel", ["btn-cancel"], [[]], "cancel", div_popup);

        btn_submit.onclick = (e) => {

            let iName = input_name.value;
            let iDesc = input_descr.value;
            let iDueDate = input_date.value;
            let iPriority = input_priority.value; 
            let iDone = false;

            let newItem = new Item(iName,iDesc,iDueDate,iPriority,iDone);
            project.items.push(newItem);

            updateProjects_in_localStorage(projects);
            displayProject(projectId);
        }

        btn_cancel.onclick = (e) => {
            displayProject(projectId);
        }
}


export function deleteProject(args) {

    const projects = loadProjects_from_localStorage();

    let projectId = args[0];

    projects.splice(projectId, 1);

    updateProjects_in_localStorage(projects);
    displayOverview();
}


export function newProject() {

    const projects = loadProjects_from_localStorage();

    const div_content = document.getElementById("content");

    // hidden popup form (to edit items when needed)
    const div_popup = createDiv("div-popup", ["div-popup"], [[]], "NEW PROJECT ", div_content);

        const div_name = createDiv("div-name", [], [[]], "name        ", div_popup);
        const input_name = createInput("input-name", ["input-popup", "name"], [[]], "", "new project name", div_name);

        const btn_submit = createBtn("btn-submit", ["btn-submit"], [[], [[]]], "create new project", div_popup);
        const btn_cancel = createBtn("btn-cancel", ["btn-cancel"], [[]], "cancel", div_popup);

        btn_submit.onclick = (e) => {

            let pName = input_name.value;
        
            let newProject = new Project(pName, []);
            projects.push(newProject);

            updateProjects_in_localStorage(projects);
            displayOverview();
        }

        btn_cancel.onclick = (e) => {

            displayOverview();
        }
}