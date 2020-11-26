/*

Write a function that takes 2 numbers as input.
If either of the numbers is 3 AND the sum of the numbers
contains a 3 then return true. Otherwise return false

*/



//This is a function that will check if the sum of 2 numbers contains a 3

function sumContains3(n1, n2) {
    var sum = n1 + n2;
    if (sum.toString().includes(3)) {    //convert the number to a string first so that you can use the string operation .includes() on it
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