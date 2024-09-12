//Write a program that rotates the elements of a list so that the elements at the first index move to the second elements at the second index move to the third and so on. The last element moves at the first index. (Take array and no_of_rotations from the user)
const input=require("readline-sync")
let N=input.questionInt("Ente the N:")
let K=input.questionInt("Enter the Rotation Number:")
let A=[],C=[],i=0
for(i=0;N>i;i++)
{
    A[i]=input.questionInt("Ent the Value:")
}
var a=K%N,l=a-1,j=0;
i=a-1
if(a==0)
{
    i=N-1;
    l=i;
}

    for(i;N>i;)
    {
        C[j]=A[i]
        i++;
        j++;
    }
    for(let m=0;l>m;)
    {
        C[j]=A[m]
        m++;
        j++;
    }

console.log(C)