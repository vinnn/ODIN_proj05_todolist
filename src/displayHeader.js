import { createDiv, createBtn } from './helpers_display.js';
import { listenBtns } from './helpers_listen.js';
import { loadOverview } from './index.js';


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
        loadOverview   // function to be triggered when button clicked
    );

}
