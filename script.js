const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const handleResultValidation = () => {
    let roundWon = false;
    for (let i = 0; i < winningCombinations.length; i++) {
        const winCondition = winningCombinations[i];
        let a = cells[winCondition[0]].innerText;
        let b = cells[winCondition[1]].innerText;
        let c = cells[winCondition[2]].innerText;
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        gameActive = false;
        alert(`${currentPlayer} wins!`);
        return;
    }

    let roundDraw = !Array.from(cells).some(cell => cell.innerText === '');
    if (roundDraw) {
        gameActive = false;
        alert("It's a draw!");
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

const cellClicked = (e) => {
    const cell = e.target;
    const cellIndex = parseInt(cell.getAttribute('data-cell-index'));

    if (cell.innerText !== '' || !gameActive) {
        return;
    }

    cell.innerText = currentPlayer;
    handleResultValidation();
};
