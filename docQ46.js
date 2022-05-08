// Q46. Draw a flowchart to take a list of N numbers from the user, print 
// True if the complete list consists ofconsecutive numbers with a difference 
// of one. Print False otherwise.
// Sample Input:
// 1 2 3 4 5 6 7
// Sample Output:
// True
// Sample Input:
// 45 46 47 48 49 51 52
// Sample Output:
// False

////missing_number***********
// let arr=[1,2,3,5,6,7];
// var m=Math.max(1,2,3,4,5,6,7)
// for (let i=1;i<=m;i++){
//     for (let j=0;j<=arr.length;j++){
//         if (!arr.includes(i)){
//             console.log(i)
//             break
//         }
//     }
// }


// let arr=[1,2,3,4,5,6,7];
// var m=Math.max(1,2,3,4,5,6,7)
// for (let i=1;i<=m;i++){
//     if (i in arr){
//         f=1
//     }else{
//         f=0
//         break
//     }if (f===1 && f!==0){
//         console.log("true")
//         break
//     }else{
//         console.log("false")
//         break
//     }
// }


let arr=[1,2,3,4,6,7];
// i=arr[0]
for (i of arr){

    for (j=1;j<=i;j++){
    if (i==j){
        console.log(i,j,true)
    }
    else{
        console.log(i,j,false)
    }
}
}