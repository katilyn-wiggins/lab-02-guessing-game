// const guessComment = document.getElementById('guess-comment');

export function compareResults(guess, correctNumber) {
    if (guess === correctNumber) {
        return 0;
    } if (guess < correctNumber) {
        return -1;
    } if (guess > correctNumber) {
        return 1;
    } if (isNaN(guess)) {
        return isNaN;
    }
}


export function increment() {

}