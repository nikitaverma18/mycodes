/*Write a program to take size of array, array and target as input from the user and check whether the target exists in this array or not.

Test Case1:
Input:
7
1 2 3 4 5 6 7
3
Output:
Yes

Test Case2:
Input:
8
Output:
No*/
const input = require("readline-sync");
let n = input.questionInt("enter the number:");
let arr = [n];
let i = 0;
let m = 0;
     while(i<n)
{
         let b = input.questionInt("enter the number:");
         arr[i] = b;
         i = i + 1;
} 
         i = 0;
         let p = input.questionInt("enter the value:");
     while(i<n)
{
     if(arr[i]==p)
{
         m = 1;
}
         i = i + 1;
}
     if(m==1)
{
         console.log("yes");
}
     else
{
         console.log("no");
}
