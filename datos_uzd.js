
const firstDateHTML = document.getElementById("firstDate")
const secondDateHTML = document.getElementById("secondDate")
const submitButton = document.getElementById("submit")
const resultHTML = document.getElementById("result")


const giveAnswer = (e) => {
    e.preventDefault();
if (firstDateHTML.value > secondDateHTML.value){
    resultHTML.innerHTML = `${secondDateHTML.value} Antra data yra senesne`
} else {
    resultHTML.innerHTML = `${firstDateHTML.value} Pirma data yra senesne`
}
}
submitButton.addEventListener("click", giveAnswer)