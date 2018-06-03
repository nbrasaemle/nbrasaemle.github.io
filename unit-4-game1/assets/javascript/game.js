$(document).ready(function(){
    var wins= 0;
    var losses = 0;
    var totalScore = 0;
    var randomNumber;

    function resetGame(){
        

        totalScore = 0;
        //generate a random number for the random number,
        //have to either have the number above the max or add one to get the range desired
        randomNumber = Math.floor(Math.random() * (121-19) + 19);
        console.log("Random number: " + randomNumber);

        //generate a random number for each button, 
        //have to either have the number above the max or add one to get the range desired
        var valueGandalf = Math.floor(Math.random() * (13-1) + 1);
        console.log("Gandalf's value: " + valueGandalf);
        var valueHobbits = Math.floor(Math.random() * (13-1) + 1);
        console.log("Hobbits' value: " + valueHobbits);
        var valueAragorn = Math.floor(Math.random() * (13-1) + 1);
        console.log("Aragorn's value: " + valueAragorn);
        var valueBoromir = Math.floor(Math.random() * (13-1) + 1);
        console.log("Boromir's value: " + valueBoromir);
        
        //give the buttons these values.val() or .attr()
        $(".gandalf").attr(valueGandalf);
        $(".hobbits").attr(valueHobbits);
        $(".aragorn").attr(valueAragorn);
        $(".boromir").attr(valueBoromir);
        //print the random number 
        $(".randomNumber").html("<h2> " + randomNumber + " </h2>");
        //print the total score
        $(".totalScore").html("<h2>Total Score: </h2>");

    }

    resetGame();

    function updateGame() {
        $(".totalScore").html("<h2>Total Score: </h2> <h2> " + totalScore + " </h2>");
    }

    function winLose() {
        if (totalScore == randomNumber) {
            wins++;
            $("#win_lose").html("You Win! The Fellowship has been reunited!")
            $("#wins").html("Wins: " + wins );
    
            resetGame();
        }
    
        else if (totalScore > randomNumber) {
            losses++;
            $("#win_lose").html("You Lose! The Fellowship is lost!")
            $("#losses").html("Losses: " + losses);
    
            resetGame();
        }
    
        else {
            updateGame();
        }
    }

    $(".characters").on("click", function(){
        winLose();
    });

});