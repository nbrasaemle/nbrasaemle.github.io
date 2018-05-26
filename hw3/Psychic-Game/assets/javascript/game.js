//Generate random letter in a variable

//ask user to guess a letter

//check to see if it is correct

//if number is wrong, put letter into a usedLetters variable to print out
//decrease the number of guesses left

//if guess is correct, then add a number to wins

//if run out of guesses, add to the number of losses

//loop to play another round
$(document).ready(function() {

    var wins = 0;
    var losses = 0;
    var maxGuesses = 10;
    var userGuesses = [];
    var userGuess;

    //pick a random letter
    function computerLetterFunction() {
        var letters = ["a", "b", "c", "d", "e", "f", "g", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "x", "y", "z"];
        var randomLetter = letters[Math.floor(Math.random() * letters.length)];
        console.log(randomLetter);
        return randomLetter;
    }

    var compLetter = computerLetterFunction();
        console.log(computerLetterFunction);
    document.onkeyup = function(event){
        console.log(event);
    
        
        userGuess=event.key;
        
        if (userGuess == compLetter) {
            wins++;
            maxGuesses=10;
            
        }
        else{
            maxGuesses--;
            userGuesses.push(userGuess);
        }   
        if (maxGuesses == 0) {
            losses++;
            maxGuesses=10;
            delete userGuesses[0];
            //reset ther user guess and clear the array to start over?
            var compLetter = computerLetterFunction();
        }
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        document.getElementById("guesses").innerHTML = "Guesses Left: " + maxGuesses;
        document.getElementById("userGuesses").innerHTML = "Letters that have been guessed already: " + userGuesses;

    }






});