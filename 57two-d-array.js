/*Write a program to find the minimum element in the matrix.*/
const input = require("readline-sync");
let r = input.questionInt("size of row:");
let c = input.questionInt("size of column:");
let a = [];
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
let q = a[0][0];
i = 0;
while(i<r)
{
    j = 0;
    while(j<c)
    {
        if (a[i][j] < q) 
        {
            q = a[i][j];
        }
        j++
    }
    i++
}
console.log("The minimum element in the matrix is:", q);
