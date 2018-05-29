// CRASH COURSE JS
// ==========================================================

// 1. BASIC VARIABLES
// ==========================================================

// Create a basic variable

var i=8;


// 2. ARRAYS
// ==========================================================

// Create an array of five strings


var p = ["a", "b"]

// Create an array of five numbers




// 3. FOR LOOPS
// ==========================================================

// Create a for loop that loops through and prints "My name is Bob five times"

for (var k=0; k<5; k++) {
    var s="My name is Bob five times";
    document.write(s);
}

// Create a for loop that loops through your five string array




// 4. FUNCTIONS
// ==========================================================

// Create a function that takes two numbers and divides the first number by the second.
// Then call that function


function divide(num1,num2) {

    return num1/num2;
}

var result=divide(10,2);

// Create a function that takes in an array of numbers and then loops through the array and prints out numbers.
// Then call that function

function nums(numArray) {
    for (var a=0; a<numArray.length; a++) {
        document.write(numArray[a]);

    }

}

var numArray=[1,2,3,4,5];


// 5. OBJECTS
// ==========================================================

// Create a JavaScript Object

var xbox = {
    color: "black",

}

//xbox.key ="black"
//xbox.keys()
// Console log any three of the properties in that object



// Create an Array of 5 Objects



// Console log 3 properties for every one of the five objects



// 6. JQUERY EVENTS
// ==========================================================

// Create a basic html button then create an onClick event that triggers an on click event.




// 7. OVERALL STRUCTURE
// ==========================================================

// Talk to student a little about the approach for "getting started" on an application.
// Talk about the concept of variables, functions, calls.
