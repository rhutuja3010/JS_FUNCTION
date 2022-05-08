// function fac(n){
//     if (n==0){
//         return 1

//     }else{
//         return fac(n-1)*n
//     }
// }console.log(fac(5))



function fib(n){
    if (n==2){
        return 1
    }if(n==1){
        return 0
    }else{
        return fib(n-1)+fib(n-2)
    }
}console.log(fib(5))

// function recurse(x){
//    if (x > 0){
//        console.log(x)
//        recurse(x - 1)
// }}
// recurse(10)


// function foo(i) {
//     if (i < 0)
//       return;
//     foo(i - 1);
//     console.log('begin: '+i);
//   }
//   foo(3);



//////factorial_number

// function fac(n) {
//   if(n==0){
//     return 1
//   }else{
//     return fac(n-1)*n
//   }
// }console.log(fac(5))



////fibonaci_seriase

// function fib(n) {
//   if (n==2){
//     return 1
//   }if(n==1){
//     return 0
//   }else{
//     return fib(n-1)+fib(n-2)
//   }
  
// }console.log(fib(7))

//////reverce number 



// function reverce(n) {
//   if(n>0){
//     console.log(n)
//     reverce(n-1)
//   }
// }reverce(5)

// function reverce(n) {
//     if(n<11){
//       console.log(n)
//       reverce(n+1)
//     }
//   }reverce(1)

// function sum(n){
//     if(n==10){
//         console.log(n)
//     }else{
//         console.log(n)
//         return(sum(n+1))
//     }
// }
// sum(1)
