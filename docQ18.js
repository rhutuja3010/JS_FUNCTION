// Q17. Write a function to tell user if he/she is able to vote or not.( Consider minimum age of voting
//     to be 18. )

function vote(age){
    if (age>=18){
        console.log("able to votting")
    }else{
        console.log("not able to votting")
    }
}vote(20)