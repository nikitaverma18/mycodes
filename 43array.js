/*Write a program to create an array of 7 numbers from the user, and print true if the complete array consists of consecutive numbers or not.
Consecutive numbers mean they should follow the a,a+1,a+2,a+3,a+4...form.
If the user entered elements 3,4,5,6,7,8,9 then the output should be "Yes".
If the user entered element 9,8,7,6,5,4,3 then the output should be "No"*/
const input = require("readline-sync");
let n = input.questionInt("enter the size:");
let a = [];
let i = 0;
let j = 1;
let p = j;
let c = 0;
      while(i<n)
{
         let b = input.questionInt("enter the elements:")
         a.push(b);
         i++
}
         i = 0;
     while(i<n-1)
{
     if(a[j]>a[i])
{
         l = a[j]-a[i];
         a[k=p+l];
         j++;
     if(a[k]==a[j])
{
         c = 1;
} 
}
     else
{
         j++
}
         i++
}
     if(c==1)
{
         console.log("it's consecutive numbers: yes");
}
     else
{
         console.log("it's consicutive numbers: no");
}