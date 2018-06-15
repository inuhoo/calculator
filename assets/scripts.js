// globals
const digits = Array.from(document.querySelectorAll('.digit')); //select all the number keys
const operators = Array.from(document.querySelectorAll('.operator')); //select all the number keys
const equals = document.querySelector('#equals')
const mainDisplay = document.querySelector('#main');
const subDisplay = document.querySelector('#sub');
let operands = [];
let operation;
let solution;
let reset = 0;

// OPERATIONS
// ----------

// basic operators
function add(a,b) {return a + b;}
function minus(a,b) {return a - b;}
function divide(a,b) {return (b === 0 ? "Oops there it goes" : a / b);}
function multiply(a,b) {return a * b;}

// master operate function
function operate(nums, o) {
    subDisplay.innerHTML = operands[0] + " " + operation + " " + operands[1]
    switch (o) {
        case 'x': return multiply(nums[0], nums[1]);
        case '/': return divide(nums[0], nums[1]);
        case '-': return minus(nums[0], nums[1]);
        case '+': return add(nums[0], nums[1]);
    }
}

// add digit number to the display
function updateDisplay(num) {
    if (reset){mainDisplay.innerHTML = ""};
    if (num == "." && /\./.test(mainDisplay.innerHTML)) {
        return;
    }
    mainDisplay.innerHTML += num;
    reset = 0; // turn off display reset
}

// update displays when operator is selected
function operationSelect(op) {};


// EVENT LISTENERS
// ---------------

// add event listeners for digit buttons
for (i = 0; i < digits.length; i++) {
    digits[i].addEventListener('click' , e => {
        updateDisplay(e.target.value);
    });
};

// add event listeners for operator buttons
for (i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click' , e => {
        operationSelect(e.target.value);
    });
};

// event listener for equals button
equals.addEventListener('click', e => {
    mainDisplay.innerHTML = operate(operands, operation);
    operands = [];
    reset = 1; // toggle display reset
});



// CLEAR FUNCTIONS
// -----------------
function clearAll() {
    subDisplay.innerHTML = "" ;
    mainDisplay.innerHTML = "";
    operands = [];
    operation = "";
}

//clear all button press
document.querySelector("[value='clr-all']").addEventListener('click', e => {
    clearAll();
});

function clearCurrent() {
    mainDisplay.innerHTML = "";
}

//clear button press
document.querySelector("[value='clr']").addEventListener('click', e => {
    clearCurrent();
});

function backspace() {
    mainDisplay.innerHTML = mainDisplay.innerHTML.slice(0, -1);
}
//clear button press
document.querySelector("[value='bksp']").addEventListener('click', e => {
   backspace();
});


// keyboard support
document.addEventListener('keyup', e => {
    switch (e.key) {
        case "Backspace":
            backspace();
            break;
        case "Delete":
            clearAll();
            break;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case ".":
            updateDisplay(e.key);
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            operationSelect(e.key);
            break;
        case "Enter":
            // missing equals function at the moment.
            break;
    }
})