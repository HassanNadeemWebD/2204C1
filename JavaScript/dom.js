// console.log(document.getElementById("heading").innerHTML)
// console.log(document.getElementById("heading").innerText)
// console.log(document.querySelector("#heading").innerText);


// console.log(document.querySelector(".para").innerText);
// console.log(document.querySelectorAll(".para")[0].innerText)


let arr = document.querySelectorAll(".para");
arr.forEach(element => {
    console.log(element.innerText);
    
});
// console.log(arr[0].innerText);   

// document.getElementById("heading").innerHTML = 15+10;


function changeCSS(){
    document.querySelector("#heading").innerText = "Aptech"

    document.querySelector("#heading").style.color = "Black";
    document.querySelector("#heading").style.backgroundColor = "Yellow";


}
