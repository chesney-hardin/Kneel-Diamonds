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

//function to convert the transient state into permanent state
export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("newOrderSubmitted")
    document.dispatchEvent(customEvent)

}