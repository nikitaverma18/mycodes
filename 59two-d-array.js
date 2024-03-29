/*Write a program to find the position of an element in a 2D array or Matrix.*/
const input = require("readline-sync");
let r = input.questionInt("enter the size of row array:");
let c = input.questionInt("enter the size of column array:");
let i = 0;
let a = [];
     while(i<r)
{
         a[i] = [];
         let j = 0;
     while(j<c)
{
         a[i][j] = input.questionInt("enter the  elements:");
         j++;
}
         i++;
}
         let found = false;
         i = 0;
         let target = input.questionInt("enter the target value:")
     while(i<r)
{
         j = 0;
     while(j<c)
{
     if(a[i][j]==target)
{
         console.log(`Element ${target} found at position (${i},${j})`)
         found = true;
}
         j++
}
         i++
}
     if (!found) 
{
         console.log(`Element ${target} not found in the array.`);
}


