"use strict";
// lowercase, UPPERCASE, and Titlecase
let casedName = "ShAh FaisAL";
// Lowercase
let lowerCasedName = casedName.toLowerCase();
// Uppercase
let upperCasedName = casedName.toUpperCase();
// Titlecase
let titleCasedName = (function (input) {
    let result = input[0].toUpperCase();
    let setToUpperCase = false;
    for (let i = 1; i < input.length; i++) {
        if (input[i] == " ") {
            setToUpperCase = true;
            result += input[i];
            continue;
        }
        if (setToUpperCase) {
            setToUpperCase = false;
            result += input[i].toUpperCase();
        }
        else {
            result += input[i].toLowerCase();
        }
    }
    return result;
})(casedName);
console.log(`Input : ${casedName}`);
console.log(`Lower cased : ${lowerCasedName}`);
console.log(`Upper cased : ${upperCasedName}`);
console.log(`Title cased : ${titleCasedName}`);
