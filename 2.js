// Write a program to take N numbers from a user as input and then take another number from the user M, and a number X from the user to be inserted at the Mth location in the array. Print the final array.
const a= require("readline-sync")
let N=a.question("Enter the N:")
let M=a.question("Enter the M:")
let X=a.question("Enter the X:")
let A=[]
for(let i=0;N>i;i++)
{
    A[i]=a.question("Enter the Element:")
    if(M==i)
    {
        A[i]=X;
    }
}
for(let i=0;N>i;i++)
{
    console.log(A[i])
}