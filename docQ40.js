// Q40. Write a function For example, if we give 9119 the function should 
// return 811181, as the square of 9 is 81 and square of 1 is 1.
let a='9119';
let s='';
for (i of a){
    // console.log(i)
    let sq=i**2
    s+=sq
}console.log(s)
