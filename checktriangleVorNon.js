function checktriangleValidOrNonValid(side1, side2, side3) {
    if (side1 + side2 > side3 || side1 + side3 > side2 || side2 + side3 > side1) {
        return valid;
    } else {
        return not-valid;
    }

}

const result = checktriangleValidOrNonValid(7, 10, 5);
console.log(result)