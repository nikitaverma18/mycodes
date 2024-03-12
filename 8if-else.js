/* 
 	
Write a program to take two inputs from the user and swap them without using a temporary or third variable.

Test Case1:
Input:
2
3
Output:
3
2 */
const input = require("readline-sync");
let n = input.questionInt("enter the number:");
let p = input.questionInt("enter the number:");
{
      r = (n * p)/n;
      q = (p * n)/p;
}
      console.log(r);
      console.log(q);