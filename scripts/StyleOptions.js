import { setStyleChoice } from "./TransientState.js"


const handleStyleChoice = (event) => {
    if(event.target.name === "style") {
        setStyleChoice(parseInt(event.target.value))
    }
}

document.addEventListener("change", handleStyleChoice)



// Create and export a function that fetches the style objects from our local database
export const StyleOptions = async () => {
    // fetch the styles data from our local api
    const response = await fetch("http://localhost:8088/styles")
    //convet data to javascript objects (aka getting rid of all the quotes that make them strings)
    const styles = await response.json()

    let styleHTML = ""
    const divStringArray = styles.map(
        (style) => {
            return `<div>
            <input type='radio' name='style' value='${style.id}'/> ${style.style} 
            </div>`
        }
    )

    styleHTML += divStringArray.join("")

    return styleHTML
}