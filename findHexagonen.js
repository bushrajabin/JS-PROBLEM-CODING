function findHexaGonel(h, a,) {
    area_of_Hexagonal_prism = ((6 * a * h) + (3 * Math.sqrt(3) * a * a))
    return area_of_Hexagonal_prism;
}

let result=findHexaGonel(3,6);
console.log(result);