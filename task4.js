/*

Write a function that takes 2 numbers as input.
If either of the numbers is 3 AND the sum of the numbers
contains a 3 then return true. Otherwise return false

*/





function sumContains3(n1, n2) {
    var sum = n1 + n2;
    if (sum.toString().includes(3)) {
        return true
    }
    else {
        return false
    }

}


function task4(num1, num2) {
    if ((num1 == 3 || num2 == 3) && sumContains3(num1, num2)) { return true }
    else { return false }
}