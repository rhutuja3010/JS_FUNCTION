// Q5.Write a Python function that takes a list and returns a new list with unique elements of the
// first list.Sample List : [1,2,3,3,3,3,4,5]
// Unique List : [1, 2, 3, 4, 5].

function uniq(arr){
// let arr=[1,2,3,3,3,3,4,5];
let unique=[]
for (i of arr){
    if(!unique.includes(i)){
        unique.push(i)
    }
}console.log(unique)
}
uniq([1,2,3,3,3,3,4,5])