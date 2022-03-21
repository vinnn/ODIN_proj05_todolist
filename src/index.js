// import Data from './data.json';
// import { Project, Item } from './classes.js';
import { loadProjects, loadItems } from './loadData.js';
import { displayProjects } from './displayData.js';



// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// LOAD DATA
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const projects = loadProjects();
const items = loadItems();

console.log(projects);
console.log(items);


displayProjects();



