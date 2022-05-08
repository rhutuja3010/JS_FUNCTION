// Q28. Write a function called showNumbers that takes a parameter called limit.
// It should print all the numbers between 0 and limit with a label to identify
// the even and odd numbers. For
// example, if the limit is 3, it should print: - 0 even,1 odd, 2 even, 3 odd


function odd_even(n1,n2){
    for(let i=n1;i<=n2;i++){
        if (i%2==0){
            console.log(i,"even")
        }else{
            console.log(i,"odd")
        }
    }
}
odd_even(1,5)
