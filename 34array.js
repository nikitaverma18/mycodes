/* 
 	
Write a program to reverse the array and print the reversed array.

Test Case1:
Input:
23 45 32 25 46 33 71 90
Output:
90
71
33
46
25
32
45
23*/
const input = require("readline-sync");
let n = input.questionInt("enter the number:");
let arr = [23,45,32,25,46,33,71,90]
let i = n-1;
     while(i>=0)
{
         console.log(arr[i]);
         i = i - 1;
}