// Uses formatted string to use the variable
let person : string = "Faisal";
console.log("Hi %s, would you like some tea?",person);
// Following would print using string concatenation
// console.log("Hi " + person + ", would you like some tea?");
/*
The following would print using console.log's variable arguments,
but it would also add a space before the comma.
*/
// console.log("Hi",person,", would you like some tea?");