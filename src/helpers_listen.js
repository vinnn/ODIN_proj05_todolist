


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// listener: button clicked
// - buttons have attribute 'data' 
// - 'data' value transferred to the function triggered
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
export function listenBtns(btnClass, btnAttrUsed, triggeredFunction) {

    const btns = document.querySelectorAll("." + btnClass);
    btns.forEach( btn => 
        btn.onclick = (e) => {
            let data_val = e.target.attributes[btnAttrUsed].value;
            triggeredFunction(data_val);
        }    
    )
}


