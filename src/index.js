// import Data from './data.json';
// import { Project, Item } from './classes.js';
import { loadData } from './loadData.js';
import { displayProjects } from './displayData.js';



// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// LOAD DATA
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const projects = loadData();

console.log(projects);


displayProjects();



