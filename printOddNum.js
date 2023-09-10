function printOddNumbers(lastNumber) {
    let oddNumbers = [];
    for (let i = 1; i < lastNumber; i++) {
        if (i % 2 !== 0) {
            oddNumbers.push(i);
        }

    }
    return oddNumbers;
}

let result = printOddNumbers(100);
console.log(result);

