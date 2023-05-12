// Create and export a function that fetches the style objects from our local database
export const StyleOptions = async () => {
    // fetch the styles data from our local api
    const response = await fetch("http://localhost:8088/styles")
    //convet data to javascript objects (aka getting rid of all the quotes that make them strings)
    const styles = await response.json()

    let styleHTML = ""
    for (const style of styles) {
        styleHTML += `<input type='radio' name='style' value='${style.style}'/> ${style.style}`
    }

    return styleHTML
}