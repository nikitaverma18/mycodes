/* 
 	
Write a program to take three variables to store your birth date, birth month, and birth year, respectively, and then print them one by one in a specified order.

Test Case1:
Explanation:
If the birth date is 22, the birth  is May and the birth year is 2001 then
Output:
22
May
2001 */
const input = require("readline-sync");
const monthNames = 
[
       "January", "February", "March", "April", "May", "June",
       "July", "August", "September", "October", "November", "December"
];
         let D = input.question("Enter your birth date: ");
         let M = input.question("Enter your birth month (as a number from 1 to 12): ") - 1;
         let Y = input.question("Enter your birth year: ");

          console.log("birth date:",D);
          console.log("birth month:",monthNames [M]);
          console.log("birth year:",Y);
