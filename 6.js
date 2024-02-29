/*Write a program to take a year from the user and output whether a given year is a leap year or not.
(Hint. A year is said to be a leap year if it is either divisible by 4 but not by 100 or divisible by 400.)*/
const input = require("readline-sync");
let y = input.questionInt("enter the value:");
if (y%100==0)
{
if (y%400==0)
{
    console.log("leap year: yes");
}
else
{
    console.log("leap year: no");
}
}
else if(y%4==0)
{
    console.log("leap year: yes");
}
else
{
    console.log("leap year: no");
}