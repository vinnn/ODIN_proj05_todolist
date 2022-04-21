import { loadProjects_from_localStorage } from './controlData.js';
import { createDiv, createBtn, clear_container_content } from './helpers_display.js';
import { displayProject } from './displayProject.js';
import { deleteProject } from './crudFunctions.js';
import { listenBtns } from './helpers_listen.js';

export function displayOverview() {

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // LOAD DATA
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const projects = loadProjects_from_localStorage();

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // PAGE CONTENT CONTAINER
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const cont_content = document.getElementById("content");
    clear_container_content(cont_content);

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // TITLE AND PROJECT OVERVIEW CONTAINER
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    createDiv("div-page-title", [], [[]], "OVERVIEW", cont_content);
    const div_overview = createDiv("div-overview", [], [[]], "", cont_content);

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // DISPLAY EACH PROJECT
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    for (let ip=0; ip<projects.length; ip++) {

        let project_items = projects[ip].items;

        // div projecti
        const div_project = createDiv("", ["div-project"], [[]], "", div_overview);

            // projecti header
            const div_projectHead = createDiv("", ["div-project-head"], [[]], "", div_project);

                // projecti name
                const div_projectName = createDiv("", ["div-project-name", projects[ip].name], [[]], projects[ip].name, div_projectHead);
                // projecti button select
                createBtn("", ["btn-project", "select"], [["projectId", ip]], "SELECT", div_projectHead);
                // projecti button delete
                createBtn("", ["btn-project", "delete"], [["projectId", ip]], "DELETE", div_projectHead);


            // projecti items
            const div_project_items = createDiv("", ["div-project-items"], [[]], "", div_project);

            for (let ii=0; ii<project_items.length; ii++) {

                if ( ! project_items[ii].done) {
                    const div_item = createDiv("", ["div-item", "row"], [[]], "", div_project_items);

                    // title, duedate and priority
                    createDiv("", ["div-item", "name"], [[]], project_items[ii].name, div_item);
                    createDiv("", ["div-item", "date"], [[]], project_items[ii].dueDate, div_item);
                    createDiv("", ["div-item", "priority"], [["data", project_items[ii].priority]], project_items[ii].priority, div_item);
                }
            }
    }







    listenBtns(
        "btn-project.select", // class of buttons to be listened to
        ["projectId"],        // button attribute name to identify the button clicked 
        displayProject   // function to be triggered when button clicked
        );

    listenBtns(
        "btn-project.delete", // class of buttons to be listened to
        ["projectId"],        // button attribute name to identify the button clicked 
        deleteProject   // function to be triggered when button clicked
        );









}
