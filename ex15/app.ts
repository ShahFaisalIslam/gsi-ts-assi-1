let guests = ["Abu Hanifa","Malik", "As Shafi", "Ahmed ibn Hanbal"];

for (let guest of guests) {
    console.log("Dear %s, please come over to my house for dinner tonight.",guest);
}

console.log("\nGuest %s cannot make it.\n",guests[3]);

guests[3] = "Sufyan At Thawri";

for (let guest of guests) {
    console.log("Dear %s, please come over to my house for dinner tonight.",guest);
}