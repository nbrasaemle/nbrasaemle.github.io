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
        var valueHobbits = Math.floor(Math.random() * (13-1) + 1); // hobbits value is coming up as gandalfs value
        console.log("Hobbits' value: " + valueHobbits);
        var valueAragorn = Math.floor(Math.random() * (13-1) + 1);
        console.log("Aragorn's value: " + valueAragorn);
        var valueBoromir = Math.floor(Math.random() * (13-1) + 1);//come up as gandalf
        console.log("Boromir's value: " + valueBoromir);
        
        //give the buttons these values.val() or .attr()
        $("button.gandalf").attr("data-value", valueGandalf);
        $("button.hobbits").attr("data-value", valueHobbits);
        $("button.aragorn").attr("data-value", valueAragorn);
        $("button.boromir").attr("data-value", valueBoromir);
        //print the random number 
        $(".randomNumber").html("<h2> " + randomNumber + " </h2>");
        //print the total score
        $(".totalScore").html("<h2>Total Score: </h2> <h2> " + totalScore + " </h2>");
        $("#wins").html("Wins: ");
        $("#losses").html("Losses: ");
    }

    resetGame();

    function updateGame() {
        $(".totalScore").html("<h2>Total Score: </h2> <h2> " + totalScore + " </h2>");
    }

    function winLose() {
        if (totalScore == randomNumber) {
            wins++;
            
            $("#wins").html("Wins: " + wins );
            $("#win_lose").html("The Fellowship has been reunited!")
            
    
            resetGame();
        }
    
        else if (totalScore > randomNumber) {
            losses++;
            $("#losses").html("Losses: " + losses);
            $("#win_lose").html("The Fellowship is lost!")
            
    
            resetGame();
        }

        else {
           
        }
    }

    $(".characters").on("click", function(event){ //once a button is clicks the value does not change value if another button is clicked
        if (event.target.classList.contains("btn")){
       var value = $(this).attr("data-value");
       console.log(event)
        totalScore = totalScore + parseInt(value);
        console.log("Score: " + totalScore);
        }

        if (event.target.tagName=="IMG") {
            var value = $(event.target).parent().attr("data-value");
            console.log(event)
             totalScore = totalScore + parseInt(value);
             console.log("Score: " + totalScore);   
        }
        
        updateGame();
        winLose(); 
    });

});