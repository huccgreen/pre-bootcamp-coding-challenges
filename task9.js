/* Find the sum of all the multiples of 3 or 5 below 1000.*/

sum = 0;

function task9() {
    for (var i = 0; i < 1000; i++) {

        if (i % 3 == 0 || i % 5 == 0) {

            sum += i
        }
    }
    return sum;
}

console.log(task9());