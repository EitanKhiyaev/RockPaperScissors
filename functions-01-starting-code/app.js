const startGameBtn = document.getElementById('start-game-btn');
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const defaultUser = 'ROCK';
const RESULT_DRAW ='DRAW';
const RESULT_PLAYER_WINS='PLAYER_WINS'
const RESULT_COMPUTER_WINS='COMPUTER_WINS'
let gameIsRunning = false
const getPlayerChoice = ()=> {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, ' ').toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`Invalid input We chose ${defaultUser} for you`)
        return;
    }
    else return selection
}


const getComputerChoice =  ()=> {
    const randomValue = Math.random();
    if (randomValue < .34) {
        return ROCK;
    }
    else if (randomValue < .67) {
        return PAPER;
    }
    else {
        return SCISSORS;
    }
};

const getWinner = (cChoice,pChoice =defaultUser)=>{
    if(cChoice===pChoice){
        return RESULT_DRAW
    }
    else if(cChoice===ROCK && pChoice===PAPER){
        return RESULT_PLAYER_WINS;
    }
    else if(cChoice===ROCK && pChoice===PAPER || 
            cChoice===PAPER && pChoice===SCISSORS
            || cChoice===SCISSORS && pChoice===ROCK){
        return RESULT_PLAYER_WINS;
    }
    else if(cChoice===PAPER && pChoice===ROCK || 
            cChoice===SCISSORS && pChoice===PAPER || 
            cChoice===ROCK && pChoice=== SCISSORS){
        return RESULT_COMPUTER_WINS;
    }

}

startGameBtn.addEventListener('click', function () {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting');
    const playerSelection = getPlayerChoice();
    const ComputerChoice = getComputerChoice();
    let winner;
    if(playerSelection){
      winner=getWinner(ComputerChoice,playerSelection);
    } else{
        winner=getWinner(ComputerChoice);
    }
    let message= `You have picked ${playerSelection? playerSelection :defaultUser} 
    and the computer has chosen ${ComputerChoice}
     therefore `
    if(winner===RESULT_DRAW){
       message= message+ 'it is a draw'
    }
    else if(winner===RESULT_PLAYER_WINS){
        message=message + 'you have won'
    }
    else {
        message=message+'you have lost'
    }
    alert(message);
    gameIsRunning=false;
}
);