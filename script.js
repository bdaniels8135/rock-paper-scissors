const CHOICES = ['ROCK', 'PAPER', 'SCISSORS']




function getComputerChoice() {
    return CHOICES[Math.floor(Math.random()*CHOICES.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It is a tie!';
    } else if (playerSelection === 'ROCK'){
        if (computerSelection === 'SCISSORS') {
            return 'You win! Rock crushes scissors.';
        } else {
            return 'You lose! Paper covers rock.';
        }
    } else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'ROCK') {
            return 'You lose! Rock crushes scissors.';
        } else {
            return 'You win! Scissors cut paper.';
        }
    } else {
        if (computerSelection === 'ROCK') {
            return 'You win! Paper covers rock.';
        } else {
            return 'You lose! Scissors cut paper.';
        }
    }
}