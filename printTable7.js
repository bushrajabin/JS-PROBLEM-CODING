function printTableOf7(number) {
    const table = [];
    for (i = 1; i <= 10; i++) {
        const result = number * i;
        table.push(i + " x " + number + " = " + result)
    }
    return table;
}

let res = printTableOf7(7);
console.log(res)



