//Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.


let colors  = ["red" , "yellow" , "green"];
// colors.forEach(element => {

//     document.write("</br>"+ element  );
    
// });

// colors.forEach(element => {

//     document.write("</br>"+ element  );
    
// });

colors.pop()
colors.push("grey");


colors.shift()


colors.forEach(element => {

    document.write("</br>"+ element  );
    
});
// let userInputColor = prompt("Enter Color");

// colors.unshift(userInputColor)



function addElement(){
    // alert("ADD")

let inputValue = document.getElementById("text").value;
colors.push(inputValue);

colors.forEach(element => {

    document.write("</br>"+ element  );
    
});

}






