"use strict";
let models = ["Honda Civic", "Buggati", "Lamborghini", "Tesla"];
for (let model of models) {
    console.log("I would like to own a %s car.", model);
}
// This is the most I could find out about index assigning error.
// Gives undefined, but does not trigger TypeScript error.
console.log("I would like to own a %s car", models[-77]);
console.log("I would like to own a %s car", models[3]);
