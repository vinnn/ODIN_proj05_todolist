

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// creates an HTML div element
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export function createDiv(id, classes, attributes, text, container) {

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
export function createBtn(id, classes, attributes, text, container) {

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
export function createChkb(id, classes, attributes, checked, container) {

    const newElt = document.createElement("input");
    newElt.setAttribute("type", "checkbox");

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

    // check / uncheck %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%    
    newElt.checked = (checked == true)? true : false;

    // append to parent %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%    
    container.appendChild(newElt);

    return newElt;
}



// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// clears all children of the container element
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export function clear_container_content(container) {
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}