/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": () => (/* binding */ Item),
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(name, items_array) {
        this.name = name;
        this.items = items_array;
    }
    getName() {
        return this.name;
    }    
}


class Item {
    constructor(name, description, dueDate, priority, done) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.done = done
    }
}


/***/ }),

/***/ "./src/controlData.js":
/*!****************************!*\
  !*** ./src/controlData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadInitialProjects_to_localStorage": () => (/* binding */ loadInitialProjects_to_localStorage),
/* harmony export */   "loadProjects_from_localStorage": () => (/* binding */ loadProjects_from_localStorage),
/* harmony export */   "updateProjects_in_localStorage": () => (/* binding */ updateProjects_in_localStorage)
/* harmony export */ });
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ "./src/data.json");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.js */ "./src/classes.js");




// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// LOAD PROJECTS  FROM JSON FILE  TO  LOCAL STORAGE
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function loadInitialProjects_to_localStorage() {

    localStorage.clear(); //clean the localstorage
    const input_dict = _data_json__WEBPACK_IMPORTED_MODULE_0__.projects;
    localStorage.setItem("projects", JSON.stringify(input_dict));
}


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// LOAD PROJECTS  INTO LOCAL STORAGE
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function loadProjects_from_localStorage() {

    const input_stringified = localStorage.getItem("projects");
    const input_dict = JSON.parse(input_stringified);

    const projects = [];

    for (let key in input_dict) {

        let project_name = key;

        // load project items
        let input_items = input_dict[key];
        let project_items = [];

        for (let ii=0; ii < input_items.length; ii++) {
            let iName = input_items[ii][0];
            let iDesc = input_items[ii][1];
            let iDueDate = input_items[ii][2];
            let iPriority = input_items[ii][3];
            let iDone = input_items[ii][4];
    
            let newItem = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Item(iName,iDesc,iDueDate,iPriority,iDone);
            project_items.push(newItem);
        }

        let newProject = new _classes_js__WEBPACK_IMPORTED_MODULE_1__.Project(project_name, project_items);
        projects.push(newProject);
    }
    return projects;
}


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// UPDATE PROJECTS  IN LOCAL STORAGE
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function updateProjects_in_localStorage(projects) {

    let projects_dict = {};

    for (let ip=0; ip<projects.length; ip++) {

        let project = projects[ip];

        let items_list = [];
        for (let ii=0; ii<project.items.length; ii++) {

            let item = project.items[ii];

            let item_list = [];
            item_list.push(item.name);
            item_list.push(item.description);
            item_list.push(item.dueDate);
            item_list.push(item.priority);
            item_list.push(item.done);

            items_list.push(item_list);
        }

        projects_dict[project.name] = items_list;
    }

    localStorage.clear(); //clean the localstorage
    localStorage.setItem("projects", JSON.stringify(projects_dict));

}


/***/ }),

/***/ "./src/crudFunctions.js":
/*!******************************!*\
  !*** ./src/crudFunctions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addItem": () => (/* binding */ addItem),
/* harmony export */   "checkItemDone": () => (/* binding */ checkItemDone),
/* harmony export */   "deleteItem": () => (/* binding */ deleteItem),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "editItem": () => (/* binding */ editItem),
/* harmony export */   "newProject": () => (/* binding */ newProject)
/* harmony export */ });
/* harmony import */ var _controlData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controlData.js */ "./src/controlData.js");
/* harmony import */ var _displayProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayProject.js */ "./src/displayProject.js");
/* harmony import */ var _helpers_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers_display.js */ "./src/helpers_display.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes.js */ "./src/classes.js");
/* harmony import */ var _displayOverview_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayOverview.js */ "./src/displayOverview.js");







function checkItemDone(args) {

    const projects = (0,_controlData_js__WEBPACK_IMPORTED_MODULE_0__.loadProjects_from_localStorage)();

    let projectId = args[0];
    let itemId = args[1];

    const project = projects[projectId];
    const item = project.items[itemId];

    item.done = ! item.done;

    (0,_controlData_js__WEBPACK_IMPORTED_MODULE_0__.updateProjects_in_localStorage)(projects);
    (0,_displayProject_js__WEBPACK_IMPORTED_MODULE_1__.displayProject)(projectId);
}


function deleteItem(args) {

    const projects = (0,_controlData_js__WEBPACK_IMPORTED_MODULE_0__.loadProjects_from_localStorage)();

    let projectId = args[0];
    let itemId = args[1];

    const project = projects[projectId];
    const items = project.items;

    items.splice(itemId, 1);

    (0,_controlData_js__WEBPACK_IMPORTED_MODULE_0__.updateProjects_in_localStorage)(projects);

    (0,_displayProject_js__WEBPACK_IMPORTED_MODULE_1__.displayProject)(projectId);
}


function editItem(args) {

    const projects = (0,_controlData_js__WEBPACK_IMPORTED_MODULE_0__.loadProjects_from_localStorage)();

    let projectId = args[0];
    let itemId = args[1];

    const project = projects[projectId];
    const item = project.items[itemId];

    const div_items = document.getElementById("div-items");

    // hidden popup form (to edit items when needed)
    const div_popup = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("div-popup", ["div-popup"], [[]], "EDIT ITEM " + item.name, div_items);

        const div_name = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("div-name", [], [[]], "name        ", div_popup);
        const input_name = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createInput)("input-name", ["input-popup", "name"], [[]], "", item.name, div_name);
   
        const div_descr = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("div-descr", [], [[]], "description ", div_popup);
        const input_descr = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createInput)("input-descr", ["input-popup", "description"], [[]], "",item.description, div_descr);

        const div_date = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("div-date", [], [[]], "due date    ", div_popup);
        const input_date = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createInput)("input-date", ["input-popup", "date"], [[]], "", item.dueDate, div_date);

        const div_priority = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("div-priority", [], [[]], "priority    ", div_popup);
        const input_priority = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createInput)("input-priority", ["input-popup", "priority"], [[]], "", item.priority, div_priority);

        const btn_submit = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createBtn)("btn-submit", ["btn-submit"], [["projectId", projectId], ["itemId", itemId]], "apply changes", div_popup);
        const btn_cancel = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createBtn)("btn-cancel", ["btn-cancel"], [[]], "cancel", div_popup);

        btn_submit.onclick = (e) => {

            item.name = input_name.value;
            item.description = input_descr.value;
            item.dueDate = input_date.value;
            item.priority = input_priority.value;          

            (0,_controlData_js__WEBPACK_IMPORTED_MODULE_0__.updateProjects_in_localStorage)(projects);
            (0,_displayProject_js__WEBPACK_IMPORTED_MODULE_1__.displayProject)(projectId);
        }

        btn_cancel.onclick = (e) => {

            ;(0,_displayProject_js__WEBPACK_IMPORTED_MODULE_1__.displayProject)(projectId);
        }
}



function addItem(args) {

    const projects = (0,_controlData_js__WEBPACK_IMPORTED_MODULE_0__.loadProjects_from_localStorage)();

    let projectId = args[0];

    const project = projects[projectId];

    const div_items = document.getElementById("div-items");

    // hidden popup form (to edit items when needed)
    const div_popup = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("div-popup", ["div-popup"], [[]], "NEW ITEM ", div_items);

        const div_name = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("div-name", [], [[]], "name        ", div_popup);
        const input_name = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createInput)("input-name", ["input-popup", "name"], [[]], "name", "", div_name);
   
        const div_descr = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("div-descr", [], [[]], "description ", div_popup);
        const input_descr = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createInput)("input-descr", ["input-popup", "description"], [[]], "description", "", div_descr);

        const div_date = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("div-date", [], [[]], "due date    ", div_popup);
        const input_date = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createInput)("input-date", ["input-popup", "date"], [[]], "due date", "", div_date);

        const div_priority = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("div-priority", [], [[]], "priority    ", div_popup);
        const input_priority = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createInput)("input-priority", ["input-popup", "priority"], [[]], "priority", "", div_priority);

        const btn_submit = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createBtn)("btn-submit", ["btn-submit"], [["projectId", projectId]], "create new item", div_popup);
        const btn_cancel = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createBtn)("btn-cancel", ["btn-cancel"], [[]], "cancel", div_popup);

        btn_submit.onclick = (e) => {

            let iName = input_name.value;
            let iDesc = input_descr.value;
            let iDueDate = input_date.value;
            let iPriority = input_priority.value; 
            let iDone = false;

            let newItem = new _classes_js__WEBPACK_IMPORTED_MODULE_3__.Item(iName,iDesc,iDueDate,iPriority,iDone);
            project.items.push(newItem);

            (0,_controlData_js__WEBPACK_IMPORTED_MODULE_0__.updateProjects_in_localStorage)(projects);
            (0,_displayProject_js__WEBPACK_IMPORTED_MODULE_1__.displayProject)(projectId);
        }

        btn_cancel.onclick = (e) => {
            ;(0,_displayProject_js__WEBPACK_IMPORTED_MODULE_1__.displayProject)(projectId);
        }
}


function deleteProject(args) {

    const projects = (0,_controlData_js__WEBPACK_IMPORTED_MODULE_0__.loadProjects_from_localStorage)();

    let projectId = args[0];

    projects.splice(projectId, 1);

    (0,_controlData_js__WEBPACK_IMPORTED_MODULE_0__.updateProjects_in_localStorage)(projects);
    (0,_displayOverview_js__WEBPACK_IMPORTED_MODULE_4__.displayOverview)();
}


function newProject() {

    const projects = (0,_controlData_js__WEBPACK_IMPORTED_MODULE_0__.loadProjects_from_localStorage)();

    const div_content = document.getElementById("content");

    // hidden popup form (to edit items when needed)
    const div_popup = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("div-popup", ["div-popup"], [[]], "NEW PROJECT ", div_content);

        const div_name = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createDiv)("div-name", [], [[]], "name        ", div_popup);
        const input_name = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createInput)("input-name", ["input-popup", "name"], [[]], "new project name", "", div_name);

        const btn_submit = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createBtn)("btn-submit", ["btn-submit"], [[], [[]]], "create new project", div_popup);
        const btn_cancel = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_2__.createBtn)("btn-cancel", ["btn-cancel"], [[]], "cancel", div_popup);

        btn_submit.onclick = (e) => {

            let pName = input_name.value;
        
            let newProject = new _classes_js__WEBPACK_IMPORTED_MODULE_3__.Project(pName, []);
            projects.push(newProject);

            (0,_controlData_js__WEBPACK_IMPORTED_MODULE_0__.updateProjects_in_localStorage)(projects);
            (0,_displayOverview_js__WEBPACK_IMPORTED_MODULE_4__.displayOverview)();
        }

        btn_cancel.onclick = (e) => {

            ;(0,_displayOverview_js__WEBPACK_IMPORTED_MODULE_4__.displayOverview)();
        }
}

/***/ }),

/***/ "./src/displayHeader.js":
/*!******************************!*\
  !*** ./src/displayHeader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayHeader": () => (/* binding */ displayHeader)
/* harmony export */ });
/* harmony import */ var _helpers_display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers_display.js */ "./src/helpers_display.js");
/* harmony import */ var _helpers_listen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers_listen.js */ "./src/helpers_listen.js");
/* harmony import */ var _crudFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crudFunctions.js */ "./src/crudFunctions.js");
/* harmony import */ var _displayOverview_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayOverview.js */ "./src/displayOverview.js");





