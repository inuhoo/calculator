// globals 
const digits = Array.from(document.querySelectorAll('.digit')); //select all the number keys 
const operators = Array.from(document.querySelectorAll('.operator')); //select all the number keys
const equals = document.querySelector('#equals')
const mainDisplay = document.querySelector('#main'); 
const subDisplay = document.querySelector('#sub'); 


// OPERATIONS 
// ----------

// basic operators
function add(a,b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function divide(a,b) {
    return (b === 0 ? "Oops there it goes" : a / b);
}

function multiply(a,b) {
    return a * b;
}

// master operate function
function operate() {
    switch (operator) {
        case 'x':
            return multiply(nums[0], nums[1]);
        case '/':
            return divide(nums[0], nums[1]);
        case '-':
            return minus(nums[0], nums[1]);
        case '+':
            return add(nums[0], nums[1]);
    }
}

// run operate function on equals press
equals.addEventListener('click', e => {
    operate();
});


// add digit number to the display
function updateDisplay(num) {    
    if (num == "." && /\./.test(mainDisplay.innerHTML)) {
        return;
    }
    mainDisplay.innerHTML += num;
}

for (i = 0; i < digits.length; i++) {
    digits[i].addEventListener('click' , e => {
        updateDisplay(e.target.value); 
    });
};

// update displays when operator is selected
function operationSelect(op) {
    subDisplay.innerHTML = mainDisplay.innerHTML + " " + op;
    mainDisplay.innerHTML = "";
}

for (i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click' , e => {
        operationSelect(e.target.value);
    });
};



// CLEAR FUNCTIONS 
// -----------------
function clearAll() {
    subDisplay.innerHTML = "" ; 
    mainDisplay.innerHTML = "";
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

document.addEventListener('keyup', e => {
    console.log(e);
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
    }
})