/*Write a program to find the sum of all diagonal elements of a matrix.*/
const input = require("readline-sync");
let n = input.questionInt("enter the size of array:");
let a = [];
let i = 0;
let s = 0;
let t = 0;
     while(i<n)
{
         a[i] = [];
         let j = 0;
     while(j<n)
{
         a[i][j] = input.questionInt("enter the elements:");
         j++
}
         i++
}
         i = 0;
         let b = "";
     while(i<n)
{
         let j = 0;
     while(j<n)
{
     if(i==j)
{
         b+=a[i][j]+ ",";
         s = s + a[i][j];
} 
         j++
}
         i++
}
         console.log("first diagonal:",b, "there sum:",s);
         let p = "";
         i = 0;
     while (i < n)
{
         let j = n - 1;
     while (j >= 0) 
{
     if (i + j === n - 1) 
{ 
         p += a[i][j] + ",";
         t = t + a[i][j]; 
}
          j--;
    }
         i++;
}
         console.log("Second diagonal:", p,"there Sum:",t);