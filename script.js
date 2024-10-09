
function getRandomNumber () {
    return Math.floor(Math.random()*21);
}
const randomNumber = getRandomNumber()

console.log(randomNumber)

let inputBox = document.querySelector(".guess")
let buttonClick = document.querySelector(".btn.check")
let scoreDisplay = document.querySelector(".score")
let score = 0
let highscoreDisplay = document.querySelector(".highscore")
let highScore = Infinity
let correctNumberDisplay = document.querySelector(".number")
let buttonClickAgain =document.querySelector(".btn.again")

buttonClick.addEventListener("click",function () {
    let userInput = Number(inputBox.value)
    if (userInput === randomNumber) {
        console.log("correct guess")
        if (score < highScore ) {
            highScore = score
        highscoreDisplay.textContent = highScore
            correctNumberDisplay.textContent = randomNumber
        }

    }
    else {
        console.log("wrong guess")
        score++
        console.log(score)
        scoreDisplay.textContent = score
    }

})

buttonClickAgain.addEventListener("click", function () {
    clear (scoreDisplay, highscoreDisplay)
})








