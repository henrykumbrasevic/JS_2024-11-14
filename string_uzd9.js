// Write a JavaScript function to capitalize the first letter of each word in a string.


const capitalize_Words = (string) => {
    const wordSplitter = string.split(" ");
    const allButFirst = wordSplitter.map((word)=> word.slice(1))
    const takeFirstLetter = wordSplitter.map((letter)=> letter.charAt(0).toUpperCase());
    const words = [];
    for(const i in wordSplitter) {
       words.push(takeFirstLetter[i]+allButFirst[i]);
    }
    return words.join(' ');
   }

console.log(capitalize_Words('js string exercises'));
"Js String Exercises"



