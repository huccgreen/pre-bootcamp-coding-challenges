/*

White a function that takes in three numbers and returns the maximum number.
Do this without using any builtin methods. Write your own logic from scratch.

Bonus: How can you change the code so it can take in any number of numbers?
*/


/*
This function helps with finding the greater number out of 2 numbers ,
I will use it to make the 3 numbers problem smaller
*/
function whichIsGreater(n1, n2) {
    if (n1 > n2) { return n1 }
    else { return n2 }
}

//This function takes 3 numbers and returns the bigest one out of the 3

function task6(number1, number2, number3) {
    if (whichIsGreater(number1, number2) > number3) {
        return whichIsGreater(number1, number2)
    }
    else {
        return number3
    }
}

//The fillowing code is for any number of numbers [BONUS]

function anyNumberofNumbers(theArray) {
    var largest = theArray[0];

    for (var i = 0; i < theArray.length; i++) {
        if (theArray[i] > largest) {     //If the current number in the loop is bigger than the current largest number, make it the biggest number.
            largest = theArray[i];
        }

    }

    return largest;
}

console.log(anyNumberofNumbers([1, 5, , 56, 788888, 45, 8]))