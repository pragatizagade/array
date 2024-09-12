//Write a program to add two matrices and store them in a separate matrix.

//Test Case1:
//Input:
//Matrix 1:
//1 2 3
//4 5 6
//7 8 9
//Matrix 2:
//9 8 7
//6 5 4
//3 2 1
//Output:
//10 10 10
//10 10 10
//10 10 10

const input = require("readline-sync")
let N=input.questionInt("Enter the row:"),A=[],B=[],C=[]
for(let i=0;N>i;i++)
{
    A[i]=[]
    for(let j=0;N>j;j++)
    {
        A[i][j]=input.questionInt("Enter the Value of 1M:");
    }
}
for(let i=0;N>i;i++)
{
    B[i]=[]
    for(let j=0;N>j;j++)
    {
        B[i][j]=input.questionInt("Enter the Value of 2M:");
    }
}
for(let i=0;N>i;i++)
{
    C[i]=[]
    for(let j=0;N>j;j++)
    {
        C[i][j]=A[i][j]+B[i][j]
    }
}
for(let i=0;N>i;i++)
{
    console.log(C[i])
}

