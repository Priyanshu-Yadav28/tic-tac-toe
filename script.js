
const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

box1 = document.querySelector(".box1");
box2 = document.querySelector(".box2");
box3 = document.querySelector(".box3");
box4 = document.querySelector(".box4");
box5 = document.querySelector(".box5");
box6 = document.querySelector(".box6");
box7 = document.querySelector(".box7");
box8 = document.querySelector(".box8");
box9 = document.querySelector(".box9");

let currentPlayer = "X";
let gameGrid;

const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


// create a function to inititalise the game 
function initGame() {
    currentPlayer = "X";
    gameGrid = ["", "", "", "", "", "", "", "", ""];
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initGame();

function handleClick(index) {
    
}

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
}) 

















// let count = 0;
// box1.addEventListener("click", function() {
    
//     if (count % 2 == 0) {
//         box1.innerHTML = "X";
//     }
//     else{
//         box1.innerHTML = "O";
//     }
//     count ++;
// }, {once: true});

// box2.addEventListener("click", function() {
//     if (count % 2 == 0) {
//         box2.innerHTML = "X";
//     }
//     else{
//         box2.innerHTML = "O";
//     }
//     count ++;

// }, {once: true});

// box3.addEventListener("click", function() {
//     if (count % 2 == 0) {
//         box3.innerHTML = "X";
//     }
//     else{
//         box3.innerHTML = "O";
//     }
//     count ++;

// }, {once: true});

// box4.addEventListener("click", function() {
//     if (count % 2 == 0) {
//         box4.innerHTML = "X";
//     }
//     else{
//         box4.innerHTML = "O";
//     }
//     count ++;

// }, {once: true});

// box5.addEventListener("click", function() {
//     if (count % 2 == 0) {
//         box5.innerHTML = "X";
//     }
//     else{
//         box5.innerHTML = "O";
//     }
//     count ++;

// }, {once: true});

// box6.addEventListener("click", function() {
//     if (count % 2 == 0) {
//         box6.innerHTML = "X";
//     }
//     else{
//         box6.innerHTML = "O";
//     }
//     count ++;

// }, {once: true});

// box7.addEventListener("click", function() {
//     if (count % 2 == 0) {
//         box7.innerHTML = "X";
//     }
//     else{
//         box7.innerHTML = "O";
//     }
//     count ++;

// }, {once: true});

// box8.addEventListener("click", function() {
//     if (count % 2 == 0) {
//         box8.innerHTML = "X";
//     }
//     else{
//         box8.innerHTML = "O";
//     }
//     count ++;

// }, {once: true});

// box9.addEventListener("click", function() {
//     if (count % 2 == 0) {
//         box9.innerHTML = "X";
//     }
//     else{
//         box9.innerHTML = "O";
//     }
//     count ++;

// }, {once: true});






