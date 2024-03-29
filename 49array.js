// /*Write a program to take an array of size N and a number K from the user as input, and print the elements of an array in a rotated manner with a gap of K. Eg, let us say the array is  3, 6, 7, 5, 10. And the value of k = 3. The output should be - 7, 3, 10, 6, 5. If k = 2, the output should be  6, 5, 3, 10, 7
	
// 	Test Case1:
// Input:
// 3 6 7 5 10
// 3
// Output:
// 7 3 10 6 5

// Test Case2:
// Input:
// 3 6 7 5 10
// 2
// Output:
// 6 5 3 10 7*/
// const input = require("readline-sync");
// let n = input.questionInt("Enter the size of array: ");
// let a = [];
// let i = 0;
// let gap = input.questionInt("enter the gap number:")
// let k = 0;

//      while (i < n) 
// {
//           let b = input.questionInt(`Enter the element at index ${i + 1}: `);
//           a.push(b);
//           i++;
// }
//           i = 0;
//      while(k<n)
// {
// 	      let s = 0;
// 	 while(s<gap)
// {
// 		  r = i % n;
// 	 if(a[r]!=0)
// {
// 		  s = s + 1;
// }
// 		  i = i + 1;
// }
// 	      console.log(a[r]);
// 	      a[r] = 0;
// 	      k = k + 1
// }


const input=require("readline-sync")
let n=input.questionInt("enter a size of array = ")
let i;
let arr =[];
let c=0;
for(i=0; i<n; i++)
{
	arr[i]=input.questionInt("enter the element of array = ");
}
for(i=0; i<n; i++)
{
	for (j=0; j<n; j++)
	{
		if(arr[i]==arr[j])
		{
			c=c+1;
		}
	}
	console.log(c)
}