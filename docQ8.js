// Q8.Write a Python function that accepts a string and calculate the number
// of upper case letters andlower case letters. Go to the editor
// Sample String : 'The quick Brow Fox'
// Expected Output :
// No. of Uppercase characters : 3
// No. of Lower case Characters : 12



str='The quick Brow Fox'
let upper=0;
let lower=0;
for (let i = 0; i < str.length; i++){
    
        if (str[i] >= 'A' && str[i] <= 'Z'){
            upper++;
        }else if (str[i] >= 'a' && str[i] <= 'z'){
            lower++;
        }
}console.log("No. of Uppercase characters :",upper)
console.log("No. of Lower case Characters :",lower)
