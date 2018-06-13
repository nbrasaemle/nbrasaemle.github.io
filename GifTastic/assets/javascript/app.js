var topic = "";

var animals = ["LotR", "GoT", "Narnia", "StarWars", "StarTrek", "PiratesOfTheCaribbean", "Disney", "HarryPotter", "GreysAnatomy", "Hobbit"];

for (var i = 0; i < animals.length; i++) {

    topic = animals[i];

    $(".buttonDiv").append("<button data-name="+ topic+ ">" + topic + "</button>");
    console.log(topic);
}
$("button").on("click", function () {

    var btnVal= $(this).attr("data-name");
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

