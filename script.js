const CHOICES = ['ROCK', 'PAPER', 'SCISSORS']

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random()*CHOICES.length)]
}
