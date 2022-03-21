import { loadProjects, loadItems } from './loadData.js';
import { create_HTMLelt } from './helpers_display.js';






export function displayProjects() {

    const projects = loadProjects();




    const cont_content = document.getElementById("content");
    const div_projects = create_HTMLelt("div", "div-projects", "", "", cont_content);
    
    create_HTMLelt("div", "div-projects-title", "", "PROJECTS", div_projects);

    for (let ip=0; ip<projects.length; ip++) {

        // project name
        const div_projectName = create_HTMLelt("div", "", "div-project", projects[ip].name, div_projects);





    }



}
