console.log("Hello World!");

let leftNumber = "";
let calcOperator = "";
let rightNumber = "";
let calcNumber = "";

//function to load the inputted numbers into variables
function calcLoader(input) {
    //Depending on what has been loaded already, determine where the number is to be loaded
    //A series of nested if statements should work
    if (leftNumber === "") {
        //Bug - if someone does an operator first, it will load it onto leftNumber
        //Add another condition that input must be a number
        leftNumber += input;
        console.log(leftNumber + " -first lN if");
    } else {
        if (calcOperator === "") {
            if (isNaN(input)) {
                calcOperator += input;
                console.log(calcOperator + " -calcOp");
            } else {
                leftNumber += input;
                console.log(leftNumber + " -second lN if")
            }
        } else {
            //Bug - same as first if, need to specify that input must be a number
            rightNumber += input;
            console.log(rightNumber + " -rN if");
        }
    }
}

//function to perform the calculation
//will convert left and right number variables to numbers
//will use the calcOperator variable to decide the operator to use by using a switch
function calculate() {
    switch (calcOperator) {
        case "+":
            console.log(parseFloat(leftNumber) + parseFloat(rightNumber));
            calcNumber = parseFloat(leftNumber) + parseFloat(rightNumber);
            break;
        case "-":
            console.log(parseFloat(leftNumber) - parseFloat(rightNumber));
            calcNumber = parseFloat(leftNumber) - parseFloat(rightNumber);
            break;
        case "*":
            console.log(parseFloat(leftNumber) * parseFloat(rightNumber));
            calcNumber = parseFloat(leftNumber) * parseFloat(rightNumber);
            break;
        case "/":
            console.log(parseFloat(leftNumber) / parseFloat(rightNumber));
            calcNumber = parseFloat(leftNumber) / parseFloat(rightNumber);
            break;
    }
}

//Will need 2 clear functions: 
//1- to clear everything   
//2- to clear everything after a calc which is started by the number buttons. Will need an if statement to make sure it doesn't clear each time.
function clearAll () {
    leftNumber = "";
    calcOperator = "";
    rightNumber = "";
    calcNumber = "";
}


//Tests
calcLoader(6);
console.log(leftNumber);
calcLoader(9);
console.log(leftNumber);
calcLoader("+");
console.log(leftNumber, calcOperator);
calcLoader(4);
console.log(leftNumber, calcOperator, rightNumber);
calcLoader(2);
console.log(leftNumber, calcOperator, rightNumber);
calcLoader(0);
console.log(leftNumber, calcOperator, rightNumber);
calculate();
console.log(calcNumber);
clearAll();
console.log(leftNumber, calcOperator, rightNumber, calcNumber)





//Old Code
// //number button variables
// const zero = 0;
// const one = 1;
// const two = 2;
// const three = 3;
// const four = 4;
// const five = 5;
// const six = 6;
// const seven = 7;
// const eight = 8;
// const nine = 9;
// const plus = "+";

// let test = zero + plus + three + six;
// console.log(test)
//Variables needed to load inputted number on to.
//Variables will be the left value, the operator and the right value.