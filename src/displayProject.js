import { loadProjects_from_localStorage } from './controlData.js';
import { createDiv, createBtn, clear_container_content } from './helpers_display.js';



export function displayProject(projectName) {

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // LOAD DATA
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const projects = loadProjects_from_localStorage();
    const arr_project = projects.filter(project => project.name == projectName);
    const project = arr_project[0];
    const items = project.items;

    console.log(projectName);
    console.log(projects);
    console.log(project);
    console.log(items);

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // PAGE CONTENT CONTAINER
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const cont_content = document.getElementById("content");
    clear_container_content(cont_content);




    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // DISPLAY A PROJECT PAGE
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%






    createDiv("div-page-title", [], [[]], projectName, cont_content);
    const div_project = createDiv("div-project", [], [[]], "", cont_content);
    
    // projecti header
    const div_projectHead = createDiv("", ["div-project-head"], [[]], "", div_project);

        // projecti button select
        const btn_project_delete = createBtn("", ["btn-project", "delete"], [["data", projectName]], "DELETE", div_projectHead);
        // projecti button delete
        const btn_item_add = createBtn("", ["btn-item", "add"], [["data", projectName]], "ADD ITEM", div_projectHead);



    for (let ii=0; ii<items.length; ii++) {

        let item = items[ii];


        // div projecti
        // const div_project = createDiv("", ["div-project"], [[]], "", div_projects);



    }


    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // LISTENER => TO INDIV PROJECT PAGE
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    // const btns_project = document



}
