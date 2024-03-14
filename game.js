import Scooter from "./scooter.js";
import Line from "./line.js";

class Game {
  constructor() {
    this.gameContainer = document.querySelector("#game-container");
    this.intervalId = null;
    this.running = false;
    this.points = 0;
    this.hook = document.querySelector(".hook");
    this.line = new Line(this.gameContainer);
    this.scooters = [];
    this.stoppedScooter = null;
  }

  checkForCollisionWithScooter() {
    const hookBoundaries = this.hook.getBoundingClientRect();
    for (let i = 0; i < this.scooters.length; i++) {
      const scooterBoundaries =
        this.scooters[i].element.getBoundingClientRect();
      const isInX =
        hookBoundaries.right > scooterBoundaries.left &&
        hookBoundaries.left < scooterBoundaries.right;
      const isInY =
        hookBoundaries.bottom > scooterBoundaries.top &&
        hookBoundaries.top < scooterBoundaries.bottom;

      if (isInX && isInY) {
        clearInterval(this.intervalId);
        this.scooters[i].element.style.left = `${hookBoundaries.left}px`;
        this.scooters[i].element.style.top = `${hookBoundaries.top}px`;
      }
    }
  }
}

export default Game;
