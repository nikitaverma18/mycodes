/* write a program to take a positive number from the user and then display the last digit of that number.
        
Test Case1:
Input:
843
Output:
3 */
const input = require("readline-sync");
let n = input.questionInt("enter the number:");
{
     L = n % 10;
}
     console.log(L);