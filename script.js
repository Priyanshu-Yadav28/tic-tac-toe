
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

const clickSound = new Audio("./assets/sounds/click.wav");
const winSound = new Audio("./assets/sounds/winner.mp3");
// create a function to inititalise the game 
function initGame() {
    winSound.pause();
    winSound.currentTime = 0;

    currentPlayer = "X";
    gameGrid = ["", "", "", "", "", "", "", "", ""];

    // UI par empty bhi karna padega when we click on new game button 
    boxes.forEach((box, index) => {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        // one moer thing left -> intitialise box with css properties again 
        box.classList = `box box${index + 1}`; 
    });

    newGameBtn.classList.remove("active"); 
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initGame();

function swapTurn() {
    if(currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
    // UI info
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}


function checkGameOver() {
    let answer = "";

    winningPositions.forEach((position) => {
        // all 3 boxes should be non-empty and exactly same in value
        if ((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "" ) && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])) {

            // chek if winner is X
            if (gameGrid[position[0]] === "X") {
                answer = "X";
            } else {
                answer = "O";
            }

            // disable pointer event
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            });

            // now we know X/O is a winner 
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
}

    });
    
    // it means we have a winner 
    if(answer !== "" ) {
        gameInfo.innerText = `Winner Player - ${answer}`;
        winSound.play();
        newGameBtn.classList.add("active");
        return;
    } 

    //let's check when there is tie : 
    let fillCount = 0;

    gameGrid.forEach((box) => {
        if(box !== "") {
            fillCount++;
        }
    });

    // board is filled, game is TIE

    if(fillCount === 9) {
        gameInfo.innerText = "Match Tied !";
        newGameBtn.classList.add("active");
    }
     

} 



function handleClick(index) {
    // newGameBtn.classList.add("active");
     if(gameGrid[index] == "") {
        boxes[index].innerText = currentPlayer; // changes the UI

        gameGrid[index] = currentPlayer; // changes the gameGrid array 
        boxes[index].style.pointerEvents = "none";
        clickSound.play();
        // swap the turn 
        swapTurn();
        // check koi jeet to nahi gaya
        checkGameOver();
     }
};

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);
    })
});

newGameBtn.addEventListener("click", initGame);











