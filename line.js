class Line {
  constructor(gameContainer) {
    this.gameContainer = gameContainer;
    this.element = document.getElementById("line");
    this.position = {
      x: 0, //do i need to specify those or is there a way to grab them directly
      y: 0,
    };
  }

  //   extendDown(mouseY) {
  //     if (mouseY > this.position.y) {
  //       this.element.style.height = `${mouseY - this.position.y}px`;
  //     }
  //specify cursor position as the argument of extendDown
  //if cursor is bellow the water line, extend fishing line - line takes mouse's Y coordinates for its height
  //if () {
  // if mouse is below water level, replace Line height with mouse Y coordinates
}

//function to check for collision here and if collision with a scooter,
//switching classes of hook and scooter to display one hooked and static on the hook

export default Line;
