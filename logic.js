let currentBox = 1;
let word = "";
let round = 1; // Variable to track the round
let revealCounter = 0; // Counter for number of reveals
const maxReveals = 2; // Maximum number of reveals allowed per new word
let revealedIndexes = []; // Track the indexes of revealed letters

function startNextRound() {
  round++;

  // End the game after round 8
  if (round > 30) {
    endGame();
    return;
  }

  resetGame();

  // Reset revealCounter for the new round
  revealCounter = 0;

  // Update the image and correct word based on the round
  if (round === 2) {
    document.getElementById("wordImage").src = "./Images/3 Letters/axeimg1.svg";
    updateKeyboard(["A", "Q", "B", "X", "S", "C", "E", "T"]);
  } else if (round === 3) {
    document.getElementById("wordImage").src = "./Images/3 Letters/sunimg1.svg";
    updateKeyboard(["U", "R", "O", "D", "Z", "S", "N", "W"]);
  } else if (round === 4) {
    document.getElementById("wordImage").src = "./Images/3 Letters/antimg1.svg";
    updateKeyboard(["D", "R", "F", "N", "T", "I", "A", "X"]);
  } else if (round === 5) {
    document.getElementById("wordImage").src = "./Images/3 Letters/bedimg1.svg";
    updateKeyboard(["W", "E", "S", "D", "U", "Y", "J", "B"]);
  } else if (round === 6) {
    document.getElementById("wordImage").src = "./Images/3 Letters/hatimg1.svg";
    updateKeyboard(["A", "R", "I", "T", "Q", "W", "H", "X"]);
  } else if (round === 7) {
    document.getElementById("wordImage").src = "./Images/3 Letters/beeimg1.svg";
    updateKeyboard(["B", "N", "E", "A", "O", "H", "M", "E"]);
  } else if (round === 8) {
    document.getElementById("wordImage").src = "./Images/3 Letters/catimg1.svg";
    updateKeyboard(["K", "C", "G", "P", "O", "H", "T", "A"]);
  } else if (round === 9) {
    document.getElementById("wordImage").src = "./Images/3 Letters/pigimg1.svg";
    updateKeyboard(["P", "S", "E", "G", "K", "I", "M", "E"]);
  } else if (round === 10) {
    document.getElementById("wordImage").src = "./Images/3 Letters/dogimg1.svg";
    updateKeyboard(["B", "C", "D", "A", "O", "H", "L", "G"]);
  } else if (round === 11) {
    document.getElementById("wordImage").src = "./Images/3 Letters/ramimg1.svg";
    updateKeyboard(["R", "X", "A", "E", "O", "H", "W", "M"]);
  } else if (round === 12) {
    document.getElementById("wordImage").src = "./Images/3 Letters/cowimg1.svg";
    updateKeyboard(["B", "C", "E", "A", "O", "H", "Q", "W"]);
  } else if (round === 13) {
    addExtraLetterBox();
    document.getElementById("wordImage").src =
      "./Images/4 Letters/bulbimg1.svg";
    updateKeyboard(["U", "K", "B", "O", "Q", "L", "J", "B"]);
  } else if (round === 14) {
    document.getElementById("wordImage").src =
      "./Images/4 Letters/diskimg1.svg";
    updateKeyboard(["K", "S", "B", "O", "I", "L", "D", "B"]);
  } else if (round === 15) {
    document.getElementById("wordImage").src =
      "./Images/4 Letters/giftimg1.svg";
    updateKeyboard(["I", "K", "T", "O", "F", "L", "J", "G"]);
  } else if (round === 16) {
    document.getElementById("wordImage").src =
      "./Images/4 Letters/drumimg1.svg";
    updateKeyboard(["U", "R", "B", "O", "D", "V", "J", "M"]);
  } else if (round === 17) {
    document.getElementById("wordImage").src =
      "./Images/4 Letters/coinimg1.svg";
    updateKeyboard(["I", "K", "D", "P", "O", "L", "N", "C"]);
  } else if (round === 18) {
    document.getElementById("wordImage").src =
      "./Images/4 Letters/fireimg1.svg";
    updateKeyboard(["F", "H", "I", "O", "R", "U", "E", "M"]);
  } else if (round === 19) {
    document.getElementById("wordImage").src =
      "./Images/4 Letters/kiwiimg1.svg";
    updateKeyboard(["W", "K", "J", "O", "I", "L", "N", "I"]);
  } else if (round === 20) {
    document.getElementById("wordImage").src =
      "./Images/4 Letters/ballimg1.svg";
    updateKeyboard(["U", "A", "B", "O", "L", "S", "M", "L"]);
  } else if (round === 21) {
    document.getElementById("wordImage").src =
      "./Images/4 Letters/tacoimg1.svg";
    updateKeyboard(["U", "C", "S", "O", "Q", "T", "L", "A"]);
  } else if (round === 22) {
    document.getElementById("wordImage").src =
      "./Images/4 Letters/ringimg1.svg";
    updateKeyboard(["U", "L", "I", "P", "G", "N", "K", "R"]);
  } else if (round === 23) {
    document.getElementById("wordImage").src =
      "./Images/4 Letters/hookimg1.svg";
    updateKeyboard(["O", "K", "B", "O", "Q", "E", "G", "H"]);
  } else if (round === 24) {
    document.getElementById("wordImage").src =
      "./Images/4 Letters/crabimg1.svg";
    updateKeyboard(["U", "C", "B", "R", "Q", "F", "J", "A"]);
  } else if (round === 25) {
    document.getElementById("wordImage").src =
      "./Images/4 Letters/pearimg1.svg";
    updateKeyboard(["A", "S", "E", "U", "R", "G", "F", "P"]);
  } else if (round === 26) {
    document.getElementById("wordImage").src =
      "./Images/4 Letters/bellimg1.svg";
    updateKeyboard(["E", "K", "Z", "L", "A", "L", "J", "B"]);
  } else if (round === 27) {
    document.getElementById("wordImage").src =
      "./Images/4 Letters/woodimg1.svg";
    updateKeyboard(["P", "O", "U", "D", "W", "H", "O", "R"]);
  } else if (round === 28) {
    document.getElementById("wordImage").src =
      "./Images/4 Letters/bookimg1.svg";
    updateKeyboard(["A", "G", "B", "O", "Q", "O", "J", "K"]);
  } else if (round === 29) {
    document.getElementById("wordImage").src =
      "./Images/4 Letters/plugimg1.svg";
    updateKeyboard(["U", "K", "G", "O", "Q", "L", "P", "F"]);
  } else if (round === 30) {
    document.getElementById("wordImage").src =
      "./Images/4 Letters/doorimg1.svg";
    updateKeyboard(["D", "K", "B", "O", "R", "Q", "O", "A"]);
  }
}

