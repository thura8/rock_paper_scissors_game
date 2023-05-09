const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");

const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let player;
let computer;
let result;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player : ${player}`;
    computerText.textContent = `Computer : ${computer}`;
    resultText.textContent = checkWinner();
  })
);

function computerTurn() {
  let ranNum = Math.floor(Math.random() * 3) + 1;

  switch (ranNum) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}

function checkWinner() {
  if (player == computer) {
    return "DRAW !!!";
  } else if (player == "PAPER") {
    return computer == "ROCK" ? "You Win !!!" : "You lose!!!";
  } else if (player == "ROCK") {
    return computer == "SCISSORS" ? "You Win !!!" : "You lose!!!";
  } else if (player == "SCISSORS") {
    return computer == "PAPER" ? "You Win!!!" : "You lose!!!";
  }
}
