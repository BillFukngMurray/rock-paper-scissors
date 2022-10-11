let playerScore = 0;
let computerScore = 0;
let rounds = 0;
const buttons = document.querySelectorAll('.btn');

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
        alert("You lose! Paper beats Rock");
        return "Lose";

    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("You win! Rock beats Scissors");
        return "Win";

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("You win! Paper beats Rock");
        return "Win";

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        alert("You lose! Scissors beats Paper");
        return "Lose";

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("You Win! Scissors beats Paper");
        return "Lose";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        alert("You Lose! Rock beats Scissors");
        return "Lose";

    } else if (playerSelection === computerSelection) {
        alert("It's a Tie!");
        return "Tie";
    }

}




function game() {

    // for (let i = 0; i < 5; i++) {
    // let playerSelection = getPlayerChoice();
    buttons.forEach(button => button.addEventListener('click', (e) => {
        playerSelection = e.target.id;

        let computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);

        switch (result) {
            case "Win": playerScore++;
                break;
            case "Lose": computerScore++;
                break;
            case "Tie": playerScore++, computerScore++;
                break;
        }
        console.log(`playerSelection = ` + playerSelection + `; computerSelection = ` + computerSelection + `; Result = ` + result + `; playerScore = ` + playerScore
            + `; computerScore = ` + computerScore)

        //    console.log(playerSelection);

    }));




    // }

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

// function checkButton() {

//     const buttons = document.querySelectorAll('.btn');

//     buttons.forEach(button => button.addEventListener('click', () => {
//         alert(button.id);
//     }));

// }

// function checkButton2() {
//     const buttons2 = document.querySelectorAll('.btn');

//     buttons2.forEach(button => button.addEventListener('click', function (e) {
//         console.log(e.target);
//     }));
// }


//checkButton();
//checkButton2();
//getUserInput();
//getPlayerChoice();
game();