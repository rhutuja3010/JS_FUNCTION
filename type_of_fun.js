//////name_function


// function fun() {
//     console.log("Rhutuja")
    
// }
// fun()



//////Arrow_function
//1
// const store=()=> "Rhutuja"
// console.log(store())

//2
// let add = (a, b) => a + b;
// console.log(add(3, 2));

//3
// let grater_small=(a,b)=>{
//     if (a>b){
//         console.log("a is grater")
//     }else{
//         console.log("b is grater")
//     }
// }
// grater_small(5,4)


//4
// let sum=0;
// let fun=(n1,n2)=>{
//     for(let i=n1;i<=n2;i++){
//         console.log(i)
//     }
// }
// fun(1,5)


/////self_invoking_function

// (function (parameters) {
//     //body of the function
// })(arguments);


//1
// (function () {
//     console.log("Rhutuja")
// })()


//2
// (function fun(a,b) {
//    console.log(a+b) 
// })(2,3)



//3
// (function add(first,last) {
//     for(let i=first;i<=last;i++){
//         console.log(i)
//     }
// })(1,10)




//////Anonymous_Functions

//1
// let store=function () {
//     console.log("Rhutuja")
// }()


//2
// let add=function(a,b){
//     console.log(a+b)
// }(3,2)


//3
// let print=function(){
//     let i=1;
//     while(i<=10){
//         console.log(i)
//         i++
//     }
// }()
 

//4
// let a=function(name1){
//     console.log("My Name is",name1)
// }("Rhutuja")