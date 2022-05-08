// Q49. Write a flowchart which takes an input N. Then input N numbers. 
// Then for each of the N numbers, print “even” if the number is even or 
// and “odd” if the number is odd. Sample input:

function fun() {
let n=3;
for (let i=1;i<=n;i++){
    let n1=require("readline-sync");
    let num=n1.questionInt("ente the num :")
    if (num%2==0){
        console.log(num,"even")
    }else{

        console.log(num,"odd")
    }
}
}fun()