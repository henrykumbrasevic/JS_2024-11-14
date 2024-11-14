// Write a JavaScript function to convert a string in abbreviated form. 


const abbrev_name = (string) => {
    const split = string.trim().split(" ");
    if (split.length > 1){
        return (split[0] + " " + split[1].charAt(0) + ".");
    }
    return split[0]
}
console.log(abbrev_name("Robin Singh"));
"Robin S."