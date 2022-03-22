import { loadData } from './loadData.js';
import { create_HTMLelt } from './helpers_display.js';






export function displayProjects() {

    const projects = loadData();




    const cont_content = document.getElementById("content");
    create_HTMLelt("div", "div-projects-title", "", "PROJECTS", cont_content);
    const div_projects = create_HTMLelt("div", "div-projects", "", "", cont_content);
    


    for (let ip=0; ip<projects.length; ip++) {

        let project_name = projects[ip].name;
        let project_items = projects[ip].items;


        // div projecti
        const div_project = create_HTMLelt("div", "", "div-project", "", div_projects);

            // projecti name
            const div_projectName = create_HTMLelt("div", "", "div-project-name", projects[ip].name, div_project);
            // project items
            const div_project_items = create_HTMLelt("div", "", "div-project-items", "", div_project);

            for (let ii=0; ii<project_items.length; ii++) {

                console.log(project_items[ii].done);

                if ( ! project_items[ii].done) {
                    const div_item = create_HTMLelt("div", "", "div-item", "", div_project_items);

                    // title, duedate and priority
                    create_HTMLelt("div", "", "div-item-name", project_items[ii].name, div_item);
                    create_HTMLelt("div", "", "div-item-date", project_items[ii].dueDate, div_item);
                    create_HTMLelt("div", "", "div-item-prority", project_items[ii].priority, div_item);
                }
            }

    }



}
