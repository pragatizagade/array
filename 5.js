//Write a program to take N numbers from the user and print the frequency of every number.
const input=require("readline-sync")
let N=input.questionInt("Enter the N:");
let A=[];
for(let i=0;N>i;i++)
{
    A[i]=input.question("Enter the Value:");
}
for(let i=0;N>i;i++)
{
    if(A[i]!=="*")
    {
        let c=1;
        for(let j=i+1;N>j;j++)
        {
            if(A[i]===A[j])
            {
                c++;
                A[j]="*";
            }
        }
        console.log(A[i]," -> ",c);
        A[i]="*;"
    }
}
