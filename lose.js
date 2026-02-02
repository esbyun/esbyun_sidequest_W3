// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawLose() → what the lose screen looks like
// 2) input handlers → how the player returns to the start screen

// ------------------------------
// Main draw function for lose screen
// ------------------------------
// drawLose() is called from main.js
// only when currentScreen === "lose"
function drawLose() {
  // Red-tinted background to communicate failure
  background(255, 210, 210);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main message
  textSize(40);
  text("OH NO :(", width / 2, 300);

  // Instruction text
  textSize(18);
  text(
    "You were too tired to retain any information. \nYou went in feeling groggy and fell asleep during the test. \nClick or press R to return to Start.",
    width / 2,
    370,
  );
}

// ------------------------------
// Mouse input for lose screen
// ------------------------------
// Any mouse click returns the player to the start screen
// (no buttons needed for this simple end state)
function loseMousePressed() {
  currentScreen = "start";
}

// ------------------------------
// Keyboard input for lose screen
// ------------------------------
// R is commonly used for “restart” in games
function loseKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
