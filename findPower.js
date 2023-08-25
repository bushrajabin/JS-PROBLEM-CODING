function powOfNum(a, b) {
   let pow = 1;
    for (var i = 0; i < b; i++) {
        pow = pow * a;
    }
    return pow;
}

const result = powOfNum(4, 5);
console.log(result);