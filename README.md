**TOY DRONE PROJECT**

A command-based application where users can control a virtual drone on a 10x10 grid. Users can give commands to place, move, turn, attack, and report the drone's position and orientation on the board. The project includes a user interface with buttons and an output display that logs each command's result.

Table of Contents
1. Overview
2. Features
3. Installation
4. Usage
5. User Interface
6. Commands
7. Code Structure
8. Key Components
9. Images and Assets
10. Preloader
11. Customisation
12. Known Issues
13. License
-----------------------------------------------------------------------------------------------------------------------------------
*Overview*
The Toy Drone Project is a simple interactive web application that enables users to control a virtual drone. Users input commands to navigate the drone across a board, issuing commands such as place, move, turn, attack, and report. The project demonstrates JavaScript, HTML, and CSS principles, while providing an engaging UI that includes animations and button interactions.

-----------------------------------------------------------------------------------------------------------------------------------
*Features*
Interactive Board: A 10x10 grid where the drone moves and responds to commands.
Command Execution: Includes commands to control the drone's movement, direction, and position.
Visual Effects: Includes a collision effect when the attack command is issued, with GIFs and animations.
Command Buttons: Users can use buttons instead of text commands.
Output Display: Logs the output of each command in an output box for user feedback.

-----------------------------------------------------------------------------------------------------------------------------------
*Installation*
To set up the project locally:
Clone the repository:

Navigate to the project directory:
cd ToyDroneProject
Install dependencies (if required):
npm install
Start the development server:
npm start
Open your browser and go to http://localhost:3000.

-----------------------------------------------------------------------------------------------------------------------------------
*Usage*
User Interface
The user interface consists of three main areas:
Command Panel: A list of buttons for each available command (Place, Move, Left, Right, Attack, Report).
Grid Board: A 10x10 grid where the drone is displayed and moves according to commands.
Output Box: Displays the outcome of each command.

-----------------------------------------------------------------------------------------------------------------------------------
*Commands*
You can use the following commands, either by entering them in the text field or by clicking the buttons:
Place x,y,facing: Places the drone at the specified coordinates (x, y) facing a direction (e.g., North).
Move: Moves the drone forward one step in its current direction.
Left / Right: Turns the drone 90 degrees in the specified direction.
Attack: Triggers a collision effect, displaying a brief explosion animation.
Report: Outputs the drone’s current position and direction in the output box.

-----------------------------------------------------------------------------------------------------------------------------------
*Code Structure*
The project is organised into several files:

index.html: Contains the HTML structure, including command buttons, the grid board, and the output display.
styles.css: Defines the layout, styles, and animations for the project.
script.js: Contains the main logic for handling commands, updating the drone's position, and displaying the output.
drone.js: Defines the Drone class, which includes methods for movement, rotation, and collision handling.
projectile.js: Defines the Projectile class, which includes methods for managing the projectile’s position and attack animations.

-----------------------------------------------------------------------------------------------------------------------------------
*Key Components*
Drone Class (drone.js): Manages the drone's position and orientation, handling commands like move, place, and rotate.
Projectile Class (projectile.js): Manages the projectile's movement and collision effects for the attack command.
Preloader: Ensures all images and assets are loaded before starting, showing a progress bar.
Images and Assets
Board and Drone Images: Various images (in PNG or SVG format) are used to represent the board, drone, and projectile.
Explosion GIF: A GIF is used to show a collision effect when the drone attacks.
Preloader Assets: Images are preloaded for a smoother user experience.
To add or replace images, store them in the img directory and update the paths in script.js or projectile.js as needed.

-----------------------------------------------------------------------------------------------------------------------------------
*Preloader*
The preloader is implemented to show the loading progress of images before the game starts. It includes:

Progress Bar: Shows loading progress in percentages.
Loader Overlay: Disappears once all assets are loaded.

-----------------------------------------------------------------------------------------------------------------------------------
*Customisation*

Customising the Board Size
The board is set to a 10x10 grid by default. To change the size:
Update the maxColumns and maxRows values in both drone.js and projectile.js.
Adjust the grid-template-rows and grid-template-columns properties in styles.css to match the new grid size.
Adding New Commands
Add a new button in the index.html file for the command.
Define the command logic in script.js.
Update the commandListRun function to handle the new command.

-----------------------------------------------------------------------------------------------------------------------------------
*Known Issues*
Out of Bounds: The drone might still move outside the grid under certain conditions. Adjust the boundaries in drone.js to ensure it stays within limits.
Delayed Projectile Animation: The attack animation might not trigger immediately. Increasing or reducing the setTimeout delay in projectile.js might improve timing.
Image Not Loading: Ensure all images are in the correct directory (img) and that the paths in script.js are correct.

-----------------------------------------------------------------------------------------------------------------------------------
*License* 
This project is licensed under the MIT License. See LICENSE for more information.
