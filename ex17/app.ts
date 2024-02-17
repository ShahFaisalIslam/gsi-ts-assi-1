let guests = ["Abu Hanifa","Malik", "As Shafi", "Ahmed ibn Hanbal"];

for (let guest of guests) {
    console.log("Dear %s, please come over to my house for dinner tonight.",guest);
}

console.log("\nGuest %s cannot make it.",guests[3]);

guests[3] = "Sufyan At Thawri";

for (let guest of guests) {
    console.log("Dear %s, please come over to my house for dinner tonight.",guest);
}

console.log("\nI found a bigger table!\n");

guests.unshift("Al Nafay");
guests.splice(2,0,"Hammad");
guests.push("Al Bukhari");

for (let guest of guests) {
    console.log("Dear %s, please come over to my house for dinner tonight.",guest);
}

console.log("\nI can invite only two guests for dinner.\n");
while (guests.length > 2) {
    let uninvited = guests.pop();
    console.log("Sorry %s, I cannot invite you for the dinner.",uninvited);
}
console.log("");
for (let guest of guests)
    console.log("Dear %s, you are still invited for dinner.",guest);

while (guests.length != 0)
    guests.pop();

for (let guest of guests)
    console.log(guest);