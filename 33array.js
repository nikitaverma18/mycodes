/* 
Write a program to create an array of natural numbers till 20 and print it.*/
const input = require("readline-sync");
let n = input.questionInt("enter the number:");
let arr = [];
let i = 0,b=1;
while(i<20)
{
    
         arr[i]=b;
         i = i + 1;
         b++;
}
         i = 0;
    while(i<20)
{
         console.log(arr[i]);
         i = i + 1;
}
