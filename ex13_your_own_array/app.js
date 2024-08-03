"use strict";
let modes = ["Honda Civic", "Buggati", "Lamborghini", "Tesla"];
let mode;
let i = 0;
for (mode of modes) {
    let printMode = mode;
    setTimeout(() => console.log("I would like to own a %s car.", printMode), 1000 * i);
    i++;
}
