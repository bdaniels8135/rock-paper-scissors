const MAX_ROUNDS = 5;

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

function printRoundMessage(playerMove, computerMove, roundOutcome, playerScore, computerScore, round) {
    let outcomeMessage = 'This round is a tie!';
    if (roundOutcome === ROUND_OUTCOMES.WIN) {
        outcomeMessage = 'You win this round!';
    }
    if (roundOutcome === ROUND_OUTCOMES.LOSE) {
        outcomeMessage = 'You lose this round!';
    }
    
    roundMessage = 
    `Round ${round}
    You played ${MOVES[playerMove]} and the computer played ${MOVES[computerMove]}.
    ${outcomeMessage}
    The current score is Player ${playerScore} Computer ${computerScore}.`;
    
    console.log(roundMessage);
 }

function getPlayerMove() {
    let playerInput;
    while (true) {
        playerInput = prompt('Type your selection: ROCK, PAPER, or SCISSORS.');
        if (playerInput === null) {
            console.log('Quitter!');
            return;
        }
        if (!MOVES[playerInput.toUpperCase()]) {
            alert('Please enter a valid choice to continue playing or click cancel to quit.');
            continue;
        }
        return MOVES[playerInput.toUpperCase()];
    }
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

function printFinalMessage(playerScore, computerScore) {
    let finalMessage = 'It is a tie. Lame...';
    if (playerScore > computerScore) {
        finalMessage = 'Congratulations! You beat the computer!';    
    } else if (playerScore < computerScore) {
        finalMessage = 'How disappointing! The computer beat you...';
    }
    console.log(finalMessage);
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerMove;
    let computerMove;
    let roundOutcome;
    for (let round = 1; round <= MAX_ROUNDS; round++) {
        playerMove = getPlayerMove();
        if (!playerMove) return;
        computerMove = getComputerMove();
        roundOutcome = getRoundOutcome(playerMove, computerMove);    
        [playerScore, computerScore] = updateScore(roundOutcome, playerScore, computerScore);
        printRoundMessage(playerMove, computerMove, roundOutcome, playerScore, computerScore, round);
    }
    printFinalMessage(playerScore, computerScore);
}