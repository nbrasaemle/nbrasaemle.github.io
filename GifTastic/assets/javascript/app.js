//starts the logic after the document has loaded
$(document).ready(function () {
    //declaring the global variables
    var topic = "";
    var newShow = "";
    var shows = ["Lord of the Rings", "Game of Thrones", "Narnia", "Star Wars", "Star Trek", "Pirates Of The Caribbean", "Disney", "Harry Potter", "Greys Anatomy", "King Arthur", "The Hobbit"];
    
    addBtns();                                              //calling the function

    function addBtns() {                                    //make the butons appear in a function
        $(".buttonDiv").empty();                            // making the div empty so the buttons do not repeat themselves if function is called again
        for (var i = 0; i < shows.length; i++) {            //going throught the shows array

            topic = shows[i];                               //using the index to put each one into the variable topic
            var topics = topic.replace(/\s+/g, '-');        //Gets rid of the spaces in the data-name value so that the link is complete and searches the right thing
            var button = $("<button>");                     //creates a button
            button
                .addClass("btn btn-success topicBtn")       //gives the class and the bootstrap styling
                .attr("data-name", topics)                  //gives the button a value
                .text(topic);                               //text on the button
            $(".buttonDiv").append(button);

            // $(".buttonDiv").append("<button  data-name=" + topics + " type='button' class='btn btn-success topicBtn'>" + topic + "</button>");
            // console.log(topics);
        } //end of the for loop

    }//end of the addBtns function

    $(".searchBtn").on("click", function (event) {
        event.preventDefault();                             // event.preventDefault() prevents the form from trying to submit itself.

        newShow = $("#search-input").val().trim();          //gets the value of the item that is searched, trims the ends of spaces, and puts it into a variable
        shows.push(newShow);                                //puts the new value in to the shows array

        addBtns();                                          // call the add buttons function, so the new button will appear
    }); //end of the search button function

    function clearIt() {
        $(".gifDiv").html("");                              //clears the html gif div so that the gifs dont keep going for days
    } //end clearIt function

    //make this its own function
    $(document).on("click", ".topicBtn", function () {      // make the new function work then put this below with new function in it
        clearIt();                                          // clearIt function is called
        var btnVal = $(this).attr("data-name");             //puts the data name value to the button and in a variable
        //console.log(this)
        //console.log("button work");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + btnVal + "&api_key=oFpUhcOFQSCAb42LvCx2NxfC6IAcrk5o&limit=10";   //putting the url together
        // console.log(btnVal);

        $.ajax({                                                    //calling the ajax function to retrieve the api
            url: queryURL,                                          //the url being used
            method: "GET"                                           //the method being used

        }).then(function (response) {                               //then function to get a response from the api
            // console.log("hi")
            // console.log(response);
            var results = response.data;                            //puting the result data into a variable


            for (var a = 0; a < results.length; a++) {              //going through the data array

                // console.log("hello")
                var gifDiv = $("<div class='gifd'>");               //creating the div
                var rating = results[a].rating;                     //getting the rating

                var p = $("<p>").text("Rating: " + rating);         //putting the ratining in a p tag and variable

                var topicImage = $("<img>");                                                    // creating an image and putting into a variable
                topicImage.attr("src", results[a].images.fixed_height_still.url);               //putting the source of the image into the variable
                topicImage.attr("data-still", results[a].images.fixed_height_still.url);        //defining the data-still attribute
                topicImage.attr("data-animate", results[a].images.fixed_height.url);            //defining the data-animate attribute
                topicImage.attr("data-state", "still");                                         //defining the the data-state when loaded
                topicImage.attr("class", "gif img-fluid");                                      //giving the image a class and responsiveness through bootstrap
                // console.log(topicImage)
                gifDiv.append(p);                                   //putting the rating paragraph into the gif div
                gifDiv.prepend(topicImage);                         //prependding the image into the gif div variable

                $(".gifDiv").prepend(gifDiv);                       //putting that div into the html div

            } //end of the results for loop

        });//end of the .then method and function

    }); //end of a topic button click function

    $(document).on("click", ".gif", animateGif);                        //function that makes the gifs animate and pause

    function animateGif() {
        var state = $(this).attr("data-state");                         //puts the data value into the state variable
       // console.log(this)
        if (state == "still") {                                         //if the gif is still, this makes it move
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {                                                        //if the gif is moving this makes it still
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        } //end of else
    }//end of animate gif function

}); //end of document ready function