let playerScore = 0;
let computerScore = 0;
let rounds = 0;
const buttons = document.querySelectorAll('.btn');
// const displayCompScore = document.getElementById('compScore');
// const displayPlayerScore = document.getElementById('playerScore');

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;

    switch (num) {
        case 1:
            // console.log("rock");
            return "rock";
        case 2:
            // console.log("paper");
            return "paper";
        case 3:
            // console.log("scissors");
            return "scissors";
        // default: console.log("ERROR");
        default: return "ERROR";
    }

}

// function getPlayerChoice() {
//     let choice = prompt("Rock, Paper or Scissors").toLowerCase();
//     return choice;
// }

function playRound(playerSelection, computerSelection) {

    computerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "paper") {
        // alert("You lose! Paper beats Rock");
        document.getElementById('result').textContent = "You lose! Paper beats Rock";
        return "Lose";

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        //alert("You win! Rock beats Scissors");
        document.getElementById('result').textContent = "You win! Rock beats Scissors";
        return "Win";

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        //alert("You win! Paper beats Rock");
        document.getElementById('result').textContent = "You win! Paper beats Rock";
        return "Win";

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        //alert("You lose! Scissors beats Paper");
        document.getElementById('result').textContent = "You lose! Scissors beats Paper"
        return "Lose";

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        //alert("You Win! Scissors beats Paper");
        document.getElementById('result').textContent = "You Win! Scissors beats Paper"
        return "Lose";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
       // alert("You Lose! Rock beats Scissors");
       document.getElementById('result').textContent = "You Lose! Rock beats Scissors"
        return "Lose";

    } else if (playerSelection === computerSelection) {
        //alert("It's a Tie!");
        document.getElementById('result').textContent = "It's a Tie!"
        return "Tie";
    }

       

}


function updateScores (playerSelection, computerSelection){

    document.getElementById('compScore').textContent = computerScore;
    document.getElementById('playerScore').textContent = playerScore;
}



function game() {

    buttons.forEach(button => button.addEventListener('click', (e) => {
        playerSelection = e.target.id;

        let computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);

        switch (result) {
            case "Win": playerScore++;
                break;
            case "Lose": computerScore++;
                break;
            case "Tie": 
                break;
        }
        console.log(`playerSelection = ` + playerSelection + `; computerSelection = ` + computerSelection + `; Result = ` + result + `; playerScore = ` + playerScore
            + `; computerScore = ` + computerScore)

        updateScores(playerSelection, computerSelection);

    }));

    //getWinner();

}

function getWinner() {

    if (playerScore === computerScore) {
        alert("It's a Tie! Play again.");

    } else if (playerScore > computerScore) {
        alert("You Won!");

    } else {
        alert("Computer Won! Better luck next time");
    }
}

game();