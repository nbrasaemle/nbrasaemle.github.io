$(document).ready(function () {

    var topic = "";
    var newShow= "";
    var shows = ["Lord of the Rings", "Game of Thrones", "Narnia", "Star Wars", "Star Trek", "Pirates Of The Caribbean", "Disney", "Harry Potter", "Greys Anatomy", "King Arthur", "The Hobbit"];

    addBtns();

    function addBtns() { //make the butons appear in a function

        for (var i = 0; i < shows.length; i++) {

            topic = shows[i];
            var topics = topic.replace(/\s+/g, '-'); //Gets rid of the spaces in the data-name value so that the link is complete and searches the right thing
            var button = $("<button>");
            button
                .addClass("btn btn-success topicBtn")
                .attr("data-name", topics)
                .text(topic);
            $(".buttonDiv").append(" ", button)
          
            // $(".buttonDiv").append("<button  data-name=" + topics + " type='button' class='btn btn-success topicBtn'>" + topic + "</button>");
            console.log(topics);
        }  

    }

    $(".searchBtn").on("click", function(event) {
        event.preventDefault(); // event.preventDefault() prevents the form from trying to submit itself.
        $(".buttonDiv").empty();
       
        newShow = $("#search-input").val().trim();
        shows.push(newShow);
        addBtns();
    });
 
    function clearIt() {
        $(".gifDiv").html("");
    }

//make this its own function
    $(".topicBtn").on("click", function () { // make the new function work then put this below with new function in it
        clearIt();
        var btnVal = $(this).attr("data-name");
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
                var gifDiv = $("<div class='gif'>");
                var rating = results[a].rating;

                var p = $("<p>").text("Rating: " + rating);

                var topicImage = $("<img>");
                topicImage.attr("src", results[a].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(topicImage);

                $(".gifDiv").prepend(gifDiv);

            };

        });

    });

});