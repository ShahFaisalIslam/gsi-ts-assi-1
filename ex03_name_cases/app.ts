let person : string = "shah faisal";
console.log("Lowercase:%s",person.toLowerCase());
console.log("Uppercase:%s",person.toUpperCase());
let capitalize : boolean = true;
let personTitleCased : string = "";
let char : string;
for (char of person) {
    if (capitalize) {
        personTitleCased += char.toUpperCase();
        capitalize = false;
        continue;
    }
    if (char == " ")
        capitalize = true;
    personTitleCased += char.toLowerCase();
}
console.log("Titlecase:%s",personTitleCased);