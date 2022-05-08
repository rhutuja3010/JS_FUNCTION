// Q9.Write a Python program to generate and print a list of first and last 5 
// elements where the values are square of numbers between 1 and 30 (both included).
// Output :-([1, 4, 9, 16, 25], [676, 729, 784, 841, 900]).

let l1=[];
let l2=[];
let l=[]
for (let i=1;i<=5;i++){
    m1=i*i
    l1.push(m1)
}
for (let i=26;i<=30;i++){
    m2=i*i
    l2.push(m2)
}
l.push(l1,l2)
console.log((l))