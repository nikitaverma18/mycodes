/*Write a program that takes a number from the user and prints the number that is formed by reversing the digits of the number.

Test Case1:
Input:
123
Output:
321 */
const input = require("readline-sync");
let n = input.questionInt("enter the number:");
let s = 0
      while(n>0)
{
         r = n % 10;
         s = s * 10 + r
         n = Math.floor(n/10);
    
}
         console.log(s);