function checkTriangle(x, y, z)
{
    if (x == y && y == z)
        return("Equilateral Triangle");

    else if (x == y || y == z || z == x)
        return("Isosceles Triangle");

    else
      return("Scalene Triangle");
}
const result=checkTriangle(7,7,7);
console.log(result);