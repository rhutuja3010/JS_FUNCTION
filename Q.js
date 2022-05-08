// let a = Math.random();
// console.log(a);


// const arr = [
//     5,
//     7,
//     [ 4, [2], 8, [1,3], 2 ],
//     [ 9, [] ],
//     1,
//     8
//  ];
//  const findNestedSum = (arr) => {
//     let sum = 0;
//     for(let len = 0; len < arr.length; len++){
//        sum += Array.isArray(arr[len]) ? findNestedSum(arr[len]) :
//        arr[len];
//     };
//     return sum;
//  };
//  console.log(findNestedSum(arr));


// a=[3,2,1,[1,2],4]
// let sum=0;
// for (i of a){
//     if (Array.isArray(i)){
//         for (j of i){
//             sum+=j
//         }
//     }else{
//         sum+=i
//     }
// }console.log(sum)



// const arr = [14, 54, 23, 14, 24, 33, 44, 54, 77, 87, 77, 14];
// const arr=[4,1,3,5,1,2,3]
// const nonRepeatingSum = arr => {
//    let res = 0;
//    for(let i = 0; i < arr.length; i++){
//       if(i !== arr.lastIndexOf(arr[i])){
//          continue;
//       };
//       res += arr[i];
//    };
//    return res;
// };
// console.log(nonRepeatingSum(arr));

// let a=[12,3,12,13,5,13,11,11,13]
// let r=0
// for (i=0;i<a.length;i++){
//     if (a[])
// }



// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// // expected output: Array [2, 8, 18, 32]


// let numbers = [1, 4, 9]
// let roots = numbers.map(function(num) {
//     return Math.sqrt(num)
// })
// console.log(roots)


// const square = function(number) { return number * number }
// var x = square(4) // x gets the value 16
// console.log(x)



// const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }

// console.log(factorial(5))


// console.log(square(5));
// /* ... */
// function square(n) { return n * n }
// console.log(square(5));



// var num1 = 20,
//     num2 = 3,
//     name = 'Chamakh';

// // This function is defined in the global scope
// function multiply() {
//   return num1 * num2;
// }

// console.log(multiply()); // Returns 60


// var a=12
// b=8
// function add(){

//    return a+b
// }
// console.log(add())



// function getScore() {
//    var num1 = 2,
//        num2 = 3;
//        name1="Rhutuja"
 
//    function add() {
//      return name1 + ' scored ' + (num1 + num2);
//    }
 
//    return add();
//  }
 
//  console.log(getScore()); // Returns "Chamakh scored 5"




// function getscore(){
//    let a=3
//    let b=2
//    let name1="Rhutuja"

//    function add(){
//       return name1 + " score "+(a+b)
//    }
    
//    return add()
// }console.log(getscore())


// function foo(i) {
//    if (i < 0)
//      return;
//    console.log('begin: ' + i);
//    foo(i - 1);
//    console.log('end: ' + i);
//  }
// console.log(foo(3));


// function addSquares(a, b) {
//   function square(x) {
//     return x * x;
//   }
//   return square(a) + square(b);
// }
// p = addSquares(2, 3); // returns 13
// k = addSquares(3, 4); // returns 25
// r = addSquares(4, 5); // returns 41
// console.log(p)
// console.log(k)
// console.log(r)



// function outside() {
//   // var x = 5;
//   function inside(x) {
//     return x * 2;
// }
//   return inside;
// }

// console.log(outside()(10));



// var pet = function(name) {   // The outer function defines a variable called "name"
//   var getName = function() {
//     return name;             // The inner function has access to the "name" variable of the outer
//                              //function
//   }
//   return getName;            // Return the inner function, thereby exposing it to outer scopes
// }
// myPet = pet('Vivie');

// console.log(myPet()); 




// var createPet = function(name) {
//   var sex;

//   return {
//     setName: function(newName) {
//       name = newName;
//     },

//     getName: function() {
//       return name;
//     },

//     getSex: function() {
//       return sex;
//     },

//     setSex: function(newSex) {
//       if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' ||
//         newSex.toLowerCase() === 'female')) {
//         sex = newSex;
//       }
//     }
//   }
// }

// var pet = createPet('Vivie');
// pet.getName();                  // Vivie

// pet.setName('Oliver');
// pet.setSex('male');
// pet.getSex();                   // male
// pet.getName();                  // Oliver






