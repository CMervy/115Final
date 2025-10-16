const cells = []
for (let i = 1; i<=9; i++) {
    cells.push(document.getElementById(`cell-${i}`))
}

const playerOneWinScreen = document.getElementById(`playerOneWinScore`)
const playerTwoWinScreen = document.getElementById(`playerTwoWinScore`)
const tiesDisplay = document.getElementById(`Ties`)

let board = Array(9).fill(null);
let currentPlayer = `X`;
let playerOneWins = 0;
let playerTwoWins = 0;
let ties = 0;

const winnerWinnerChickenDinner = [
    [0,1,2], [3,4,5], [6,7,8]
    [0,3,6], [1,4,7], [2,5,8]
    [0,4,8], [2,4,6]
];

function handleClick(e) {
    const index = cells.indexOf(e.target);
    if (board[index]) return;

    board[index] = currentPlayer;
    e.target.textContent = currentPlayer;

    if(Checkwin(currentPlayer)) {
    if (currentPlayer === `X`) {
        playerOneWins++;
        playerOneWinsDisplay.textContent = playerOneWins;
    } else {
        playerTwoWins++;
        playerTwoWinsDisplay.textContent = playerTwoWins;
    }
    alert(`Player ${currentPlayer} just dogged on you`);
    
} 
else if (board.every(cell => cell)){
    ties++
    tiesDisplay.textContent = ties;
    alert("yo its a tie btw")
} else {
    //If current player is on X this swaps to O, if not then itll switch to X 
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}
}

