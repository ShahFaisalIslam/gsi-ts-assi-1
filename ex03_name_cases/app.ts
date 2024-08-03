// lowercase, UPPERCASE, and Titlecase

let casedName : string = "ShAh FaisAL";
// Lowercase
let lowerCasedName : string = casedName.toLowerCase();
// Uppercase
let upperCasedName : string = casedName.toUpperCase();
// Titlecase

let titleCasedName : string = (function (input : string) : string {
    let result : string = input[0].toUpperCase();
    let setToUpperCase : boolean = false;
    for (let i : number = 1;i < input.length;i++) {
        if (input[i] == " ") {
            setToUpperCase = true;
            result += input[i];
            continue;
        }
        if (setToUpperCase) {
            setToUpperCase = false;
            result += input[i].toUpperCase();
        } else {
            result += input[i].toLowerCase();
        }
    }
    return result;
}
)(casedName);

console.log(`Input : ${casedName}`);
console.log(`Lower cased : ${lowerCasedName}`);
console.log(`Upper cased : ${upperCasedName}`);
console.log(`Title cased : ${titleCasedName}`);
