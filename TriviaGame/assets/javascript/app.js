//Trivia Game: Lord of the Rings

$(document).ready(function() {
    //Variables:
    var instructions= "You will have 120 seconds to answer all of the questions. Click Done when finished or wait until time is up. Game will end when the time is up. One answer per question. The timer will start once the start button is pressed. Refresh page to restart."
    var interval;
    var time = 120;

    var questionairre = {
        "questions": [
            {
                "question": "How long is all three extended “The Lord of the Rings” movies combined including the credits?",
                "answers": [" 9 hours 30 minutes  ", " 11 hours 22 minutes  ", " 10 hours 47 minutes  ", " 11 hours 40 minutes  "],
                "answer": 3
            },
            {
                "question": "Who was the composer of “The Lord of the Rings” Original Score?",
                "answers": [" Howard Shore  ", " John Williams  ", " Hans Zimmer  ", " Harry Gregson-WIlliams  "],
                "answer": 0
            },
            {
                // next question (questions, answers, answer)
                "question": "How many members were in the original fellowship?",
                "answers": [" 10  ", " 9  ", " 8  ", " 7  "],
                "answer": 1
            },
            {
                "question" : "True or False the One Ring's script says 'One Ring to rule them all, one ring to find them, one ring to bring them all and in the darkness bind them'",
                "answers" : [" True  ", " False  "],
                "answer" : 0
            },
            {
                "question" : "What were the ring wraths before they became wraths?",
                "answers" : [" Elves  ", " Hobbits  ", " Men  ", " Dwarves  ", " None of These  "], 
                "answer" : 2
            },
            {
                "question" : "Where was the One Ring forged? ",
                "answers" : [" Minas Tirith  ", " Erebor  ", " Edoras  ", " Mount Doom  "], 
                "answer" : 3
            },
            {
                "question" : "How many rings were given to the dwarves? ",
                "answers" : [" 3  ", " 5  ", " 7  ", " 9  "],
                "answer" : 2
            },
            {
                "question" : "What are the names of the four hobbits that are in the fellowship?",
                "answers" : [" Phillip, Merry, Fordo, Sam  ", " Pippin,  Merry, Frodo, Sam  ", "Phillip, Mason, Froyo, Dan  ", " Pippin, Merry, Fred, Samson  "],
                "answer" : 1
            },
            {
                "question" : "Who had the Ring before Frodo?",
                "answers" : [" Gollum  ", " Bilbo  ", " Isildur  ", " All of the Above  "],
                "answer" : 3
            },
            {
                "question" : "What were orcs before they were orcs?",
                "answers" : [" Elves  ", " Hobbits  ", " Men  ", " Dwarves  ", " None of These  "],
                "answer" : 1
            },
        
        
        ],

        "numGuessedRight" : 0,
        "numGuessedWrong" : 0,
        "numUnanswered" : 0
    }
    var correct= questionairre.numGuessedRight;
    var incorrect = questionairre.numGuessedWrong;
    var unchecked = questionairre.numUnanswered;

    //start screen:
    $(".welcome").html("<h1> Welcome to The Lord of the Rings Trivia Game!</h1> ");
    $(".instructions").html("<h4> Press the Start button to start the game. " + instructions + " </h4><br>");
    $(".startBtn").html("<button type='button' class='btn btn-info startButton'>Start</button>");
    $(".submitButton").hide();

    $(".startButton").on("click", function(){
        //console.log(this);
        start();
        $(".welcome").html("<h1>Lord of the Rings Trivia</h1> ");
        $(".instructions").html("<h4>Instructions: " + instructions + " </h4><br>");
        $(".startBtn").empty();
        $(".submitButton").show();
     
    });

    function start(){
       
        //timer code:

        //setTimeout($(".timer"), time*1000);
        
        function startTimer(){
            clearInterval(interval);
            runClock();
            
            //console.log("timing");
        }

        startTimer();

        $(".questionDiv").empty();
        //Printing the questions, answers and radio buttons
        var q;    
        for ( q=0; q < questionairre.questions.length; q++) {
            var questionSelect = questionairre.questions[q];
           // console.log(q+1 + ": " + questionSelect.question + "<br>" + questionSelect.answers);
            $(".questionDiv").append("<p class='actualQs'>"+ (q+1) + ": " + questionSelect.question + "</p>");
            //var answers = questionSelect.answers;

            for (var letter in questionSelect.answers) { 
                //console.log(questionSelect.answers);
                $(".questionDiv").append("<input type='radio' name='" + q+ "' class='radioBtn' value='" + letter + "'/>" + questionSelect.answers[letter]);
                //console.log(letter);
                //console.log(questionSelect.answers[letter]);
                //$(".questionDiv").append("<input type='radio' name='answers' value='"+ )

            }

        }

    };

    function submit(){
        console.log("hi")

        clearInterval(interval);

        for ( q=0; q < questionairre.questions.length; q++) {
        var selValue = $("input[name="+ q + "]:checked").val();
       // console.log(selValue)
        if (selValue==questionairre.questions[q].answer){
            correct++;
           // console.log("Correct: " + correct);
        }
        else if (selValue == undefined) {
            unchecked++;
           // console.log("Unanswered: " + unchecked)
        }
        else {
            incorrect++;
           // console.log("Incorrect: " + incorrect);
        }
       
        $("#correct").html("Correct Answers: " + correct);
        $("#incorrect").html("Incorrect Answers: " + incorrect);
        $("#unanswered").html("Unanswered: " + unchecked);

        $(".questiondiv").hide();
        $(".submitBtn").hide();
        $(".timer").hide();
        
    }
   
}

    $(".submitButton").on("click", function(){
        submit();       
    });

    function runClock() {
        interval= setInterval(decrement, 1000);
    }

    function decrement(){
        time--;
        $(".timer").html(time);
        
        if (time==0){
            //alert("time up");
            clearInterval(interval);
            submit();
        }    
    }



});



