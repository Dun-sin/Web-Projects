"use strict";

const rule = document.getElementById('rules');
let background = document.getElementById('background');
let modal = document.getElementById('modal');
const closeButton = document.getElementById('closeModal');

const rock = document.querySelector('[data-rock]');
const paper = document.querySelector('[data-paper]');
const scissors = document.querySelector('[data-scissors]');
let happen = document.getElementById('happen')
const userScore = document.querySelector('[data-user-score]');
const computerScore = document.querySelector('[data-computer-score]');
let availableChoice = ['rock', 'paper', 'scissors'];
let userChoice;
let computerChoice;
let uScore = 0;
let cScore = 0;
let possibleWins = [
    {
        name: 'rock',
        beats: 'scissors'
    },
    {
        name: 'paper',
        beats: 'rock'
    },
    {
        name: 'scissors',
        beats: 'paper'
    }
];

rule.addEventListener('click', () => {
    background.classList.toggle('active');
    modal.classList.toggle('active');
});
closeButton.addEventListener('click', () => {
    background.classList.toggle('active');
    modal.classList.toggle('active');
});

rock.addEventListener('click', () => {
    userChoice = 'rock'
    computerChoice = availableChoice[Math.floor(Math.random() * 3)];
    checkWinner();
});

paper.addEventListener('click', () => {
    userChoice = 'paper';
    computerChoice = availableChoice[Math.floor(Math.random() * 3)];
    checkWinner();
});

scissors.addEventListener('click', () => {
    userChoice = 'scissors';
    computerChoice = availableChoice[Math.floor(Math.random() * 3)];
    checkWinner();
});

let checkWinner = () => {
    if (userChoice === computerChoice) {
            happen.innerHTML = `You Choose "${userChoice}", Computer Choose "${computerChoice}". Draw!`;
            writeScore();
    }
    if ((possibleWins[0].name === userChoice) && (possibleWins[0].beats === computerChoice)){
            uScore +=1;
            userWin.isWinner();
            writeScore();
    }
    if ((possibleWins[0].name === computerChoice) && (possibleWins[0].beats === userChoice
        )){
            cScore++;
            userWin.isLoser();
            writeScore();
    }
    if ((possibleWins[1].name === userChoice) && (possibleWins[1].beats === computerChoice)){
            uScore +=1;
            userWin.isWinner();
            writeScore();
    }
    if ((possibleWins[1].name === computerChoice) && (possibleWins[1].beats === userChoice
        )){
            cScore += 1;
            userWin.isLoser();
            writeScore();
    }
    if ((possibleWins[2].name === userChoice) && (possibleWins[2].beats === computerChoice)){
            uScore += 1;
            userWin.isWinner();
            writeScore();
    }
    if ((possibleWins[2].name === computerChoice) && (possibleWins[2].beats === userChoice
        )){
            cScore += 1;
            userWin.isLoser();
            writeScore();
    }
    return uScore, cScore;
}

let userWin = {
    isWinner: () => {
        happen.innerHTML = `You Choose "${userChoice}", Computer Choose "${computerChoice}". You Win`;
    },
    isLoser: () => {
        happen.innerHTML = `You Choose "${userChoice}", Computer Choose "${computerChoice}". You Lose`;
    }
}

let writeScore = () => {
    userScore.innerHTML = uScore;
    computerScore.innerHTML = cScore;
}


