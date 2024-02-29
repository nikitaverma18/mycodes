/*Write a program to check if a number is a special type of number called a 'prime number'. A prime number is a number that is only divisible by 1 and itself, and it doesn't have any other factors.*/
const input = require("readline-sync");
let n = input.questionInt("enter the value:");
if (n%2==0)
{
    console.log("number is prime number:no");
}
else
{
    console.log("number is prime number:yes");
}