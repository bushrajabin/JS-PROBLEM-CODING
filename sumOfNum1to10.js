function sumOfNumbers1to10() {
    var sum = 0;
    for(let i=1;i<=10;i++){
       sum=sum+i;
    }
    return sum;
}

let result = sumOfNumbers1to10();
console.log(result);