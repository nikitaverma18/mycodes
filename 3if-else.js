/*Imagine you and your friend have brought different snacks for lunch. However, you want to exchange your snacks with each other. To do this, you decide to enlist the help of a friend who can hold one snack box while you exchange with your other friend. Similarly, in programming, we can use a third variable to help us swap the values of two variables.

Write a program to take two values from the user and swap them. 

Hint: You can use a third variable.

Tips:

1. Think about how you would exchange snack boxes with your friend and the helper.
2. Pay attention to the role of the helper in facilitating the swap.
3. Understand why the helper variable is necessary for the swap operation.

Test Case1:
Input:
12
4
Output:
4
12 */
const input = require("readline-sync");
let a = input.questionInt("a is taking snacks:");
let b = input.questionInt("b is taking snacks:")
{
     c = a;
     a = b;
     b = c;
}
     console.log(a);
     console.log(b);