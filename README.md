# Guess a number app 

PLAN! Coded along with Dani 

## HTML Setup 
1) Number input
    - why? So the user can enter their guesses
2) Button 
    - why? to submit the guess and trigger state chagnes
3) Guesses remaining span
    -why? to display remaining guesses 
4) Too high/Too low/you got it! span
    -why? tell the suer what's wrong with their guess (if anything)
5) Reset button: 

1) Go grab the dom elements
2) Initialize state 
    - random number: n
    - guesses remaining: 4
3) Add event listener to the button
    - on click 
        1) state: decrement remaining guesses by 1 (--)
        2) store user guess in a variable ('Number(someInput.value)')
        3) compare user guess with random number
        4) view: 
            a) if user guess is > random number, inject 'too high' into our results span
                 - View: check if there are any guesses left. If not, disable the input and add a losing message. 
            a) if user guess is < random number, inject 'too low' into our results span
                 - View: check if there are any guesses left. If not, disable the input and add a losing message. 
            a) if user guess = random number, inject 'congratulations' into our results span
                - disable the input if they win 
        5) if applicable, change the remaining guesses text content

STRETCH 4) add another event listener onto the reset button
            -on click 
                1) STATE: reset remaining guesses state to 4 
                2) STATE: create a new random number 
                3) VIEW: re-enable the inputs if they are disabled and fix the game text  


random number generator: 

math.random() * 20 

math.random is always smaller than 1 so multiply by range you want 

to round
Math.ceil(will automaticall round up) 

sooooo 
Math.ceil(Math.random() * 20) 

math.floor rounds down!! don't do this 




compareNumbers function 


let compareNumbers (guess, actualNUmber)

          

