// Write a program to take N numbers from a user as input and store them in an array and then take another number from the user M, and delete the Mth element from the array. Print the final array.

const a= require("readline-sync")
let A=[];
let N=a.question("Enter N:")
let M=a.question("Enter the M:")
for(let i=0;N>i;i++)
{
        A[i]=a.question("Enter the element:")
}
let z=0;
for(i=0;N-1>i;i++)
{
    if(M==i||z==1)
    {
        A[i]=A[i+1]
        console.log(A[i])
        z=1
    }
    else
    {
        console.log(A[i])
    }
}