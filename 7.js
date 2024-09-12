//Write a program to take an array of size N and a number K from the user as input, and print the elements of 
//an array in a rotated manner with a gap of K. Eg, let us say the array is 3, 6, 7, 5, 10. And the value of k = 3. The output should be - 7, 3, 10, 6, 5. If k = 2, the output should be 6, 5, 3, 10, 7

 const input=require("readline-sync")
 let N=input.questionInt("Enter the N:")
 let K=input.questionInt("Enter the Gap:")
 let m=0,i=0,B=[],A=[];
 for(let k=0;N>k;k++)
 {
    A[k]=input.questionInt("Enter the Value:")
 }
 while(N>i)
 {
    let j=1;
    while(K+1>j)
    {
        if(m>=N)
        {
            m=0
        }
        if(A[m]!=-1)
        {
            j++
        }
        m++;
        
    }
    m--
    B[i]=A[m]
    A[m]=-1
    i++
    m++
 }
 console.log(B)