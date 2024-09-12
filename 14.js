//Write a program to take value N from the user and print the following pattern based on the user input.
//array = [2, 3, 5, 2, 1]

//*
//*
//* *
//* * * *
//* * * * *

const input=require("readline-sync")
let N=input.questionInt("Enter the N:"),A=[],c=[]
for(let i=0;N>i;i++)
{
    A[i]=input.questionInt("Enter the Value:")
}
let B=A.sort();
for(let i=0;N>i;i++)
{
	c[B[i]]++;
}
console.log(c);	
