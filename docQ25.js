// Q25. Given a list of numbers, write a Python program to count positive and 
// negative numbers in a List using
// function.
// Example:
// list1 = [2, -7, 5, -64, -14]
// Output: pos = 2, neg = 3
function check(arr) {

    let count_positive=0
    let count_neg=0
    for (i of arr){
        if (i>0){
            count_positive++
        }else if(i<0){
            count_neg++
        }
    }console.log(count_positive)
    console.log(count_neg)
}
check([2, -7, 5, -64, -14])