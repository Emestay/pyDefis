// floor pour entier, random * 101 pour avoir 100 compris car random uniquement de 0 a 1 et floor


let button = document.querySelector(".bouttonClick");

let display = document.querySelector(".truc");
// button.addEventListener("click", randomNbr());


function randomNbr() { 
    display.innerText  = Math.floor(Math.random() * 101);
     
};




// button.style.backgroundColor = "lightblue";
// display.style.backgroundColor = "lightblue";

