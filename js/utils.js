// utils.js

let selectedMode = null;

function selectMode(mode) {
  selectedMode = mode;
  document.getElementById('btn-theory').classList.remove('active');
  document.getElementById('btn-practical').classList.remove('active');
  document.getElementById(`btn-${mode}`).classList.add('active');
  document.getElementById('main-menu').classList.add('hidden');
  document.getElementById('teacher-screen').classList.remove('hidden');
}


function startGame() {
  initGame();
  document.getElementById('teacher-screen').classList.add('hidden');
  document.getElementById('game-screen').classList.remove('hidden');
}

let scoreBoard = {
  theory: { highScore: 0 },
  practical: { highScore: 0 }
};

document.getElementById('btn-next').addEventListener('click', () => {
  if (!selectedMode) return;

  document.getElementById('teacher-screen').classList.add('hidden');
  document.getElementById('game-screen').classList.remove('hidden');

  initGame();
});

