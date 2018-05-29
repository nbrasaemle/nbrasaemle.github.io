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
    var letters = ["a", "b", "c", "d", "e", "f", "g", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "x", "y", "z"];

    function initializeGame() {
        //this is so the game can restart without refreshing the page
        maxGuesses=10;
        userGuesses=[];
        compLetter = computerLetterFunction();

    }

    //pick a random letter
    function computerLetterFunction() {  
        var randomLetter = letters[Math.floor(Math.random() * letters.length)];
        console.log('random letter is: ', randomLetter);
        return randomLetter; //store the letter, stop the function
    }

    var compLetter = computerLetterFunction(); //storing the result of the function into a variable
        console.log('compLetter is: ', compLetter);
    //starting the function to start the game with the press of a key
    document.onkeyup= function checkLetter(event){
        
        userGuess=event.key; //puts the used key into a variable
        console.log(userGuess)
      
        if (userGuess == compLetter) {
            wins++;
            document.getElementById("answer").innerHTML = "The answer was: " + compLetter;
            initializeGame();
        }
        else{
            maxGuesses--;
            userGuesses.push(userGuess); //putting the incorrect guess into an array
           
        }   
        if (maxGuesses == 0) {
            losses++;
            document.getElementById("answer").innerHTML = "The answer was: " + compLetter;
            
            //reset ther user guess and clear the array to start over?
            initializeGame();
        }
        //print in html
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        document.getElementById("guesses").innerHTML = "Guesses Left: " + maxGuesses;
        document.getElementById("userGuesses").innerHTML = "Letters that have been guessed already: " + userGuesses;
        
    }

});