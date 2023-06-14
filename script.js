const CHOICES = ['ROCK', 'PAPER', 'SCISSORS']


function getComputerChoice() {
    return CHOICES[Math.floor(Math.random()*CHOICES.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It is a tie!';
    } else if (playerSelection ===  'ROCK'){
        if (computerSelection === 'SCISSORS') {
            return 'You win! ROCK crushes SCISSORS.';
        } else {
            return 'You lose! PAPER covers ROCK.';
        }
    } else if (playerSelection === 'SCISSORS') {
        if (computerSelection ===  'ROCK') {
            return 'You lose! ROCK crushes SCISSORS.';
        } else {
            return 'You win! SCISSORS cut PAPER.';
        }
    } else {
        if (computerSelection ===  'ROCK') {
            return 'You win! PAPER covers ROCK.';
        } else {
            return 'You lose! SCISSORS cut PAPER.';
        }
    }
}

function game() {
    let round = 0;
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection = null;
    let computerSelection = null;
    let message = null;
    while (round < 5) {
        playerSelection = prompt('Type your selection: ROCK, PAPER, or SCISSORS.').toUpperCase();
        if (CHOICES.includes(playerSelection)) {
            computerSelection = getComputerChoice();
            message = playRound(playerSelection, computerSelection);
            if (message.includes('win')) {
                playerScore++;
            } else if (message.includes('lose')) {
                computerScore++;
            }
            round++;
            console.log(`You played ${playerSelection}. The computer played ${computerSelection}.`);
            console.log(message);
            console.log(`Score: Player ${playerScore} Computer ${computerScore}`);
        } else {
            alert('Please enter a valid choice to continue playing.')
        }
    }
    if (playerScore > computerScore) {
        console.log('Congratulations! You beat the computer!')    
    } else if (playerScore < computerScore) {
        console.log('How disappointing! The computer beat you...')
    } else {
        console.log('Wow! It is a tie.')
    }
}