// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. 


const swapcase = (string) => {
const array = string.split("");
const preresult = array.map((letter)=>letter === letter.toUpperCase()? letter.toLowerCase() : letter.toUpperCase())
const result = preresult.join("")
return result
}

console.log(swapcase('AaBbc'));


