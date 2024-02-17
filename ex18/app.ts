let places = ["Japan", "Indonesia", "Texas", "Makkah", "Madinah"];

// Original order
console.log ("places[] in original order:");
for (let place of places)
    console.log(place);
console.log("");
// Immutated sorting in alphabetical order
let sortedPlaces = places.map((a)=>a);
sortedPlaces.sort();
console.log ("places[] unmodified but in alphabetical order:");
for (let sortedPlace of sortedPlaces)
    console.log(sortedPlace);

console.log("places[] in original order:");
for (let place of places)
    console.log(place);

console.log("");
// Immutated sorting in reverse alphabetical order
sortedPlaces = places.map((a)=>a);
sortedPlaces.sort((a,b)=> a > b? -1 : 1);
console.log ("places[] unmodified but in reverse alphabetical order:");
for (let sortedPlace of sortedPlaces)
    console.log(sortedPlace);

console.log("places[] in original order:");
for (let place of places)
    console.log(place);

console.log("");
// Reverse ordered
places.reverse();
console.log("places[] in reversed order:");
for (let place of places)
    console.log(place);

console.log("");
// Revert reversal
places.reverse();
console.log("places[] in reverted order:");
for (let place of places)
    console.log(place);

console.log("");
// Mutated alphabetical order
places.sort();
console.log("places[] in alphabetical order:");
for (let place of places)
    console.log(place);

console.log("");
// Mutated reverse alphabetical order
places.sort((a,b)=>a > b?-1 : 1);
console.log("places[] in alphabetical order:");
for (let place of places)
    console.log(place);
