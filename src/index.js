import { displayOverview } from './displayOverview.js';
import { listenBtns } from './helpers_listen.js';
import { displayProject } from './displayProject.js';
import { loadInitialProjects_to_localStorage } from './controlData.js';






// - load data from json  into local storage
// - read local storage and display overview 
// - 













// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// LOAD DATA AND DISPLAY PROJECTS/ITEMS
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



// displayHeader();
// displayFooter();
    


function loadOverview() {


    displayOverview();

    listenBtns(
        "btn-project.select", // class of buttons to be listened to
        "data",        // button attribute to identify the button clicked 
        displayProject   // function to be triggered when button clicked
        );

    // listenBtns(
    //     "btn-project.delete", // class of buttons to be listened to
    //     "data",        // button attribute to identify the button clicked 
    //     deleteProject   // function to be triggered when button clicked
    //     );

}



// function loadProject() {

//     // displayHeader();
//     // displayFooter();
//     displayOverview();



//     listenBtns(
//         "btn-project.view", // class of buttons to be listened to
//         "data",        // button attribute to identify the button clicked 
//         displayProject   // function to be triggered when button clicked
//         );

//     listenBtns(
//         "btn-project.delete", // class of buttons to be listened to
//         "data",        // button attribute to identify the button clicked 
//         deleteProject   // function to be triggered when button clicked
//         );

// }





loadInitialProjects_to_localStorage();

loadOverview();
