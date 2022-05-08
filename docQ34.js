// Write a function which converts the input string to uppercase.
// For example:-
// [10, 14, 2, 23, 19] --> 42 (= 23 + 19)
// [99, 2, 2, 23, 19] --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

let arr=[10, 14, 2, 23, 19];
let max=0;
let second_max=0;
for (i in arr){
    if (arr[i]>max){
        max=arr[i]
        s=i
    }
    arr.splice(s,1)
    for (i in arr){
        if(arr[i]>second_max){
            second_max=arr[i]
        }
    }
}
pair=max+second_max
console.log(max)
console.log(second_max)
console.log(max,second_max,"=",pair)
