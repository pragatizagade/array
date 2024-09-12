//magic square
const input = require("readline-sync")
let N = input.questionInt("Enter the N:")
let A = [];
for(let i=0;N>i;i++)
{
    A[i]=[]
    for(let j=0;N>j;j++)
    {
        A[i][j]=0
    }
}
let c=Math.floor(N/2),r=0,i=2;

A[r][c]=1;
while((N*N)>=i)
{
    r--
    c++
    if((r<0&&c>N-1)||(A[r][c]>0))
    {
        r+=2
        c--
    }
    else
    {
        if(r<0)
        {
            r=N-1
        }
        if(c>=N)
        {
            c=0
        }
    }
    A[r][c]=i
    i++;
}
for(let i=0;N>i;i++)
{
    console.log(A[i]);
}