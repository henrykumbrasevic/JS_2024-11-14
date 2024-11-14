// Write a JavaScript function to remove specified number of characters from a string. 


const truncate_string = (string, number) => {
return string.substring(0, number)
};

console.log(truncate_string("Robin Singh",4));

