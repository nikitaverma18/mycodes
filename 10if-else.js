/* Write a program to take two numbers from the user and determine the greater of those two given numbers.

Test Case1:
Input:
20
3
Output:
20

Test Case2:
Input:
5
7
Output:
7 */
const input = require("readline-sync");
let a = input.questionInt("enter the number:");
let b = input.questionInt("enter the number:");
     if(a>b)
{
         console.log("greater number is:",a);
}
     else
{
         console.log(("greater number is:",b));
}   