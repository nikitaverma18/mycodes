/*Write a program to find the sum and average of elements in an array. Take elements as input from the user.*/
const input = require("readline-sync");
let n = input.questionInt("enter the size of array:");
let i = 0;
let s = 0;
let a = [];
     while(i<n)
{
         let b = input.questionInt("enter the elements:");
         a.push(b);
         i++
}
         i = 0;
     while(i<n)
{
         s = s + a[i];
         i++
}
          p = s/n;
         console.log("sum of the numbers:",s);
         console.log("average of the numbers:",p);