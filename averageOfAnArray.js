function averageOfAnArray() {
    var arr = [10,22,322,452,766];
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}

let res = addArray();
console.log(res)