let randomNumber = parseInt(Math.random() * 10 + 1);
console.log(`random number is ${randomNumber}`);

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
let quessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let guessCount = 0;

let playGame = true;


if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(`guess number is ${guess} and numer of times numer entered is ${guessCount}`) ;

        // validateGuess(guess);
        guessCount++ ;
        validateGuess (guess)

    })
}


function validateGuess  (guess)  {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    }
    else if (guess < 1) {
        alert('Please enter a number range betwen 1 and 100');
    }
    else if (guess > 100) {
        alert(`Please enter a number range betwen 1 and 100`);
    }
    else {
        prevGuess.push(guess);
        if (guessCount >= 10) {
            // displayGuess(guess);
            displayMessage(`Game Over. And randome number was ${randomNumber}`);
            endGame();
        }
        else
        {
            displayGuess(guess);
            checkGuess(guess);
            // guessCount++;
        }
    }
}
const checkGuess = (guess) => {
    if (guess === randomNumber) {
        displayMessage(`Congratulations! You got it right!`);
        endGame();
    }
    else if (guess < randomNumber) {
        displayMessage(`Your guess is too low!`);
        // lowOrHi.innerHTML = `Your guess is too low!`;
    }
    else if (guess > randomNumber) {
        displayMessage(`Your guess is too high!`);
        // lowOrHi.innerHTML = `Your guess is too high!`;
    }
}

const displayMessage = (message) => {
lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

const displayGuess = (guess) => {
    userInput.value = '';
    quessSlot.innerHTML += `${guess}, `;
    // guessCount++;
    remaining.innerHTML = `You have ${10 - guessCount} guesses left`;
}

const endGame = () => {
    console.log(`here end game funciton is called`);
    
    userInput.value = '' ;
    userInput.setAttribute('disabled', '');
    p.classList.add('button') ;
    p.innerHTML = `<h2 id = "newGame"> Start a new Game </h2>`
    startOver.appendChild(p);
    playGame = false ;
    newGame() ;

}
const newGame = () => {

    const newGame = document.querySelector('#newGame') ;
    newGame.addEventListener('click', (e) => {

        randomNumber = parseInt(Math.random() * 10 + 1);
    prevGuess = [];
    guessCount = 0;
    quessSlot.innerHTML = '';
    remaining.innerHTML = `You have 10 guesses left`;
    userInput.removeAttribute('disabled') ;
    startOver.removeChild(p);
    playGame = true ;

    }) ;

    
}