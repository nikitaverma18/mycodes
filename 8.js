/*Write a program to take marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer out of 100. Calculate the percentage and grade according to the following:
Percentage >= 90% : Grade A
Percentage >= 80% : Grade B
Percentage >= 70% : Grade C
Percentage >= 60% : Grade D
Percentage >= 40% : Grade E
Percentage < 40% : Grade F.*/
const input = require("readline-sync");
let p = input.questionInt("enter the marks:");
let c = input.questionInt("enter the marks:");
let b = input.questionInt("enter the marks:");
let m = input.questionInt("enter the marks:");
let s = input.questionInt("enter the marks:");
let r =  ((p+ c + b + m + s) / 500) * 100;
if (r>=90)
{
    console.log("grade: A");
}
else if (r>=80)
{
    console.log("grade: B");
}
else if (r>70)
{
    console.log("grade:C ");
}
else if (r>60)
{
    console.log("grade: D");
}
else if (r>40)
{
    console.log("grade: E");
}
else
{
    console.log("grade: F");
}
