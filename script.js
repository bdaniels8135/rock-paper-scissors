const CHOICES = [ 'ROCK', 'PAPER', 'SCISSORS']




function getComputerChoice() {
    return CHOICES[Math.floor(Math.random()*CHOICES.length)]
}

function playRound(playerSelection, computerSelection) {
    console.log(`You played ${playerSelection}. The computer played ${computerSelection}.`);
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

const playerSelection =  'ROCK';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));