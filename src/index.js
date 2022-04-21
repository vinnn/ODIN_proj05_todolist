import { displayOverview } from './displayOverview.js';
import { loadInitialProjects_to_localStorage } from './controlData.js';
import { displayHeader } from './displayHeader.js';



// INITIALISATION AND MAIN MODULE
// - load data from json  into local storage
// - read local storage and displayOverview 
//      - overview event listeners
//              - display project => displayProject
//              - delete project => deleteProject
//      
// 
// SECONDARY MODULES
// - displayProject
//      - event listeners
//              - item check done => upDateItem (update localStorage) + displayProject (ie clear content and re-display projects)
//              - edit item => ... (update localStorage) + displayProject (ie clear content and re-display projects)
//              - delete item => ... (update localStorage) + displayProject (ie clear content and re-display projects)
//              - add item => ... (update localStorage) + displayProject (ie clear content and re-display projects)
//              - delete project => ... (update localStorage) + displayOverview (ie clear content and display overview)
// 



// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// LOAD DATA AND DISPLAY HEADER + OVERVIEW 
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

loadInitialProjects_to_localStorage();

displayHeader();
displayOverview();

