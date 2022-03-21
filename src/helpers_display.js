

export function create_HTMLelt(html_elt_type, html_id, html_class, html_text_content, container) {

    const newElt = document.createElement(html_elt_type);
    
    if (html_id != "") {newElt.id = html_id}
    if (html_class != "") {newElt.classList.add(html_class)}
    if (html_text_content != "") {newElt.textContent = html_text_content} 

    container.appendChild(newElt);

    return newElt;

}


