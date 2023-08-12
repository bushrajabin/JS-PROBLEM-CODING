function sumOfTwoStringNumber(str1, str2) {
    let sumString = [];
    let num1 = str1;
    let num2 = str2;
    let sum = num1 + num2;
    sumString.push(sum);

    return sum;
}

let str1="87727362654";
let str2="8347237";
let result = sumOfTwoStringNumber(str1,str2);
console.log(result);