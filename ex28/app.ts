let age = 78;
let stage : string ;
if (age < 2) {
    stage = "baby";
} else if (age < 4) {
    stage = "toddler";
} else if (age < 13) {
    stage = "kid";
} else if (age < 20) {
    stage = "teenager";
} else if (age < 65) {
    stage = "adult";
} else {
    stage = "elder";
}
let article = "a";
if (stage[0].toLowerCase() == "a" ||
stage[0].toLowerCase() == "e" ||
stage[0].toLowerCase() == "i" ||
stage[0].toLowerCase() == "o" ||
stage[0].toLowerCase() == "u") {
    article += "n";
}

console.log ("The person is",article,stage);