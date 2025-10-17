const cells = []
for (let i = 1; i<=9; i++) {
    cells.push(document.getElementById(`cell-${i}`))
}

const playerOneWinScreen = document.getElementById(`p1Wins`);
const playerTwoWinScreen = document.getElementById(`p2Wins`);
const tiesDisplay = document.getElementById(`Ties`)

let board = Array(9).fill(null);
let currentPlayer = `X`;
let playerOneWins = 0;
let playerTwoWins = 0;
let ties = 0;

const winnerWinnerChickenDinner = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

function handleClick(e) {
    const index = cells.indexOf(e.target);
    if (board[index]) return;

    board[index] = currentPlayer;
    e.target.textContent = currentPlayer;

    if(checkWin(currentPlayer)) {
    if (currentPlayer === `X`) {
        playerOneWins++;
        playerOneWinScreen.textContent = `Player X Wins: ${playerOneWins}`;
    } 
    
    else {
        playerTwoWins++;
        playerTwoWinScreen.textContent = `Player O Wins: ${playerTwoWins}`;
    }
    alert(`Player ${currentPlayer} just dogged on you`);
    resetGame();
    return;
} 

else if (board.every(cell => cell)){
    ties++
    tiesDisplay.textContent = `Ties: ${ties}`;
    alert("yo its a tie btw")
    resetGame();
    return
} 

else {
    //If current player is on X this swaps to O, if not then itll switch to X 
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function resetGame() {
    board = Array(9).fill(null);
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
}

function checkWin(player) {
    return winnerWinnerChickenDinner.some(Dinner => Dinner.every(index => board[index] === player)
    )
}
cells.forEach(cell => cell.addEventListener(`click`, handleClick));



