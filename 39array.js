/*Write a program to take two sorted arrays of size M, N from the user as input and merge them into a single sorted array of size M+N (Do not use sorting)

Test Case1:
Input:
1 2 5 6
3 4 7 9
Output:
1 2 3 4 5 6 7 9*/
const input = require("readline-sync");
let n = input.questionInt("enter the size of first array:");
let m = input.questionInt("enthe the size of second array:");
let a = Array(n);
let b = Array(m);
let c = Array(n+m);
     for(let i = 0; i<n; i++)
{
         a[i] = input.questionInt("enter number:");
}
     for(let i =0; i<m; i++)
{
         b[i] = input.questionInt("enter number:")
}
         let i = 0,j =0,k = 0, s=n+m;
     while(k<s)
{
     if(i<m)
{
     if(j<n)
{
     if(a[i]<b[j])
{
         c[k++]=a[i++];
}
     else
{
         c[k++]=b[j++];
}
}
     else
{
         c[k++]=a[i]++;
}
}    else
{
         c[k++]=b[j++];
}

}
         console.log(c);