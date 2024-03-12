/*  
 	
Write a program to take a number from the user and print that number as Odd or Even.

Test Case1:
Input:
56
Output:
Even

Test Case2:
Input:
87
Output:
Odd */
const input = require("readline-sync");
let n = input.questionInt("enter the number:");
     if(n%2==0)
{
         console.log("number is:even");
}
     else
{
         console.log("number is:odd");
}