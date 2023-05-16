
//Create a new module that generates a list of placed orders



export const Orders = async () => {
    const fetchResponse = await fetch("http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size")
    const orders = await fetchResponse.json()

    let ordersHTML = ""
    let ordersHTMLArray = orders.map(
        (order) => {
            const orderPrice = order.metal.price + order.style.price + order.size.price
            return `<div class ="orderPrice" >
            Order #${order.id} cost $${orderPrice}
            </div>`
        }
    )

    ordersHTML += ordersHTMLArray.join("")
    return ordersHTML
}