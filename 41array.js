/*
Write a program, take two sorted arrays of size m and n from the user as input and return the median of the two sorted arrays.

Test Case1:
Input:
1 3
2
Output:
2.0

Test Case2:
Input:
1 2 
3 4
Output:
2.5*/
const input = require("readline-sync");

let n = input.questionInt("Enter the size of first array: ");
let m = input.questionInt("Enter the size of second array: ");

let a = Array(n);
let b = Array(m);
let c = Array(n + m);
     for (let i = 0; i < n; i++)
{
         a[i] = input.questionInt("Enter element of first array: ");
}
     for (let i = 0; i < m; i++)
{
         b[i] = input.questionInt("Enter element of second array: ");
}
         let i=0,j=0,k=0;
     while(i < n && j < m)
{
     if (a[i] <= b[j])
{
         c[k++] = a[i++];
} 
     else
{
         c[k++] = b[j++];
}
}
     while (i < n)
{
         c[k++] = a[i++];
}
     while(j < m)
{
         c[k++] = b[j++];
}
    
         console.log("Merged sorted array: ",c);
         let r=Math.floor((m+n)/2)
     if ((m+n)%2==0)
{
         d = c[r-1]+c[r]
         d=d/2;
}
     else
{
         d =c[r];
}
         console.log(d);
