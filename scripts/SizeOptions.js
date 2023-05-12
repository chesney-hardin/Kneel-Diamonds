// Create and export a function that fetches the size objects from our local database
export const SizeOptions = async () => {
    // fetch the sizes data from our local api
    const response = await fetch("http://localhost:8088/sizes")
    //convet data to javascript objects (aka getting rid of all the quotes that make them strings)
    const sizes = await response.json()

    let sizeHTML = ""
    for (const size of sizes) {
        sizeHTML += `<input type='radio' name='size' value='${size.carets}'/> ${size.carets}`
    }

    return sizeHTML
}