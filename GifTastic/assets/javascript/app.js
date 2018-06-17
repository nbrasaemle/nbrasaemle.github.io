$(document).ready(function () {

    var topic = "";
    var newShow = "";
    var shows = ["Lord of the Rings", "Game of Thrones", "Narnia", "Star Wars", "Star Trek", "Pirates Of The Caribbean", "Disney", "Harry Potter", "Greys Anatomy", "King Arthur", "The Hobbit"];

    addBtns();

    function addBtns() { //make the butons appear in a function
        $(".buttonDiv").empty();
        for (var i = 0; i < shows.length; i++) {

            topic = shows[i];
            var topics = topic.replace(/\s+/g, '-'); //Gets rid of the spaces in the data-name value so that the link is complete and searches the right thing
            var button = $("<button>");
            button
                .addClass("btn btn-success topicBtn")
                .attr("data-name", topics)
                .text(topic);
            $(".buttonDiv").append(button);

            // $(".buttonDiv").append("<button  data-name=" + topics + " type='button' class='btn btn-success topicBtn'>" + topic + "</button>");
            console.log(topics);
        }

    }

    $(".searchBtn").on("click", function (event) {
        event.preventDefault(); // event.preventDefault() prevents the form from trying to submit itself.

        newShow = $("#search-input").val().trim();
        shows.push(newShow);

        addBtns();
    });

    function clearIt() {
        $(".gifDiv").html("");
    }

    //make this its own function
    $(document).on("click", ".topicBtn", function () { // make the new function work then put this below with new function in it
        clearIt();
        var btnVal = $(this).attr("data-name");
        console.log(this)
        console.log("button work");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + btnVal + "&api_key=oFpUhcOFQSCAb42LvCx2NxfC6IAcrk5o&limit=10";
        console.log(btnVal);

        $.ajax({
            url: queryURL,
            method: "GET"

        }).then(function (response) {
            console.log("hi")
            console.log(response);
            var results = response.data;


            for (var a = 0; a < results.length; a++) {
                
                console.log("hello")
                var gifDiv = $("<div class='gif'>");
                var rating = results[a].rating;

                var p = $("<p>").text("Rating: " + rating);

                var topicImage = $("<img>");
                topicImage.attr("src", results[a].images.fixed_height.url);
                topicImage.attr("data-still", results[a].images.fixed_height_still.url);
                topicImage.attr("data-animate", reults[a].images.fixed_height.url);
                topicImage.attr("data-state", "still");
                topicImage.attr("class", "gif");
                
                gifDiv.append(p);
                gifDiv.prepend(topicImage);

                $(".gifDiv").prepend(gifDiv);

            }

        });
      
    });

    $(document).on("click", ".gif", animateGif);

    function animateGif() {
       var state = $(this).attr("data-state");

       if (state =="still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    }

});