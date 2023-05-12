//create transient state 
const transientState = {
    "metalId": 0,
    "sizeId": 0,
    "styleId": 0
    
}


//Functions to modify each property of transient state
export const setMetalChoice = (chosenMetal) => {
    transientState.metalId = chosenMetal
    console.log(transientState)
}

export const setSizeChoice = (chosenSize) => {
    transientState.sizeId = chosenSize
    console.log(transientState)
}

export const setStyleChoice = (chosenStyle) => {
    transientState.styleId = chosenStyle
    console.log(transientState)
}