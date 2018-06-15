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
function operate(a, operator, b) {
    switch (operator) {
        case 'x':
            return multiply(a, b);
        case '/':
            return divide(a,b);
        case '-':
            return minus(a, b);
        case '+':
            return add(a, b);
    }
}

