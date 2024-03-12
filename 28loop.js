/*Write a program to take a number from the user and print the sum of the digits of the given number.

Test Case1:
Input:
456
Output:
15
Explanation:
4+5+6 = 15*/
const input = require("readline-sync");
let n = input.questionInt("enter the number:");
let s = 0
      while(n>0)
{
         r = n % 10;
         s = s + r
         n = Math.floor(n/10);
    
}
         console.log(s);
