// Q45. Draw a flowchart to Take 10 numbers as input and create a list of the numbers from the user and update
// each element of the list according to below rule
// If it is even, then multiply it by 100
// If it is odd, then multiply it by -1
// Sample Input:
// 23
// 42
// 41
// 1
// Sample Output:
// -234200
// -41
// -1
let arr=[3,2,12,34,5,70,77]
let a=[]
let b=[]
for (let i=0;i<arr.length;i++){
    if (arr[i]%2==0){
        a.push(arr[i])
        for (let j=0;j<a.length;j++){
        mult=a[j]*100}
        console.log(mult)
        }else{
        b.push(arr[i])
        for (let k=0;k<b.length;k++){
            mult_1=b[k]*(-1)
        }console.log(mult_1)
    }
}
