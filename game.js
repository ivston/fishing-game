import Scooter from "./scooter.js";
import Line from "./line.js";

class Game {
  constructor() {
    this.gameContainer = document.querySelector(".game-container");
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
      console.log(isInX);
      if (isInX && isInY) {
        clearInterval(this.intervalId);
        this.scooters[i].element.style.left = `${hookBoundaries.left}px`;
        this.scooters[i].element.style.top = `${hookBoundaries.top}px`;
      }
    }
  }

  //   checkCollision() {
  //     this.scooters.forEach((scooter) => {
  //       // scooters reference

  //       const scooterRect = scooter.element.getBoundingClientRect();
  //       const hookRect = this.hook.getBoundingClientRect();
  //       const gameContainerRect = this.gameContainer.getBoundingClientRect();

  //       if (scooterRect.right < gameContainerRect.left) {
  //         // reset scooter once it goes out of frame
  //         scooter.position = {
  //           x: gameContainerRect.width,
  //           y: gameContainerRect.height - scooter.element.offsetHeight,
  //         };
  //         move();
  //       } else if (
  //         scooterRect.top === lineRect.bottom &&
  //         scooterRect.right === lineRect.right
  //       ) {
  //         clearInterval(intervalId);
  //         scooter.position = {
  //           x: lineRect.right,
  //           y: lineRect.bottom - scooter.element.offsetHeight,
  //         };
  //       } //link scooter y to line y
  //     });
  //   }

  //   startGame() {
  //     this.intervalId = setInterval(() => {
  //       // should this be here
  //       if (this.running) {
  //         this.moveScooters();
  //         this.checkCollision();
  //       }
  //     }, 1000 / 60);
  //   }
  //   moveScooters() {
  //       this.Scooter.forEach((scooter) => {
  //     scooter.move();
  //   });
  // }

  //   checkCollision(){
  //     this.Scooter.forEach((scooter)=>{
  //         if(scooter.position.x < this.Line.position.x &&
  //             scooter.position.x + scooter.element.offsetWidth > this.Line.position.x &&
  //             scooter.position.y < this.Line.position.y + this.Line.element.offsetHeight   ==> getboundingclient
  //           )} // this is from chatGPT I don't really understand the condition
  //   }
}

// set the interval/animation rate?
// this.intervalId = setInterval(() => {

//         Scooter.move()

// }, 1000 / 60)
// }

// add event listener for the y coordinates of the mouse using clientY properties

//check for collision between the fishing line and scooter toggle classes accordingly?
//do I call the function here or just define it ?

export default Game;
