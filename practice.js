// var mufun=a=>console.log(a)
// mufun(12)

// const doDone=[{title:"bread",
//                 isdone:true},
//               {title:"go to gym",
//               isdone:true,},
//               {title:"record youtube channel",
//               isdone:false}]
// const thinksdone=doDone.filter((doDone)=>doDone.isdone===true)
// console.log(thinksdone)



// Arrow_function

// const sayhello = function(name){return "Hey there "+name+" !"}
// console.log(sayhello("Rhutuja"))


// const sayhello=(name)=>{return "Hey there "+name+" !"}
// console.log(sayhello("Rhutuja"))


// const sum=(a,b)=>{return a+b}
// console.log(sum(2,5))


// const sayhello=(name)=>{return `Hey there ${name}`}
// console.log(sayhello("Rhutuja"))



// const sayhello=(name)=>{return `Hey there ${name}`}
// console.log(sayhello("Rhutuja"))


// const sayhello=(name)=>`Hay there ${name}`
// console.log(sayhello("rhutuja"))


// (function(a,b){console.log(a+b)})(10,20)


// let a= function(x,y){
//    console.log(x+y)
// }
// a(2,4)




let a=[["a",1],["b",2]]
let d={}
for (i of a){
    for (let j=0;j<i.length-1;j++){
        d[i[j]]=i[j+1]
    }
}
console.log(d)


// let a=[["a",1],["b",2]]
// let d={}
// for (i of a){
//     for (let j=0;j<i.length-1;j++){
//         d[i[j]]=i[j+1]
//     }
// }
// console.log(d)



// let i=1
// let sum=0
// while (i<=2){
//     let n=require("readline-sync")
//     let num1=n.questionInt("enter the no :")
//     sum+=num1
//     i++
//     for (){
//         if (num1 == 50){
//             console.log("true2")
//         }
//     }


// }
// if (sum==50) {
//     console.log("true")
// }
// else{
//     console.log("false")
// }

// "use strict";
// x = 23; // Gives an error since 'x' is not declared
// var x; 
// console.log(x)


// hoistedFunction("Rhutuja");  // Outputs " Hello world! " even when the function is declared after calling

// function hoistedFunction(a){ 
//   console.log(a);
// }


// var x = 2;
// var y = "2";
// console.log(x == y)  // Returns true since the value of both x and y is the same

// console.log(x === y) 



// function myConcat(separator) {
//     var result = ''; // initialize list
//     var i;
//     // iterate through arguments
//     for (i = 1; i < arguments.length; i++) {
//        result += arguments[i] + separator;
//     }
//     return result;
//  }
//  console.log(myConcat())
 

