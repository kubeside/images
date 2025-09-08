

let isReading = false;

function speak() {
    if (isReading) {
        speechSynthesis.cancel();
        isReading = false;
        return;
    }
    const speechElem = document.querySelector("#speechText");
    let text = speechElem.textContent.trim();
    const words = text.split(/(\s+)/);
    speechElem.innerHTML = words.map(w => w.trim() ? `<span class="tts-word">${w}</span>` : w).join("");
    const lyd = new SpeechSynthesisUtterance(text);
    lyd.lang = "nb-NO";
    let wordIndex = 0;
    const wordSpans = speechElem.querySelectorAll('.tts-word');
    lyd.onboundary = function(event) {
        if (event.name === 'word') {
            wordSpans.forEach(span => span.style.background = '');
            if (wordSpans[wordIndex]) {
                wordSpans[wordIndex].style.background = 'yellow';
            }
            wordIndex++;
        }
    };
    lyd.onend = function() {
        wordSpans.forEach(span => span.style.background = '');
        isReading = false;
    };
    isReading = true;
    speechSynthesis.speak(lyd);
}

function read_Tagg() {
    if (isReading) {
        speechSynthesis.cancel();
        isReading = false;
        return;
    }
    let text = document.querySelector(".tagger").textContent;
    const lyd = new SpeechSynthesisUtterance(text);
    lyd.lang = "nb-NO";
    lyd.onend = () => { isReading = false; };
    isReading = true;
    speechSynthesis.speak(lyd);
}

function read_DOM() {
    if (isReading) {
        speechSynthesis.cancel();
        isReading = false;
        return;
    }
    let text = document.querySelector(".workflow_nettleser").textContent;
    const lyd = new SpeechSynthesisUtterance(text);
    lyd.lang = "nb-NO";
    lyd.onend = () => { isReading = false; };
    isReading = true;
    speechSynthesis.speak(lyd);
}

function read_Fork_Dom() {
    if (isReading) {
        speechSynthesis.cancel();
        isReading = false;
        return;
    }
    let text = document.querySelector(".fork_dom").textContent;
    const lyd = new SpeechSynthesisUtterance(text);
    lyd.lang = "nb-NO";
    lyd.onend = () => { isReading = false; };
    isReading = true;
    speechSynthesis.speak(lyd);
}

function read_git_intro() {
    if (isReading) {
        speechSynthesis.cancel();
        isReading = false;
        return;
    }
    let text = document.querySelector(".intro_git").textContent;
    const lyd = new SpeechSynthesisUtterance(text);
    lyd.lang = "nb-NO";
    lyd.onend = () => { isReading = false; };
    isReading = true;
    speechSynthesis.speak(lyd);
}

function read_installGit() {
    if (isReading) {
        speechSynthesis.cancel();
        isReading = false;
        return;
    }
    let text = document.querySelector(".install_git").textContent;
    const lyd = new SpeechSynthesisUtterance(text);
    lyd.lang = "nb-NO";
    lyd.onend = () => { isReading = false; };
    isReading = true;
    speechSynthesis.speak(lyd);
}

function read_installGitMac() {
    if (isReading) {
        speechSynthesis.cancel();
        isReading = false;
        return;
    }
    let text = document.querySelector(".install_git_mac").textContent;
    const lyd = new SpeechSynthesisUtterance(text);
    lyd.lang = "nb-NO";
    lyd.onend = () => { isReading = false; };
    isReading = true;
    speechSynthesis.speak(lyd);
}

function read_oppgaver() {
    if (isReading) {
        speechSynthesis.cancel();
        isReading = false;
        return;
    }
    let text = document.querySelector(".HTMLoppgaver").textContent;
    const lyd = new SpeechSynthesisUtterance(text);
    lyd.lang = "nb-NO";
    lyd.onend = () => { isReading = false; };
    isReading = true;
    speechSynthesis.speak(lyd);
}

function textToSpeech() {
    if (isReading) {
        speechSynthesis.cancel();
        isReading = false;
        return;
    }
    let text = document.querySelector(".grunnHTML").textContent;
    const lyd = new SpeechSynthesisUtterance(text);
    lyd.lang = "nb-NO";
    lyd.onend = () => { isReading = false; };
    isReading = true;
    speechSynthesis.speak(lyd);
}




// function speak(){

//     const speechElem = document.querySelector("#speechText");
    

//     let text = speechElem.textContent.trim();
//     // Split text into words and wrap each in a span
//     const words = text.split(/(\s+)/); // keep spaces
//     speechElem.innerHTML = words.map(w => w.trim() ? `<span class="tts-word">${w}</span>` : w).join("");

//     const lyd = new SpeechSynthesisUtterance(text);
//     lyd.lang = "nb-NO";

//     let wordIndex = 0;
//     const wordSpans = speechElem.querySelectorAll('.tts-word');

//     lyd.onboundary = function(event) {
//         if (event.name === 'word') {
//             // Remove highlight from all
//             wordSpans.forEach(span => span.style.background = '');
//             // Highlight current word
//             if (wordSpans[wordIndex]) {
//                 wordSpans[wordIndex].style.background = 'yellow';
//             }
//             wordIndex++;
//         }
//     };
//     lyd.onend = function() {
//         wordSpans.forEach(span => span.style.background = '');
//     };
//     speechSynthesis.speak(lyd);

    
// }

// function read_Tagg(){
//     let text = document.querySelector(".tagger").textContent;
//     console.log(text);
//     const lyd = new SpeechSynthesisUtterance(text);
//     lyd.lang = "nb-NO";
//     speechSynthesis.speak(lyd);

// }
// function read_DOM(){
//     let text = document.querySelector(".workflow_nettleser").textContent;
//     console.log(text);
//     const lyd = new SpeechSynthesisUtterance(text);
//     lyd.lang = "nb-NO";
//     speechSynthesis.speak(lyd);
// }
// function read_Fork_Dom(){
//         let text = document.querySelector(".fork_dom").textContent;
//     console.log(text);
//     const lyd = new SpeechSynthesisUtterance(text);
//     lyd.lang = "nb-NO";
//     speechSynthesis.speak(lyd);

// }
// function read_git_intro(){
//     let text = document.querySelector(".intro_git").textContent;
//     console.log(text);
//     const lyd = new SpeechSynthesisUtterance(text);
//     lyd.lang = "nb-NO";
//     speechSynthesis.speak(lyd);


// }
// function read_installGit(){
//     let text = document.querySelector(".install_git").textContent;
//     console.log(text);
//     const lyd = new SpeechSynthesisUtterance(text);
//     lyd.lang = "nb-NO";
//     speechSynthesis.speak(lyd);

// }
// function read_installGitMac(){
//     let text = document.querySelector(".install_git_mac").textContent;
//     console.log(text);
//     const lyd = new SpeechSynthesisUtterance(text);
//     lyd.lang = "nb-NO";
//     speechSynthesis.speak(lyd);

// }
// function read_oppgaver(){
//     let text = document.querySelector(".HTMLoppgaver").textContent;
//     console.log(text);
//     const lyd = new SpeechSynthesisUtterance(text);
//     lyd.lang = "nb-NO";
//     speechSynthesis.speak(lyd);

// }


// function textToSpeech(){
//     let text = document.querySelector(".grunnHTML").textContent;
//     console.log(text);
//     const lyd = new SpeechSynthesisUtterance(text);
//     lyd.lang = "nb-NO";
//     speechSynthesis.speak(lyd);
// }



