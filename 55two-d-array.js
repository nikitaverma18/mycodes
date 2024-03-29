/*Write a program to transpose matrix A. Store the result in a separate matrix.*/
const input = require("readline-sync");
let r = input.questionInt("size of row:");
let c = input.questionInt("size of column:");
let a = [];
let b = [];
let i = 0;
while (i < r)
{
           a[i] = [];
           let j = 0;

      while (j < c) 
{
           a[i][j] = input.questionInt(`enter the [${i}] [${j}] elements of first array:`);
           j++;
}
           i++;
}
         i = 0;
      while (i < c) 
{
           b[i] = [];
           let j = 0;
      while (j < r) 
{
           b[i][j] = a[j][i]
           j++;
}
           i++;
}
           console.log(b);


     
