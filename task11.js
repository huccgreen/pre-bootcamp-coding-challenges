/*
Write a function that takes in a string and then prints out
all the vowels in the string. Make sure it can deal with
capital letters and small letters.
*/


function task11(string1, string2) {
    var output = '';
    for (var i = 0; i < string1.length; i++) {

        if (string2.includes(string1[i]) && !output.includes(string1[i])) {
            output += string1[i] + ",";

        }


    }
    console.log("Common letters: ", output.slice(0, -1));
}
