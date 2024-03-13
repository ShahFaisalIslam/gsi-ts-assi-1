// String tests
console.log("String tests");
let person : string = "faisal";
console.log("person == 'faisal' is",person == "faisal",", and person == 'hameed' is",person == "hameed");
console.log("person != 'faisal' is",person != "faisal",", and person != 'hameed' is",person != "hameed");
person = "Faisal";
console.log("Without lowercase, person == 'faisal' is",person == "faisal");
console.log("With lowercase, person == 'faisal' is",person.toLowerCase() == "faisal");
// Numeric tests
console.log("Numeric tests");
let year : number = 2024;
console.log("year == 2024 is",year == 2024,", and year == 1 is",year == 1);
console.log("year != 2024 is",year != 2024,", and year != 1 is",year != 1);
console.log("year < 22 is",year <22,", and year > 1 is",year > 1);
console.log("and year >= 1 is",year == 1);
console.log("year <= 10000 is ",year <= 10000);
// Logical tests
console.log ("person == 'Faisal' and year == 2024 is",person == "Faisal" && year == 2024);
console.log ("person == 'faisal' and year == 2024 is",person == "faisal" && year == 2024);
console.log ("person == 'Faisal' and year == 2023 is",person == "Faisal" && year == 2023);
console.log ("person == 'Faisal' and year == 2024 is",person == "faisal" && year == 2023);
console.log ("person == 'Faisal' or year == 2024 is",person == "Faisal" || year == 2024);
console.log ("person == 'faisal' or year == 2024 is",person == "faisal" || year == 2024);
console.log ("person == 'Faisal' or year == 2023 is",person == "Faisal" || year == 2023);
console.log ("person == 'Faisal' or year == 2024 is",person == "faisal" || year == 2023);
// Is item in array?
let countries : string[] = ["Pakistan","KSA","Palestine"];
console.log("Is Palestine a country?",countries.includes("Palestine"));
console.log("Is Israel a country?",countries.includes("Israel"));
// Is item not in array?
let invitedGuests : string[] = ["Aiman","Iman","Amina"];
console.log("Is Ameen not invited?",!invitedGuests.includes("Ameen"));
console.log("Is Amina not invited?",!invitedGuests.includes("Amina"));