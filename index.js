import Game from "./game.js";
import Line from "./line.js";
import Scooter from "./scooter.js";
// const game = new Game();
let game;
let line;
let scooters = [];
let gameContainer = document.querySelector(".game-container");

const playButton = document.getElementById("play");
playButton.addEventListener("click", () => {
  game = new Game();
  line = new Line();
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
        break;
      }
    }
  }
});

// function checkCollision() {
//   this.scooters.forEach((scooter) => {
//     // scooters reference

//     const scooterRect = scooter.element.getBoundingClientRect();
//     const lineRect = this.Line.element.getBoundingClientRect();
//     const gameContainerRect = this.gameContainer.getBoundingClientRect();

//     if (scooterRect.right < gameContainerRect.left) {
//       // reset scooter once it goes out of frame
//       scooter.position = {
//         x: gameContainerRect.width,
//         y: gameContainerRect.height - scooter.element.offsetHeight,
//       };
//       move();
//     } else if (
//       scooterRect.top === lineRect.bottom &&
//       scooterRect.right === lineRect.right
//     ) {
//       clearInterval(intervalId);
//       scooter.position = {
//         x: lineRect.right,
//         y: lineRect.bottom - scooter.element.offsetHeight,
//       };
//     } //link scooter y to line y
//   });
// }
