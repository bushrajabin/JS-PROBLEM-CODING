function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Calculate factorial of a number
const number = 10;
const result = factorial(number);
console.log(result);