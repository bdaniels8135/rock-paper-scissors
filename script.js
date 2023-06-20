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
        resolveClick(button)
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
    console.log(`Player Move: ${playerMove} Computer Move: ${computerMove}`);
}

function updateRoundOutcomeDisplay(roundOutcome) {
    console.log(`Round Outcome: ${roundOutcome}`)
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

function checkGameOver() {
    console.log('check if game is over...')
}

function playRound(playerMove) {
    let computerMove = getComputerMove();
    updateMovesDisplays(playerMove, computerMove);
    let roundOutcome = getRoundOutcome(playerMove, computerMove);
    updateRoundOutcomeDisplay(roundOutcome);
    updateScoreBoard(roundOutcome);
    checkGameOver()
}

function resetGame() {
    location.reload();
}