import Drone from "./drone.js"; // Import the Drone class
import Projectile from "./projectile.js"; // Import the Projectile class

const board = document.getElementById("board"); // Reference to the game board element
const commandList = document.querySelector(".commandListText"); // Reference to the command list display element
const commandListLinks = document.querySelector(".flexbox-left"); // Reference to the command button container
const outputBox = document.querySelector(".outputDisplay"); // Reference to the output display

const submitButton = document.querySelector(".submit-button"); // Reference to the submit button
const inputField = document.querySelector(".input-field"); // Reference to the input field for commands

const drone = new Drone(board); // Create an instance of Drone
const projectile = new Projectile(board); // Create an instance of Projectile

let commandInput = true; // Flag to track if initial "PLACE" command has been given

// Setting up the command list UI
commandList.innerHTML = `
    <h5 class="commandList__header">Commands</h5>
        <ul class="commandList">
            <li class="commandButton linkstyle">Place</li>
            <li class="commandButton linkstyle">Move</li>
            <li class="commandButton linkstyle">Left</li>
            <li class="commandButton linkstyle">Right</li>
            <li class="commandButton linkstyle">Attack</li>
            <li class="commandButton linkstyle">Report</li>
        </ul>
 `;

outputBox.innerHTML = `
    <h5 class="output__header">Output</h5>
        <div class="display_output"></div>
 `;

// Event listener for the submit button
submitButton.addEventListener("click", function () {
  const inputValue = inputField.value.toUpperCase(); // Get input value in uppercase
  if (inputValue.includes("PLACE") || inputValue.includes("ATTACK")) {
    const [command, options] = inputValue.split(" "); // Split input into command and options
    commandListRun(command, options); // Run the command with options
  } else {
    commandListRun(inputValue); // Run command without options
  }

  inputField.value = ""; // Clear the input field
});

// Function to allow further commands only after "PLACE"
function notPlaced(input) {
  if (input === "PLACE") {
    commandInput = false; // Unlock command input after "PLACE"
  }
}

// Function to output text to the display output
export function outputText(text) {
  const displayOutput = document.querySelector(".display_output");
  displayOutput.innerHTML += text + "</br>"; // Append text to output area
}

// Function to handle command execution
function commandListRun(command, options = "0,0,NORTH") {
  notPlaced(command); // Check if the drone has been placed first

  if (commandInput) {
    outputText(`Error - Place command should be completed first`); // Show error if "PLACE" is missing
  } else {
    switch (command) {
      case "PLACE":
        const [x, y, facing] = options.split(","); // Parse options for PLACE command
        if (drone.collition()) {
          return outputText(`Collision - Cannot complete ${command}`);
        }
        drone.update({ x, y, facing }); // Update drone position
        projectile.update({ x: drone.x, y: drone.y, facing: drone.facing }); // Update projectile position
        break;

      case "MOVE":
        if (drone.collition()) {
          return outputText(`Collision - Cannot complete ${command}`);
        }
        drone.move(); // Move drone in the current facing direction
        projectile.update({ x: drone.x, y: drone.y, facing: drone.facing });
        outputText(`${command} Drone moved 1 space forward`);
        break;

      case "LEFT":
        outputText(`${command} Drone turned left`);
        drone.left(); // Rotate drone to the left
        projectile.update({ x: drone.x, y: drone.y, facing: drone.facing });
        break;

      case "RIGHT":
        outputText(`${command} Drone turned right`);
        drone.right(); // Rotate drone to the right
        projectile.update({ x: drone.x, y: drone.y, facing: drone.facing });
        break;

      case "ATTACK":
        if (projectile.collition()) {
          return outputText(`Collision - Cannot complete ${command}`);
        }
        projectile.attack(); // Execute attack action with the projectile
        break;

      case "REPORT":
        outputText(`${command} ${drone.x},${drone.y},${drone.facing}`); // Display drone's position and facing direction
        break;
    }

    // Draw the drone and projectile on the board after each command
    drone.draw();
    projectile.draw();
  }
}

// Event handler for command button clicks
const buttonEvent = function (e) {
  const element = e.target.closest("li");
  if (element === null) return;

  if (element.classList[0] === "commandButton") {
    const command = element.innerText.toUpperCase(); // Get command text in uppercase
    if (command === "PLACE") {
      commandListRun(command, "0,0,NORTH"); // Default PLACE coordinates
    } else {
      commandListRun(command);
    }
  }
};

// Attach event listeners to the command buttons for click and touch events
commandListLinks.addEventListener("click", buttonEvent);
commandListLinks.addEventListener("touch", buttonEvent);

// Array of image file names to load
let images = [
  "droneEAST.png",
  "droneNORTH.png",
  "droneSOUTH.png",
  "droneWEST.png",
  "explosionEAST.png",
  "explosionNORTH.png",
  "explosionSOUTH.png",
  "explosionWEST.png",
  "projectileEAST.png",
  "projectileNORTH.png",
  "projectileSOUTH.png",
  "projectileWEST.png",
];

// Preloader setup for loading images and showing progress
let bar_percentage = document.getElementById("bar_percentage");
let percentage_number = document.getElementById("percentage_number");
let loaderOverlay = document.getElementById("loaderOverlay");

let img_queue = new createjs.LoadQueue();
let completedProgress = 0;
img_queue.addEventListener("progress", (event) => {
  let progress_percentage = Math.floor(event.progress * 100);
  bar_percentage.style.width = progress_percentage + "%"; // Update progress bar width
  percentage_number.innerHTML = progress_percentage + "%"; // Update percentage text
  console.log("progress " + Math.floor(event.progress * 100));
  if (progress_percentage === 100) preloaderComplete();
});

// Load each image file in the queue
images.forEach((element) => {
  img_queue.loadFile(`img/${element}`);
});

// Function to hide the loader overlay after preloading completes
function preloaderComplete() {
  loaderOverlay.remove();
}

let loadedImages = new Map(); // Map to store loaded images

// Add loaded image files to the map
img_queue.addEventListener("fileload", (e) => {
  addImg(e.item.id, e.loader._rawResult);
});

// Function to set an image source on an element
export function replaceImg(element, id) {
  const imgBlob = loadedImages.get(id);
  if (imgBlob) {
    const urlCreator = window.URL || window.webkitURL;
    const imageUrl = urlCreator.createObjectURL(imgBlob);
    element.src = imageUrl; // Set image URL as source
  }
}

// Add image data to the loadedImages map if not already present
function addImg(id, loadedImg) {
  if (!loadedImages.has(id)) {
    loadedImages.set(id, loadedImg);
  }
}
