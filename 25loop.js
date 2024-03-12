/* Write a program to take two integers M, and N and print the sum of numbers in the range M to N.

Test Case1:
Input:
2
7
Output:
27
Explanation:
Output should be 27 as the sum of numbers (2+3+4+5+6+7=27) */
const input = require("readline-sync")
let m = input.questionInt("enter the number:");
let n = input.questionInt("enter the number:");
let s = 0;
let i = m;
     while(i<=n)
{
         s = s + i;
         i = i + 1;
}
         console.log(s);