// Function to submit and validate the word
function submitWord() {
  let correctWord = "";

  if (round === 1) {
    correctWord = "EGG";
  } else if (round === 2) {
    correctWord = "AXE";
  } else if (round === 3) {
    correctWord = "SUN";
  } else if (round === 4) {
    correctWord = "ANT";
  } else if (round === 5) {
    correctWord = "BED";
  } else if (round === 6) {
    correctWord = "HAT";
  } else if (round === 7) {
    correctWord = "BEE";
  } else if (round === 8) {
    correctWord = "CAT";
  } else if (round === 9) {
    correctWord = "PIG";
  } else if (round === 10) {
    correctWord = "DOG";
  } else if (round === 11) {
    correctWord = "RAM";
  } else if (round === 12) {
    correctWord = "COW";
  } else if (round === 13) {
    correctWord = "BULB";
  } else if (round === 14) {
    correctWord = "DISK";
  } else if (round === 15) {
    correctWord = "GIFT";
  } else if (round === 16) {
    correctWord = "DRUM";
  } else if (round === 17) {
    correctWord = "COIN";
  } else if (round === 18) {
    correctWord = "FIRE";
  } else if (round === 19) {
    correctWord = "KIWI";
  } else if (round === 20) {
    correctWord = "BALL";
  } else if (round === 21) {
    correctWord = "TACO";
  } else if (round === 22) {
    correctWord = "RING";
  } else if (round === 23) {
    correctWord = "HOOK";
  } else if (round === 24) {
    correctWord = "CRAB";
  } else if (round === 25) {
    correctWord = "PEAR";
  } else if (round === 26) {
    correctWord = "BELL";
  } else if (round === 27) {
    correctWord = "WOOD";
  } else if (round === 28) {
    correctWord = "BOOK";
  } else if (round === 29) {
    correctWord = "PLUG";
  } else if (round === 30) {
    correctWord = "DOOR";
  }

  if (word === correctWord) {
    checkAnswer(true);
    showModal("🏆 So Smart! 🏆", "😄 You've guessed correctly. Incredible! 🚀");
    startNextRound();
  } else {
    showModal("🤔 Oops! 🎒", "😑 You've guessed incorrectly. Try again! 🧐");
    resetGame();
  }
}

// Function to add an extra letter box
function addExtraLetterBox() {
  const wordGuessDiv = document.querySelector(".word-guess");

  const newLetterBox = document.createElement("div");
  newLetterBox.classList.add("letter-box");
  const newId = `box${wordGuessDiv.children.length + 1}`;
  newLetterBox.id = newId;

  wordGuessDiv.appendChild(newLetterBox);
}

