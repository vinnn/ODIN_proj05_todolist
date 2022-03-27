import { loadProjects_from_localStorage, updateProjects_in_localStorage } from './controlData.js';
import { displayProject } from './displayProject.js';



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
