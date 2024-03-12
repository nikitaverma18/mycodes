/*Write a program to take three numbers from the user and print the greater number of the three numbers. (Assume all three numbers are distinct)

Test Case1:
Input:
20
3
43
Output:
43 */
const input = require("readline-sync");
let a = input.questionInt("enter the value:");
let b = input.questionInt("enter the value:");
let c = input.questionInt("enter the value:");
     if(a>b)
{
     if(a>c)
{
         console.log(a);
}
         console.log(c);
}
     else if(b>c)
{
         console.log(b);
} 
     else
         console.log(c);