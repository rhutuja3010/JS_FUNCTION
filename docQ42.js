// Q42. Find the sum of number digits in List.
// The original list is :
// List Integer Summation : [3, 13, 17, 7]Explanation: 1+2 = 3, 6+7=13, 9+8=17, 
// 3+4=7
// The original list is : [15, 81, 11, 234]

let arr=[12, 67, 98, 34];
let a=[];
for (let i=0;i<arr.length;i++){
    let sum=0;
    let s=String(arr[i])
    for (let j=0;j<s.length;j++){
        let int=Number(s[j])
        sum+=int
    }a.push(sum)
}console.log(a)