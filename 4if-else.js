/* 
 	
Write a program to take two numbers from the user and perform Six basic operations (addition, subtraction, multiplication, division, integer division and modulus) on those two numbers.
        
Note: Print the output in the order as mentioned in the question.

Test Case1:
Input: 
12 
5
Output: 
17
7
60
2.4
2
2 **/
const input = require('readline-sync');
let n = input.questionInt("enter the number:");
let p = input.questionInt("enter the number:");
{
     a = n + p;
     s = n - p;
     m = n * p;
     d = n / p;
     i = Math.floor(n/p);
     l = n % p;

}
     console.log(a,s,m,d,i,l);