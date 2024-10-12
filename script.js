let randomNumber = getRandomNumber()
// på linje 2 konstatere jeg et variabel


function getRandomNumber () {
    return Math.floor(Math.random()*20) + 1;
}
// her har jeg har jeg kaldt en funktion der med min variable
// generere et random tal fra 1-20 (har husket kode fra tidligere opgave)


console.log(randomNumber)
// her logger jeg min funktion ud så jeg kan se nummeret i console



let inputBox = document.querySelector(".guess")
let buttonClick = document.querySelector(".btn.check")
let scoreDisplay = document.querySelector(".score")
let score = 0
let highscoreDisplay = document.querySelector(".highscore")
let highScore = Infinity
let correctNumberDisplay = document.querySelector(".number")
let buttonClickAgain =document.querySelector(".btn.again")
// her konstatere jeg alle de variable jeg skal bruge i min næste funktion

let guessess = []
// på linje 28 har jeg lavet et tomt array til alle gættene på tallet




buttonClick.addEventListener("click",function  () {


    let userInput = Number(inputBox.value)
    guessess.push(userInput)
    document.querySelector(".guesses").textContent = guessess
    if (userInput === randomNumber) {
        console.log("correct guess")
        if (score < highScore ) {
            highScore = score
            highscoreDisplay.textContent = highScore
            correctNumberDisplay.textContent = randomNumber
        }

    }
    else if (userInput < 1 || userInput > 20) {
        alert("Number is not between 1-20")
    }

    else {
        console.log("wrong guess")
        score++
        console.log(score)
        scoreDisplay.textContent = score

    }

    if (randomNumber > userInput) {
        document.querySelector(".hint").textContent="Aim a little higher🔥"
    }
    else if (randomNumber < userInput) {
        document.querySelector(".hint").textContent="Go a little lower🥶"
    }
    else if (randomNumber === userInput ) {
        document.querySelector(".hint").textContent="Correct guess🥳"
    }
    // Her har jeg tilføjet en feature hvor jeg har lavet en ny knap inde i mit html
    // der hedder hint der gør så når man trykker på den giver den et hint om tallet er højere eller lavere end det tal der er gættet


    inputBox.value = " "
    // på linje 73 gør jeg så når der er blevet gættet på et tal så fjerner den det der er blevet gættet på i boksen


    document.querySelector(".hintbtn").addEventListener("click", function () {
        document.querySelector(".hint").style.display = "block"
    })

})
// med den her funktion starter jeg med at bruge addEventlistner til at gøre
// så når man trykker tjek at den så tjekker om det tal brugeren har skrevet ind i input
// feltet passer med det tilfældige nummer hjemmesiden har genereret. jeg bruger if sætningen
// til at sætte de to tal ligmed hinanden for at tjekke det
// så har jeg brugt else til at sige at hvis ik numeret er ligmed det random nummer
// så skal den i score feltet pluse med en (score++)
// jeg har i min if også bedt den om at hvis scoren er korrekt og mindre end highscoren (med < )
// at den så skal lave scoren til hvad der står i highscore feltet ( med = )
// også tilsidst har jeg bedt dem om at hvis det er det rigtige nummer at der er
// blevet gættet så skal det blive fremvist i feltet med "?"
// i linje 48 har jeg jeg har lavet en else if sætning der gør at hvis man gætter på
// et nummer der ik er mellem 1-20 kommer den med en error message

// Jeg har fået hjælp til alt det overstående kode fra mine søde klasse kammerater og min søde lære
// og kigget på tideligere opgaver jeg har lavet


document.querySelector(".btn.again").addEventListener("click", restartGame)
// her for jeg den så til at genstarte det hele ved at trykke på again knappen

function restartGame(){
    randomNumber = getRandomNumber()
    console.log(randomNumber)
    // her kalder jeg en variabel

    if (score > highScore ) {
        highScore = score
        highscoreDisplay.textContent = highScore
    }
    // her gør jeg så at når jeg restarter spillet så skal highscoren opdateres hvis scoren er højere end den nuværende
    // highscore

    score = 0
document.querySelector(".score").textContent = score;
    // her resætter jeg scoren til 0

// her får jeg teksten der står ved score og highscore til at blive til 0 igen
document.querySelector(".guess").value = " ";
// her gør jeg så det der står i input feltet bliver fjernet eller gjort til mellemrums tatsten
document.querySelector(".number").textContent = "?";

// her gør jeg så det der stod i spørgsmåltegnet får et spørgsmålstegn igen
guessess.length = 0
    document.querySelector(".guesses").textContent = guessess
    // på linje 122 sætter jeg mit array med gæt til 0 igen
    // og på linje 123 skriver jeg det ud igen så der ikke står noget ud fra guesses


      document.querySelector(".hint").style.display = "none"

}




// den her den har jeg brugt inspiration fra min gamle opgaver
// og på linje 100 blev jeg inspireret af chatgpt

















