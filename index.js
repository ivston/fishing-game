import Game from "./game.js";
import Line from "./line.js";
import Scooter from "./scooter.js";
let game;
let line;
let scooters = [];
let gameContainer = document.querySelector("#game-container");
let score = 0;
let modal = document.getElementById("modal");
let restart = document.getElementById("try-again");

const playButton = document.getElementById("play");
playButton.addEventListener("click", () => {
  playButton.style.display = "none";
  game = new Game();
  line = new Line();
  score = 0;
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const scooter = new Scooter(game.gameContainer);
      scooters.push(scooter);
    }, i * 3000);
  }
});

document.addEventListener("mousemove", (event) => {
  if (line.element) {
    line.element.style.height = `${event.clientY - 310}px`;
    for (let i = 0; i < 10; i++) {
      if (scooters[i].isStopped) {
        scooters[i].element.style.top = `${event.clientY}px`;
      }
    }
  }
});

gameContainer.addEventListener("click", (event) => {
  if (event.clientY <= 400) {
    for (let i = 0; i < scooters.length; i++) {
      if (scooters[i].isStopped) {
        scooters[i].vanish();
        scooters.splice(i, 1);
        document.getElementById("score").innerHTML = score += 1;
        break;
      }
    }
  }

  if (score === 10) {
    modal.showModal();
  }

  restart.addEventListener("click", (event) => {
    modal.close();
    score = 0;
    document.getElementById("score").innerHTML = score;
    playButton.disabled = false;
    playButton.style.display = "block";
  });
});
