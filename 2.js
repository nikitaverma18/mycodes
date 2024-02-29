/* Write a program to take four numbers from the user and print the greater number of the four numbers. */
const input = require("readline-sync");
let a = input.questionInt("enter the first value:");
let b = input.questionInt("enter the second value:");
let c = input.questionInt("enter the third value:");
let d = input.questionInt("enter the fourth value:");
if (a>b && a>c && a>d){
    console.log("greater number is:",a);
} else if (b>a && b>c && b>d){
    console.log("greater number is:",b);
} else if (c>a && c>b && c>d){
    console.log("greater number is:",c);
}else{
    console.log("greater number is:",d
    );
}