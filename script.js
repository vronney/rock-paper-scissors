var yourScore = 0;
var computerScore = 0;
function rockPaperScissors(choice) {
    computerChoice = ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
    document.getElementById("choices").innerHTML = "You chose " + choice + ", and the computer chose " + computerChoice + "."
    if (choice == computerChoice) {
        document.getElementById("winLoseOrTie").innerHTML = "It was a tie!";
    } else if (["RockScissors", "PaperRock", "ScissorsPaper"].indexOf(choice + computerChoice) != -1) {
        yourScore++;
        document.getElementById("winLoseOrTie").innerHTML = "You won!";
        document.getElementById("yourScore").innerHTML = "Your score: " + yourScore.toString();
    } else {
        computerScore++;
        document.getElementById("winLoseOrTie").innerHTML = "The computer won!";
        document.getElementById("computerScore").innerHTML = "Computer's score: " + computerScore.toString();
    }
}


