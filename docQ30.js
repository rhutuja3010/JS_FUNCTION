// Q30. Write a function that prints all the prime numbers between 0 and limit 
// where limit is aparameter

function prime(first,last){
    for (let i=first;i<=last;i++){
        let count=0
        for (let j=1;j<=i;j++){
            if (i%j==0){
                count++
            }
        }if(count==2){
            console.log(i,"prime")
        }else{
            console.log(i,"no")
        }
    }
}
prime(0,10)