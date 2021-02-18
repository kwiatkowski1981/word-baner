import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

// http:websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'srekst2', 'tekst3'];

let activeText = 0;
let activeLetter = -15; //  -15 opoznia txt o 1,5sek itd

// const timeFirstWord = 2000;
// const timeWordsSwitch =  4800;
// const timeLetters = 600;

// Implementacja
const addLetter = () => {
    // Użyj w środku setTimeout

    if (activeLetter >= 0) {
        spnText.textContent += txt[activeText][activeLetter];
    }
    activeLetter++
    if (activeLetter === txt[activeText].length) {
        activeText++
        if (activeText === txt.length) return;

        return setTimeout(() => {
            activeLetter = -15;
            spnText.textContent = '';
            addLetter();
        }, 2000)
    }
    setTimeout(addLetter, 200)
}
    // setTimeout(() => {
    //     for (let i = 0; i < txt.length; i++) {
    //         let word = txt[i];
    //         setTimeout(() => {
    //             // console.log(word);
    //         spnText.textContent = "";
    //             for (let j = 0; j < word.length; j++) {
    //                 setTimeout(()=> {
    //                     spnText.textContent += word[j];
    //                 }, j * timeLetters)
    //             }
    //         },  i* timeWordsSwitch);
    //     }
    // }, timeFirstWord)

addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);


// for (let i = 1; i < 10  ; i++) {
//         setTimeout(function timer(){
//             console.log(i);
//
//         }, i * 1000);
//
// }
