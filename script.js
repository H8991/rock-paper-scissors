//#region ---------------- Variables ------------------------
let playerScore = 0;
let computerScore = 0;
let numOfGames = 0;
let gameEnded = false;
//#endregion

//#region ---------- References to HTML elements ------------
// Screen
const screen = document.querySelector("#screen-container");
//Buttons
const startBtn = document.querySelector("#startBtn");
const rpsBtn = document.querySelectorAll(".rpsBtn");
const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
// message text
const message = document.querySelector("#message");
const scoreText = document.querySelectorAll(".score");
// On-screen Scores
const cScore = document.querySelector("#cScore");
const pScore = document.querySelector("#pScore");
// Reset
const resetBtn = document.createElement("button");
//#endregion

// #region ---------------- Functions ------------------------
function welcomeUser() {
    //Welcome Message
    message.textContent = "Welcome to rock, paper, scissors.";
    //Hide Elements
    rpsBtn.forEach(button => {
        button.classList.add("hide");
    });
    scoreText.forEach(element => {
        element.classList.add("hide");
    })
    //Start Button
    startBtn.addEventListener("click", () => {
        //Show game buttons
        rpsBtn.forEach(button => {
        button.classList.remove("hide");
        //Show scores
        scoreText.forEach(element => {
        element.classList.remove("hide");
        //Remove start button
        startBtn.remove();
        //Set game message
        message.textContent = "Rock, paper, or scissors?"
    });
    });
    });
}

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

function playRound(playerChoice) {
    let computerChoice = getComputerChoice();

    if (gameEnded) {
        return;
    }
    else {
        
        clearMessageClasses();
    if ((playerChoice == "paper" && computerChoice === "rock")
    || (playerChoice == "scissors" && computerChoice === "paper")
    || (playerChoice == "rock" && computerChoice === "scissors"))
        {
        playerScore++;
        message.classList.add("win");
        message.textContent = `You chose: ${playerChoice}.\nThe computer chose: ${computerChoice}.\nCongratulations, you won!`;
        }
    else if (playerChoice === computerChoice)
        {
        message.classList.add("draw");
        message.textContent =`You chose: ${playerChoice}.\nThe computer chose: ${computerChoice}. \nBoring...`;
        }
    else
        {
        computerScore++
        message.classList.add("lose");
        message.textContent = `You chose: ${playerChoice}.\nThe computer chose: ${computerChoice}.\nSorry, you lost this round.`;
        }
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    numOfGames++
    gameOver(playerScore, computerScore);
    }
    
}

function gameOver(playerScore, computerScore) {

    if ((playerScore == 5) || (computerScore==5)) {
        gameEnded = true;
        clearMessageClasses();
        if (playerScore > computerScore){
            message.textContent = "👑\nCongratulations.\nYou won!";
        }
        else {
            message.textContent = "❌\nYou lost...";
        }
        
    
        // hide game buttons
        rpsBtn.forEach(button => {
            button.classList.add("hide");
        });

        // Add reset button
        resetBtn.classList.remove("hide");
        resetBtn.textContent = "New Game";
        resetBtn.classList.add("rpsBtn");
        screen.appendChild(resetBtn);

        // On click of reset button:
        resetBtn.addEventListener("click", () => {
            message.textContent = "Rock, paper, or scissors?";

            resetGame();
        })
    }
}

function clearMessageClasses() {
    message.classList.remove("win");
    message.classList.remove("lose");
    message.classList.remove("draw");
}

function resetGame() {
    // Hide reset button
    resetBtn.classList.add("hide");

    // re-enable game buttons
    rpsBtn.forEach(button => {
    button.classList.remove("hide");
    });

    playerScore = 0;
    computerScore = 0;
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    numOfGames = 0;
    gameEnded = false;

}

// #endregion

// #region --------------- Event Listeners-------------------------- 
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

// -------------------- Program -------------------------------
welcomeUser();




