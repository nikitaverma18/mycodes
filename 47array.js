/*Write a program to take a sorted array from the user as input and find a number using Binary Search the array.

Test Case1:
Input:
1 2 3 4 5
5
Output:
Yes*/
const input=require("readline-sync");
let n = input.questionInt("Enter the size of array:");
let i = 0;
let target = input.questionInt("Enter the target number:")
let a = [];
     while (i < n)
{
         let b = input.questionInt("Enter the elements: ");
         a.push(b);
         i = i + 1;
}

         k = 0;
         p=n-1;
     while (k<=p) 
{
         mid=Math.floor((k+p)/2);
     if (a[mid]===target) 
{
         console.log(`The number ${target} is found at index ${mid}`);
     break;
}
     else if (a[mid]<target)
{
         k = mid+1;
}
     else
{
         p=mid-1;
}
}
     if (a[mid]!==target) 
{
         console.log(`The number ${target} is not found in the array`);
}
