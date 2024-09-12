//Write a program to take N numbers from a user as input and then print the duplicates in those N numbers. Also, take N as an input from the user.


const a= require("readline-sync")
let N=a.questionInt("Enter N:")
let A=[]
for(let i=0;N>i;i++)
{
    A[i]=a.questionInt("Enter the Value:");
}


