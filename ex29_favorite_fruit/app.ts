// TODO: Use function for printing fruit being liked
let favorite_fruits : string[] = ["grapes","banana","orange"];
let fruit : string = "apple";
if (favorite_fruits.includes(fruit)) {
    console.log("You are really like %s%s",fruit,fruit[-1] == 's'?"":"s");
}
fruit = "orange";
if (favorite_fruits.includes(fruit)) {
    console.log("You are really like %s%s",fruit,fruit[fruit.length -1] == 's'?"":"s");
}
fruit = "banana";
if (favorite_fruits.includes(fruit)) {
    console.log("You are really like %s%s",fruit,fruit[fruit.length-1] == 's'?"":"s");
}
fruit = "grapes";
if (favorite_fruits.includes(fruit)) {
    console.log("You are really like %s%s",fruit,fruit[fruit.length-1] == 's'?"":"s");
}
fruit = "plum";
if (favorite_fruits.includes(fruit)) {
    console.log("You are really like %s%s",fruit,fruit[fruit.length-1] == 's'?"":"s");
}