function displayHeader() {

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // PAGE CONTENT CONTAINER
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const cont_header = document.getElementById("header");
    // clear_container_content(cont_header);

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // TITLE AND PROJECT CONTAINER
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_0__.createDiv)("div-header-title", [], [[]], "TODO LIST", cont_header);

    // button home
    (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_0__.createBtn)("", ["btn-home"], [[]], "HOME", cont_header);

    (0,_helpers_listen_js__WEBPACK_IMPORTED_MODULE_1__.listenBtns)(
        "btn-home", // class of buttons to be listened to
        [],        // button attribute to identify the button clicked 
        _displayOverview_js__WEBPACK_IMPORTED_MODULE_3__.displayOverview   // function to be triggered when button clicked
    );

    // button create new project
    (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_0__.createBtn)("", ["btn-new-project"], [[]], "CREATE NEW PROJECT", cont_header);

    (0,_helpers_listen_js__WEBPACK_IMPORTED_MODULE_1__.listenBtns)(
        "btn-new-project", // class of buttons to be listened to
        [],        // button attribute to identify the button clicked 
        _crudFunctions_js__WEBPACK_IMPORTED_MODULE_2__.newProject   // function to be triggered when button clicked
    );

}


/***/ }),

/***/ "./src/displayOverview.js":
/*!********************************!*\
  !*** ./src/displayOverview.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayOverview": () => (/* binding */ displayOverview)
/* harmony export */ });
/* harmony import */ var _controlData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controlData.js */ "./src/controlData.js");
/* harmony import */ var _helpers_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers_display.js */ "./src/helpers_display.js");
/* harmony import */ var _displayProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayProject.js */ "./src/displayProject.js");
/* harmony import */ var _crudFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crudFunctions.js */ "./src/crudFunctions.js");
/* harmony import */ var _helpers_listen_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers_listen.js */ "./src/helpers_listen.js");






function displayOverview() {

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // LOAD DATA
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const projects = (0,_controlData_js__WEBPACK_IMPORTED_MODULE_0__.loadProjects_from_localStorage)();

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // PAGE CONTENT CONTAINER
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const cont_content = document.getElementById("content");
    (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.clear_container_content)(cont_content);

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // TITLE AND PROJECT OVERVIEW CONTAINER
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("div-page-title", [], [[]], "OVERVIEW", cont_content);
    const div_overview = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("div-overview", [], [[]], "", cont_content);

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // DISPLAY EACH PROJECT
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    for (let ip=0; ip<projects.length; ip++) {

        let project_items = projects[ip].items;

        // div projecti
        const div_project = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("", ["div-project"], [[]], "", div_overview);

            // projecti header
            const div_projectHead = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("", ["div-project-head"], [[]], "", div_project);

                // projecti name
                // const div_projectName = createDiv("", ["div-project-name", projects[ip].name], [[]], projects[ip].name, div_projectHead);
                const div_projectName = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("", ["div-project-name"], [[]], projects[ip].name, div_projectHead);
                // projecti button select
                (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createBtn)("", ["btn-project", "select"], [["projectId", ip]], "SELECT", div_projectHead);
                // projecti button delete
                (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createBtn)("", ["btn-project", "delete"], [["projectId", ip]], "DELETE", div_projectHead);


            // projecti items
            const div_project_items = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("", ["div-project-items"], [[]], "", div_project);

            for (let ii=0; ii<project_items.length; ii++) {

                if ( ! project_items[ii].done) {
                    const div_item = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("", ["div-item", "row"], [[]], "", div_project_items);

                    // title, duedate and priority
                    (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("", ["div-item", "name"], [[]], project_items[ii].name, div_item);
                    (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("", ["div-item", "date"], [[]], project_items[ii].dueDate, div_item);
                    (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("", ["div-item", "priority"], [["data", project_items[ii].priority]], project_items[ii].priority, div_item);
                }
            }
    }

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // EVENT LISTENERS
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    (0,_helpers_listen_js__WEBPACK_IMPORTED_MODULE_4__.listenBtns)(
        "btn-project.select", // class of buttons to be listened to
        ["projectId"],        // button attribute name to identify the button clicked 
        _displayProject_js__WEBPACK_IMPORTED_MODULE_2__.displayProject   // function to be triggered when button clicked
        );

    (0,_helpers_listen_js__WEBPACK_IMPORTED_MODULE_4__.listenBtns)(
        "btn-project.delete", // class of buttons to be listened to
        ["projectId"],        // button attribute name to identify the button clicked 
        _crudFunctions_js__WEBPACK_IMPORTED_MODULE_3__.deleteProject   // function to be triggered when button clicked
        );

}


/***/ }),

/***/ "./src/displayProject.js":
/*!*******************************!*\
  !*** ./src/displayProject.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayProject": () => (/* binding */ displayProject)
/* harmony export */ });
/* harmony import */ var _controlData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controlData.js */ "./src/controlData.js");
/* harmony import */ var _helpers_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers_display.js */ "./src/helpers_display.js");
/* harmony import */ var _helpers_listen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers_listen.js */ "./src/helpers_listen.js");
/* harmony import */ var _crudFunctions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crudFunctions.js */ "./src/crudFunctions.js");






function displayProject(projectId) {

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // LOAD DATA
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const projects = (0,_controlData_js__WEBPACK_IMPORTED_MODULE_0__.loadProjects_from_localStorage)();

    const project = projects[projectId];
    const items = project.items;

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // PAGE CONTENT CONTAINER
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const cont_content = document.getElementById("content");
    (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.clear_container_content)(cont_content);

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // TITLE AND PROJECT CONTAINER
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("div-page-title", [], [[]], project.name, cont_content);
    const div_project = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("div-project", [], [[]], "", cont_content);
    
    // project header
    const div_projectHead = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("", ["div-project-head"], [[]], "", div_project);

        // button add item
        (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createBtn)("", ["btn-project", "add-item"], [["projectId", projectId]], "ADD ITEM", div_projectHead);
        // button delete project
        (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createBtn)("", ["btn-project", "delete"], [["projectId", projectId]], "DELETE PROJECT", div_projectHead);

    // items 
    const div_items = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("div-items", ["div-items"], [[]], "", div_project);


        // items headers
        const div_itemsHead = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("", ["div-item", "head"], [[]], "", div_items);

            // header item name
            (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("", ["div-head"], [[]], "name", div_itemsHead);
            // header item description
            (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("", ["div-head"], [[]], "description", div_itemsHead);
            // header item dueDate
            (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("", ["div-head"], [[]], "due date", div_itemsHead);
            // header item name
            (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("", ["div-head"], [[]], "priority", div_itemsHead);
            // header item name
            (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("", ["div-head"], [[]], "done", div_itemsHead);
            // header item button edit
            (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("", ["div-head"], [[]], "edit", div_itemsHead);
            // header item button delete
            (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("", ["div-head"], [[]], "delete", div_itemsHead);


        // items 
        for (let ii=0; ii<items.length; ii++) {

            // item row container
            const div_itemRow = (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("", ["div-item", "row"], [[]], "", div_items);

            let item = items[ii];
            (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("", ["div-cell", "name"], [["done", item.done]], item.name, div_itemRow);
            (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("", ["div-cell", "name"], [["done", item.done]], item.description, div_itemRow);
            (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("", ["div-cell", "date"], [["done", item.done]], item.dueDate, div_itemRow);
            (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)("", ["div-cell", "priority"], [["data", item.priority], ["done", item.done]], item.priority, div_itemRow);

            let text_done = (item.done)? "done" : "not done";
            (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createBtn)("", ["btn-item", "done"], [["projectId", projectId], ["itemId", ii]], text_done, div_itemRow);

            (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createBtn)("", ["btn-item", "edit"], [["projectId", projectId], ["itemId", ii]], "edit", div_itemRow);

            (0,_helpers_display_js__WEBPACK_IMPORTED_MODULE_1__.createBtn)("", ["btn-item", "delete"], [["projectId", projectId], ["itemId", ii]], "delete", div_itemRow);
        }


    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // EVENT LISTENERS
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    (0,_helpers_listen_js__WEBPACK_IMPORTED_MODULE_2__.listenBtns)(
        "btn-item.done", // class of buttons to be listened to
        ["projectId", "itemId"],        // button attribute to identify the button clicked 
        _crudFunctions_js__WEBPACK_IMPORTED_MODULE_3__.checkItemDone   // function to be triggered when button clicked
    );

    (0,_helpers_listen_js__WEBPACK_IMPORTED_MODULE_2__.listenBtns)(
        "btn-item.edit", // class of buttons to be listened to
        ["projectId", "itemId"],        // button attribute to identify the button clicked 
        _crudFunctions_js__WEBPACK_IMPORTED_MODULE_3__.editItem   // function to be triggered when button clicked
    );

    (0,_helpers_listen_js__WEBPACK_IMPORTED_MODULE_2__.listenBtns)(
        "btn-item.delete", // class of buttons to be listened to
        ["projectId", "itemId"],        // button attribute to identify the button clicked 
        _crudFunctions_js__WEBPACK_IMPORTED_MODULE_3__.deleteItem   // function to be triggered when button clicked
    );

    (0,_helpers_listen_js__WEBPACK_IMPORTED_MODULE_2__.listenBtns)(
        "btn-project.add-item", // class of buttons to be listened to
        ["projectId"],        // button attribute to identify the button clicked 
        _crudFunctions_js__WEBPACK_IMPORTED_MODULE_3__.addItem   // function to be triggered when button clicked
    );

    (0,_helpers_listen_js__WEBPACK_IMPORTED_MODULE_2__.listenBtns)(
        "btn-project.delete", // class of buttons to be listened to
        ["projectId"],        // button attribute to identify the button clicked 
        _crudFunctions_js__WEBPACK_IMPORTED_MODULE_3__.deleteProject   // function to be triggered when button clicked
    );

}

/***/ }),

/***/ "./src/helpers_display.js":
/*!********************************!*\
  !*** ./src/helpers_display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clear_container_content": () => (/* binding */ clear_container_content),
/* harmony export */   "createBtn": () => (/* binding */ createBtn),
/* harmony export */   "createDiv": () => (/* binding */ createDiv),
/* harmony export */   "createInput": () => (/* binding */ createInput)
/* harmony export */ });

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// creates an HTML div element
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function createDiv(id, classes, attributes, text, container) {

    const newElt = document.createElement("div");

    // add an ID %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    if (id != "") {newElt.id = id}

    // add classes %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    for (let ii=0; ii<classes.length; ii++) {
        newElt.classList.add(classes[ii]);
    }

    // add attributes %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    if (attributes[0].length > 0) {
        for (let ii=0; ii<attributes.length; ii++) {
            newElt.setAttribute(attributes[ii][0], attributes[ii][1]);
        }   
    }

    // add text content %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    if (text != "") {newElt.textContent = text} 

    // append to parent %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    container.appendChild(newElt);

    return newElt;
}


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// creates an HTML button element
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function createBtn(id, classes, attributes, text, container) {

    const newElt = document.createElement("button");
    
    // add an ID %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    if (id != "") {newElt.id = id}
    
    // add classes %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    for (let ii=0; ii<classes.length; ii++) {
        newElt.classList.add(classes[ii]);
    }
    
    // add attributes %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    if (attributes[0].length > 0) {
        for (let ii=0; ii<attributes.length; ii++) {
            newElt.setAttribute(attributes[ii][0], attributes[ii][1]);
        }   
    }

    // add text content %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%    
    if (text != "") {newElt.textContent = text} 

    // append to parent %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%    
    container.appendChild(newElt);

    return newElt;
}


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// creates an HTML input element
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function createInput(id, classes, attributes, placeholder, prefillvalue, container) {

    const newElt = document.createElement("input");
    // newElt.setAttribute("type", "");

    // add an ID %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    if (id != "") {newElt.id = id}
    
    // add classes %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    for (let ii=0; ii<classes.length; ii++) {
        newElt.classList.add(classes[ii]);
    }
    
    // add attributes %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    if (attributes[0].length > 0) {
        for (let ii=0; ii<attributes.length; ii++) {
            newElt.setAttribute(attributes[ii][0], attributes[ii][1]);
        }   
    }

    // placeholder %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%    
    newElt.placeholder = placeholder;

    // prefill value %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%    
    newElt.value = prefillvalue;

    // append to parent %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%    
    container.appendChild(newElt);

    return newElt;
}


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// clears all children of the container element
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function clear_container_content(container) {
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}

