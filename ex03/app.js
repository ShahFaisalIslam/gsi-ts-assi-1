"use strict";
let person = "shah faisal";
console.log("Lowercase:%s", person.toLowerCase());
console.log("Uppercase:%s", person.toUpperCase());
let capitalize = true;
let personTitleCased = "";
for (let char of person) {
    if (capitalize) {
        personTitleCased += char.toUpperCase();
        capitalize = false;
        continue;
    }
    if (char == " ")
        capitalize = true;
    personTitleCased += char.toLowerCase();
}
console.log("Titlecase:%s", personTitleCased);
