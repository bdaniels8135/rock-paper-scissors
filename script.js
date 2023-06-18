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

const rockButton = document.querySelector('#button-rock');
const paperButton = document.querySelector('#button-paper');
const scissorsButton = document.querySelector('#button-scissors');
const playerMoveDisplay = document.querySelector('#player-move-display');
const computerMoveDisplay = document.querySelector('#computer-move-display');
const roundOutcomeDisplay = document.querySelector('#round-outcome-display');
const roundNumber = document.querySelector('#round-number');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const gameOutcomeMessage = document.querySelector('#game-outcome-message');
const gameResetButton = document.querySelector('#game-reset-button');




// function printRoundMessage(playerMove, computerMove, roundOutcome, playerScore, computerScore, round) {
//     let outcomeMessage = 'This round is a tie!';
//     if (roundOutcome === ROUND_OUTCOMES.WIN) {
//         outcomeMessage = 'You win this round!';
//     }
//     if (roundOutcome === ROUND_OUTCOMES.LOSE) {
//         outcomeMessage = 'You lose this round!';
//     }
    
//     roundMessage = 
//     `Round ${round}
//     You played ${MOVES[playerMove]} and the computer played ${MOVES[computerMove]}.
//     ${outcomeMessage}
//     The current score is Player ${playerScore} Computer ${computerScore}.`;
    
//     console.log(roundMessage);
// }

// function getPlayerMove() {
//     let playerInput;
//     while (true) {
//         playerInput = prompt('Type your selection: ROCK, PAPER, or SCISSORS.');
//         if (playerInput === null) {
//             console.log('Quitter!');
//             return;
//         }
//         if (!MOVES[playerInput.toUpperCase()]) {
//             alert('Please enter a valid choice to continue playing or click cancel to quit.');
//             continue;
//         }
//         return MOVES[playerInput.toUpperCase()];
//     }
// }

// function printFinalMessage(playerScore, computerScore) {
//     let finalMessage;
//     if (playerScore > computerScore) {
//         finalMessage = 'Congratulations! You beat the computer!';    
//     } else if (playerScore < computerScore) {
//         finalMessage = 'How disappointing! The computer beat you...';
//     }
//     console.log(finalMessage);
// }


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

function updateScore (roundOutcome, playerScore, computerScore) {
    if (roundOutcome === ROUND_OUTCOMES.WIN) {
        playerScore++;
    }
    if (roundOutcome === ROUND_OUTCOMES.LOSE) {
        computerScore++;
    }
    return [playerScore, computerScore];
}


// Main Game Function

function game() {
    let round = 1;
    let playerScore = 0;
    let computerScore = 0;
    let playerMove;
    let computerMove;
    let roundOutcome;
    while (playerScore < WINNING_ROUNDS && computerScore < WINNING_ROUNDS) {
        playerMove = getPlayerMove();
        if (!playerMove) return;
        computerMove = getComputerMove();
        roundOutcome = getRoundOutcome(playerMove, computerMove);    
        [playerScore, computerScore] = updateScore(roundOutcome, playerScore, computerScore);
        printRoundMessage(playerMove, computerMove, roundOutcome, playerScore, computerScore, round);
        round++;
    }
    printFinalMessage(playerScore, computerScore);
}