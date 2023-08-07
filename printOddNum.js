function printOddNumbers() {
    let oddNumber = [];
    for (let i = 1; i < 100; i++) {
        if (i % 2 !== 0) {
            oddNumber.push(i);
        }
    }
    return oddNumber;
}

let result = printOddNumbers();
console.log(result);

