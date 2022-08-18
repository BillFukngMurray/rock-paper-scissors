function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;

    switch (num) {
        case 1:
            return console.log("Rock");
            break;
        case 2:
            return console.log("Paper");
            break;
        case 3:
            return console.log("Scissor");
            break;
        default: console.log("ERROR");
    }
    // console.log(num);
}


function playRound(playerSelection, computerSelection){
    playerSelection.toUpperCase();
    // computerSelection.toUpperCase();

    if()

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));