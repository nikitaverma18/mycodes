/*Write a program to take 4 numbers from the user and output the second max of these 4 numbers.*/
const input = require("readline-sync");
let a = input.questionInt("enter the first value:");
let b = input.questionInt("enter the second value:");
let c = input.questionInt("enter the third value:");
let d = input.questionInt("enter the fourth value:");
if (a>b){
   max = a,min = b; 
}
else 
{
    max = b,min = a;
}
if (c>d){
    max1 = c,min1 = d;
}
else 
{
    max1 = d,min1 = c;
}
if (max>max1)
{
    max2 = max,min2 = max1,s = min;
}
else 
{
    max2 = max1,min2 = max,s = min1;
}
if (min2>s){
    console.log("second max:",min2);
}
else{
    console.log("second max:",s);
}