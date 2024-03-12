/* 
 	
Write a program to take N numbers from the user and print the frequency of every number.

Test Case 1:
Input:
6
2 4 2 6 3 6
Output:
2 - 2
4 - 1
6 - 2
3 - 1*/
const input = require("readline-sync");
let n = input.questionInt("enter the number:");
let arr = [];
let i = 0;
let c = 1;
while(i<n)
{
    let d = input.questionInt("enter the numbers:");
    arr[i] = d;
    i = i + 1;
}

     i = 0;
     while(i<n)
{
         j = i + 1;
     while(j<n)
{
     if(arr[i]==arr[j])
{
         c = c + 1;
         let k = j;
     while(k<n-1)
{
         arr[k]=arr[k+1];
         k = k + 1;
}
         n = n - 1;
}
     else
{
         j = j + 1;
}
}
     if(c>1)
{
         console.log(arr[i],"-",c);
}
         c = 1;
         i = i + 1;
}