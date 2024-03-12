let numbers : number[] = [1,2,3,4,5,6,7,8,9];
let a_number : number;
for (a_number of numbers) {
    if (a_number == 1) {
        console.log("%dst",a_number);
    } else if (a_number == 2) {
        console.log("%dnd",a_number);
    } else if (a_number == 3) {
        console.log("%drd",a_number);
    } else {
        console.log("%dth",a_number);
    }
}