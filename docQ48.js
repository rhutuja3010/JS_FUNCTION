// Q48. Two numbers are entered through the keyboard. Write a flowchart to find the value of the
// raised to the power of another.
// Sample Input
// 3
// 4
// Sample Output
// 81 (3x3x3x3)

let n1=3
let n2=3
let s='';
for (let i=1;i<=n2;i++){
    if(i==n2){
        s+=n2
    }else{
        s+=n2
        s+="*"
    }
    n=(n1**n2)
}
console.log(n,s)