/*Write a program to add two matrices and store them in a separate matrix*/
const input = require("readline-sync");
let r = input.questionInt("size of row:");
let c = input.questionInt("size of columns:");
let a = [];
let b = [];
let k = [];
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

      while (i < r) 
{
           b[i] = [];
           let j = 0;
      while (j < c) 
{
           b[i][j] = input.questionInt(`enter the [${i}] [${j}] elements of second array:`);
           j++;
}
           i++;
}
     
           i = 0;
      while (i < r)
{
           k[i] = [];
           let j = 0;
      while (j < c) 
{
           k[i][j] = a[i][j] + b[i][j];
            j++;
}
            i++;
}
     
           console.log(k);
         






