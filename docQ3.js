// Q3.Write a Python function to sum all the numbers in a list.
// Sample List : (8, 2, 3, 0, 7)
// Output : 20.

function sum(a){
    sum=0
    for (i of a){
        sum+=i
    }
    console.log(sum)
}
sum([8, 2, 3, 0, 7])


// function sumfun(a1){
//     sum=0
//     for (i=0;i<a1.length;i++){
//         sum+=a1[i]
//         // console.log(sum)
//         // a1=[8, 2, 3, 0, 7]
//     }
//     console.log(sum)
//     // a=[8, 2, 3, 0, 7]
// }console.log(sumfun([[8, 2, 3, 0, 7]]))