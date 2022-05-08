// Q41. Write a Python program to find the list with maximum and minimum length.
// Original list:[[0], [1, 3], [5, 7], [9, 11], [13, 15, 17]]
// List with maximum length of lists:
// (3, [13, 15, 17])
// List with minimum length of lists:
// (1, [0])

let arr=[[0], [1, 3], [5, 7], [9, 11], [13, 15, 17]];
let maximum_length=0
let minimum_length=arr[0]
for (i of arr){
    if ((i.length)>maximum_length){
        maximum_length=(i.length)
    }
}
// count=0
a=[]
for (i of arr){
//     if ((i.length)<minimum_length){
//         minimum_length=(i.length)
//         // console.log(i.length)

//     }
    a.push(i.length)
    second_min=a[0]
    for (j of a){
        if (second_min>j){
            second_min=j
        }
    }
    // console.log(second_min)
    // console.log(i.length)
}
// console.log(i.length)
// console.log(count)
console.log(i,maximum_length)
console.log(i,second_min)