// Function to update the keyboard letters
function updateKeyboard(newLetters) {
  const buttons = document.querySelectorAll(".keyboard button");
  buttons.forEach((button, index) => {
    button.innerText = newLetters[index];
    button.setAttribute("onclick", `selectLetter('${newLetters[index]}')`);
  });
}

// Function to handle letter selection
function selectLetter(letter) {
  if (currentBox <= document.querySelectorAll(".letter-box").length) {
    document.getElementById("box" + currentBox).innerText = letter;
    word += letter;
    currentBox++;
  }
}

// Function to reset the game
function resetGame() {
  currentBox = 1;
  word = "";

  const boxes = document.querySelectorAll(".letter-box");
  boxes.forEach((box) => (box.innerText = ""));
}

// Function to end the game and display the modal
function endGame() {
  // Disable all keyboard buttons
  const buttons = document.querySelectorAll(".keyboard button");
  buttons.forEach((button) => {
    button.disabled = true; // Disable each button
  });

  // Disable the Submit button
  const submitButton = document.querySelector(".submit-btn");
  if (submitButton) {
    submitButton.disabled = true; // Disable the Submit button
  }

  // Show the modal with a custom message
  showModal(
    "🎮 Game Over 🏆",
    "📚 Congratulations! You've completed all the Levels. Thanks for playing! 😄"
  );
}

let level = 1; // Initialize starting level

function increaseLevel() {
  level++;
  document.getElementById("level").innerText = `🏆 Level ${level} 🏆`;
}

function checkAnswer(isCorrect) {
  if (isCorrect) {
    increaseLevel();
  } else {
    resetGame();
  }
}

// Function to reveal one correct letter
function revealLetter() {
  if (revealCounter >= maxReveals) {
    showModal(
      "🫣 All Reveals Used 😑",
      "👀 You've used the maximum number of reveals. 🫣"
    );
    return;
  }

  let correctWord = "";

  if (round === 1) {
    correctWord = "EGG";
  } else if (round === 2) {
    correctWord = "AXE";
  } else if (round === 3) {
    correctWord = "SUN";
  } else if (round === 4) {
    correctWord = "ANT";
  } else if (round === 5) {
    correctWord = "BED";
  } else if (round === 6) {
    correctWord = "HAT";
  } else if (round === 7) {
    correctWord = "BEE";
  } else if (round === 8) {
    correctWord = "CAT";
  } else if (round === 9) {
    correctWord = "PIG";
  } else if (round === 10) {
    correctWord = "DOG";
  } else if (round === 11) {
    correctWord = "RAM";
  } else if (round === 12) {
    correctWord = "COW";
  } else if (round === 13) {
    correctWord = "BULB";
  } else if (round === 14) {
    correctWord = "DISK";
  } else if (round === 15) {
    correctWord = "GIFT";
  } else if (round === 16) {
    correctWord = "DRUM";
  } else if (round === 17) {
    correctWord = "COIN";
  } else if (round === 18) {
    correctWord = "FIRE";
  } else if (round === 19) {
    correctWord = "KIWI";
  } else if (round === 20) {
    correctWord = "BALL";
  } else if (round === 21) {
    correctWord = "TACO";
  } else if (round === 22) {
    correctWord = "RING";
  } else if (round === 23) {
    correctWord = "HOOK";
  } else if (round === 24) {
    correctWord = "CRAB";
  } else if (round === 25) {
    correctWord = "PEAR";
  } else if (round === 26) {
    correctWord = "BELL";
  } else if (round === 27) {
    correctWord = "WOOD";
  } else if (round === 28) {
    correctWord = "BOOK";
  } else if (round === 29) {
    correctWord = "PLUG";
  } else if (round === 30) {
    correctWord = "DOOR";
  }

  for (let i = 0; i < correctWord.length; i++) {
    let box = document.getElementById("box" + (i + 1));

    if (box.innerText === "") {
      revealedIndexes.push(i);
      box.innerText = correctWord[i];
      word += correctWord[i];
      currentBox = i + 2;
      revealCounter++;
      return;
    }
  }
}

// Function to clear all letter boxes without resetting the round or game state
function clearBoxes() {
  // Reset the current word and currentBox index
  currentBox = 1;
  word = "";

  // Clear the content of all letter boxes
  const boxes = document.querySelectorAll(".letter-box");
  boxes.forEach((box) => (box.innerText = ""));
}

// Function to display the modal dynamically
function showModal(title, bodyText) {
  // Get the modal elements
  const modalTitle = document.querySelector("#dynamicModal .modal-title");
  const modalBody = document.querySelector("#dynamicModal .modal-body");

  // Update the modal title and body
  modalTitle.innerText = title;
  modalBody.innerText = bodyText;

  // Show the modal using Bootstrap's modal method
  const modal = new bootstrap.Modal(document.getElementById("dynamicModal"));
  modal.show();
}
