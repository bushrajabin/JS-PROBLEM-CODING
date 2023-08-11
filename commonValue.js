function findCommonValue(array1, array2) {
    let commonValue = [];
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                commonValue.push(array1[i]);
            }
        }

    }
    return commonValue;
}
var array1=[8,9,0,5,666,765]
var array2=[8,96,0,5,666,70005]
let result=findCommonValue(array1,array2);
console.log(result)