/*  
 	
Write a program to take a number from the user and then determine if that number is a special type of number called a 'perfect number'.
 A perfect number is a number where the sum of all its factors (excluding the number itself) is equal to the number itself. Print Yes if the number is a perfect number else print No. 

Test Case1:
Input:
6
Output:
Yes
Explanation:
The program takes the number 6 as input. It then calculates the factors of 6, which are 1, 2, and 3. The sum of these factors (1 + 2 + 3) is equal to 6, so 6 is a perfect number.

Test Case2:
Input:
12
Output:
No
Explanation:
The program takes the number 12 as input. It calculates the factors of 12, which are 1, 2, 3, 4, and 6. The sum of these factors (1 + 2 + 3 + 4 + 6) 
is equal to 16, which is not equal to 12. Therefore, 12 is not a perfect number.*/
const input = require("readline-sync");
let n = input.questionInt("Enter the number: ");
let i = 1;
let s = 0;
     while (i != n) 
{
     if (n % i == 0) 
{
         s = s + i;
}
         i = i + 1;
}

    if (s == n)
{
         console.log("Perfect number: Yes");
} 
    else 
{
         console.log("Perfect number: No");
}