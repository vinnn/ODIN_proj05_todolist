import { createDiv, createBtn } from './helpers_display.js';
import { listenBtns } from './helpers_listen.js';
import { newProject } from './crudFunctions.js';
import { displayOverview } from './displayOverview.js';

export function displayHeader() {

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // PAGE CONTENT CONTAINER
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const cont_header = document.getElementById("header");
    // clear_container_content(cont_header);

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // TITLE AND PROJECT CONTAINER
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    createDiv("div-header-title", [], [[]], "TODO LIST", cont_header);

    // button home
    createBtn("", ["btn-home"], [[]], "HOME", cont_header);

    listenBtns(
        "btn-home", // class of buttons to be listened to
        [],        // button attribute to identify the button clicked 
        displayOverview   // function to be triggered when button clicked
    );

    // button create new project
    createBtn("", ["btn-new-project"], [[]], "CREATE NEW PROJECT", cont_header);

    listenBtns(
        "btn-new-project", // class of buttons to be listened to
        [],        // button attribute to identify the button clicked 
        newProject   // function to be triggered when button clicked
    );

}
