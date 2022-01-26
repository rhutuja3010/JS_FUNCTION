// function sayBye(userName){
//     return "Bye"+" "+userName
//  }
  
//  console.log(sayBye("Kumar"))


// function multiply(num1,num2,num3){
//     return num1*num2*num3
// }
// console.log(multiply(2,3,4))


// function fullname(name,surname){
//     console.log(name,surname)
// }
// fullname("Rhutuja","Patil")




// let isequal=function(fun1,fun2){console.log(fun1===fun2)}
// isequal("rhutuja","patil")




// function getFullName(firstName,lastName){
//     console.log(firstName+" "+lastName)
//    }
    
//    getFullName("kumar","nayak");



// function add_sub(a,b,c,d){
//     console.log(a-b+c-d)
// }
// add_sub(2,3,4,5)



// function getResult(num1,num2,num3){
//     console.log(num1-num2+num3)
//    }
    
//    getResult(2,3,4,5);


// (function(str1,str2){
//     console.log(str1===str2)
//  })("kumar","kumar");



// function place(str1,str2){
//     console.log(str1)
//     console.log(str2)
// }
// place("I am girl","I'm rhutuja")



// function disp(a){
//     return function(b){
//         return (a+b);
//     };

// }
// var fun=disp(10)
// console.log(fun(20))


// function dislay(fun){
//     return fun;

// }console.log(dislay( "GeekyShow"))



// function isGreaterThan20(num){
//     if(num>20){
//         return true
//     }
//  }
 
 
//  function students(list_of_marks){
//     count=0
//     for(var i of list_of_marks){
//         var result= isGreaterThan20(i)
//         if (result === true){
//             count++
//         }
//     }
//     console.log(count);
//  }
//  students([21,25,19,25,33,54])


// function isgrater(num){
//     if (num>20){
//         return true
//     }
// }
// function student(list1){
//     count=0
//     for (i of list1){
//         result=isgrater(i)
//         if (result==true){
//             count++
//         }
//     }console.log(count)
// }
// student([11,34,56,23,12,60])

// function add(num1,num2){
//     console.log(num1+num2)
// }
// add(56,12)


// function add_numbers(num1,num2){
//     console.log(num1+num2);
//     console.log("------------");
//  }
//    function add_numbers_list(list1,list2){
//     for(var i=0;i<3;i++){
//         add_numbers(list1[i],list2[i]);
//     }
//  }
  
//  add_numbers_list([50, 60, 10],[10, 20, 13])


// function odd_even_num(n1,n2){
//     for (i=0;i<5;i++){
//         if(n1[i]%2==0 && n2[i]%2==0){
//                 console.log("both are even")
//         }else{
//             console.log("both are not even")
//         }
//     }
// }
// odd_even_num([2, 6, 18, 10, 3, 75], [6, 19, 24, 12, 3, 87])


// function odd_even_num(n1,n2){
//     if (n1%2==0 && n2%2==0){
//         console.log("both are even ")
//     }else{
//         console.log("both are not even")
//     }
// }
// odd_even_num(4,8)



// function vote(age){
//     if (age>=18){
//         console.log("eligible")
//     }else{
//         console.log("not")
//     }
// }
// vote(22)


// function perfect(num){
//     sum=0
//     for(var i=0;i<num;i++){
//         if(num%i === 0){
//             sum+=i
//         }
//     }
    
//     if(sum === num){
//         console.log(num," is a perfect number");
//     }
//     else{
//         console.log(num," is not a perfect number");
//     }
//  }
//  perfect(6)



// function average(num1,num2,num3){
//     console.log("sum of three numbers -",num1+num2+num3);
//     console.log("Average of three numbers -",(num1+num2+num3)/3);
//  }
  
//  const input = require('readline-sync');
//  let number1 = input.questionInt('Enter the number1 :- ');
//  let number2 = input.questionInt('Enter the number2 :- ');
//  let number3 = input.questionInt('Enter the number3 :- ');
//  average(number1,number2,number3);


// function limit_fun(limit){
//     for (let i=0;i<=limit;i++){
//         if (i%2==0){
//             console.log(i," :even")
//         }else{
//             console.log(i," :odd")
//         }
//     }
// }limit_fun(9)


// function limit_function(limit){
//     sum=0
//     for (let i=0;i<=limit;i++){
//         if (i%3==0 || i%5==0){
            
//             sum+=i}
        
//     }console.log(sum)
// }limit_function(8)



// function multiplesOfNumbers(limit){
//     var sum=0
//     for(i=0;i<=limit;i++){
//         if(i%3 ===0){
//             sum+=i;
//         }
//         if(i%5 ==0){
//             sum+=i;
//         }
//     }
//     console.log(sum);
//  }
//  multiplesOfNumbers(8);




// function license_checker(speed){
//     if(speed < 70){
//         console.log("ok");
//     }
//     if(speed > 70){
//         points=0
//         for(var i=70;i < points;i++){
        
//         if(points>12){
//             console.log("License suspended");
//         }
//         else{
//             console.log(points);
//         }
//     }
//  }}
  
//  license_checker(135);

// function license_checker(speed){
//     if(speed<70){
//         console.log("ok")
//     }
//     if (speed>70){
//         points=0
//         for(let i=0;i<=points;i++){
//         if(points>12){
//             console.log("License suspended")
//         }else 
//         }
//     }
// }license_checker(80)



// function license_checker(speed){
//     if(speed < 70){
//         console.log("ok");
//     }
//     if(speed > 70){
//         points=0
//         for(var i=0;i < speed ; points+=1){
//         }if(speed>=70){
//             points=(speed-70)/5
//             console.log(points)
//         }
//          if(points>12){
//             console.log("License suspended");
//         }
//         else{
//             console.log(points);
//         }
//     }
//  }
// license_checker(135);


// function name1(str1,str2){
//     if (str1.length>str2.length){
//         console.log(str1)
//     }else if(str1.length<str2.length){
//         console.log(str2)
//     }else if(str1.length==str2.length){
//         console.log(str1,str2)
//     }
// }
// name1("navgurukul","riyu")


// function squre(limit){
//     let dict={}
//     for (i=1;i<=limit;i++){
//         dict[i]=i*i
//     }console.log(dict)
// }squre(5)



function license_checker(speed){
    if(speed <= 70){
        console.log("ok");
    }
    if(speed > 70){
        points=0
        for(var i=0;i<=speed  ; i++){
        }
        if(points>12){
            console.log("License suspended");
        }
        else{
            points=(speed-70)/5
            console.log(points);
        }
    }
 }
  
 license_checker(70);