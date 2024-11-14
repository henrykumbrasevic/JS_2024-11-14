// Write a JavaScript function to parameterize a string. 


const string_parameterize = (string) => {
    const parameterize = string.split(" ")
    const replacement = parameterize.replace(/[^\s]/g, ".")
    return replacement

}

console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"





// function stringConcat(arr){
//     const arr2 = arr.reduce((a, b)=>a + "-" + b)
//     return arr2
// }
// console.log(stringConcat([1,2,3]));


