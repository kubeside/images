


let editor = document.querySelector("#editor");
let runCodeButton = document.querySelector("#runCode");
let resetCodeButton = document.querySelector('.editor_reset');

const myeditor= ace.edit("editor", {
    theme: "ace/theme/cobalt",
    mode: "ace/mode/javascript",
});


runCodeButton.addEventListener('click', ()=> {
    const code = myeditor.getValue();
    const result = eval(code);
    console.log(result)


});

document.getElementById('editor').style.fontSize='22px';





document.querySelector("#myCallbackButton1").addEventListener("click", function () {
    alert("Knappen ble klikket!");
});



function speak(){
    
    const lyd = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(lyd);

}