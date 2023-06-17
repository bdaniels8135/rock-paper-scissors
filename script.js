const MAX_ROUNDS = 5;

const CHOICES = Object.freeze({
    ROCK: 'ROCK',
    PAPER: 'PAPER',
    SCISSORS: 'SCISSORS'
})

const ROUND_OUTCOMES = Object.freeze({
    TIE: 'tie',
    WIN: 'win',
    LOSE: 'lose'
})

function getComputerChoice() {
    return CHOICES[Object.keys(CHOICES)[Math.floor(Math.random()*Object.keys(CHOICES).length)]];
}

function getRoundOutcome(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return ROUND_OUTCOMES.TIE;
    } else if (
        playerChoice ===  CHOICES.ROCK && computerChoice === CHOICES.SCISSORS ||
        playerChoice === CHOICES.PAPER  && computerChoice ===  CHOICES.ROCK ||
        playerChoice === CHOICES.SCISSORS && computerChoice === CHOICES.PAPER
        ) {
        return ROUND_OUTCOMES.WIN;
    } else return ROUND_OUTCOMES.LOSE;  
}

function printRoundMessage(playerChoice, computerChoice, roundOutcome, playerScore, computerScore, round) {
    let outcomeMessage = 'This round is a tie!';
    if (roundOutcome === ROUND_OUTCOMES.WIN) {
        outcomeMessage = 'You win this round!';
    }
    if (roundOutcome === ROUND_OUTCOMES.LOSE) {
        outcomeMessage = 'You lose this round!';
    }
    
    roundMessage = 
    `Round ${round}
    You played ${CHOICES[playerChoice]} and the computer played ${CHOICES[computerChoice]}.
    ${outcomeMessage}
    The current score is Player ${playerScore} Computer ${computerScore}.`;
    
    console.log(roundMessage);
 }

function getPlayerChoice() {
    let playerInput;
    while (true) {
        playerInput = prompt('Type your selection: ROCK, PAPER, or SCISSORS.');
        if (playerInput === null) {
            console.log('Quitter!');
            return;
        }
        if (!CHOICES[playerInput.toUpperCase()]) {
            alert('Please enter a valid choice to continue playing or click cancel to quit.');
            continue;
        }
        return CHOICES[playerInput.toUpperCase()];
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
    let playerChoice;
    let computerChoice;
    let roundOutcome;
    for (let round = 1; round <= MAX_ROUNDS; round++) {
        playerChoice = getPlayerChoice();
        if (!playerChoice) return;
        computerChoice = getComputerChoice();
        roundOutcome = getRoundOutcome(playerChoice, computerChoice);    
        [playerScore, computerScore] = updateScore(roundOutcome, playerScore, computerScore);
        printRoundMessage(playerChoice, computerChoice, roundOutcome, playerScore, computerScore, round);
    }
    printFinalMessage(playerScore, computerScore);
}