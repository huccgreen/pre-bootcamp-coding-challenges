function task8(numberForConversion) {
    var hours = Math.floor(numberForConversion / 60);  //extract the hours part
    var minutes = numberForConversion % 60 //extract the minutes part

    if (hours == 1 && minutes == 1) {
        return hours + ' hour, ' + minutes + " minute";
    }

    else if (hours == 1) {
        return hours + ' hour, ' + minutes + " minutes";
    }

    else if (minutes == 1) {
        return hours + ' hours, ' + minutes + " minute";
    }

    else {
        return hours + ' hours, ' + minutes + " minutes";
    }

}

console.log(task8(71));
console.log(task8(133));