import { setSizeChoice } from "./TransientState.js"


const handleSizeChoice = (event) => {
    if(event.target.name === "size") {
        setSizeChoice(parseInt(event.target.value))
    }
}

document.addEventListener("change", handleSizeChoice)

// Create and export a function that fetches the size objects from our local database
export const SizeOptions = async () => {
    // fetch the sizes data from our local api
    const response = await fetch("http://localhost:8088/sizes")
    //convet data to javascript objects (aka getting rid of all the quotes that make them strings)
    const sizes = await response.json()

    let sizeHTML = ""
    const divStringArray = sizes.map(
        (size) => {
            return `<div>
            <input type='radio' name='size' value='${size.id}'/> ${size.carets}
            </div>`
        }
    )

    sizeHTML += divStringArray.join("")

    return sizeHTML
}