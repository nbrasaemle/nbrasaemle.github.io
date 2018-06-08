//Trivia Game: Lord of the Rings
//Variables:
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
var instructions= "You will have 120 seconds to answer all of the questions. Click Done when finished or wait until time is up. Game will end when the time is up. One answer per question."

 //
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
            }
        ],
        "numGuessedRight": 0,
        "numGuessedWrong": 0


    }

    //console.log(instructions)

    for (var q=0; q < questionairre.questions.length; q++) {
        var question = questionairre.questions[q];
        console.log(q+1 + ": " + question.question + "<br>" + question.answers);
        $(".questionDiv").append("<p class='actualQs'>"+ (q+1) + ": " + question.question + "</p>");
        //var answers = question.answers;

        for (var letter in question.answers) { 
            //console.log(question.answers);
            $(".questionDiv").append("<input type='radio' name='" + q+ "' value='" + letter + "'/>" + question.answers[letter]);
            //console.log(letter);
            //console.log(question.answers[letter]);
            //$(".questionDiv").append("<input type='radio' name='answers' value='"+ )
    
            
            
        }

        //var answer1=
        
    }
    $(document).on("click", "input:radio", function(){
        var selectVal = $(this).val();
        console.log(this);
        console.log(selectVal);
        //answer1=$('input[type=radio]:checked').next();
        //console.log(answer1)
        //if (selectVal == questionairre.questions.answer){
            
        //}
        console.log(question)
        if (selectVal == question.answer ){
        console.log("hi")

        }
        
    }); 

    

}








