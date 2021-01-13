// import functions and grab DOM elements
import { compareResults } from './utils.js';

const guessInput = document.getElementById('num-guess');
const submitButton = document.getElementById('submit-button');
const guessSpan = document.getElementById('guesses-remaining');
const guessComment = document.getElementById('guess-comment');
const restartButton = document.getElementById('restart');


// initialize state
let guessRemaining = 4;
let secretNumber = Math.ceil(Math.random() * 20);


// set event listeners to update state and DOM

submitButton.addEventListener('click', () => {

    guessSpan.textContent = --guessRemaining;

    const userInput = Number(guessInput.value);

    if (compareResults(userInput, secretNumber) === 0) {
        guessComment.textContent = 'you got it!';
        guessInput.disabled = true;
        submitButton.disabled = true;
    }
    if (compareResults(userInput, secretNumber) === 1) {
        guessComment.textContent = 'too high!';
    }
    if (compareResults(userInput, secretNumber) === -1) {
        guessComment.textContent = 'too low!';
    }
    if (compareResults(userInput, secretNumber) === isNaN) {
        guessComment.textContent = 'Try Again! Input requires number!';
    }

    if (guessRemaining === 0) {
        guessInput.disabled = true;
        submitButton.disabled = true;
        guessComment.textContent = 'Oh no! Click the button below to try again';
    }

});

restartButton.addEventListener('click', () => {
    guessRemaining = 4;
    secretNumber = Math.ceil(Math.random() * 20);
    guessInput.disabled = false;
    guessInput.value = '';
    submitButton.disabled = false;
    guessComment.textContent = '';
    guessSpan.textContent = 4;

});