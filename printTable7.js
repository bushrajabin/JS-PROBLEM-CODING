function printTableOf7(number) {
    const arr=[];
    for (i = 1; i <= 10; i++) {
        const result=number*i;
        arr.push(i + " x " + number + " = " + result)
    }
    return arr;
}

let res=printTableOf7(7);
console.log(res)



