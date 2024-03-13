class Scooter {
  constructor(gameContainer) {
    this.gameContainer = gameContainer;
    this.element = document.createElement("div");
    this.element.classList.add("scooter");
    this.gameContainer.append(this.element);
    this.hook = document.querySelector(".hook");

    const waterBounds = document
      .getElementById("water")
      .getBoundingClientRect();

    this.position = {
      x: this.gameContainer.offsetWidth,
      y:
        Math.floor(Math.random() * (this.gameContainer.offsetHeight - 100)) +
        400,
    };
    this.intervalId = null;
    this.direction = {
      x: 2,
      y: 1,
    };

    this.start();
  }
  move() {
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
      // this.element.style.left = `${hookBoundaries.left}px`;
      // this.element.style.top = `${hookBoundaries.top}px`;
    }
  }
  vanish() {
    this.element.style.display = "none";
  }
}

export default Scooter;