/***/ }),

/***/ "./src/helpers_listen.js":
/*!*******************************!*\
  !*** ./src/helpers_listen.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listenBtns": () => (/* binding */ listenBtns)
/* harmony export */ });

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// listener: button clicked (buttons of class 'btnClass')
// - buttons have attributes in 'ListBtnAttributes' 
// - The values of these attributes 'ListBtnAttributes' are transferred to the function triggered
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
function listenBtns(btnClass, ListBtnAttributes, triggeredFunction) {

    const btns = document.querySelectorAll("." + btnClass);
    btns.forEach( btn => 
        btn.onclick = (e) => {
            // e.preventDefault();
            let ListBtnAttributeVals = [];

            ListBtnAttributes.forEach( att =>                 
                ListBtnAttributeVals.push(e.target.attributes[att].value)  
            );

            triggeredFunction(ListBtnAttributeVals);

        }    
    )
}




/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/***/ ((module) => {

module.exports = JSON.parse('{"projects":{"homework":[["maths","finish exercise 3","3-Feb-2023","2",false],["maths","complete circles","5-Feb-2023","2",false]],"shopping":[["clothes","Return amazon","21-Mar-2022","1",true],["groceries and all the things to buy and return before the right date but not after","buy leeks","22-Mar-2022","2",false],["groceries","check receipt","23-Mar-2022","2",false]],"holiday":[["ski","book flights","18-Mar-2022","1",false],["ski clothes","returns","22-Mar-2022","1",false]],"gardening":[["lawn","mawing","3-Apr-2022","1",false],["lawn","mawing","3-May-2022","2",false],["lawn","mawing","3-Jun-2022","3",false]]}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _displayOverview_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayOverview.js */ "./src/displayOverview.js");
/* harmony import */ var _controlData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controlData.js */ "./src/controlData.js");
/* harmony import */ var _displayHeader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayHeader.js */ "./src/displayHeader.js");






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

(0,_controlData_js__WEBPACK_IMPORTED_MODULE_1__.loadInitialProjects_to_localStorage)();

(0,_displayHeader_js__WEBPACK_IMPORTED_MODULE_2__.displayHeader)();
(0,_displayOverview_js__WEBPACK_IMPORTED_MODULE_0__.displayOverview)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOdUQ7QUFDZ0I7QUFDcEI7Ozs7QUFJbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0ZBQW1DOztBQUVuQyxnRUFBYTtBQUNiLG9FQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbl90b2RvbGlzdC8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL29kaW5fdG9kb2xpc3QvLi9zcmMvY29udHJvbERhdGEuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvbGlzdC8uL3NyYy9jcnVkRnVuY3Rpb25zLmpzIiwid2VicGFjazovL29kaW5fdG9kb2xpc3QvLi9zcmMvZGlzcGxheUhlYWRlci5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG9saXN0Ly4vc3JjL2Rpc3BsYXlPdmVydmlldy5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG9saXN0Ly4vc3JjL2Rpc3BsYXlQcm9qZWN0LmpzIiwid2VicGFjazovL29kaW5fdG9kb2xpc3QvLi9zcmMvaGVscGVyc19kaXNwbGF5LmpzIiwid2VicGFjazovL29kaW5fdG9kb2xpc3QvLi9zcmMvaGVscGVyc19saXN0ZW4uanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluX3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluX3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW5fdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGl0ZW1zX2FycmF5KSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtc19hcnJheTtcbiAgICB9XG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9ICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBJdGVtIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGRvbmUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuZG9uZSA9IGRvbmVcbiAgICB9XG59XG4iLCJpbXBvcnQganNvbkRhdGEgZnJvbSAnLi9kYXRhLmpzb24nO1xuaW1wb3J0IHsgUHJvamVjdCwgSXRlbSB9IGZyb20gJy4vY2xhc3Nlcy5qcyc7XG5cblxuLy8gJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlXG4vLyAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbi8vIExPQUQgUFJPSkVDVFMgIEZST00gSlNPTiBGSUxFICBUTyAgTE9DQUwgU1RPUkFHRVxuLy8gJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlXG4vLyAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbmV4cG9ydCBmdW5jdGlvbiBsb2FkSW5pdGlhbFByb2plY3RzX3RvX2xvY2FsU3RvcmFnZSgpIHtcblxuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpOyAvL2NsZWFuIHRoZSBsb2NhbHN0b3JhZ2VcbiAgICBjb25zdCBpbnB1dF9kaWN0ID0ganNvbkRhdGFbXCJwcm9qZWN0c1wiXTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGlucHV0X2RpY3QpKTtcbn1cblxuXG4vLyAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbi8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuLy8gTE9BRCBQUk9KRUNUUyAgSU5UTyBMT0NBTCBTVE9SQUdFXG4vLyAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbi8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRQcm9qZWN0c19mcm9tX2xvY2FsU3RvcmFnZSgpIHtcblxuICAgIGNvbnN0IGlucHV0X3N0cmluZ2lmaWVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKTtcbiAgICBjb25zdCBpbnB1dF9kaWN0ID0gSlNPTi5wYXJzZShpbnB1dF9zdHJpbmdpZmllZCk7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IFtdO1xuXG4gICAgZm9yIChsZXQga2V5IGluIGlucHV0X2RpY3QpIHtcblxuICAgICAgICBsZXQgcHJvamVjdF9uYW1lID0ga2V5O1xuXG4gICAgICAgIC8vIGxvYWQgcHJvamVjdCBpdGVtc1xuICAgICAgICBsZXQgaW5wdXRfaXRlbXMgPSBpbnB1dF9kaWN0W2tleV07XG4gICAgICAgIGxldCBwcm9qZWN0X2l0ZW1zID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaWk9MDsgaWkgPCBpbnB1dF9pdGVtcy5sZW5ndGg7IGlpKyspIHtcbiAgICAgICAgICAgIGxldCBpTmFtZSA9IGlucHV0X2l0ZW1zW2lpXVswXTtcbiAgICAgICAgICAgIGxldCBpRGVzYyA9IGlucHV0X2l0ZW1zW2lpXVsxXTtcbiAgICAgICAgICAgIGxldCBpRHVlRGF0ZSA9IGlucHV0X2l0ZW1zW2lpXVsyXTtcbiAgICAgICAgICAgIGxldCBpUHJpb3JpdHkgPSBpbnB1dF9pdGVtc1tpaV1bM107XG4gICAgICAgICAgICBsZXQgaURvbmUgPSBpbnB1dF9pdGVtc1tpaV1bNF07XG4gICAgXG4gICAgICAgICAgICBsZXQgbmV3SXRlbSA9IG5ldyBJdGVtKGlOYW1lLGlEZXNjLGlEdWVEYXRlLGlQcmlvcml0eSxpRG9uZSk7XG4gICAgICAgICAgICBwcm9qZWN0X2l0ZW1zLnB1c2gobmV3SXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3RfbmFtZSwgcHJvamVjdF9pdGVtcyk7XG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgfVxuICAgIHJldHVybiBwcm9qZWN0cztcbn1cblxuXG4vLyAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbi8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuLy8gVVBEQVRFIFBST0pFQ1RTICBJTiBMT0NBTCBTVE9SQUdFXG4vLyAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbi8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzX2luX2xvY2FsU3RvcmFnZShwcm9qZWN0cykge1xuXG4gICAgbGV0IHByb2plY3RzX2RpY3QgPSB7fTtcblxuICAgIGZvciAobGV0IGlwPTA7IGlwPHByb2plY3RzLmxlbmd0aDsgaXArKykge1xuXG4gICAgICAgIGxldCBwcm9qZWN0ID0gcHJvamVjdHNbaXBdO1xuXG4gICAgICAgIGxldCBpdGVtc19saXN0ID0gW107XG4gICAgICAgIGZvciAobGV0IGlpPTA7IGlpPHByb2plY3QuaXRlbXMubGVuZ3RoOyBpaSsrKSB7XG5cbiAgICAgICAgICAgIGxldCBpdGVtID0gcHJvamVjdC5pdGVtc1tpaV07XG5cbiAgICAgICAgICAgIGxldCBpdGVtX2xpc3QgPSBbXTtcbiAgICAgICAgICAgIGl0ZW1fbGlzdC5wdXNoKGl0ZW0ubmFtZSk7XG4gICAgICAgICAgICBpdGVtX2xpc3QucHVzaChpdGVtLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGl0ZW1fbGlzdC5wdXNoKGl0ZW0uZHVlRGF0ZSk7XG4gICAgICAgICAgICBpdGVtX2xpc3QucHVzaChpdGVtLnByaW9yaXR5KTtcbiAgICAgICAgICAgIGl0ZW1fbGlzdC5wdXNoKGl0ZW0uZG9uZSk7XG5cbiAgICAgICAgICAgIGl0ZW1zX2xpc3QucHVzaChpdGVtX2xpc3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvamVjdHNfZGljdFtwcm9qZWN0Lm5hbWVdID0gaXRlbXNfbGlzdDtcbiAgICB9XG5cbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTsgLy9jbGVhbiB0aGUgbG9jYWxzdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c19kaWN0KSk7XG5cbn1cbiIsImltcG9ydCB7IGxvYWRQcm9qZWN0c19mcm9tX2xvY2FsU3RvcmFnZSwgdXBkYXRlUHJvamVjdHNfaW5fbG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9jb250cm9sRGF0YS5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5UHJvamVjdCB9IGZyb20gJy4vZGlzcGxheVByb2plY3QuanMnO1xuaW1wb3J0IHsgY3JlYXRlRGl2LCBjcmVhdGVCdG4sIGNyZWF0ZUlucHV0IH0gZnJvbSAnLi9oZWxwZXJzX2Rpc3BsYXkuanMnO1xuaW1wb3J0IHsgUHJvamVjdCwgSXRlbSB9IGZyb20gJy4vY2xhc3Nlcy5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5T3ZlcnZpZXcgfSBmcm9tICcuL2Rpc3BsYXlPdmVydmlldy5qcyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrSXRlbURvbmUoYXJncykge1xuXG4gICAgY29uc3QgcHJvamVjdHMgPSBsb2FkUHJvamVjdHNfZnJvbV9sb2NhbFN0b3JhZ2UoKTtcblxuICAgIGxldCBwcm9qZWN0SWQgPSBhcmdzWzBdO1xuICAgIGxldCBpdGVtSWQgPSBhcmdzWzFdO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW3Byb2plY3RJZF07XG4gICAgY29uc3QgaXRlbSA9IHByb2plY3QuaXRlbXNbaXRlbUlkXTtcblxuICAgIGl0ZW0uZG9uZSA9ICEgaXRlbS5kb25lO1xuXG4gICAgdXBkYXRlUHJvamVjdHNfaW5fbG9jYWxTdG9yYWdlKHByb2plY3RzKTtcbiAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0SWQpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVJdGVtKGFyZ3MpIHtcblxuICAgIGNvbnN0IHByb2plY3RzID0gbG9hZFByb2plY3RzX2Zyb21fbG9jYWxTdG9yYWdlKCk7XG5cbiAgICBsZXQgcHJvamVjdElkID0gYXJnc1swXTtcbiAgICBsZXQgaXRlbUlkID0gYXJnc1sxXTtcblxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1twcm9qZWN0SWRdO1xuICAgIGNvbnN0IGl0ZW1zID0gcHJvamVjdC5pdGVtcztcblxuICAgIGl0ZW1zLnNwbGljZShpdGVtSWQsIDEpO1xuXG4gICAgdXBkYXRlUHJvamVjdHNfaW5fbG9jYWxTdG9yYWdlKHByb2plY3RzKTtcblxuICAgIGRpc3BsYXlQcm9qZWN0KHByb2plY3RJZCk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRJdGVtKGFyZ3MpIHtcblxuICAgIGNvbnN0IHByb2plY3RzID0gbG9hZFByb2plY3RzX2Zyb21fbG9jYWxTdG9yYWdlKCk7XG5cbiAgICBsZXQgcHJvamVjdElkID0gYXJnc1swXTtcbiAgICBsZXQgaXRlbUlkID0gYXJnc1sxXTtcblxuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1twcm9qZWN0SWRdO1xuICAgIGNvbnN0IGl0ZW0gPSBwcm9qZWN0Lml0ZW1zW2l0ZW1JZF07XG5cbiAgICBjb25zdCBkaXZfaXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpdi1pdGVtc1wiKTtcblxuICAgIC8vIGhpZGRlbiBwb3B1cCBmb3JtICh0byBlZGl0IGl0ZW1zIHdoZW4gbmVlZGVkKVxuICAgIGNvbnN0IGRpdl9wb3B1cCA9IGNyZWF0ZURpdihcImRpdi1wb3B1cFwiLCBbXCJkaXYtcG9wdXBcIl0sIFtbXV0sIFwiRURJVCBJVEVNIFwiICsgaXRlbS5uYW1lLCBkaXZfaXRlbXMpO1xuXG4gICAgICAgIGNvbnN0IGRpdl9uYW1lID0gY3JlYXRlRGl2KFwiZGl2LW5hbWVcIiwgW10sIFtbXV0sIFwibmFtZSAgICAgICAgXCIsIGRpdl9wb3B1cCk7XG4gICAgICAgIGNvbnN0IGlucHV0X25hbWUgPSBjcmVhdGVJbnB1dChcImlucHV0LW5hbWVcIiwgW1wiaW5wdXQtcG9wdXBcIiwgXCJuYW1lXCJdLCBbW11dLCBcIlwiLCBpdGVtLm5hbWUsIGRpdl9uYW1lKTtcbiAgIFxuICAgICAgICBjb25zdCBkaXZfZGVzY3IgPSBjcmVhdGVEaXYoXCJkaXYtZGVzY3JcIiwgW10sIFtbXV0sIFwiZGVzY3JpcHRpb24gXCIsIGRpdl9wb3B1cCk7XG4gICAgICAgIGNvbnN0IGlucHV0X2Rlc2NyID0gY3JlYXRlSW5wdXQoXCJpbnB1dC1kZXNjclwiLCBbXCJpbnB1dC1wb3B1cFwiLCBcImRlc2NyaXB0aW9uXCJdLCBbW11dLCBcIlwiLGl0ZW0uZGVzY3JpcHRpb24sIGRpdl9kZXNjcik7XG5cbiAgICAgICAgY29uc3QgZGl2X2RhdGUgPSBjcmVhdGVEaXYoXCJkaXYtZGF0ZVwiLCBbXSwgW1tdXSwgXCJkdWUgZGF0ZSAgICBcIiwgZGl2X3BvcHVwKTtcbiAgICAgICAgY29uc3QgaW5wdXRfZGF0ZSA9IGNyZWF0ZUlucHV0KFwiaW5wdXQtZGF0ZVwiLCBbXCJpbnB1dC1wb3B1cFwiLCBcImRhdGVcIl0sIFtbXV0sIFwiXCIsIGl0ZW0uZHVlRGF0ZSwgZGl2X2RhdGUpO1xuXG4gICAgICAgIGNvbnN0IGRpdl9wcmlvcml0eSA9IGNyZWF0ZURpdihcImRpdi1wcmlvcml0eVwiLCBbXSwgW1tdXSwgXCJwcmlvcml0eSAgICBcIiwgZGl2X3BvcHVwKTtcbiAgICAgICAgY29uc3QgaW5wdXRfcHJpb3JpdHkgPSBjcmVhdGVJbnB1dChcImlucHV0LXByaW9yaXR5XCIsIFtcImlucHV0LXBvcHVwXCIsIFwicHJpb3JpdHlcIl0sIFtbXV0sIFwiXCIsIGl0ZW0ucHJpb3JpdHksIGRpdl9wcmlvcml0eSk7XG5cbiAgICAgICAgY29uc3QgYnRuX3N1Ym1pdCA9IGNyZWF0ZUJ0bihcImJ0bi1zdWJtaXRcIiwgW1wiYnRuLXN1Ym1pdFwiXSwgW1tcInByb2plY3RJZFwiLCBwcm9qZWN0SWRdLCBbXCJpdGVtSWRcIiwgaXRlbUlkXV0sIFwiYXBwbHkgY2hhbmdlc1wiLCBkaXZfcG9wdXApO1xuICAgICAgICBjb25zdCBidG5fY2FuY2VsID0gY3JlYXRlQnRuKFwiYnRuLWNhbmNlbFwiLCBbXCJidG4tY2FuY2VsXCJdLCBbW11dLCBcImNhbmNlbFwiLCBkaXZfcG9wdXApO1xuXG4gICAgICAgIGJ0bl9zdWJtaXQub25jbGljayA9IChlKSA9PiB7XG5cbiAgICAgICAgICAgIGl0ZW0ubmFtZSA9IGlucHV0X25hbWUudmFsdWU7XG4gICAgICAgICAgICBpdGVtLmRlc2NyaXB0aW9uID0gaW5wdXRfZGVzY3IudmFsdWU7XG4gICAgICAgICAgICBpdGVtLmR1ZURhdGUgPSBpbnB1dF9kYXRlLnZhbHVlO1xuICAgICAgICAgICAgaXRlbS5wcmlvcml0eSA9IGlucHV0X3ByaW9yaXR5LnZhbHVlOyAgICAgICAgICBcblxuICAgICAgICAgICAgdXBkYXRlUHJvamVjdHNfaW5fbG9jYWxTdG9yYWdlKHByb2plY3RzKTtcbiAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBidG5fY2FuY2VsLm9uY2xpY2sgPSAoZSkgPT4ge1xuXG4gICAgICAgICAgICBkaXNwbGF5UHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgICB9XG59XG5cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSXRlbShhcmdzKSB7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IGxvYWRQcm9qZWN0c19mcm9tX2xvY2FsU3RvcmFnZSgpO1xuXG4gICAgbGV0IHByb2plY3RJZCA9IGFyZ3NbMF07XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNbcHJvamVjdElkXTtcblxuICAgIGNvbnN0IGRpdl9pdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGl2LWl0ZW1zXCIpO1xuXG4gICAgLy8gaGlkZGVuIHBvcHVwIGZvcm0gKHRvIGVkaXQgaXRlbXMgd2hlbiBuZWVkZWQpXG4gICAgY29uc3QgZGl2X3BvcHVwID0gY3JlYXRlRGl2KFwiZGl2LXBvcHVwXCIsIFtcImRpdi1wb3B1cFwiXSwgW1tdXSwgXCJORVcgSVRFTSBcIiwgZGl2X2l0ZW1zKTtcblxuICAgICAgICBjb25zdCBkaXZfbmFtZSA9IGNyZWF0ZURpdihcImRpdi1uYW1lXCIsIFtdLCBbW11dLCBcIm5hbWUgICAgICAgIFwiLCBkaXZfcG9wdXApO1xuICAgICAgICBjb25zdCBpbnB1dF9uYW1lID0gY3JlYXRlSW5wdXQoXCJpbnB1dC1uYW1lXCIsIFtcImlucHV0LXBvcHVwXCIsIFwibmFtZVwiXSwgW1tdXSwgXCJuYW1lXCIsIFwiXCIsIGRpdl9uYW1lKTtcbiAgIFxuICAgICAgICBjb25zdCBkaXZfZGVzY3IgPSBjcmVhdGVEaXYoXCJkaXYtZGVzY3JcIiwgW10sIFtbXV0sIFwiZGVzY3JpcHRpb24gXCIsIGRpdl9wb3B1cCk7XG4gICAgICAgIGNvbnN0IGlucHV0X2Rlc2NyID0gY3JlYXRlSW5wdXQoXCJpbnB1dC1kZXNjclwiLCBbXCJpbnB1dC1wb3B1cFwiLCBcImRlc2NyaXB0aW9uXCJdLCBbW11dLCBcImRlc2NyaXB0aW9uXCIsIFwiXCIsIGRpdl9kZXNjcik7XG5cbiAgICAgICAgY29uc3QgZGl2X2RhdGUgPSBjcmVhdGVEaXYoXCJkaXYtZGF0ZVwiLCBbXSwgW1tdXSwgXCJkdWUgZGF0ZSAgICBcIiwgZGl2X3BvcHVwKTtcbiAgICAgICAgY29uc3QgaW5wdXRfZGF0ZSA9IGNyZWF0ZUlucHV0KFwiaW5wdXQtZGF0ZVwiLCBbXCJpbnB1dC1wb3B1cFwiLCBcImRhdGVcIl0sIFtbXV0sIFwiZHVlIGRhdGVcIiwgXCJcIiwgZGl2X2RhdGUpO1xuXG4gICAgICAgIGNvbnN0IGRpdl9wcmlvcml0eSA9IGNyZWF0ZURpdihcImRpdi1wcmlvcml0eVwiLCBbXSwgW1tdXSwgXCJwcmlvcml0eSAgICBcIiwgZGl2X3BvcHVwKTtcbiAgICAgICAgY29uc3QgaW5wdXRfcHJpb3JpdHkgPSBjcmVhdGVJbnB1dChcImlucHV0LXByaW9yaXR5XCIsIFtcImlucHV0LXBvcHVwXCIsIFwicHJpb3JpdHlcIl0sIFtbXV0sIFwicHJpb3JpdHlcIiwgXCJcIiwgZGl2X3ByaW9yaXR5KTtcblxuICAgICAgICBjb25zdCBidG5fc3VibWl0ID0gY3JlYXRlQnRuKFwiYnRuLXN1Ym1pdFwiLCBbXCJidG4tc3VibWl0XCJdLCBbW1wicHJvamVjdElkXCIsIHByb2plY3RJZF1dLCBcImNyZWF0ZSBuZXcgaXRlbVwiLCBkaXZfcG9wdXApO1xuICAgICAgICBjb25zdCBidG5fY2FuY2VsID0gY3JlYXRlQnRuKFwiYnRuLWNhbmNlbFwiLCBbXCJidG4tY2FuY2VsXCJdLCBbW11dLCBcImNhbmNlbFwiLCBkaXZfcG9wdXApO1xuXG4gICAgICAgIGJ0bl9zdWJtaXQub25jbGljayA9IChlKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBpTmFtZSA9IGlucHV0X25hbWUudmFsdWU7XG4gICAgICAgICAgICBsZXQgaURlc2MgPSBpbnB1dF9kZXNjci52YWx1ZTtcbiAgICAgICAgICAgIGxldCBpRHVlRGF0ZSA9IGlucHV0X2RhdGUudmFsdWU7XG4gICAgICAgICAgICBsZXQgaVByaW9yaXR5ID0gaW5wdXRfcHJpb3JpdHkudmFsdWU7IFxuICAgICAgICAgICAgbGV0IGlEb25lID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGxldCBuZXdJdGVtID0gbmV3IEl0ZW0oaU5hbWUsaURlc2MsaUR1ZURhdGUsaVByaW9yaXR5LGlEb25lKTtcbiAgICAgICAgICAgIHByb2plY3QuaXRlbXMucHVzaChuZXdJdGVtKTtcblxuICAgICAgICAgICAgdXBkYXRlUHJvamVjdHNfaW5fbG9jYWxTdG9yYWdlKHByb2plY3RzKTtcbiAgICAgICAgICAgIGRpc3BsYXlQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBidG5fY2FuY2VsLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICAgICAgZGlzcGxheVByb2plY3QocHJvamVjdElkKTtcbiAgICAgICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGFyZ3MpIHtcblxuICAgIGNvbnN0IHByb2plY3RzID0gbG9hZFByb2plY3RzX2Zyb21fbG9jYWxTdG9yYWdlKCk7XG5cbiAgICBsZXQgcHJvamVjdElkID0gYXJnc1swXTtcblxuICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0SWQsIDEpO1xuXG4gICAgdXBkYXRlUHJvamVjdHNfaW5fbG9jYWxTdG9yYWdlKHByb2plY3RzKTtcbiAgICBkaXNwbGF5T3ZlcnZpZXcoKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbmV3UHJvamVjdCgpIHtcblxuICAgIGNvbnN0IHByb2plY3RzID0gbG9hZFByb2plY3RzX2Zyb21fbG9jYWxTdG9yYWdlKCk7XG5cbiAgICBjb25zdCBkaXZfY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAgIC8vIGhpZGRlbiBwb3B1cCBmb3JtICh0byBlZGl0IGl0ZW1zIHdoZW4gbmVlZGVkKVxuICAgIGNvbnN0IGRpdl9wb3B1cCA9IGNyZWF0ZURpdihcImRpdi1wb3B1cFwiLCBbXCJkaXYtcG9wdXBcIl0sIFtbXV0sIFwiTkVXIFBST0pFQ1QgXCIsIGRpdl9jb250ZW50KTtcblxuICAgICAgICBjb25zdCBkaXZfbmFtZSA9IGNyZWF0ZURpdihcImRpdi1uYW1lXCIsIFtdLCBbW11dLCBcIm5hbWUgICAgICAgIFwiLCBkaXZfcG9wdXApO1xuICAgICAgICBjb25zdCBpbnB1dF9uYW1lID0gY3JlYXRlSW5wdXQoXCJpbnB1dC1uYW1lXCIsIFtcImlucHV0LXBvcHVwXCIsIFwibmFtZVwiXSwgW1tdXSwgXCJuZXcgcHJvamVjdCBuYW1lXCIsIFwiXCIsIGRpdl9uYW1lKTtcblxuICAgICAgICBjb25zdCBidG5fc3VibWl0ID0gY3JlYXRlQnRuKFwiYnRuLXN1Ym1pdFwiLCBbXCJidG4tc3VibWl0XCJdLCBbW10sIFtbXV1dLCBcImNyZWF0ZSBuZXcgcHJvamVjdFwiLCBkaXZfcG9wdXApO1xuICAgICAgICBjb25zdCBidG5fY2FuY2VsID0gY3JlYXRlQnRuKFwiYnRuLWNhbmNlbFwiLCBbXCJidG4tY2FuY2VsXCJdLCBbW11dLCBcImNhbmNlbFwiLCBkaXZfcG9wdXApO1xuXG4gICAgICAgIGJ0bl9zdWJtaXQub25jbGljayA9IChlKSA9PiB7XG5cbiAgICAgICAgICAgIGxldCBwTmFtZSA9IGlucHV0X25hbWUudmFsdWU7XG4gICAgICAgIFxuICAgICAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwTmFtZSwgW10pO1xuICAgICAgICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcblxuICAgICAgICAgICAgdXBkYXRlUHJvamVjdHNfaW5fbG9jYWxTdG9yYWdlKHByb2plY3RzKTtcbiAgICAgICAgICAgIGRpc3BsYXlPdmVydmlldygpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnRuX2NhbmNlbC5vbmNsaWNrID0gKGUpID0+IHtcblxuICAgICAgICAgICAgZGlzcGxheU92ZXJ2aWV3KCk7XG4gICAgICAgIH1cbn0iLCJpbXBvcnQgeyBjcmVhdGVEaXYsIGNyZWF0ZUJ0biB9IGZyb20gJy4vaGVscGVyc19kaXNwbGF5LmpzJztcbmltcG9ydCB7IGxpc3RlbkJ0bnMgfSBmcm9tICcuL2hlbHBlcnNfbGlzdGVuLmpzJztcbmltcG9ydCB7IG5ld1Byb2plY3QgfSBmcm9tICcuL2NydWRGdW5jdGlvbnMuanMnO1xuaW1wb3J0IHsgZGlzcGxheU92ZXJ2aWV3IH0gZnJvbSAnLi9kaXNwbGF5T3ZlcnZpZXcuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUhlYWRlcigpIHtcblxuICAgIC8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuICAgIC8vIFBBR0UgQ09OVEVOVCBDT05UQUlORVJcbiAgICAvLyAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbiAgICBjb25zdCBjb250X2hlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xuICAgIC8vIGNsZWFyX2NvbnRhaW5lcl9jb250ZW50KGNvbnRfaGVhZGVyKTtcblxuICAgIC8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuICAgIC8vIFRJVExFIEFORCBQUk9KRUNUIENPTlRBSU5FUlxuICAgIC8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuICAgIGNyZWF0ZURpdihcImRpdi1oZWFkZXItdGl0bGVcIiwgW10sIFtbXV0sIFwiVE9ETyBMSVNUXCIsIGNvbnRfaGVhZGVyKTtcblxuICAgIC8vIGJ1dHRvbiBob21lXG4gICAgY3JlYXRlQnRuKFwiXCIsIFtcImJ0bi1ob21lXCJdLCBbW11dLCBcIkhPTUVcIiwgY29udF9oZWFkZXIpO1xuXG4gICAgbGlzdGVuQnRucyhcbiAgICAgICAgXCJidG4taG9tZVwiLCAvLyBjbGFzcyBvZiBidXR0b25zIHRvIGJlIGxpc3RlbmVkIHRvXG4gICAgICAgIFtdLCAgICAgICAgLy8gYnV0dG9uIGF0dHJpYnV0ZSB0byBpZGVudGlmeSB0aGUgYnV0dG9uIGNsaWNrZWQgXG4gICAgICAgIGRpc3BsYXlPdmVydmlldyAgIC8vIGZ1bmN0aW9uIHRvIGJlIHRyaWdnZXJlZCB3aGVuIGJ1dHRvbiBjbGlja2VkXG4gICAgKTtcblxuICAgIC8vIGJ1dHRvbiBjcmVhdGUgbmV3IHByb2plY3RcbiAgICBjcmVhdGVCdG4oXCJcIiwgW1wiYnRuLW5ldy1wcm9qZWN0XCJdLCBbW11dLCBcIkNSRUFURSBORVcgUFJPSkVDVFwiLCBjb250X2hlYWRlcik7XG5cbiAgICBsaXN0ZW5CdG5zKFxuICAgICAgICBcImJ0bi1uZXctcHJvamVjdFwiLCAvLyBjbGFzcyBvZiBidXR0b25zIHRvIGJlIGxpc3RlbmVkIHRvXG4gICAgICAgIFtdLCAgICAgICAgLy8gYnV0dG9uIGF0dHJpYnV0ZSB0byBpZGVudGlmeSB0aGUgYnV0dG9uIGNsaWNrZWQgXG4gICAgICAgIG5ld1Byb2plY3QgICAvLyBmdW5jdGlvbiB0byBiZSB0cmlnZ2VyZWQgd2hlbiBidXR0b24gY2xpY2tlZFxuICAgICk7XG5cbn1cbiIsImltcG9ydCB7IGxvYWRQcm9qZWN0c19mcm9tX2xvY2FsU3RvcmFnZSB9IGZyb20gJy4vY29udHJvbERhdGEuanMnO1xuaW1wb3J0IHsgY3JlYXRlRGl2LCBjcmVhdGVCdG4sIGNsZWFyX2NvbnRhaW5lcl9jb250ZW50IH0gZnJvbSAnLi9oZWxwZXJzX2Rpc3BsYXkuanMnO1xuaW1wb3J0IHsgZGlzcGxheVByb2plY3QgfSBmcm9tICcuL2Rpc3BsYXlQcm9qZWN0LmpzJztcbmltcG9ydCB7IGRlbGV0ZVByb2plY3QgfSBmcm9tICcuL2NydWRGdW5jdGlvbnMuanMnO1xuaW1wb3J0IHsgbGlzdGVuQnRucyB9IGZyb20gJy4vaGVscGVyc19saXN0ZW4uanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU92ZXJ2aWV3KCkge1xuXG4gICAgLy8gJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlXG4gICAgLy8gTE9BRCBEQVRBXG4gICAgLy8gJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlXG4gICAgY29uc3QgcHJvamVjdHMgPSBsb2FkUHJvamVjdHNfZnJvbV9sb2NhbFN0b3JhZ2UoKTtcblxuICAgIC8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuICAgIC8vIFBBR0UgQ09OVEVOVCBDT05UQUlORVJcbiAgICAvLyAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbiAgICBjb25zdCBjb250X2NvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY2xlYXJfY29udGFpbmVyX2NvbnRlbnQoY29udF9jb250ZW50KTtcblxuICAgIC8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuICAgIC8vIFRJVExFIEFORCBQUk9KRUNUIE9WRVJWSUVXIENPTlRBSU5FUlxuICAgIC8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuICAgIGNyZWF0ZURpdihcImRpdi1wYWdlLXRpdGxlXCIsIFtdLCBbW11dLCBcIk9WRVJWSUVXXCIsIGNvbnRfY29udGVudCk7XG4gICAgY29uc3QgZGl2X292ZXJ2aWV3ID0gY3JlYXRlRGl2KFwiZGl2LW92ZXJ2aWV3XCIsIFtdLCBbW11dLCBcIlwiLCBjb250X2NvbnRlbnQpO1xuXG4gICAgLy8gJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlXG4gICAgLy8gRElTUExBWSBFQUNIIFBST0pFQ1RcbiAgICAvLyAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbiAgICBmb3IgKGxldCBpcD0wOyBpcDxwcm9qZWN0cy5sZW5ndGg7IGlwKyspIHtcblxuICAgICAgICBsZXQgcHJvamVjdF9pdGVtcyA9IHByb2plY3RzW2lwXS5pdGVtcztcblxuICAgICAgICAvLyBkaXYgcHJvamVjdGlcbiAgICAgICAgY29uc3QgZGl2X3Byb2plY3QgPSBjcmVhdGVEaXYoXCJcIiwgW1wiZGl2LXByb2plY3RcIl0sIFtbXV0sIFwiXCIsIGRpdl9vdmVydmlldyk7XG5cbiAgICAgICAgICAgIC8vIHByb2plY3RpIGhlYWRlclxuICAgICAgICAgICAgY29uc3QgZGl2X3Byb2plY3RIZWFkID0gY3JlYXRlRGl2KFwiXCIsIFtcImRpdi1wcm9qZWN0LWhlYWRcIl0sIFtbXV0sIFwiXCIsIGRpdl9wcm9qZWN0KTtcblxuICAgICAgICAgICAgICAgIC8vIHByb2plY3RpIG5hbWVcbiAgICAgICAgICAgICAgICAvLyBjb25zdCBkaXZfcHJvamVjdE5hbWUgPSBjcmVhdGVEaXYoXCJcIiwgW1wiZGl2LXByb2plY3QtbmFtZVwiLCBwcm9qZWN0c1tpcF0ubmFtZV0sIFtbXV0sIHByb2plY3RzW2lwXS5uYW1lLCBkaXZfcHJvamVjdEhlYWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdl9wcm9qZWN0TmFtZSA9IGNyZWF0ZURpdihcIlwiLCBbXCJkaXYtcHJvamVjdC1uYW1lXCJdLCBbW11dLCBwcm9qZWN0c1tpcF0ubmFtZSwgZGl2X3Byb2plY3RIZWFkKTtcbiAgICAgICAgICAgICAgICAvLyBwcm9qZWN0aSBidXR0b24gc2VsZWN0XG4gICAgICAgICAgICAgICAgY3JlYXRlQnRuKFwiXCIsIFtcImJ0bi1wcm9qZWN0XCIsIFwic2VsZWN0XCJdLCBbW1wicHJvamVjdElkXCIsIGlwXV0sIFwiU0VMRUNUXCIsIGRpdl9wcm9qZWN0SGVhZCk7XG4gICAgICAgICAgICAgICAgLy8gcHJvamVjdGkgYnV0dG9uIGRlbGV0ZVxuICAgICAgICAgICAgICAgIGNyZWF0ZUJ0bihcIlwiLCBbXCJidG4tcHJvamVjdFwiLCBcImRlbGV0ZVwiXSwgW1tcInByb2plY3RJZFwiLCBpcF1dLCBcIkRFTEVURVwiLCBkaXZfcHJvamVjdEhlYWQpO1xuXG5cbiAgICAgICAgICAgIC8vIHByb2plY3RpIGl0ZW1zXG4gICAgICAgICAgICBjb25zdCBkaXZfcHJvamVjdF9pdGVtcyA9IGNyZWF0ZURpdihcIlwiLCBbXCJkaXYtcHJvamVjdC1pdGVtc1wiXSwgW1tdXSwgXCJcIiwgZGl2X3Byb2plY3QpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpaT0wOyBpaTxwcm9qZWN0X2l0ZW1zLmxlbmd0aDsgaWkrKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKCAhIHByb2plY3RfaXRlbXNbaWldLmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2X2l0ZW0gPSBjcmVhdGVEaXYoXCJcIiwgW1wiZGl2LWl0ZW1cIiwgXCJyb3dcIl0sIFtbXV0sIFwiXCIsIGRpdl9wcm9qZWN0X2l0ZW1zKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0aXRsZSwgZHVlZGF0ZSBhbmQgcHJpb3JpdHlcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRGl2KFwiXCIsIFtcImRpdi1pdGVtXCIsIFwibmFtZVwiXSwgW1tdXSwgcHJvamVjdF9pdGVtc1tpaV0ubmFtZSwgZGl2X2l0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVEaXYoXCJcIiwgW1wiZGl2LWl0ZW1cIiwgXCJkYXRlXCJdLCBbW11dLCBwcm9qZWN0X2l0ZW1zW2lpXS5kdWVEYXRlLCBkaXZfaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZURpdihcIlwiLCBbXCJkaXYtaXRlbVwiLCBcInByaW9yaXR5XCJdLCBbW1wiZGF0YVwiLCBwcm9qZWN0X2l0ZW1zW2lpXS5wcmlvcml0eV1dLCBwcm9qZWN0X2l0ZW1zW2lpXS5wcmlvcml0eSwgZGl2X2l0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbiAgICAvLyBFVkVOVCBMSVNURU5FUlNcbiAgICAvLyAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbiAgICBsaXN0ZW5CdG5zKFxuICAgICAgICBcImJ0bi1wcm9qZWN0LnNlbGVjdFwiLCAvLyBjbGFzcyBvZiBidXR0b25zIHRvIGJlIGxpc3RlbmVkIHRvXG4gICAgICAgIFtcInByb2plY3RJZFwiXSwgICAgICAgIC8vIGJ1dHRvbiBhdHRyaWJ1dGUgbmFtZSB0byBpZGVudGlmeSB0aGUgYnV0dG9uIGNsaWNrZWQgXG4gICAgICAgIGRpc3BsYXlQcm9qZWN0ICAgLy8gZnVuY3Rpb24gdG8gYmUgdHJpZ2dlcmVkIHdoZW4gYnV0dG9uIGNsaWNrZWRcbiAgICAgICAgKTtcblxuICAgIGxpc3RlbkJ0bnMoXG4gICAgICAgIFwiYnRuLXByb2plY3QuZGVsZXRlXCIsIC8vIGNsYXNzIG9mIGJ1dHRvbnMgdG8gYmUgbGlzdGVuZWQgdG9cbiAgICAgICAgW1wicHJvamVjdElkXCJdLCAgICAgICAgLy8gYnV0dG9uIGF0dHJpYnV0ZSBuYW1lIHRvIGlkZW50aWZ5IHRoZSBidXR0b24gY2xpY2tlZCBcbiAgICAgICAgZGVsZXRlUHJvamVjdCAgIC8vIGZ1bmN0aW9uIHRvIGJlIHRyaWdnZXJlZCB3aGVuIGJ1dHRvbiBjbGlja2VkXG4gICAgICAgICk7XG5cbn1cbiIsImltcG9ydCB7IGxvYWRQcm9qZWN0c19mcm9tX2xvY2FsU3RvcmFnZSB9IGZyb20gJy4vY29udHJvbERhdGEuanMnO1xuaW1wb3J0IHsgY3JlYXRlRGl2LCBjcmVhdGVCdG4sIGNsZWFyX2NvbnRhaW5lcl9jb250ZW50IH0gZnJvbSAnLi9oZWxwZXJzX2Rpc3BsYXkuanMnO1xuaW1wb3J0IHsgbGlzdGVuQnRucyB9IGZyb20gJy4vaGVscGVyc19saXN0ZW4uanMnO1xuaW1wb3J0IHsgY2hlY2tJdGVtRG9uZSwgZGVsZXRlSXRlbSwgZWRpdEl0ZW0sIGFkZEl0ZW0sIGRlbGV0ZVByb2plY3QgfSBmcm9tICcuL2NydWRGdW5jdGlvbnMuanMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdChwcm9qZWN0SWQpIHtcblxuICAgIC8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuICAgIC8vIExPQUQgREFUQVxuICAgIC8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuICAgIGNvbnN0IHByb2plY3RzID0gbG9hZFByb2plY3RzX2Zyb21fbG9jYWxTdG9yYWdlKCk7XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHNbcHJvamVjdElkXTtcbiAgICBjb25zdCBpdGVtcyA9IHByb2plY3QuaXRlbXM7XG5cbiAgICAvLyAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbiAgICAvLyBQQUdFIENPTlRFTlQgQ09OVEFJTkVSXG4gICAgLy8gJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlXG4gICAgY29uc3QgY29udF9jb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNsZWFyX2NvbnRhaW5lcl9jb250ZW50KGNvbnRfY29udGVudCk7XG5cbiAgICAvLyAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbiAgICAvLyBUSVRMRSBBTkQgUFJPSkVDVCBDT05UQUlORVJcbiAgICAvLyAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbiAgICBjcmVhdGVEaXYoXCJkaXYtcGFnZS10aXRsZVwiLCBbXSwgW1tdXSwgcHJvamVjdC5uYW1lLCBjb250X2NvbnRlbnQpO1xuICAgIGNvbnN0IGRpdl9wcm9qZWN0ID0gY3JlYXRlRGl2KFwiZGl2LXByb2plY3RcIiwgW10sIFtbXV0sIFwiXCIsIGNvbnRfY29udGVudCk7XG4gICAgXG4gICAgLy8gcHJvamVjdCBoZWFkZXJcbiAgICBjb25zdCBkaXZfcHJvamVjdEhlYWQgPSBjcmVhdGVEaXYoXCJcIiwgW1wiZGl2LXByb2plY3QtaGVhZFwiXSwgW1tdXSwgXCJcIiwgZGl2X3Byb2plY3QpO1xuXG4gICAgICAgIC8vIGJ1dHRvbiBhZGQgaXRlbVxuICAgICAgICBjcmVhdGVCdG4oXCJcIiwgW1wiYnRuLXByb2plY3RcIiwgXCJhZGQtaXRlbVwiXSwgW1tcInByb2plY3RJZFwiLCBwcm9qZWN0SWRdXSwgXCJBREQgSVRFTVwiLCBkaXZfcHJvamVjdEhlYWQpO1xuICAgICAgICAvLyBidXR0b24gZGVsZXRlIHByb2plY3RcbiAgICAgICAgY3JlYXRlQnRuKFwiXCIsIFtcImJ0bi1wcm9qZWN0XCIsIFwiZGVsZXRlXCJdLCBbW1wicHJvamVjdElkXCIsIHByb2plY3RJZF1dLCBcIkRFTEVURSBQUk9KRUNUXCIsIGRpdl9wcm9qZWN0SGVhZCk7XG5cbiAgICAvLyBpdGVtcyBcbiAgICBjb25zdCBkaXZfaXRlbXMgPSBjcmVhdGVEaXYoXCJkaXYtaXRlbXNcIiwgW1wiZGl2LWl0ZW1zXCJdLCBbW11dLCBcIlwiLCBkaXZfcHJvamVjdCk7XG5cblxuICAgICAgICAvLyBpdGVtcyBoZWFkZXJzXG4gICAgICAgIGNvbnN0IGRpdl9pdGVtc0hlYWQgPSBjcmVhdGVEaXYoXCJcIiwgW1wiZGl2LWl0ZW1cIiwgXCJoZWFkXCJdLCBbW11dLCBcIlwiLCBkaXZfaXRlbXMpO1xuXG4gICAgICAgICAgICAvLyBoZWFkZXIgaXRlbSBuYW1lXG4gICAgICAgICAgICBjcmVhdGVEaXYoXCJcIiwgW1wiZGl2LWhlYWRcIl0sIFtbXV0sIFwibmFtZVwiLCBkaXZfaXRlbXNIZWFkKTtcbiAgICAgICAgICAgIC8vIGhlYWRlciBpdGVtIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICBjcmVhdGVEaXYoXCJcIiwgW1wiZGl2LWhlYWRcIl0sIFtbXV0sIFwiZGVzY3JpcHRpb25cIiwgZGl2X2l0ZW1zSGVhZCk7XG4gICAgICAgICAgICAvLyBoZWFkZXIgaXRlbSBkdWVEYXRlXG4gICAgICAgICAgICBjcmVhdGVEaXYoXCJcIiwgW1wiZGl2LWhlYWRcIl0sIFtbXV0sIFwiZHVlIGRhdGVcIiwgZGl2X2l0ZW1zSGVhZCk7XG4gICAgICAgICAgICAvLyBoZWFkZXIgaXRlbSBuYW1lXG4gICAgICAgICAgICBjcmVhdGVEaXYoXCJcIiwgW1wiZGl2LWhlYWRcIl0sIFtbXV0sIFwicHJpb3JpdHlcIiwgZGl2X2l0ZW1zSGVhZCk7XG4gICAgICAgICAgICAvLyBoZWFkZXIgaXRlbSBuYW1lXG4gICAgICAgICAgICBjcmVhdGVEaXYoXCJcIiwgW1wiZGl2LWhlYWRcIl0sIFtbXV0sIFwiZG9uZVwiLCBkaXZfaXRlbXNIZWFkKTtcbiAgICAgICAgICAgIC8vIGhlYWRlciBpdGVtIGJ1dHRvbiBlZGl0XG4gICAgICAgICAgICBjcmVhdGVEaXYoXCJcIiwgW1wiZGl2LWhlYWRcIl0sIFtbXV0sIFwiZWRpdFwiLCBkaXZfaXRlbXNIZWFkKTtcbiAgICAgICAgICAgIC8vIGhlYWRlciBpdGVtIGJ1dHRvbiBkZWxldGVcbiAgICAgICAgICAgIGNyZWF0ZURpdihcIlwiLCBbXCJkaXYtaGVhZFwiXSwgW1tdXSwgXCJkZWxldGVcIiwgZGl2X2l0ZW1zSGVhZCk7XG5cblxuICAgICAgICAvLyBpdGVtcyBcbiAgICAgICAgZm9yIChsZXQgaWk9MDsgaWk8aXRlbXMubGVuZ3RoOyBpaSsrKSB7XG5cbiAgICAgICAgICAgIC8vIGl0ZW0gcm93IGNvbnRhaW5lclxuICAgICAgICAgICAgY29uc3QgZGl2X2l0ZW1Sb3cgPSBjcmVhdGVEaXYoXCJcIiwgW1wiZGl2LWl0ZW1cIiwgXCJyb3dcIl0sIFtbXV0sIFwiXCIsIGRpdl9pdGVtcyk7XG5cbiAgICAgICAgICAgIGxldCBpdGVtID0gaXRlbXNbaWldO1xuICAgICAgICAgICAgY3JlYXRlRGl2KFwiXCIsIFtcImRpdi1jZWxsXCIsIFwibmFtZVwiXSwgW1tcImRvbmVcIiwgaXRlbS5kb25lXV0sIGl0ZW0ubmFtZSwgZGl2X2l0ZW1Sb3cpO1xuICAgICAgICAgICAgY3JlYXRlRGl2KFwiXCIsIFtcImRpdi1jZWxsXCIsIFwibmFtZVwiXSwgW1tcImRvbmVcIiwgaXRlbS5kb25lXV0sIGl0ZW0uZGVzY3JpcHRpb24sIGRpdl9pdGVtUm93KTtcbiAgICAgICAgICAgIGNyZWF0ZURpdihcIlwiLCBbXCJkaXYtY2VsbFwiLCBcImRhdGVcIl0sIFtbXCJkb25lXCIsIGl0ZW0uZG9uZV1dLCBpdGVtLmR1ZURhdGUsIGRpdl9pdGVtUm93KTtcbiAgICAgICAgICAgIGNyZWF0ZURpdihcIlwiLCBbXCJkaXYtY2VsbFwiLCBcInByaW9yaXR5XCJdLCBbW1wiZGF0YVwiLCBpdGVtLnByaW9yaXR5XSwgW1wiZG9uZVwiLCBpdGVtLmRvbmVdXSwgaXRlbS5wcmlvcml0eSwgZGl2X2l0ZW1Sb3cpO1xuXG4gICAgICAgICAgICBsZXQgdGV4dF9kb25lID0gKGl0ZW0uZG9uZSk/IFwiZG9uZVwiIDogXCJub3QgZG9uZVwiO1xuICAgICAgICAgICAgY3JlYXRlQnRuKFwiXCIsIFtcImJ0bi1pdGVtXCIsIFwiZG9uZVwiXSwgW1tcInByb2plY3RJZFwiLCBwcm9qZWN0SWRdLCBbXCJpdGVtSWRcIiwgaWldXSwgdGV4dF9kb25lLCBkaXZfaXRlbVJvdyk7XG5cbiAgICAgICAgICAgIGNyZWF0ZUJ0bihcIlwiLCBbXCJidG4taXRlbVwiLCBcImVkaXRcIl0sIFtbXCJwcm9qZWN0SWRcIiwgcHJvamVjdElkXSwgW1wiaXRlbUlkXCIsIGlpXV0sIFwiZWRpdFwiLCBkaXZfaXRlbVJvdyk7XG5cbiAgICAgICAgICAgIGNyZWF0ZUJ0bihcIlwiLCBbXCJidG4taXRlbVwiLCBcImRlbGV0ZVwiXSwgW1tcInByb2plY3RJZFwiLCBwcm9qZWN0SWRdLCBbXCJpdGVtSWRcIiwgaWldXSwgXCJkZWxldGVcIiwgZGl2X2l0ZW1Sb3cpO1xuICAgICAgICB9XG5cblxuICAgIC8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuICAgIC8vIEVWRU5UIExJU1RFTkVSU1xuICAgIC8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuICAgIGxpc3RlbkJ0bnMoXG4gICAgICAgIFwiYnRuLWl0ZW0uZG9uZVwiLCAvLyBjbGFzcyBvZiBidXR0b25zIHRvIGJlIGxpc3RlbmVkIHRvXG4gICAgICAgIFtcInByb2plY3RJZFwiLCBcIml0ZW1JZFwiXSwgICAgICAgIC8vIGJ1dHRvbiBhdHRyaWJ1dGUgdG8gaWRlbnRpZnkgdGhlIGJ1dHRvbiBjbGlja2VkIFxuICAgICAgICBjaGVja0l0ZW1Eb25lICAgLy8gZnVuY3Rpb24gdG8gYmUgdHJpZ2dlcmVkIHdoZW4gYnV0dG9uIGNsaWNrZWRcbiAgICApO1xuXG4gICAgbGlzdGVuQnRucyhcbiAgICAgICAgXCJidG4taXRlbS5lZGl0XCIsIC8vIGNsYXNzIG9mIGJ1dHRvbnMgdG8gYmUgbGlzdGVuZWQgdG9cbiAgICAgICAgW1wicHJvamVjdElkXCIsIFwiaXRlbUlkXCJdLCAgICAgICAgLy8gYnV0dG9uIGF0dHJpYnV0ZSB0byBpZGVudGlmeSB0aGUgYnV0dG9uIGNsaWNrZWQgXG4gICAgICAgIGVkaXRJdGVtICAgLy8gZnVuY3Rpb24gdG8gYmUgdHJpZ2dlcmVkIHdoZW4gYnV0dG9uIGNsaWNrZWRcbiAgICApO1xuXG4gICAgbGlzdGVuQnRucyhcbiAgICAgICAgXCJidG4taXRlbS5kZWxldGVcIiwgLy8gY2xhc3Mgb2YgYnV0dG9ucyB0byBiZSBsaXN0ZW5lZCB0b1xuICAgICAgICBbXCJwcm9qZWN0SWRcIiwgXCJpdGVtSWRcIl0sICAgICAgICAvLyBidXR0b24gYXR0cmlidXRlIHRvIGlkZW50aWZ5IHRoZSBidXR0b24gY2xpY2tlZCBcbiAgICAgICAgZGVsZXRlSXRlbSAgIC8vIGZ1bmN0aW9uIHRvIGJlIHRyaWdnZXJlZCB3aGVuIGJ1dHRvbiBjbGlja2VkXG4gICAgKTtcblxuICAgIGxpc3RlbkJ0bnMoXG4gICAgICAgIFwiYnRuLXByb2plY3QuYWRkLWl0ZW1cIiwgLy8gY2xhc3Mgb2YgYnV0dG9ucyB0byBiZSBsaXN0ZW5lZCB0b1xuICAgICAgICBbXCJwcm9qZWN0SWRcIl0sICAgICAgICAvLyBidXR0b24gYXR0cmlidXRlIHRvIGlkZW50aWZ5IHRoZSBidXR0b24gY2xpY2tlZCBcbiAgICAgICAgYWRkSXRlbSAgIC8vIGZ1bmN0aW9uIHRvIGJlIHRyaWdnZXJlZCB3aGVuIGJ1dHRvbiBjbGlja2VkXG4gICAgKTtcblxuICAgIGxpc3RlbkJ0bnMoXG4gICAgICAgIFwiYnRuLXByb2plY3QuZGVsZXRlXCIsIC8vIGNsYXNzIG9mIGJ1dHRvbnMgdG8gYmUgbGlzdGVuZWQgdG9cbiAgICAgICAgW1wicHJvamVjdElkXCJdLCAgICAgICAgLy8gYnV0dG9uIGF0dHJpYnV0ZSB0byBpZGVudGlmeSB0aGUgYnV0dG9uIGNsaWNrZWQgXG4gICAgICAgIGRlbGV0ZVByb2plY3QgICAvLyBmdW5jdGlvbiB0byBiZSB0cmlnZ2VyZWQgd2hlbiBidXR0b24gY2xpY2tlZFxuICAgICk7XG5cbn0iLCJcbi8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuLy8gJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlXG4vLyBjcmVhdGVzIGFuIEhUTUwgZGl2IGVsZW1lbnRcbi8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuLy8gJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGl2KGlkLCBjbGFzc2VzLCBhdHRyaWJ1dGVzLCB0ZXh0LCBjb250YWluZXIpIHtcblxuICAgIGNvbnN0IG5ld0VsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAvLyBhZGQgYW4gSUQgJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbiAgICBpZiAoaWQgIT0gXCJcIikge25ld0VsdC5pZCA9IGlkfVxuXG4gICAgLy8gYWRkIGNsYXNzZXMgJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbiAgICBmb3IgKGxldCBpaT0wOyBpaTxjbGFzc2VzLmxlbmd0aDsgaWkrKykge1xuICAgICAgICBuZXdFbHQuY2xhc3NMaXN0LmFkZChjbGFzc2VzW2lpXSk7XG4gICAgfVxuXG4gICAgLy8gYWRkIGF0dHJpYnV0ZXMgJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbiAgICBpZiAoYXR0cmlidXRlc1swXS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGlpPTA7IGlpPGF0dHJpYnV0ZXMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgICAgICBuZXdFbHQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZXNbaWldWzBdLCBhdHRyaWJ1dGVzW2lpXVsxXSk7XG4gICAgICAgIH0gICBcbiAgICB9XG5cbiAgICAvLyBhZGQgdGV4dCBjb250ZW50ICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlXG4gICAgaWYgKHRleHQgIT0gXCJcIikge25ld0VsdC50ZXh0Q29udGVudCA9IHRleHR9IFxuXG4gICAgLy8gYXBwZW5kIHRvIHBhcmVudCAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbHQpO1xuXG4gICAgcmV0dXJuIG5ld0VsdDtcbn1cblxuXG4vLyAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbi8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuLy8gY3JlYXRlcyBhbiBIVE1MIGJ1dHRvbiBlbGVtZW50XG4vLyAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbi8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ0bihpZCwgY2xhc3NlcywgYXR0cmlidXRlcywgdGV4dCwgY29udGFpbmVyKSB7XG5cbiAgICBjb25zdCBuZXdFbHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIFxuICAgIC8vIGFkZCBhbiBJRCAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuICAgIGlmIChpZCAhPSBcIlwiKSB7bmV3RWx0LmlkID0gaWR9XG4gICAgXG4gICAgLy8gYWRkIGNsYXNzZXMgJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbiAgICBmb3IgKGxldCBpaT0wOyBpaTxjbGFzc2VzLmxlbmd0aDsgaWkrKykge1xuICAgICAgICBuZXdFbHQuY2xhc3NMaXN0LmFkZChjbGFzc2VzW2lpXSk7XG4gICAgfVxuICAgIFxuICAgIC8vIGFkZCBhdHRyaWJ1dGVzICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlXG4gICAgaWYgKGF0dHJpYnV0ZXNbMF0ubGVuZ3RoID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpaT0wOyBpaTxhdHRyaWJ1dGVzLmxlbmd0aDsgaWkrKykge1xuICAgICAgICAgICAgbmV3RWx0LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVzW2lpXVswXSwgYXR0cmlidXRlc1tpaV1bMV0pO1xuICAgICAgICB9ICAgXG4gICAgfVxuXG4gICAgLy8gYWRkIHRleHQgY29udGVudCAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSAgICBcbiAgICBpZiAodGV4dCAhPSBcIlwiKSB7bmV3RWx0LnRleHRDb250ZW50ID0gdGV4dH0gXG5cbiAgICAvLyBhcHBlbmQgdG8gcGFyZW50ICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlICAgIFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdFbHQpO1xuXG4gICAgcmV0dXJuIG5ld0VsdDtcbn1cblxuXG4vLyAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbi8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuLy8gY3JlYXRlcyBhbiBIVE1MIGlucHV0IGVsZW1lbnRcbi8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuLy8gJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5wdXQoaWQsIGNsYXNzZXMsIGF0dHJpYnV0ZXMsIHBsYWNlaG9sZGVyLCBwcmVmaWxsdmFsdWUsIGNvbnRhaW5lcikge1xuXG4gICAgY29uc3QgbmV3RWx0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIC8vIG5ld0VsdC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiXCIpO1xuXG4gICAgLy8gYWRkIGFuIElEICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlXG4gICAgaWYgKGlkICE9IFwiXCIpIHtuZXdFbHQuaWQgPSBpZH1cbiAgICBcbiAgICAvLyBhZGQgY2xhc3NlcyAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuICAgIGZvciAobGV0IGlpPTA7IGlpPGNsYXNzZXMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgIG5ld0VsdC5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbaWldKTtcbiAgICB9XG4gICAgXG4gICAgLy8gYWRkIGF0dHJpYnV0ZXMgJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbiAgICBpZiAoYXR0cmlidXRlc1swXS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGlpPTA7IGlpPGF0dHJpYnV0ZXMubGVuZ3RoOyBpaSsrKSB7XG4gICAgICAgICAgICBuZXdFbHQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZXNbaWldWzBdLCBhdHRyaWJ1dGVzW2lpXVsxXSk7XG4gICAgICAgIH0gICBcbiAgICB9XG5cbiAgICAvLyBwbGFjZWhvbGRlciAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSAgICBcbiAgICBuZXdFbHQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcblxuICAgIC8vIHByZWZpbGwgdmFsdWUgJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUgICAgXG4gICAgbmV3RWx0LnZhbHVlID0gcHJlZmlsbHZhbHVlO1xuXG4gICAgLy8gYXBwZW5kIHRvIHBhcmVudCAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSAgICBcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RWx0KTtcblxuICAgIHJldHVybiBuZXdFbHQ7XG59XG5cblxuLy8gJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlXG4vLyAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbi8vIGNsZWFycyBhbGwgY2hpbGRyZW4gb2YgdGhlIGNvbnRhaW5lciBlbGVtZW50XG4vLyAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbi8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyX2NvbnRhaW5lcl9jb250ZW50KGNvbnRhaW5lcikge1xuICAgIHdoaWxlIChjb250YWluZXIubGFzdENoaWxkKSB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcbiAgICB9XG59IiwiXG4vLyAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbi8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuLy8gbGlzdGVuZXI6IGJ1dHRvbiBjbGlja2VkIChidXR0b25zIG9mIGNsYXNzICdidG5DbGFzcycpXG4vLyAtIGJ1dHRvbnMgaGF2ZSBhdHRyaWJ1dGVzIGluICdMaXN0QnRuQXR0cmlidXRlcycgXG4vLyAtIFRoZSB2YWx1ZXMgb2YgdGhlc2UgYXR0cmlidXRlcyAnTGlzdEJ0bkF0dHJpYnV0ZXMnIGFyZSB0cmFuc2ZlcnJlZCB0byB0aGUgZnVuY3Rpb24gdHJpZ2dlcmVkXG4vLyAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbi8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RlbkJ0bnMoYnRuQ2xhc3MsIExpc3RCdG5BdHRyaWJ1dGVzLCB0cmlnZ2VyZWRGdW5jdGlvbikge1xuXG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIgKyBidG5DbGFzcyk7XG4gICAgYnRucy5mb3JFYWNoKCBidG4gPT4gXG4gICAgICAgIGJ0bi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAgIC8vIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCBMaXN0QnRuQXR0cmlidXRlVmFscyA9IFtdO1xuXG4gICAgICAgICAgICBMaXN0QnRuQXR0cmlidXRlcy5mb3JFYWNoKCBhdHQgPT4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIExpc3RCdG5BdHRyaWJ1dGVWYWxzLnB1c2goZS50YXJnZXQuYXR0cmlidXRlc1thdHRdLnZhbHVlKSAgXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB0cmlnZ2VyZWRGdW5jdGlvbihMaXN0QnRuQXR0cmlidXRlVmFscyk7XG5cbiAgICAgICAgfSAgICBcbiAgICApXG59XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBkaXNwbGF5T3ZlcnZpZXcgfSBmcm9tICcuL2Rpc3BsYXlPdmVydmlldy5qcyc7XG5pbXBvcnQgeyBsb2FkSW5pdGlhbFByb2plY3RzX3RvX2xvY2FsU3RvcmFnZSB9IGZyb20gJy4vY29udHJvbERhdGEuanMnO1xuaW1wb3J0IHsgZGlzcGxheUhlYWRlciB9IGZyb20gJy4vZGlzcGxheUhlYWRlci5qcyc7XG5cblxuXG4vLyBJTklUSUFMSVNBVElPTiBBTkQgTUFJTiBNT0RVTEVcbi8vIC0gbG9hZCBkYXRhIGZyb20ganNvbiAgaW50byBsb2NhbCBzdG9yYWdlXG4vLyAtIHJlYWQgbG9jYWwgc3RvcmFnZSBhbmQgZGlzcGxheU92ZXJ2aWV3IFxuLy8gICAgICAtIG92ZXJ2aWV3IGV2ZW50IGxpc3RlbmVyc1xuLy8gICAgICAgICAgICAgIC0gZGlzcGxheSBwcm9qZWN0ID0+IGRpc3BsYXlQcm9qZWN0XG4vLyAgICAgICAgICAgICAgLSBkZWxldGUgcHJvamVjdCA9PiBkZWxldGVQcm9qZWN0XG4vLyAgICAgIFxuLy8gXG4vLyBTRUNPTkRBUlkgTU9EVUxFU1xuLy8gLSBkaXNwbGF5UHJvamVjdFxuLy8gICAgICAtIGV2ZW50IGxpc3RlbmVyc1xuLy8gICAgICAgICAgICAgIC0gaXRlbSBjaGVjayBkb25lID0+IHVwRGF0ZUl0ZW0gKHVwZGF0ZSBsb2NhbFN0b3JhZ2UpICsgZGlzcGxheVByb2plY3QgKGllIGNsZWFyIGNvbnRlbnQgYW5kIHJlLWRpc3BsYXkgcHJvamVjdHMpXG4vLyAgICAgICAgICAgICAgLSBlZGl0IGl0ZW0gPT4gLi4uICh1cGRhdGUgbG9jYWxTdG9yYWdlKSArIGRpc3BsYXlQcm9qZWN0IChpZSBjbGVhciBjb250ZW50IGFuZCByZS1kaXNwbGF5IHByb2plY3RzKVxuLy8gICAgICAgICAgICAgIC0gZGVsZXRlIGl0ZW0gPT4gLi4uICh1cGRhdGUgbG9jYWxTdG9yYWdlKSArIGRpc3BsYXlQcm9qZWN0IChpZSBjbGVhciBjb250ZW50IGFuZCByZS1kaXNwbGF5IHByb2plY3RzKVxuLy8gICAgICAgICAgICAgIC0gYWRkIGl0ZW0gPT4gLi4uICh1cGRhdGUgbG9jYWxTdG9yYWdlKSArIGRpc3BsYXlQcm9qZWN0IChpZSBjbGVhciBjb250ZW50IGFuZCByZS1kaXNwbGF5IHByb2plY3RzKVxuLy8gICAgICAgICAgICAgIC0gZGVsZXRlIHByb2plY3QgPT4gLi4uICh1cGRhdGUgbG9jYWxTdG9yYWdlKSArIGRpc3BsYXlPdmVydmlldyAoaWUgY2xlYXIgY29udGVudCBhbmQgZGlzcGxheSBvdmVydmlldylcbi8vIFxuXG5cblxuLy8gJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlXG4vLyAlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSVcbi8vIExPQUQgREFUQSBBTkQgRElTUExBWSBIRUFERVIgKyBPVkVSVklFVyBcbi8vICUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJVxuLy8gJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlJSUlXG5cbmxvYWRJbml0aWFsUHJvamVjdHNfdG9fbG9jYWxTdG9yYWdlKCk7XG5cbmRpc3BsYXlIZWFkZXIoKTtcbmRpc3BsYXlPdmVydmlldygpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=