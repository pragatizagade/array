//Write a program to take value N from the user and print the following pattern based on the user input.
//array = [2, 3, 5, 2, 1]
//>>
//>>>
//>>>>>
//>>
//>

const input=require("readline-sync")
let N=input.questionInt("Enter the N:"),a,s=""
for(let i=0;N>i;i++)
{
    a=input.questionInt("Enter the value:")
    s+="> ".repeat(a)+" \n"
}
console.log(s)