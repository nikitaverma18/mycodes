/*Write a program that rotates the elements of a list so that the elements at the first index move to the second elements at the second index move to the third and so on. The last element moves at the first index. (Take array and no_of_rotations from the user)

Test Case1:
Input:
1 2 3 4 5
2
Output:
3 4 5 1 2*/
const input = require("readline-sync");
let n = input.questionInt("enter the size of array:");
let a = [];
let b = [];
let k = input.questionInt("Enter the number of rotations: ");
     for(i=0; i<n; i++)
{
         let c = input.questionInt("enter the elements:");
         a.push(c);
   
}
         let i = k;
     while(i<n)
{
         b.push(a[i]);
         i = i + 1;
}
         i = 0;
     while(i<k)
{
         b.push(a[i]);
         i = i + 1;
}
         console.log("Rotated array:", b.join(' '));
 


