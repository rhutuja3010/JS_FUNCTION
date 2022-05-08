// Q2. Write a Python function to find the Max of three numbers.

function max(n1,n2,n3){
    if (n1>n2 && n1>n3){
        console.log(n1,"n1 is grater")
    }else if(n2>n1 && n2>n3){
        console.log(n2,"n2 is grater")
    }else{
        console.log(n3,"n3 is grater")
    }
}max(8,9,5)