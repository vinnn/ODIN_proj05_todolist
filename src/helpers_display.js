

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// creates an HTML div element
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export function createDiv(html_id, html_class, html_attr, html_text_content, container) {

    const newElt = document.createElement("div");

    // add an ID %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    if (html_id != "") {newElt.id = html_id}

    // add classes %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    for (let ii=0; ii<html_class.length; ii++) {
        newElt.classList.add(html_class[ii]);
    }

    // add attributes %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    if (html_attr[0].length > 0) {
        for (let ii=0; ii<html_attr.length; ii++) {
            newElt.setAttribute(html_attr[ii][0], html_attr[ii][1]);
        }   
    }

    // add text content %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    if (html_text_content != "") {newElt.textContent = html_text_content} 

    // append to parent %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    container.appendChild(newElt);

    return newElt;
}


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// creates an HTML button element
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export function createBtn(html_id, html_class, html_attr, html_text_content, container) {

    const newElt = document.createElement("button");
    
    // add an ID %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    if (html_id != "") {newElt.id = html_id}
    
    // add classes %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    for (let ii=0; ii<html_class.length; ii++) {
        newElt.classList.add(html_class[ii]);
    }
    
    // add attributes %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    if (html_attr[0].length > 0) {
        for (let ii=0; ii<html_attr.length; ii++) {
            newElt.setAttribute(html_attr[ii][0], html_attr[ii][1]);
        }   
    }

    // add text content %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%    
    if (html_text_content != "") {newElt.textContent = html_text_content} 

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