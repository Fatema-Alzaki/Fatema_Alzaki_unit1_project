// variable tracks which mode got selected
let selectedMode = null;

// this function updates the screen and highlights the selected mode
function selectMode(mode) {
  selectedMode = mode;

  // remove active class from both buttons first
  document.getElementById('btn-theory').classList.remove('active');
  document.getElementById('btn-practical').classList.remove('active');

  // add the active class to the selected button
  document.getElementById(`btn-${mode}`).classList.add('active');

  // go to the teacher screen
  document.getElementById('main-menu').classList.add('hidden');
  document.getElementById('teacher-screen').classList.remove('hidden');
}

// this starts the game after the teacher screen
function startGame() {
  initGame();
  document.getElementById('teacher-screen').classList.add('hidden');
  document.getElementById('game-screen').classList.remove('hidden');
}

// keeps track of the highest score achieved in both modes
let scoreBoard = {
  theory: { highScore: 0 },
  practical: { highScore: 0 }
};

// when clicking the Next button, the game starts based on selected mode
document.getElementById('btn-next').addEventListener('click', () => {
  if (!selectedMode) return;
  // hide teacher screen, show game screen
  document.getElementById('teacher-screen').classList.add('hidden');
  document.getElementById('game-screen').classList.remove('hidden');

  // initialize the quiz
  initGame();
});
