//Write a program to take a binary array which contains 0 and 1, and print the maximum number of consecutive 1's in the array.
const input=require("readline-sync")
let N=input.questionInt("Enter the N:"),A=[],max=Number.MIN_VALUE,c=0;
for(let i=0;N>i;i++)
{
    A[i]=input.questionInt("Enter the Value:")
}
for(let i=0;N>i;i++)
{
    if(A[i]==1)
    {
        c++;
        if(c>max)
        {
            max=c;
        }
    }
    else{
        c=0
    }
}
console.log(max)