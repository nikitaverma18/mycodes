/*Write a program to take two numbers A and B from the user and calculate the quotient and remainder when number A is divided by number B.

Note: Print the output in the order as mentioned in the question.

Test Case1:
Input:
12
5
Output:
2
2 */
const input = require("readline-sync");
let a = input.questionInt("enter the number:");
let b = input.questionInt("enter the number:");
{
     Q = Math.floor(a/b);
     R = a % b;
}
     console.log(Q);
     console.log(R);