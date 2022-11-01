const userChoiceDisplay = document.getElementById('user-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
const resultDisplay = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    generateResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3 + 1)
    if(randomNumber === 1)
        {computerChoice = 'rock'}
    else if(randomNumber === 2)
        {computerChoice = 'paper'}
    else if(randomNumber === 3)
        {computerChoice = 'scissor'}
    
    computerChoiceDisplay.innerHTML = computerChoice
}

function generateResult(){
    
    if(computerChoice === userChoice){
        result = 'It\'s a draw!'
    }

    else if(computerChoice === 'rock' && userChoice === 'paper'){
        result='You Win!'
    }

    else if(computerChoice === 'rock' && userChoice === 'scissor'){
        result = 'You Lose!'
    }

    else if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'You Lose!'
    }

    else if(computerChoice === 'paper' && userChoice === 'scissor'){
        result = 'You Win!'
    }

    else if(computerChoice === 'scissor' && userChoice === 'paper'){
        result = 'You Lose!'
    }

    else if(computerChoice === 'scissor' && userChoice === 'rock'){
        result = 'You Win!'
    }

    resultDisplay.innerHTML = result
}

