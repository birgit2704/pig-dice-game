(function () {
  let player1;
  let player2;
  let playerWhoseTurn;
  let messageBoard;
  let namePlayerWhoseTurn;
  let resultPlayer1 = 0;
  let resultPlayer2 = 0;
  let question;
  let winner;

  //set game button
  document.getElementById("new-game").addEventListener("click", function () {
    document.getElementById("message-board1").innerHTML = "";
    document.getElementById("pass").removeAttribute("disabled");
    document.getElementById("roll-dice").removeAttribute("disabled");
    document.querySelector("#game").className = "hidden";
    document.getElementById("result-player-1").innerHTML = "0";
    document.getElementById("result-player-2").innerHTML = "0";
    resultPlayer1 = 0;
    resultPlayer2 = 0;
    player1 = prompt("Player 1: What's your name?");
    player2 = prompt("Player 2: What's your name?");
    playerWhoseTurn = player1;
    messageBoard = document.querySelector(".message-board");
    namePlayerWhoseTurn = document.querySelector(".player");

    setNames();

    document.getElementById("score-player-1").innerHTML = `Score ${player1}:`;
    document.getElementById("score-player-2").innerHTML = `Score ${player2}:`;
  });

  //roll dice button
  document.getElementById("roll-dice").addEventListener("click", function () {
    document.getElementById("message-board1").innerHTML = "";
    let resultDice1 = Math.floor(Math.random() * 6) + 1;
    let resultDice2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("game").setAttribute("class", "visible");
    document.getElementById("dice-1").innerHTML = resultDice1;
    document.getElementById("dice-2").innerHTML = resultDice2;

    if (resultDice1 === 1 && resultDice2 === 1) {
      if (playerWhoseTurn === player1) {
        resultPlayer1 = 0;
        document.getElementById("result-player-1").innerHTML = resultPlayer1;
        playerWhoseTurn = player2;
      } else {
        resultPlayer2 = 0;
        document.getElementById("result-player-2").innerHTML = resultPlayer2;
        playerWhoseTurn = player1;
      }
      document.getElementById(
        "message-board1"
      ).innerHTML = `🐍 Sorry SNAKE EYES, your score is removed and it's ${playerWhoseTurn}'s turn`;
      setNames();
    } else if (resultDice1 === 1 || resultDice2 === 1) {
      if (playerWhoseTurn === player1) {
        playerWhoseTurn = player2;
      } else {
        playerWhoseTurn = player1;
      }
      document.getElementById(
        "message-board1"
      ).innerHTML = `Sorry you had a 1, it's ${playerWhoseTurn}'s turn now`;
      setNames();
    } else {
      if (playerWhoseTurn === player1) {
        resultPlayer1 = resultPlayer1 + resultDice1 + resultDice2;
        document.getElementById("result-player-1").innerHTML = resultPlayer1;

        if (resultPlayer1 >= 30) {
          winner = player1;
          document.getElementById("pass").setAttribute("disabled", "true");
          document.getElementById("roll-dice").setAttribute("disabled", "true");
          document.getElementById(
            "message-board1"
          ).innerHTML = `😀 Congratulations ${playerWhoseTurn}!!!!! You won the game!!!!!!!!                               
                    Press 'Play again' to play again`;
          document.getElementById("play-again").removeAttribute("disabled");
        }
      } else {
        resultPlayer2 = resultPlayer2 + resultDice1 + resultDice2;
        document.getElementById("result-player-2").innerHTML = resultPlayer2;
        if (resultPlayer2 >= 30) {
          winner = player2;
          document.getElementById("pass").setAttribute("disabled", "true");
          document.getElementById("roll-dice").setAttribute("disabled", "true");
          document.getElementById(
            "message-board1"
          ).innerHTML = `Congratulations ${playerWhoseTurn}!!!!! You won the game!!!!!!!!                               
                    Press 'Play again' to play again`;
          document.getElementById("play-again").removeAttribute("disabled");
        }
      }
    }
  });

  // pass button
  document.getElementById("pass").addEventListener("click", function () {
    if (playerWhoseTurn === player1) {
      playerWhoseTurn = player2;
    } else {
      playerWhoseTurn = player1;
    }
    setNames();
  });

  //quit game button
  document.getElementById("quit-game").addEventListener("click", reset);

  //play again
  document.getElementById("play-again").addEventListener("click", function () {
    document.querySelector("#game").className = "hidden";
    document.getElementById("message-board1").innerHTML = "";
    document.getElementById("result-player-1").innerHTML = "0";
    document.getElementById("result-player-2").innerHTML = "0";
    document.getElementById("pass").removeAttribute("disabled");
    document.getElementById("roll-dice").removeAttribute("disabled");
    resultPlayer1 = 0;
    resultPlayer2 = 0;
    if (winner === player1) {
      playerWhoseTurn = player2;
    } else {
      playerWhoseTurn = player1;
    }
    namePlayerWhoseTurn.innerHTML = playerWhoseTurn;
    messageBoard.innerHTML = playerWhoseTurn;
  });

  //reset
  function reset() {
    document.getElementById("score-player-1").innerHTML = `Score Player 1`;
    document.getElementById("score-player-2").innerHTML = `Score Player 2`;
    player1 = "Player 1";
    player2 = "Player 2";
    namePlayerWhoseTurn.innerHTML = "Player 1";
    messageBoard.innerHTML = `Player 1`;
    messageBoard.style.fontWeight = "normal";
    playerWhoseTurn = player1;
    document.getElementById("result-player-1").innerHTML = "0";
    document.getElementById("result-player-2").innerHTML = "0";
    resultPlayer1 = 0;
    resultPlayer2 = 0;
    document.querySelector("#game").className = "hidden";
  }

  //set names
  function setNames() {
    namePlayerWhoseTurn.innerHTML = playerWhoseTurn;
    messageBoard.innerHTML = `${playerWhoseTurn} it's your turn`;
    messageBoard.style.fontWeight = "bold";
  }
})();
