import { loadProjects_from_localStorage, updateProjects_in_localStorage } from './controlData.js';
import { displayProject } from './displayProject.js';
import { createDiv, createBtn, createInput } from './helpers_display.js';


export function checkItemDone(args) {

    const projects = loadProjects_from_localStorage();

    console.log(projects);

    let projectId = args[0];
    let itemId = args[1];


    const project = projects[projectId];
    const item = project.items[itemId];

    item.done = ! item.done;


    console.log(projects);


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

    // opens a pop up form
    // with current properties as placeholders
    // 





    const projects = loadProjects_from_localStorage();

    let projectId = args[0];
    let itemId = args[1];

    const project = projects[projectId];
    const item = project.items[itemId];


    console.log(item);

    const div_items = document.getElementById("div-items");
    console.log(div_items);

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

    // document.getElementById('Input').readOnly = true;

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



    // updateProjects_in_localStorage(projects);

    // displayProject(projectId);
}