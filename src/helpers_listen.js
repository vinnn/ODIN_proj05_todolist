


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// listener: button clicked
// - buttons have attribute 'data' 
// - 'data' value transferred to the function triggered
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export function listenBtns(btnClass, ListBtnAttributes, triggeredFunction) {

    const btns = document.querySelectorAll("." + btnClass);
    btns.forEach( btn => 
        btn.onclick = (e) => {

            let ListBtnAttributeVals = [];

            ListBtnAttributes.forEach( att =>                 
                ListBtnAttributeVals.push(e.target.attributes[att].value)  
            );

            triggeredFunction(ListBtnAttributeVals);
        }    
    )
}


