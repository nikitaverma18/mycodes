/*
 	
Write a program to take 3 numbers from the user and output the second max of 3 numbers.
(First, do it in the normal way then do it by using 3 comparisons)

Test Case1:
Input:
5
4
6
Output:
5 */
const input = require("readline-sync");
let a = input.questionInt("enter the value:");
let b = input.questionInt("enter the value:");
let c = input.questionInt("enter the number:");
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
     if(max>c)
{
         max1 = max;
         min1 = c;
}
     else
{         
         max1 = c;
         min1 = max;
}
     if(min>min1)
{
          console.log("second max:",min);
}
     else
{
          console.log("second max:",min1);
}