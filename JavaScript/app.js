// let a= 2;
//  a = 5; 
// var b = "false";
// var c ;
// console.log(c);
// var salman =" Salman Khan"
// var name = salman;
// console.log(name);
// //Data types

// // number , string , boolean , null, undefined



// console.log("The value of a is " + a);

// console.log(typeof b);
// console.log(typeof c);
// // Difference var let and const
// console.log(a);
// {

//     let a =10;

// console.log("     "+" <br/>  " + a);


// }

// const pi = 3.142;



// document.write(pi)
// // {

// //     console.log(a);
// // }


// let userInput = prompt("Enter any Number");


// if (userInput !== "") {

//     if (userInput < 0) {

//         document.write(userInput + " is Negative");


//     }
//     else if (userInput > 0) {
//         document.write(userInput + " is Positive")

//     }
//     else if (userInput == 0) {
//         document.write(userInput + " is Zero")
//     }
//     else {
//         document.write("Invalid Input")
//     }








// }
// else{
//     alert("Enter any Character or Number")

// }


document.write(false && true + "<br/>")
document.write("<br/>" + true || false)
document.write(false || true)

// console.log(false || false);


// console.log(false || true && false && true || false && true);
// console.log(false && true || false && true || true || false && false && true || true);
console.log(false && true || false && true || true && false && false && true || false);
console.log(false && true || false && true || false || false && false && true || true && false);

let userInput = prompt("Enter any single character");
// document.write("<br/>" + a.length);
if (userInput.length == 1) {

    if (userInput == "a" || userInput == "e" || 
    userInput == "i" || userInput == "o" || userInput == "u") {
        document.write("<br/>" +  userInput + " is a vowel")
    }else{

        document.write("<br/>" + userInput +" is not a vowel")
    }

} else {
    console.log("please enter single character");
}


// document.write(false || true)

