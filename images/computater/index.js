
let eksempel1 = document.querySelector("#myCallbackButton1")
const tittle = "the problem"



eksempel1.addEventListener("click", function () {
    alert("Dette er eksempel 1 Callback");

});



function man1(){

    let element = document.getElementById("minTekst");
    if(element.style.color =="blue"){
        element.style.color = "black";
    }
    else{
        element.style.color = "blue";  // Endrer tekstfargen til blå
    }
}








let elementer = document.getElementsByClassName("tekst");
for (let i = 0; i < elementer.length; i++) {
    elementer[i].style.color = "red";  // Gjør all tekst rød
}





let inputs = document.getElementsByName("brukernavn");
for (let i = 0; i < inputs.length; i++) {
    inputs[i].style.backgroundColor = "lightgray"; // Endrer bakgrunnsfargen
}





let boks = document.querySelector(".boks"); // henter elementet med klass "boks"
boks.style.border = "2px solid black"; // Legger til ramme





let listeElementer = document.querySelectorAll("li");
listeElementer.forEach(li => {
    li.style.listStyleType = "square";  // Endrer listepunkt til firkanter
});










