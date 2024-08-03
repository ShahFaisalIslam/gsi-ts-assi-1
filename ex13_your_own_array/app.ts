let modes : string[] = ["Honda Civic","Buggati","Lamborghini","Tesla"];
let mode : string;
let i = 0;
for (mode of modes) {
    let printMode : string = mode;
    setTimeout(() =>
    console.log("I would like to own a %s car.",printMode),
    1000 * i);
    i++;
}