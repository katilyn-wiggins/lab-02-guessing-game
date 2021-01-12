// import functions and grab DOM elements
import { compareResults } from './utils.js';

const guessInput = document.getElementById('num-guess');
const submitButton = document.getElementById('submit-button');
const guessSpan = document.getElementById('guesses-remaining');
const guessComment = document.getElementById('guess-comment');
const gameRestart = document.getElementById('restart');

// initialize state
let guessRemaining = 4;
let secretNumber = Math.ceil(Math.random() * 20);
let userInput = ('Number(guessInput.value');

// set event listeners to update state and DOM

submitButton.addEventListener('click', () => {
    --guessRemaining;



});

