


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// listener: button clicked (buttons of class 'btnClass')
// - buttons have attributes in 'ListBtnAttributes' 
// - The values of these attributes 'ListBtnAttributes' are transferred to the function triggered
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export function listenBtns(btnClass, ListBtnAttributes, triggeredFunction) {

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


