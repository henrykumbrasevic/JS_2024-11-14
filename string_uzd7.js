// Write a JavaScript function to parameterize a string. 

const string_parameterize = (string) => {
    const parameterize = string.split(" ").join("-").toLowerCase().replace(".", " ")
    return parameterize


}
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"






