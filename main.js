console.log("Hello World!");

let leftNumber = "";
let calcOperator = "";
let rightNumber = "";
let calcNumber = "";
let screenValue = document.getElementById("screenValue");

//Function to update the screen with the current values
function updateScreen () {
    if (calcNumber === "") {
        screenValue.textContent = leftNumber + calcOperator + rightNumber;
    } else {
        screenValue.textContent = calcNumber + calcOperator + rightNumber;
    }
}

//function to load the inputted numbers into variables
function calcLoader(input) {
    //Depending on what has been loaded already, determine where the number is to be loaded
    //A series of nested if statements should work
    if (calcNumber !== "") {
        if (isNaN(input) && input !== ".") {
                calcOperator = input;
                updateScreen();
                console.log(calcOperator + " -ans calcOp");
        } else if (calcOperator !== "") {
            //Bug - same as first if, need to specify that input must be a number - addressed
            if (input === ".") {
                for (let i = 0; i < rightNumber.length; i++) {
                    if (rightNumber[i] === ".") {
                        return alert("A number cannot have two decimal points");
                    }
                }
            }
            rightNumber += input;
            updateScreen();
            console.log(rightNumber + " -ans rN if");
        } else {
            clearAll();
            leftNumber += input;
            updateScreen();
            console.log(leftNumber + " -ans restart lN if")
        }
    } else {
        if (leftNumber === "" && isNaN(input)) {
            alert("Please enter a number first")
        } else if (leftNumber === "") {
                //Bug - if someone does an operator first, it will load it onto leftNumber - addressed
                //Add another condition that input must be a number - not needed
            leftNumber += input;
            updateScreen();
            console.log(leftNumber + " -first lN if");
        } else {
            if (isNaN(input) && input !== ".") {
                calcOperator = input;
                updateScreen();
                console.log(calcOperator + " -calcOp");
            } else if (calcOperator === ""){
                if (input === ".") {
                    for (let i = 0; i < leftNumber.length; i++) {
                        if (leftNumber[i] === ".") {
                            return alert("A number cannot have two decimal points");
                        }
                    }
                }
                leftNumber += input;
                updateScreen();
                console.log(leftNumber + " -second lN if")
            } else {
                //Bug - s ame as first if, need to specify that input must be a number - addressed
                if (input === ".") {
                    for (let i = 0; i < rightNumber.length; i++) {
                        if (rightNumber[i] === ".") {
                            return alert("A number cannot have two decimal points");
                        }
                    }
                }
            rightNumber += input;
            updateScreen();
            console.log(rightNumber + " -rN if");
            }
        }
    }
}

//function to perform the calculation
//will convert left and right number variables to numbers
//will use the calcOperator variable to decide the operator to use by using a switch
function calculate() {
    if (calcNumber === "")
        switch (calcOperator) {
            case "+":
                console.log(parseFloat(leftNumber) + parseFloat(rightNumber));
                calcNumber = parseFloat(leftNumber) + parseFloat(rightNumber);
                clearCalc();
                updateScreen();
                break;
            case "-":
                console.log(parseFloat(leftNumber) - parseFloat(rightNumber));
                calcNumber = parseFloat(leftNumber) - parseFloat(rightNumber);
                clearCalc();
                updateScreen();
                break;
            case "*":
                console.log(parseFloat(leftNumber) * parseFloat(rightNumber));
                calcNumber = parseFloat(leftNumber) * parseFloat(rightNumber);
                clearCalc();
                updateScreen();
                break;
            case "/":
                console.log(parseFloat(leftNumber) / parseFloat(rightNumber));
                calcNumber = parseFloat(leftNumber) / parseFloat(rightNumber);
                clearCalc();
                updateScreen();
                break;
    } else {
        switch (calcOperator) {
            case "+":
                console.log(parseFloat(calcNumber) + parseFloat(rightNumber));
                calcNumber = parseFloat(calcNumber) + parseFloat(rightNumber);
                clearCalc();
                updateScreen();
                break;
            case "-":
                console.log(parseFloat(calcNumber) - parseFloat(rightNumber));
                calcNumber = parseFloat(calcNumber) - parseFloat(rightNumber);
                clearCalc();
                updateScreen();
                break;
            case "*":
                console.log(parseFloat(calcNumber) * parseFloat(rightNumber));
                calcNumber = parseFloat(calcNumber) * parseFloat(rightNumber);
                clearCalc();
                updateScreen();
                break;
            case "/":
                console.log(parseFloat(calcNumber) / parseFloat(rightNumber));
                calcNumber = parseFloat(calcNumber) / parseFloat(rightNumber);
                clearCalc();
                updateScreen();
                break;
        }

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
    updateScreen();
}

function clearCalc () {
    leftNumber = "";
    calcOperator = "";
    rightNumber = "";
}


//DOM manipulations

const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const point = document.getElementById("point");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const divide = document.getElementById("divide");
const multiply = document.getElementById("multiply");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

zero.addEventListener("click", function() {calcLoader(0);});
one.addEventListener("click", function() {calcLoader(1);});
two.addEventListener("click", function() {calcLoader(2);});
three.addEventListener("click", function() {calcLoader(3);});
four.addEventListener("click", function() {calcLoader(4);});
five.addEventListener("click", function() {calcLoader(5);});
six.addEventListener("click", function() {calcLoader(6);});
seven.addEventListener("click", function() {calcLoader(7);});
eight.addEventListener("click", function() {calcLoader(8);});
nine.addEventListener("click", function() {calcLoader(9);});
point.addEventListener("click", function() {calcLoader(".");});

plus.addEventListener("click", function() {calcLoader("+");});
minus.addEventListener("click", function() {calcLoader("-");});
multiply.addEventListener("click", function() {calcLoader("*");});
divide.addEventListener("click", function() {calcLoader("/");});

equals.addEventListener("click", function() {calculate();})

clear.addEventListener("click", function() {clearAll()})







// //Tests
// calcLoader(6);
// console.log(leftNumber);
// calcLoader(9);
// console.log(leftNumber);
// calcLoader("+");
// console.log(leftNumber, calcOperator);
// calcLoader(4);
// console.log(leftNumber, calcOperator, rightNumber);
// calcLoader(2);
// console.log(leftNumber, calcOperator, rightNumber);
// calcLoader(0);
// console.log(leftNumber, calcOperator, rightNumber);
// calculate();
// console.log(calcNumber);
// clearAll();
// console.log(leftNumber, calcOperator, rightNumber, calcNumber)





//Old Code
// //number button variables
//the consts below were re-used for the DOM manipulations
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