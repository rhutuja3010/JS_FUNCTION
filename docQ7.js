// Q7.Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function fun(){
    let n=require("readline-sync")
    let weight=n.questionInt("enter the weight :")
    let height=n.questionInt("enter teh height :")
    let bmi=weight/height*height;
    if (bmi <= 18.5){
        return "Underweight"
    }else if (bmi <= 25.0){
        return "Normal"
    }else if(bmi > 30){
        return "Obese"
    }
}
console.log(fun())