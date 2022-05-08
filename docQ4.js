// Q4.Write a Python program to reverse a string.
// Sample String : "1234abcd"
// Output : "dcba4321".

let s="1234abcd"
s1=''
for (let i=s.length-1;i>=0;i--){
    s1+=s[i]
}
console.log(s1)