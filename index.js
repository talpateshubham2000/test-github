const a = 20;



console.log(a);

const b = 30;

console.log(b);
console.log(a + b);

function addNumbers(x, y) {
    return x + y;
}


function subtractNumbers(x, y) {
    return x - y;
}


function multiplyNumbers(x, y) {
    return x * y;
}


function divideNumbers(x, y) {
    if (y === 0) {
        throw new Error("Cannot divide by zero");
    }
    return x / y;
}