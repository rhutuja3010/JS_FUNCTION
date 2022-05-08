// Q10.Create a function that takes 2 positive integers in form of a string as
// an input, and outputs thesum (also as a string):
// "4", "5" --> "9"
// "34", "5" --> "39"
// Notes:
// If either input is an empty string, consider it as zero.



function sum(n1,n2){
    let i1=Number(n1)
    let i2=Number(n2)
    let i=i1+i2
    console.log(String(i))
}
sum("2","5")