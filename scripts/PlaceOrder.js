import { placeOrder } from "./TransientState.js"

//create custom event
const placeOrderButtonClick = (clickEvent) => {
    if(clickEvent.target.id === "placeOrder") {
        placeOrder()
    }
}

//Create the HTML for the Place Order button
export const PlaceOrder = () => {

    document.addEventListener("click", placeOrderButtonClick)
    return `<button id='placeOrder'>Place Order</button>`

}