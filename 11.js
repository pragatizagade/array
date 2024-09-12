//Write a program to take two numbers as input each in a different array. Each digit of the number should be in an element in the array. calculate their product in another array such that each digit is stored as an array element and print the product.

//Testcase1:
//Input:
//3 6 7
//7 6
//Output:
//2 7 8 9 2
//Explanation:
//The product of numbers 367 and 76 is 27892.
const input=require("readline-sync")
let N=input.questionInt("Enter the Digit of 1 Number:"),M=input.questionInt("Enter the Digit of 2 Number:"),A=[],B=[]
for(let i=0;N>i;i++)
{
    A[i]=input.questionInt("Enter the 1 number Digit :")
}
for(let i=0;M>i;i++)
{
    B[i]=input.questionInt("Enter the 2 number Digit :")
}
let a=A.join("")*B.join('')
let b=a.toString()
let c=Array.from(b,Number);// it is converting into array of each digit as a element in integer part
console.log(c)