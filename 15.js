//Write a program to find the position of an element in a 2D array or Matrix

const input=require("readline-sync")
let N=input.questionInt("Enter the Row or Colmun:"),A=[],E=input.questionInt("Enter the E:")
for(let i=0;N>i;i++)
{
    A[i]=[]
    for(let j=0;N>j;j++)
    {
        A[i][j]=input.questionInt("Enter the Value:")
        /*if(A[i][j]===E)
        {
            z=i,y=j;   
        }*/
    }
}
//console.log("row: "+z+"\n"+"Column: "+y)
let i;
for( i=0;N>i;i++)
{
    c=A[i].findIndex((element) => element > (E-1))
    break;
}
console.log("Row : "+i+"\n"+"Colmun : "+c)