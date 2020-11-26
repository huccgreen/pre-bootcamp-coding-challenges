/*
Write a function that takes in three numbers.
These numbers represent the lengths of the sides of a triangle.
The function should return the area of a triangle.


*/



function semiPerimeter(side1, side2, side3) {
    return (side1 + side2 + side3) / 2
}


function task5(side1, side2, side3) {
    var semiP = semiPerimeter(side1, side2, side3)

    return Math.sqrt((semiP) * (semiP - side1) * (semiP - side2) * (semiP - side3))
}




console.log(task5(5, 6, 5));

