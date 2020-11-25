/*
Write a function that takes in a number representing
the temperature in Celsius and returns the temperature
in Fahrenheit. Write another function that does the
opposite (Fereignheit to Celsius)


*/




//This function converts a given temperature from degrees Celcius to Fahrenheit 
function celciusToFahrenheit(tempInCelcius) {
    return (tempInCelcius * (9 / 5) + 32)
}


//This function converts a given temperature from Fahrenheit to degrees Celcius
function fahrenheitToCelcius(tempInFahrenheit) {
    return ((tempInFahrenheit - 32) * (5 / 9))
}