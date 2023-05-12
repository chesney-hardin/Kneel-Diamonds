// Create and export a function that fetches the metal objects from our local database
export const MetalOptions = async () => {
    // fetch the metals data from our local api
    const response = await fetch("http://localhost:8088/metals")
    //convet data to javascript objects (aka getting rid of all the quotes that make them strings)
    const metals = await response.json()

    let metalHTML = ""
    for (const metal of metals) {
        metalHTML += `<input type='radio' name='metal' value='${metal.metal}'/> ${metal.metal}`
    }

    return metalHTML
}