/*
 * Assignability error
 * This is the error of assigning wrong type of value to a variable.
 * TypeScript despite being invalid does compile into a valid js file,
 * so be careful with these errors. Ya akhi.
 */

let numberOfWings : string = "seven";
/* The below has assignability error: Value of type number is being assigned
   to a variable of type string*/
numberOfWings = 7;