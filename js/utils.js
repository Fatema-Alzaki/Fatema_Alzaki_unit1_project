// utils.js

let selectedMode = null;

function selectMode(mode) {
  selectedMode = mode;
  document.getElementById('btn-theory').classList.remove('active');
  document.getElementById('btn-practical').classList.remove('active');
  document.getElementById(`btn-${mode}`).classList.add('active');
}

function startGame() {
  if (!selectedMode) {
    alert("Please select a mode to proceed."); // You may replace with custom UI
    return;
  }
  document.getElementById('main-menu').classList.add('hidden');
  document.getElementById('Teacher-screen').classList.remove('hidden');
  document.getElementById('game-screen').classList.remove('hidden');

  initGame();
}
let scoreBoard = {
  theory: { highScore: 0 },
  practical: { highScore: 0 }
};
