/*Write a program to subtract two matrices and store them in a separate matrix.*/
const input = require("readline-sync");
let r = input.questionInt("size of row:");
let c = input.questionInt("size of columns:");
let a = [];
let b = [];
let k = [];
     for (let i = 0; i < r; i++) 
{
         a[i] = [];
     for (let j = 0; j < c; j++) 
{
         a[i][j] = input.questionInt(`enter the [${i}] [${j}] elements of first array:`);
}
}

     for (let i = 0; i < r; i++) 
{
         b[i] = [];
     for (let j = 0; j < c; j++)
{
         b[i][j] = input.questionInt(`enter the [${i}] [${j}] elements of second array:`);
}
}
     for (let i = 0; i < r; i++) 
{
         k[i] = [];
     for (let j = 0; j < c; j++)
{
         k[i][j] = a[i][j] - b[i][j];
}
}
         console.log(k);