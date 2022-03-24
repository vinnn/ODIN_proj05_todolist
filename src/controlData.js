import jsonData from './data.json';
import { Project, Item } from './classes.js';


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// LOAD PROJECTS  FROM JSON FILE  TO  LOCAL STORAGE
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export function loadInitialProjects_to_localStorage() {

    localStorage.clear(); //clean the localstorage
    const input_dict = jsonData["projects"];
    localStorage.setItem("projects", JSON.stringify(input_dict));
}


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// LOAD PROJECTS  INTO LOCAL STORAGE
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export function loadProjects_from_localStorage() {

    const input_stringified = localStorage.getItem("projects");
    const input_dict = JSON.parse(input_stringified);

    const projects = [];

    for (let key in input_dict) {

        let project_name = key;

        // load project items
        let input_items = input_dict[key];
        let project_items = [];

        for (let ii=0; ii < input_items.length; ii++) {
            let iName = input_items[ii][0];
            let iDesc = input_items[ii][1];
            let iDueDate = input_items[ii][2];
            let iPriority = input_items[ii][3];
            let iDone = input_items[ii][4];
    
            let newItem = new Item(iName,iDesc,iDueDate,iPriority,iDone);
            project_items.push(newItem);
        }

        let newProject = new Project(project_name, project_items);
        projects.push(newProject);
    }
    return projects;
}


