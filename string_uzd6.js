// Write a JavaScript function to hide email addresses to protect from unauthorized user. 


const protect_email = (string) => {
  const arr = string.split("@");
  const [sign,domain] = arr;
  const symbolsArr = sign.slice(5).split("");
  const result = symbolsArr.map(()=>".").join("")
  const encrypted = `${sign.slice(0, 4)}${result}@${domain}`
  return encrypted
}


console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"


