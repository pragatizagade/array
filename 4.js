//Write a program to take input n from the user and print Pascal's triangle of n rows.

const input=require("readline-sync")
let N=input.questionInt("Enter The N:")
let i=0,A=[],a

while(N>=i)
{   A[i]=[]
    
    let j=0,b=0;
    while(i>=j)
    {   
        if(j==i||j==0)
        {
            A[i][j]=1;
            j++;
        }
        else
        {
            a=A[i-1][b]+A[i-1][b+1]
            A[i][j]=a
            b++;
            j++;
        }
    }
    i++;

}
i=0
while(N>=i)
{
    console.log(A[i]);
    i++;
}