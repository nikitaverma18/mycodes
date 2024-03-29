/*Learn these sorting algorithms and apply them to an unsorted array: Selection Sort
Bubble Sort*/
const input = require("readline-sync");
let n = input.questionInt("Enter the size of array:");
let a = [];
let i, j, temp;
       for (i = 0; i < n; i++) 
{
             a[i] = input.questionInt("enter the elements:");
}
       for (i = 0; i < n - 1; i++) 
{
       for (j = i + 1; j < n; j++) 
{
       if (a[i] > a[j]) 
{
             temp = a[i];
             a[i] = a[j];
             a[j] = temp;
}
}
}
             console.log("bubble sort:",a);