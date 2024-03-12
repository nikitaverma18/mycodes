/*Write a program to calculate the sum of the following series where N is input from the user. 1 + 1/2 + 1/3 + 1/4 + 1/5 +…………1/N

Test Case1:
Input:
4
Output:
2.08 */
const input = require("readline-sync");
let n = input.questionInt("enter the value:");
let i = 1;
let s = 0;
     while(i<=n)
{
          s = s + 1 / i;
          i = i + 1;
}
          console.log(s);