/*
Write a function that takes in a string and then prints
out all the vowels in the string. Make sure it can deal
with capital letters and small letters.

*/



function task10(theString) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for (var i = 0; i < theString.length; i++) {
        if (vowels.includes(theString[i])) {
            console.log(theString[i]);
        }
    }
}

task10('sfisO');