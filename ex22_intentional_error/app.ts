// Copy of ex15_changing_guest_list
let guests : string[] = ["Abu Hanifa","Malik", "As Shafi", "Ahmed ibn Hanbal"];
let guest : string;
for (guest of guests) {
    console.log("Dear %s, please come over to my house for dinner tonight.",guest);
}

console.log("\nGuest %s cannot make it.\n",guests[3]);

guests[8] = "Sufyan At Thawri";
// Doing so led to the below loop printing 'undefined' for indices 4 to 7
for (guest of guests) {
    console.log("Dear %s, please come over to my house for dinner tonight.",guest);
}

// Fixing the error
while (guests.length > 4)
   guests.pop();
guests[3] = "Sufyan At Thawri";

console.log("\n\nCorrected list:");
for (guest of guests) {
   console.log("Dear %s, please come over to my house for dinner tonight.",guest);
}