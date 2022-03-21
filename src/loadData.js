import Data from './data.json';
import { Project, Item } from './classes.js';


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// LOAD PROJECTS
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export function loadProjects() {

    const data_array = Data["projects"];

    const projects = [];
    for (let key in data_array) {
        let projectName = data_array[key];
        let newProject = new Project(projectName);
        projects.push(newProject);
    }
    return projects;
}

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// LOAD ITEMS
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export function loadItems() {

    const data_array = Data["items"];

    const items = [];
    for (let key in data_array) {

        let itemArray = data_array[key];

        let iProject = itemArray[0];
        let iName = itemArray[1];
        let iDesc = itemArray[2];
        let iDueDate = itemArray[3];
        let iPriority = itemArray[4];
        let iDone = itemArray[5];

        let newItem = new Item(iProject,iName,iDesc,iDueDate,iPriority,iDone);
        items.push(newItem);
    }
    return items;
}




