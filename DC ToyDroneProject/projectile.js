import { replaceImg } from "./script.js"; // Import function to replace the image source

const maxColumns = 10; // Define the maximum number of columns on the board
const maxRows = 10; // Define the maximum number of rows on the board

const yMap = new Map(); // Map to store the y-axis values in inverted order
const xMap = new Map(); // Map to store the x-axis values

let j = maxRows;

// Invert Y axes to follow documentation so that y starts at the bottom of the screen
for (let i = 0; i < maxRows; i++) {
  yMap.set(i, j--);
}
yMap.set(maxRows, -1); // Set an out-of-bounds row index for maxRows

// Initialize xMap with 1-based column indices
for (let i = 0; i < maxColumns; i++) {
  xMap.set(i, i + 1);
}
xMap.set(maxColumns, -1); // Set an out-of-bounds column index for maxColumns

console.log("projectile"); // Log to verify this module loads
console.log(xMap, yMap); // Log maps to confirm setup

export default class Projectile {
  constructor(board) {
    this.board = board; // Reference to the game board element
    this.projectileElem = document.createElement("img"); // Element representing the projectile
    this.x; // X-coordinate for projectile
    this.y; // Y-coordinate for projectile
    this.facing = "North"; // Default direction for the projectile
    this.explosion = false; // Flag to track if projectile has exploded
  }

  // Draws the projectile on the board
  draw() {
    if (!this.explosion)
      replaceImg(this.projectileElem, `img/projectile${this.facing}.png`);

    // Position the projectile on the grid
    this.projectileElem.style.gridRowStart = yMap.get(Number(this.y));
    this.projectileElem.style.gridColumnStart = xMap.get(Number(this.x));
    this.projectileElem.classList.add("projectile"); // Add class for styling
    this.board.appendChild(this.projectileElem); // Append to board
  }

  // Update projectile's position and direction
  update(options) {
    this.x = options.x == null ? this.x : Number(options.x);
    this.y = options.y == null ? this.y : Number(options.y);
    this.facing = options.facing == null ? this.facing : options.facing;
    this.draw(); // Redraw projectile after update
  }

  // Animates the projectile movement and explosion
  // Uses nested timeouts to handle the sequence of movements and explosion
  shoot(pos1, pos2) {
    this.projectileElem.style.display = "block";
    setTimeout(() => {
      this.update(pos1);
      setTimeout(() => {
        this.update(pos2);
        setTimeout(() => {
          this.explosion = true;
          replaceImg(this.projectileElem, `img/explosion${this.facing}.png`);
          setTimeout(() => {
            this.explosion = false;
            this.projectileElem.style.display = "none"; // Hide projectile after explosion
          }, "500"); // Duration of explosion
        }, "500"); // Duration for second position
      }, "500"); // Duration for first position
    }, "500"); // Initial delay for animation
  }

  // Triggers an attack based on the direction the projectile is facing
  attack() {
    switch (this.facing) {
      case "NORTH":
        this.shoot({ y: this.y + 1 }, { y: this.y + 2 });
        break;
      case "SOUTH":
        this.shoot({ y: this.y - 1 }, { y: this.y - 2 });
        break;
      case "WEST":
        this.shoot({ x: this.x - 1 }, { x: this.x - 2 });
        break;
      case "EAST":
        this.shoot({ x: this.x + 1 }, { x: this.x + 2 });
        break;
    }
  }

  // Checks if the projectile is near the edges of the board
  collision() {
    console.log(this.y);
    return (
      this.x <= 1 ||
      this.x >= maxColumns - 2 ||
      this.y <= 1 ||
      this.y >= maxRows - 2
    );
  }
}
