// Q14.Write a function to check if a number is prime or not.
function prime(n){
    let count=0;
    let i=0;
    while (i<=n){
        if (n%i==0){
            count++
        }i++
    }if (count==2){
        console.log("prime")
    }else{
        console.log("no")
    }
}prime(12)