let body = document.body;
let info = document.getElementById("Info");
let modeBtn = document.getElementById("MODE");
let homeBtn = document.getElementById("HOME");
let title = document.getElementById("title");
let startBtn = document.getElementById("Start");
let playSound = () => {
    let audio = new Audio("sound.mp3");
    audio.play();
}

function Random() {
    const Tw = window.innerWidth
    const Th = window.innerHeight

    const btnH = startBtn.offsetHeight
    const btnW = startBtn.offsetWidth
const rY = Math.random() * (Th - btnH);
const rX = Math.random() * (Tw - btnW);

startBtn.style.top = `${rY}px`;
startBtn.style.left = `${rX}px`;
}

    Random();
// const darkLimit = 5;
// let darkCount = 0;
title.textContent = "Cari dan Click kata 'Cihuy'"

function Start() {
    title.textContent = "3"
    setTimeout(() => {
        title.textContent = "2"
    }, 1000);
    setTimeout(() => {
        title.textContent = "1"
    }, 3000);
    setTimeout(() => {
        title.textContent = "0"
    }, 5000);
    setTimeout(() => {
        playSound();
        volume = 100;
    }, 5100);
    setTimeout(() => {
        title.textContent = "FLASHBANK"
        startBtn.style.display = "none";
    }, 5400);
    setTimeout(() => {
        title.style.color = "Black";
        body.style.backgroundColor = "White";
    }, 5600);

}
// modeBtn.textContent = "DARK MODE";
// function darkMode() {
//     // darkCount ++;
//     // if (darkCount > darkLimit) {
//     //     info.textContent = `limit Dark mode anda habis.`;
//     //     modeBtn.style.display = "none";
//     //     homeBtn.textContent = "REFRESH";
//     //     return;
//     // }
// // info element rendering
//     // info.textContent = `Dark mode toggled ${darkCount}x. Limit is ${darkLimit-darkCount}.`;
//     body.classList.toggle("dark-mode");
    
//     if (body.classList.contains("dark-mode")) {
//         title.textContent = "IN DARK MODE";
//         modeBtn.textContent = "LIGHT MODE";
//     } else {
//         title.textContent = "IN LIGHT MODE";
//         modeBtn.textContent = "DARK MODE";
//     }

// }

// function reRender() {
//     location.reload();
// }
