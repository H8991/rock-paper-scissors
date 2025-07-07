// #region ---------------Functions-------------------------
function getComputerChoice() {
        let randomNumber = Math.random();
        let computerChoice;

        if (randomNumber >= 0 && randomNumber < 0.3) {
            computerChoice = "rock";
        }
        else if (randomNumber >= 0.3 && randomNumber < 0.66) {
            computerChoice = "paper";
        }
        else {
            computerChoice = "scissors";
        }
        return computerChoice;
}

function displayResults() {
        //Win
    if (playerScore > computerScore) {
        alert(`Congratulations. You are the winner.\nYou won ${playerWins} out of ${numOfGames}.
            Final Scores:
            Your score: ${playerScore}
            The Computer's score: ${computerScore}.
            Who said AI could take over the world?`);
    }
        //lose
    else if (playerScore < computerScore) {
        alert(`Unlucky mate, the computer got ya. Better luck next time.
            Final Scores:
            Your score: ${playerScore}
            The Computer's score: ${computerScore}.`);
    }
        //draw
    else {
        alert(`How boring. It was a draw.
            Final Scores:
            Your score: ${playerScore}
            The Computer's score: ${computerScore}.`
        );
    }

}

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();

    if ((playerChoice == "paper" && computerChoice === "rock")
        || (playerChoice == "scissors" && computerChoice === "paper")
        || (playerChoice == "rock" && computerChoice === "scissors"))
        {
        playerScore++;
        message.textContent = `You chose: ${playerChoice}.\nThe computer chose: ${computerChoice}.\nCongratulations, you won!`;
        }
    else if (playerChoice === computerChoice)
    {
        message.textContent =`You chose: ${playerChoice}.\nThe computer chose: ${computerChoice}. \nBoring...`;
    }
    else
        {
        computerScore++
        message.textContent = `You chose: ${playerChoice}.\nThe computer chose: ${computerChoice}. \nSorry, you lost this round.`;
        }
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
}

// #endregion

//#region --------------- References to HTML elements --------------------
//Buttons
const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");

// message text
const message = document.querySelector("#message");

// On-screen Scores
const cScore = document.querySelector("#cScore");
const pScore = document.querySelector("#pScore");
//#endregion


// #region ----------------Program-------------------------- 

//#region ---------------- Variables ------------------------
let playerScore = 0;
let computerScore = 0;
let numOfGames = 0;
//#endregion

// Event Listeners
rockBtn.addEventListener("click", () => {
    playRound("rock");
})
paperBtn.addEventListener("click", () => {
    playRound("paper");
})
scissorsBtn.addEventListener("click", () => {
    playRound("scissors");
})






// #endregion




