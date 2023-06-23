// Global Constants Declaration

const WINNING_ROUNDS = 5;

const MOVES = Object.freeze({
    ROCK: 'ROCK',
    PAPER: 'PAPER',
    SCISSORS: 'SCISSORS'
})

const ROUND_OUTCOMES = Object.freeze({
    TIE: 'tie',
    WIN: 'win',
    LOSE: 'lose'
})


// UI Functions

const ui = Object.freeze({
    buttons: document.querySelectorAll('button'),
    playerMove: document.querySelector('#player-move-display'),
    computerMove: document.querySelector('#computer-move-display'),
    roundOutcomeDisplay: document.querySelector('#round-outcome-display'),
    roundNumber: document.querySelector('#round-number'),
    playerScore: document.querySelector('#player-score'),
    computerScore: document.querySelector('#computer-score'),
    gameOutcomeMessage: document.querySelector('#game-outcome-message'),
    gameResetButton: document.querySelector('#game-reset-button')
})

ui.buttons.forEach(button => {
    button.addEventListener('click', () => {
        resolveClick(button);
    })
})

function resolveClick(button) {
    switch (button.id) {
        case 'button-rock':
            playRound(MOVES.ROCK);  
            break;

        case 'button-paper':
            playRound(MOVES.PAPER);
            break; 

        case 'button-scissors':
            playRound(MOVES.SCISSORS);
            break;

        case 'game-reset-button':
            resetGame();
    }
}

function updateMovesDisplays(playerMove, computerMove){
    ui.playerMove.innerHTML = `<img src='./img/${playerMove.toLowerCase()}.png' alt='${playerMove.toLowerCase()} hand gesture icon' />`;
    ui.computerMove.innerHTML = `<img src='./img/${computerMove.toLowerCase()}.png' alt='${computerMove.toLowerCase()} hand gesture icon' />`;
}

function updateRoundOutcomeDisplay(roundOutcome) {
    ui.roundOutcomeDisplay.childNodes.forEach((node) => {
        if (node.id) {
            node.classList.remove('active');
            if (node.id.includes(roundOutcome)) {
                node.classList.add('active');
            }
        }
    })
}

let scoreboard = {
    round: 0,
    playerScore: 0,
    computerScore: 0
}

function updateScoreBoard(roundOutcome) {
    if (roundOutcome === ROUND_OUTCOMES.WIN) {
        scoreboard.playerScore++;
        ui.playerScore.textContent = `${scoreboard.playerScore}`;
    } else if (roundOutcome === ROUND_OUTCOMES.LOSE) {
        scoreboard.computerScore++;
        ui.computerScore.textContent = `${scoreboard.computerScore}`;
    }
    scoreboard.round++;
    ui.roundNumber.textContent = `${scoreboard.round}`;
}

function updateGameOverUI() {
    ui.gameResetButton.textContent = 'Play Again';
        if (scoreboard.playerScore > scoreboard.computerScore) {
            ui.gameOutcomeMessage.textContent = 'Congratulations! You beat the computer!';    
        } else {
            ui.gameOutcomeMessage.textContent = 'How disappointing! The computer beat you...';
        } 
}


// Game Logic Functions

function getComputerMove() {
    return MOVES[Object.keys(MOVES)[Math.floor(Math.random()*Object.keys(MOVES).length)]];
}

function getRoundOutcome(playerMove, computerMove) {
    if (playerMove === computerMove) {
        return ROUND_OUTCOMES.TIE;
    } else if (
        playerMove ===  MOVES.ROCK && computerMove === MOVES.SCISSORS ||
        playerMove === MOVES.PAPER  && computerMove ===  MOVES.ROCK ||
        playerMove === MOVES.SCISSORS && computerMove === MOVES.PAPER
        ) {
        return ROUND_OUTCOMES.WIN;
    } else return ROUND_OUTCOMES.LOSE;  
}

let gameOver = false;

function checkGameOver() {
    if (scoreboard.playerScore === WINNING_ROUNDS || scoreboard.computerScore === WINNING_ROUNDS) {
        gameOver = true;
        updateGameOverUI()
    }
}

function playRound(playerMove) {
    if (gameOver) return;
    let computerMove = getComputerMove();
    updateMovesDisplays(playerMove, computerMove);
    let roundOutcome = getRoundOutcome(playerMove, computerMove);
    updateRoundOutcomeDisplay(roundOutcome);
    updateScoreBoard(roundOutcome);
    checkGameOver();
}

function resetGame() {
    location.reload();
}