"use strict";
let guests = ["Abu Hanifa", "Malik", "As Shafi", "Ahmed ibn Hanbal"];
for (let guest of guests) {
    console.log("Dear %s, please come over to my house for dinner tonight", guest);
}
console.log("\nGuest %s cannot make it.", guests[3]);
guests[3] = "Sufyan At Thawri";
console.log("\nAfter modifying the guest list:\n");
for (let guest of guests) {
    console.log("Dear %s, please come over to my house for dinner tonight", guest);
}
