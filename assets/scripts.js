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



// EVENTS
// ------



// add click events to digit buttons
for (i = 0; i < digits.length; i++) {
    digits[i].addEventListener('click' , e => {
        mainDisplay.innerHTML += e.target.value; 
    });
};

// add click events to operator buttons
for (i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click' , e => {
        subDisplay.innerHTML = mainDisplay.innerHTML + " " + e.target.value;
        mainDisplay.innerHTML = "";
    });
};

// run operate function on equals press
equals.addEventListener('click', e => {
});



// CLEAR FUNCTIONS 
// -----------------


//clear all button press
document.querySelector("[value='clr-all']").addEventListener('click', e => {
    subDisplay.innerHTML = "" ; 
    mainDisplay.innerHTML = "";
});

//clear button press
document.querySelector("[value='clr']").addEventListener('click', e => {
    mainDisplay.innerHTML = "";
});
//clear button press
document.querySelector("[value='bksp']").addEventListener('click', e => {
    mainDisplay.innerHTML = mainDisplay.innerHTML.slice(0, -1);
});