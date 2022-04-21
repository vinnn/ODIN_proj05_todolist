import { displayOverview } from './displayOverview.js';
import { listenBtns } from './helpers_listen.js';
import { displayProject } from './displayProject.js';
import { checkItemDone } from './crudFunctions.js';
import { loadInitialProjects_to_localStorage } from './controlData.js';
import { displayHeader } from './displayHeader.js';
import { deleteProject } from './crudFunctions.js';



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
// NOTES:
//  - event listeners to be inserted in the main view function + refresh by re-creating the content (or at least the listener)
// 
// 
// 
// HELPERS
// 
// 
// 
// 
// 











// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// LOAD DATA AND DISPLAY PROJECTS/ITEMS
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



// displayHeader();
// displayFooter();
    


export function loadOverview() {


    displayOverview();

    listenBtns(
        "btn-project.select", // class of buttons to be listened to
        ["projectId"],        // button attribute name to identify the button clicked 
        loadProject   // function to be triggered when button clicked
        );

    listenBtns(
        "btn-project.delete", // class of buttons to be listened to
        ["projectId"],        // button attribute name to identify the button clicked 
        deleteProject   // function to be triggered when button clicked
        );

}



function loadProject(args) {

    let projectId = args[0];
    // displayHeader();
    // displayFooter();
    displayProject(projectId);



    // listenBtns(
    //     "btn-item.done", // class of buttons to be listened to
    //     ["projectId", "itemId"],        // button attribute to identify the button clicked 
    //     checkItemDone   // function to be triggered when button clicked
    //     );
        
    // listenBtns(
    //     "btn-project.delete", // class of buttons to be listened to
    //     "data",        // button attribute to identify the button clicked 
    //     deleteProject   // function to be triggered when button clicked
    //     );

}





loadInitialProjects_to_localStorage();

displayHeader();

loadOverview();
