'use strict'

const container = document.getElementById('container');
const textColor = document.getElementById('textColor');
const button = document.getElementById('button');




button.addEventListener('click', () => {
    colorChanger(container, button);
});

function colorChanger(element1, element2) {
    const colors = randomNumber(1, 359);

    element1.style.backgroundColor = `hsl(${colors}, 100%, 50%)`;
    element2.style.backgroundColor = `hsl(${colors}, 100%, 50%)`;
    textColor.innerText = `hsl(${colors}, 100%, 50%)`;
}


function randomNumber(min, max) {
    const r = Math.random() * (max-min) + min;
    return Math.floor(r);
}