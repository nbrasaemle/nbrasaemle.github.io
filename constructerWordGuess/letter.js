let guessedLetter = process.argv[2]


function Letter() {
    this.underlyingLetter = "a"; //string that stores underlying letter
    this.letGuess = true; //boolean that stors if letter guessed is correct
    this.letterDisplay = function(arg){

    };
    this.checkLetter = function(){
        if (guessedLetter === this.underlyingLetter) {
            this.letGuess = true;
            console.log("correct")
        }

        else {
            this.letGuess = false;
            this.underlyingLetter.replace(/[a-z]/gi, '_');

        }
    };
};

module.exports = {
    guessedLetter: guessedLetter,
    Letter: Letter
}
// str.replace(/[a-z]/gi, '_')