function sumOfTwoStringNumber(str1, str2) {
    let sumString = [];
    let num1 = str1;
    let num2 = str2;
    let sum = num1 + num2;
    sumString.push(sum);

    return sumString;
}

// IN THIS LINE FIXED THE VALUE OF str1,str2
// let str1="83728438765873465";
// let str2="2416745789056746123748329538471265678293052367458698709"
// let result = sumOfTwoStringNumber(str1,str2);
// console.log(result);

// in this line we can't fixed the value of str1,str2
let result = sumOfTwoStringNumber(9,8);
console.log(result);