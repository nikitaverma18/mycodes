/*Write a program to take four numbers from the user and print the greater number of the four numbers. (assume all the numbers are distinct).

Test Case1:
Input:
98
13
29
58
Output:
98 */
const input = require("readline-sync");
let a = input.questionInt("enter the number:");
let b = input.questionInt("enter the number:");
let c = input.questionInt("enter the number:");
let d = input.questionInt("enter the number:");
     if(a>b)
{
         max = a;
         min = b;
}
     else
{
         max = b;
         min = a;
}
     if(c>d)
{
         max1 = c;
         min = d
}
     else
{
         max1 = d;
         min = c;
}
     if(max>max1)
{
         console.log(max);
}
     else
{
         console.log(max1);
}
