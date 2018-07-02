function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function test() {
    prompt("THIS IS A TEST");
}

var wins = 0;
var losses = 0;
var draws = 0;

document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("draws").innerHTML = draws;

function compare(elem_id) {

    var userChoice = elem_id;
    var compChoice = getRandomInt(5);
    var winLoseDraw = "";

    if (userChoice == compChoice){
        alert("It's A Draw!");
        draws ++;
    }

    //Rock
    else if (userChoice == 0 && compChoice == 1){
        winLoseDraw = "Lose";
        losses ++;
    }
    else if (userChoice == 0 && compChoice == 2){
        winLoseDraw = "Win";
        wins ++;
    }
    else if (userChoice == 0 && compChoice == 3){
        winLoseDraw = "Win";
        wins ++;
    }
    else if (userChoice == 0 && compChoice == 4){
        winLoseDraw = "Lose";
        losses ++;
    }
    
    //Paper
    else if (userChoice == 1 && compChoice == 0){
        winLoseDraw = "Win";
        wins ++;
    }
    else if (userChoice == 1 && compChoice == 2){
        winLoseDraw = "Lose";
        losses ++;
    }
    else if (userChoice == 1 && compChoice == 3){
        winLoseDraw = "Lose";
        losses ++;
    }
    else if (userChoice == 1 && compChoice == 4){
        winLoseDraw = "Win";
        wins ++;
    }
    
    //Scissors
    else if (userChoice == 2 && compChoice == 0){
        winLoseDraw = "Lose";
        losses ++;
    }
    else if (userChoice == 2 && compChoice == 1){
        winLoseDraw = "Win";
        wins ++;
    }
    else if (userChoice == 2 && compChoice == 3){
        winLoseDraw = "Win";
        wins ++;
    }
    else if (userChoice == 2 && compChoice == 4){
        winLoseDraw = "Lose";
        losses ++;
    }

    //Lizard
    else if (userChoice == 3 && compChoice == 0){
        winLoseDraw = "Lose";
        losses ++;
    }
    else if (userChoice == 3 && compChoice == 1){
        winLoseDraw = "Win";
        wins ++;
    }
    else if (userChoice == 3 && compChoice == 2){
        winLoseDraw = "Lose";
        losses ++;
    }
    else if (userChoice == 3 && compChoice == 4){
        winLoseDraw = "Win";
        wins ++;
    }

    else if (userChoice == 4 && compChoice == 0){
        winLoseDraw = "Win";
        wins ++;
    }
    else if (userChoice == 4 && compChoice == 1){
        winLoseDraw = "Lose";
        losses ++;
    }
    else if (userChoice == 4 && compChoice == 2){
        winLoseDraw = "Win";
        wins ++;
    }
    else if (userChoice == 4 && compChoice == 3){
        winLoseDraw = "Lose";
        losses ++;
    }
    
    alert("You " + winLoseDraw + "\n" + "You chose: " + userChoice + "\n" + "Computer chose: " + compChoice);

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("draws").innerHTML = draws;

}