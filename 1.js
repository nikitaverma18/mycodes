/*Write a program to take three numbers from the user and print the greater number of the three numbers.*/
const input = require("readline-sync");
let a = input.questionInt("enter the first value:");
let b = input.questionInt("enter the second value:");
let c = input.questionInt("enter the third value:");
if (a>b && a>c){
    console.log("greater number is:",a);
} else if (b>a && b>c){
    console.log("greater number is:",b);
} else{
    console.log("greater number is:",c);
}
