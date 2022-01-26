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
// let sum=0
// for (let i=0;i<a.length;i++){
//     if (typeof a[i]==Array.isArray(a[i])){
    
//         sum+=Array.isArray(a[i])
//     }else{
//     sum+=Array.isArray(a[i])

// }
// console.log(sum)


// const arr = [14, 54, 23, 14, 24, 33, 44, 54, 77, 87, 77, 14];
const arr=[4,1,3,5,1,2,3]
const nonRepeatingSum = arr => {
   let res = 0;
   for(let i = 0; i < arr.length; i++){
      if(i !== arr.lastIndexOf(arr[i])){
         continue;
      };
      res += arr[i];
   };
   return res;
};
console.log(nonRepeatingSum(arr));

// let a=[12,3,12,13,5,13,11,11,13]
// let r=0
// for (i=0;i<a.length;i++){
//     if (a[])
// }