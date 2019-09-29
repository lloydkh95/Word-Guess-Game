var letters = ["a", "b", "c",];

// an array to hold what the user guesses
var guessedLetters = [];

// this variable will be randomly assigned one of the three random letters
var letterToGuess = null;

// this is what we'll use to count down
var guessesLeft = 9;

// this is the counter for wins/losses
var wins = 0;
var losses = 0;

// below we created three functions 
var updateGuessesleft = function() {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

var updateLetterToGuess = function() {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};

var updateGuessesSoFar = function() {
    document.querySelector("guesses-so-far").innerHTML = guessedLetters.join(", ");
};

// function will be called when we reset everything
var reset = function() {
    guessesLeft = 9;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesleft();
    updateGuessesSoFar();
};

updateLetterToGuess();
updateGuessesleft();

// this function will capture the keyboard clicks
document.onkeydown = function(event) {
    // reduce the guesses by one
    guessesLeft--;

    // lowercase the letter
    var letter = event.key.toLowerCase();

    // then add the guess to the guess letters array
    guessedLetters.push(letter);

    // then run the update functions
    updateGuessesleft();
    updateGuessesSoFar();


    // use if statement to check if it's a match
    if (letter === letterToGuess) {

        // if there's a win we will update the html
        wins++
        document.querySelector("#wins").innerHTML = wins;

        // then reset the game
        reset();
    }

    // if we are out of guesses....
    if (guessesLeft === 0) {

        // then we will loss and update the server
        losses++
        document.querySelector("#losses").innerHTML = losses;

        // then call the reset
        reset();
    }
};