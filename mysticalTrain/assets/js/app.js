//Preparing document


// Initialize Firebase
var config = {
  apiKey: "AIzaSyBJEUuuTliyx0u7V4xo8tMD_chkytKoIew",
  authDomain: "mystical-train.firebaseapp.com",
  databaseURL: "https://mystical-train.firebaseio.com",
  projectId: "mystical-train",
  storageBucket: "",
  messagingSenderId: "160325921486"
};
firebase.initializeApp(config);

var database = firebase.database();

$(document).ready(function () {

  $(document).on("click", "#add-train", function (event) {

    event.preventDefault();

    var trainName = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    var firstArrival = $("#first-arrival").val().trim();
    var frequency = $("#frequency").val().trim();
   
    database.ref().push({
      trainName : trainName,
      destination : destination,
      firstArrival : firstArrival,
      frequency : frequency,
      dateAdded : firebase.database.ServerValue.TIMESTAMP // takes timesstamp of when the data goes in database.
      

    }); // end data-base push method
  });// end on-click function
 
  database.ref().on("child_added", function (snapshot) {

    var newTrain = snapshot.val();

    var firstTime= newTrain.firstArrival;
    var firstTimeConverted = moment(firstTime, "HH:mm");
    var currentTime = moment();
    var currentTimeConverted = currentTime.format("HH:mm")

    // console.log(firstTimeConverted);
    // console.log(currentTimeConverted);

    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("diff time " + diffTime);

    var tRemainder = diffTime % frequency; // coming out as nan
    console.log("R " + tRemainder);//remainder not working
    var minTillTrain = frequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + minTillTrain);
    //add the
    // var nextTrain = currentTime + minTillTrain;
    var nextTrain = moment(currentTime).add(minTillTrain, "minutes"); //tried to calculate next train, it did not work, gives the same time
    //var nextTrainConverted = nextTrain.format("hh:mm");   
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
    
    //make row and parts of column
    var newRow = $("<tr>");
    var nameTd = $("<td>");
    var destTd = $("<td>");
    var freqTd = $("<td>");
    var arriveTd = $("<td>");
    var minTillNextTd = $("<td>");
    
    //adding the text
    nameTd.text(newTrain.trainName);
    destTd.text(newTrain.destination);
    arriveTd.text(nextTrain);
    freqTd.text(newTrain.frequency);
    minTillNextTd.text(minTillTrain);
    
    //adding the row
    newRow.append(nameTd);
    newRow.append(destTd);
    newRow.append(freqTd);
    newRow.append(arriveTd);
    newRow.append(minTillNextTd);
  

    $(".tableBody").append(newRow);



  }); // end child-added function


}); //end of document.ready function