//Code below are snippets that were tried  but did not work. I moved them here to navagate the working code better.

   /*var time = 15;

        //setTimeout($(".timer"), time*1000);
        var interval;
        
        function startTimer(){
            
            interval= setInterval(decrement, 1000);
            console.log("timing");

        }

        function decrement(){
            time--;
            $(".timer").html(time);
            if (time==0){
                alert("time up");
            }
            
        }

    
        startTimer();*/

        /*var questions = {
    firstQuestion: {
        question : "How long is all three extended “The Lord of the Rings” movies combined including the credits?",
        option1 : "9 hours 30 minutes",
        option2: "11 hours 22 minutes",
        option3: "10 hours 47 minutes",
        option4: "11 hours 40 minutes",
        answer: "11 hours 40 minutes"
    },
    secondQuestion : {
        question: "How many members were in the original fellowship?",
        option1: "10",
        option2: "9",
        option3: "8",
        option4: "7",
        answer: "9"
    },
    thirdQuestion : {
        question: "Who was the composer of “The Lord of the Rings” Original Score?",
        option1: "Howard Shore",
        option2: "John Williams",
        option3: "Hans Zimmer",
        option4: "Harry Gregson-WIlliams",
        answer: "Howard Shore"
    }
}*/

//tried, realized needed to use the checked method
        /*$(document).on("click", "input:radio", function(){
            var selectVal = $(this).val();
            console.log(this);
            console.log(selectVal);
            //answer1=$('input[type=radio]:checked').next();
            //console.log(answer1)
            //if (selectVal == questionairre.questions.answer){
                
            //}
        
            console.log(questionairre.questions[0].answer)
            if (selectVal == questionairre.questions[0].answer ){
            console.log("hi")

            }
            else {
                console.log("no")
            }

            console.log(questionairre.questions[1].answer)
            if (selectVal == questionairre.questions[1].answer ){
            console.log("hi")
                
            }
            else {
                console.log("no")
            }

            console.log(questionairre.questions[2].answer)
            if (selectVal == questionairre.questions[2].answer ){
            console.log("hi")
                
            }
            else {
                console.log("no")
            }
            
        }); */
         // if ($(".radioBtn:checked").val() == questionSelect.answer) {
        // console.log("Yes")
        //}