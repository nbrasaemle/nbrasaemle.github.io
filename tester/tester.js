
var wins = 0;
var losses = 0;
var guesses = 10;
var usersLetterChoices = [];

//picks a random letter to be guessed
function computerChoiceFunction() {
    var letters = ["a", "b", "c", "d","e", "f","g", "h","i", "j","k", "l","m", "n","o", "p","q", "r","s", "t","u", "v","w", "x","y","z"];
    
    var rletters = letters[Math.floor(Math.random() * letters.length)];
    return rletters
    console.log(rletters);
}
// sets computers choice equal to the random letter picked
var computerChoice = computerChoiceFunction();
console.log(computerChoiceFunction);

// takes in users choice and keeps a log 
document.addEventListener('keypress', (event) => {
    var userChoice = event.key;
    console.log(userChoice);
    usersLetterChoices.push(userChoice + " ");
    compare(userChoice , computerChoice);
    document.getElementById('lettersGuessed').innerHTML = 'Letters Guessed: ' + usersLetterChoices;

})
//resets everything excep the score of the game
function reset() {
    computerChoice = computerChoiceFunction();
    guesses = 10;
    document.getElementById('wins').innerHTML = 'Wins: ' + wins;
    document.getElementById('losses').innerHTML = 'losses: ' + losses;
    
    console.log ("computers choice is " + computerChoice);
}

function compare(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        wins++;
        usersLetterChoices = [];
        reset();

    }else if ( guesses === 0) {
        losses++;
        usersLetterChoices = [];
        reset();

    }else if (userChoice != computerChoice) {
        guesses--;
        document.getElementById('guessesLeft').innerHTML = 'Guesses Left: ' + guesses;   
    }
}

reset();