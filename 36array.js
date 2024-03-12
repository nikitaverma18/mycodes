/* 
 	
Write a program to print the sum of all the odd numbers and even numbers in the given array.
Note: In the output, you should print odd numbers sum and even numbers sum in this order only.

Test Case1:
Input:
23 45 32 25 46 33 71 90
Output:
197
168*/
const input = require("readline-sync");
let n = input.questionInt("enter the number:");
let arr = [n];
let i = 0, s = 0, p = 0;
     while(i<n)
{
         let b = input.questionInt("enter the numbers:")
         arr[i] = b;
         i = i + 1;
}
         i = 0;
     while(i<n)
{
     if(arr[i]%2==0)
{
         s = s + arr[i];
}
     else
{
         p = p + arr[i];
}
         i = i + 1;
}        console.log("sum of odd numbers:",p);
         console.log("sum of even numbers:",s);
