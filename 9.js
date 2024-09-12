//Write a program to take two sorted arrays of size M, N from the user as input and merge them into a single sorted array of size M+N (Do not use sorting)
const input=require("readline-sync")
let N=input.questionInt("Enter the N:"),M=input.questionInt("Enter the M:"),A=[],B=[],C=[],e=0;
for(let i=0;M>i;i++)
{
    A[i]=input.questionInt("Enter the V1:")
}
for(let i=0;N>i;i++)
{
    B[i]=input.questionInt("Enter the V2:")
}
i=0,k=0
    let j=e;
    while(N>j&&M>i)
    {   
        if(A[i]>B[j])
        {
            C[k]=B[j]
            k++
            j++
        }
        else
        {
            C[k]=A[i]
            k++
            i++
        }
    }
    while(N>j)
    {
        C[k]=B[j]
            k++
            j++
    }
    while(M>i)
    {
        C[k]=A[i]
            k++
            i++
    }
                  

console.log(C)
