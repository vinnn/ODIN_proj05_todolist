import { loadProjects_from_localStorage } from './controlData.js';
import { createDiv, createBtn, clear_container_content } from './helpers_display.js';
import { listenBtns } from './helpers_listen.js';
import { checkItemDone, deleteItem, editItem, addItem, deleteProject } from './crudFunctions.js';


export function displayProject(projectId) {

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // LOAD DATA
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const projects = loadProjects_from_localStorage();

    const project = projects[projectId];
    const items = project.items;

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // PAGE CONTENT CONTAINER
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const cont_content = document.getElementById("content");
    clear_container_content(cont_content);

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // TITLE AND PROJECT CONTAINER
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    createDiv("div-page-title", [], [[]], project.name, cont_content);
    const div_project = createDiv("div-project", [], [[]], "", cont_content);
    
    // project header
    const div_projectHead = createDiv("", ["div-project-head"], [[]], "", div_project);

        // button add item
        createBtn("", ["btn-project", "add-item"], [["projectId", projectId]], "ADD ITEM", div_projectHead);
        // button delete project
        createBtn("", ["btn-project", "delete"], [["projectId", projectId]], "DELETE PROJECT", div_projectHead);

    // items 
    const div_items = createDiv("div-items", ["div-items"], [[]], "", div_project);


        // items headers
        const div_itemsHead = createDiv("", ["div-item", "head"], [[]], "", div_items);

            // header item name
            createDiv("", ["div-head"], [[]], "name", div_itemsHead);
            // header item description
            createDiv("", ["div-head"], [[]], "description", div_itemsHead);
            // header item dueDate
            createDiv("", ["div-head"], [[]], "due date", div_itemsHead);
            // header item name
            createDiv("", ["div-head"], [[]], "priority", div_itemsHead);
            // header item name
            createDiv("", ["div-head"], [[]], "done", div_itemsHead);
            // header item button edit
            createDiv("", ["div-head"], [[]], "edit", div_itemsHead);
            // header item button delete
            createDiv("", ["div-head"], [[]], "delete", div_itemsHead);


        // items 
        for (let ii=0; ii<items.length; ii++) {

            // item row container
            const div_itemRow = createDiv("", ["div-item", "row"], [[]], "", div_items);

            let item = items[ii];
            createDiv("", ["div-cell", "name"], [["done", item.done]], item.name, div_itemRow);
            createDiv("", ["div-cell", "name"], [["done", item.done]], item.description, div_itemRow);
            createDiv("", ["div-cell", "date"], [["done", item.done]], item.dueDate, div_itemRow);
            createDiv("", ["div-cell", "priority"], [["data", item.priority], ["done", item.done]], item.priority, div_itemRow);

            let text_done = (item.done)? "done" : "not done";
            createBtn("", ["btn-item", "done"], [["projectId", projectId], ["itemId", ii]], text_done, div_itemRow);

            createBtn("", ["btn-item", "edit"], [["projectId", projectId], ["itemId", ii]], "edit", div_itemRow);

            createBtn("", ["btn-item", "delete"], [["projectId", projectId], ["itemId", ii]], "delete", div_itemRow);
        }


    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // EVENT LISTENERS
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    listenBtns(
        "btn-item.done", // class of buttons to be listened to
        ["projectId", "itemId"],        // button attribute to identify the button clicked 
        checkItemDone   // function to be triggered when button clicked
    );

    listenBtns(
        "btn-item.edit", // class of buttons to be listened to
        ["projectId", "itemId"],        // button attribute to identify the button clicked 
        editItem   // function to be triggered when button clicked
    );

    listenBtns(
        "btn-item.delete", // class of buttons to be listened to
        ["projectId", "itemId"],        // button attribute to identify the button clicked 
        deleteItem   // function to be triggered when button clicked
    );

    listenBtns(
        "btn-project.add-item", // class of buttons to be listened to
        ["projectId"],        // button attribute to identify the button clicked 
        addItem   // function to be triggered when button clicked
    );

    listenBtns(
        "btn-project.delete", // class of buttons to be listened to
        ["projectId"],        // button attribute to identify the button clicked 
        deleteProject   // function to be triggered when button clicked
    );

}