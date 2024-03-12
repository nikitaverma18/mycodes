/*In a certain hospital, the weights of newborn babies are recorded each month and then processed at the end of the month to determine the following:
1. Mean weight of the babies
2. maximum of the weights
3. Minimum the weights.
Write a program to show how the weights can be stored as an array first and then processed to determine the desired outputs. Input n from the user where n is the number of babies born in a particular month.
*/
const input = require("readline-sync");
let n = input.questionInt("enter the number of babies:");
let a = [];
let i = 0;
let s = 0;
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
         console.log("average weight of new born babies:",p);
        
         max = a[0];
         min = a[0];
         i = 1;
     while(i<=n)
{
     if(a[i]>max)
{
         max = a[i];
}
     if(a[i]<min)
{
         min = a[i];
}
         i = i+1;
         
}
         console.log("maximum of the weights:",max);
         console.log("minimum weights:",min);

