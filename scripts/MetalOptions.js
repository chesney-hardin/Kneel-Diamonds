import { setMetalChoice } from "./TransientState.js"


const handleMetalChoice = (event) => {
    if(event.target.name === "metal") {
        setMetalChoice(parseInt(event.target.value))
    }
}

document.addEventListener("change", handleMetalChoice)

// Create and export a function that fetches the metal objects from our local database
export const MetalOptions = async () => {
    // fetch the metals data from our local api
    const response = await fetch("http://localhost:8088/metals")
    //convet data to javascript objects (aka getting rid of all the quotes that make them strings)
    const metals = await response.json()

    let metalHTML = ""
    
    const divStringArray = metals.map(
        (metal) => {
            return `<div>
            <input type='radio' name='metal' value='${metal.id}'/> ${metal.metal}
            </div>`
        }
    )

     metalHTML += divStringArray.join("")

    return metalHTML
}