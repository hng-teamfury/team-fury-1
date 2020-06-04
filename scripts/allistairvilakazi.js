/**
 * Output data object.
 */
let myOutputData = {
    fullName: 'Allistair Vilakazi',
    hngId: 'HNG-01006',
    language: 'JavaScript'
}

/**
 * Returns a formatted string.
 * 
 * The outputData parameter accepts an output data object and string interpolates the properties
 * of the object to return a formatted string.
 */
const formatOutputData = (outputData) => {
    return `Hello World, this is ${outputData.fullName} with HNGi7 ID ${outputData.hngId} using ${outputData.language} for stage 2 task`;
}

/**
 * Logs a formatted string to the console.
 */
const logOutputData = () => {
    let formattedOutput = formatOutputData(myOutputData);
    console.log(formattedOutput);
}

logOutputData();