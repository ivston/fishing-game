class Scooter {
  constructor(gameContainer) {
    this.gameContainer = gameContainer;
    this.element = document.createElement("div");
    this.element.classList.add("scooter");
    this.gameContainer.append(this.element);
    this.hook = document.querySelector(".hook");

    const canal = this.gameContainer.querySelector("#canal");
    this.startingPoint = this.gameContainer.offsetWidth;
    this.position = {
      x: this.gameContainer.offsetWidth,
      y: Math.floor(Math.random() * (675 - 475 + 1)) + 475,
    };
    this.element.style.top = `${this.position.y}px`;
    this.intervalId = null;
    this.direction = {
      x: 2,
      y: 1,
    };

    this.start();
  }
  move() {
    if (this.position.x < -100) {
      this.position.x = this.startingPoint;
    }
    this.position.x -= this.direction.x;
    this.element.style.left = `${this.position.x}px`;
  }
  start() {
    this.intervalId = setInterval(() => {
      this.move();
      this.checkForCollision();
    }, 1000 / 60);
  }

  checkForCollision() {
    const hookBoundaries = this.hook.getBoundingClientRect();
    const scooterBoundaries = this.element.getBoundingClientRect();

    const isInX =
      hookBoundaries.right > scooterBoundaries.left &&
      hookBoundaries.left < scooterBoundaries.right;

    const isInY =
      hookBoundaries.bottom > scooterBoundaries.top &&
      hookBoundaries.top < scooterBoundaries.bottom;

    if (isInX && isInY) {
      clearInterval(this.intervalId);
      this.isStopped = true;
    }
  }
  vanish() {
    this.element.style.display = "none";
  }
}

export default Scooter;
