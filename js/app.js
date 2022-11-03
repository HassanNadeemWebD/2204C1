console.log("Hello World")
document.write("Hello World"+ "<br/>")
// var let const difference

let a = 10;
console.log(a)
// a += 16;
console.log(a)
a *= 6;
a -= 5;
// console.log(a)

// console.log(10 < 7);
// document.write( 120 !== 20)

let i = 1;
// console.log(++i)
// console.log(i++)
// console.log(i)
// console.log(i--);
// console.log(i)
console.log(i)
// console.log(i++ )
// console.log(i)

let result = i++ + --i + i++ + --i + i + i-- + 2 + ++i + ++i + 2 + --i + i-- + ++i + i;
//           1   +  1  +  1  +   1 + 1  + 1   + 2 + 1  +  2  + 2  +  1  + 1  +  1  +  1   = 1 7  

console.log(result)

// alert("accept cookies ")
// let age = prompt("Enter your age");

// if (age == "") {


//     document.write("Please Enter Your Age" )
    
// }
// else if(age >= 18){

// document.write("Eligible")

// }
// else{
//     document.write("Not Eligible")

// }


let num1 = parseInt(prompt("Enter First Number")) ;

let num2 = parseInt( prompt("Enter Second Number"));
// parseInt(num2)
// console.log(num1 + num2)
let operator = prompt("Enter Operator from + - * /");
// console.log("type of num2" + typeof num2);
if(operator == "+"){

    let add = num1 + num2
    document.write("Addition = " + add)
}

else if(operator == "-"){
    document.write("Subtraction = " + (num1 - num2) )
}
else{

    document.write("Invalid Input")
}

// switch (operator) {
//     case "+":
//         let add = num1 + num2
//         document.write("Addition = " + add)
        
//         break;
//         case "-":
//             // console.log("Subtraction = " + num1 - num2 )
//             document.write("Subtraction = " + (num1 - num2) )
//             // document.write("error")
//             break;

//             case "*":
//                 document.write("Multiplication = " + num1 * num2 )
                
//                 break;
//                 case "/":
//                     document.write("Division = " + (num1 / num2) )
                    
//                     break;
//     default:
//         document.write("Incorrect input !")
//         break;
// }


// switch (age) {


//         case "18":

//             document.write("Eligible" )
    
            
//             break;

//     default:

//     document.write("not eligible")
//         break;
// }











