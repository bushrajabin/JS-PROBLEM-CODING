function printMultiplicationTable(last_Table) {
    const tables = [];
    for (let i = 1; i <= last_Table; i++) {
        const table = []
        for (let j = 1; j <= 10; j++) {
            var result = i + " X " + j + "=" + i * j
            table.push(result)

        }
        tables.push(table)
    }
    return tables;
}

let result = printMultiplicationTable(2);
console.log(result)
