//#region VARIABLES Keep track of the players score etc
let playerScore = 0;
let playerWins = 0;
// keep track of the computers score
let computerScore = 0;
let computerWins = 0;
// keep track of amount of games
let numOfGames = 0;
//#endregion

// Write function that returns rock/paper/scissors for computer
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


/*Write function that returns rock/paper/scissors for Player
Use prompt to get user input */
function getUserChoice() {
    let userChoice = prompt("Please choose Rock, paper, or scissors.");
    alert(`You chose: ${userChoice}`);
    return userChoice.toLowerCase();
}



// Write: play round function that compares choice to see who wins

function playRound(humanChoice, computerChoice) {
    let playerChoice = humanChoice;
    let oppenentChoice = computerChoice;

        if ((playerChoice == "paper" && oppenentChoice === "rock")
         || (playerChoice == "scissors" && oppenentChoice === "paper")
         || (playerChoice == "rock" && oppenentChoice === "scissors"))
         {
            // Display the result (win/lose) 
            // increment scores accordingly
            playerScore++;
            numOfGames++;
            playerWins++;
            alert(`The computer chose: ${oppenentChoice}. \nCongratulations, you won! Your score is ${playerScore}.`);
         }
        else if (playerChoice === oppenentChoice)
        {
            computerScore++;
            playerScore++;
            numOfGames++;
            alert(`The computer chose: ${oppenentChoice}. It's a draw- you both get a point!`);
        }
        else
         {
            computerScore++;
            numOfGames++;
            computerWins++;
            alert(`The computer chose: ${oppenentChoice}. \nSorry, you lost this round. Your score is ${playerScore}`)
         }
}

function displayRules() {
    alert(`Welcome to Rock, Paper, Scissors.\nThere will be 5 rounds.\nWinner will be displayed at the end. Good Luck.`);
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
// write play game - consists of 5 rounds - then displays overall winner
function playGame() {

    //Display rules
    displayRules();
    
    //Play 5 rounds
    for (let i = 0; i < 5; i++) {
        let humanChoice = getUserChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    //Display Results
    displayResults();

}

playGame();


