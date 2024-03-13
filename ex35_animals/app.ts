let animals : string[] = ["ant","lion","eagle"];
let animal : string;
for (animal of animals) {
    console.log(animal);
}
for (animal of animals){
    console.log("%s is an amazing animal.",animal);
}

console.log("All of these animals have two eyes.");