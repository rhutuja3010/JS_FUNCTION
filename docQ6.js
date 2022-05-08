// Q6.Write a Python program to print the even numbers from a given list.
// Sample List : [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Expected Result : [2, 4, 6, 8].

function even(arr){
    let a_even=[];
    for (i of arr){
        if (i%2==0){
            a_even.push(i)
        }
    }console.log(a_even)

}
even([1, 2, 3, 4, 5, 6, 7, 8, 9])