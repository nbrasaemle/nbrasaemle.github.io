var numOne = process.argv[3];
var numTwo = process.argv[4];
var operator = process.argv[2];
var answer;

// if (operator == "add") {
//     console.log(parseFloat(numOne) + parseFloat(numTwo));
// }
// else if (operator == "subtract") {
//     console.log(parseFloat(numOne) - parseFloat(numTwo));
// }
// else if (operator == "multiply") {
//     console.log(parseFloat(numOne) * parseFloat(numTwo));
// }
// else if (operator == "divide") {
//     console.log(parseFloat(numOne) / parseFloat(numTwo));
// }
// else if (operator == "remainder") {
//     console.log(parseFloat(numOne) % parseFloat(numTwo));
// }

switch (operator) {
    case "add":
        answer = parseFloat(numOne) + parseFloat(numTwo);
        console.log(answer);
        break;
    case "subtract" :
         answer = parseFloat(numOne) + parseFloat(numTwo);
        console.log(answer);
        break;
    case "multiply":
    answer = parseFloat(numOne) * parseFloat(numTwo);
        console.log(answer);
        break;

}