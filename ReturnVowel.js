let vowels = ["a", "e", "i", "o", "u"];
function ReturnVowels(str) {
    let storeValue = [];
    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            storeValue.push(i);
        }
    }
    return storeValue;
}



let result = ReturnVowels("bushra");
console.log(result);