// // Q1.Write a Python program to count the number of strings where the string 
// // length is 2 the first and last characters are the same from a given list of 
// // strings. list=['abc', 'xyz', 'aba', '1221']
// // result= 2
function check(arr){
// let arr=['abc', 'xyz', 'aba', '1221']
var count=0;
for (i of arr){
    s=''
    for(j=i.length-1;j>=0;j--){
        s+=i[j]
    }if (s===i){
        count++
    }
}console.log(count)
}
check(['abc', 'xyz', 'aba', '1221'])

// list1=["mom","Rhutu","wow","sis"]
// count=0
// for (i of list1){
//     s=''
//     for (j=i.length-1;j>=0;j--){
//         s+=i[j]
        
//     }if (s===i){
//         count++
//         console.log(s,"palindrom")
//     }
// }console.log(count)
