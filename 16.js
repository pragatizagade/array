// Write a program to transpose matrix A. Store the result in a separate matrix.


const input=require("readline-sync");
let r=input.questionInt("Enter the Row:"),c=input.questionInt("Enter the Column:");
let A=[];
for(let i=0;r>i;i++)
{
	A[i]=[];
	for(let j=0;c>j;j++)
	{
		A[i][j]=input.questionInt("Enter the Element:")
	}
}
let B=[]
for(let i=0;c>i;i++)
{
	B[i]=[];
	for(let j=0;r>j;j++)
	{
		B[i][j]=A[j][i];
	}
}
for(let i=0;c>i;i++)
{
	console.log(B[i]);
}

