import Data from './data.json';
import { Project, Item } from './classes.js';


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// LOAD PROJECTS
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export function loadData() {

    const input_dict = Data["projects"];

    const projects = [];

    for (let key in input_dict) {

        let project_name = key;

        // load project items
        let input_items = input_dict[key];
        let project_items = [];
        console.log(input_items)
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

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// LOAD ITEMS
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// export function loadItems() {

//     const data_array = Data["items"];

//     const items = [];
//     for (let key in data_array) {

//         let itemArray = data_array[key];

//         let iProject = itemArray[0];
//         let iName = itemArray[1];
//         let iDesc = itemArray[2];
//         let iDueDate = itemArray[3];
//         let iPriority = itemArray[4];
//         let iDone = itemArray[5];

//         let newItem = new Item(iProject,iName,iDesc,iDueDate,iPriority,iDone);
//         items.push(newItem);
//     }
//     return items;
// }




