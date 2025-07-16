// User Interface for ElectroEasy

// Load game sound effects
const sounds = {
  wrong_Answer: new Audio('../assets/audio/wrong answer.mp3'),
  Right_Answer: new Audio('../assets/audio/correct answer.mp3'),
  Whole_game: new Audio('../assets/audio/the whole game sound effect.mp3'),
  AA_game: new Audio('../assets/audio/happy sound effect A+.mp3'),
  A_game: new Audio('../assets/audio/yayy sound effect A.mp3'),
  B_game: new Audio('../assets/audio/sad sound effect (B).mp3'),
  C_game: new Audio('../assets/audio/crying and coffing (C).mp3'),
  F_game: new Audio('../assets/audio/crying (fail).mp3')
};

// Show question and options on the screen
function updateQuestionUI(questionObj) {
  document.getElementById('game-speech-bubble').innerText = questionObj.prompt;

  const studentImg = document.getElementById('student-avatar');

  // Set student image depending on mode
  if (selectedMode === 'theory') {
    studentImg.src = 'assets/img/sad in class.png';
  } else {
    studentImg.src = 'assets/img/sad in lab.png';
  }

  // Display answer buttons
  const buttons = document.querySelectorAll('#answers button');
  questionObj.options.forEach((opt, i) => {
    buttons[i].innerText = opt;
    buttons[i].onclick = () => {
      const isCorrect = opt === questionObj.correctAnswer;

      // Show feedback image
      studentImg.src = isCorrect
        ? 'assets/img/correct answer.png'
        : 'assets/img/wrong answer.png';

      // Disable all buttons while waiting
      buttons.forEach(btn => btn.disabled = true);

      // Wait a bit before going to next question
      setTimeout(() => {
        checkAnswer(opt);
        buttons.forEach(btn => btn.disabled = false);
      }, 1000);
    };
  });
}

// Update top panel info (score, hearts, question count)
function updateStats(score, hearts, total, current) {
  document.getElementById('grade').innerText = score;
  document.getElementById('hearts').innerText = hearts;
  document.getElementById('question-count').innerText = `${total - current} Questions`;

  const progressPercent = Math.round((current / total) * 100);
  document.getElementById('progress-bar').style.width = `${progressPercent}%`;
}

// Show result screen with summary
function showResultScreen(score, answerLog) {
  document.getElementById('game-screen').classList.add('hidden');
  document.getElementById('results-screen').classList.remove('hidden');
  document.getElementById('final-grade').innerText = score;

  // Show each answer in summary
  const ul = document.getElementById('answer-summary');
  ul.innerHTML = "";
  answerLog.forEach((item, idx) => {
    const li = document.createElement('li');
    li.innerText = `Q${idx + 1}: You answered "${item.selected}" — ${item.correct ? '✅ Correct' : `❌ Wrong, correct: ${item.correctAnswer}`}`;
    ul.appendChild(li);
  });

  // Update final avatar and message and sound 
  const message = document.getElementById('motivational-message');
  const resultImg = document.getElementById('student-result-avatar');

  switch (score) {
    case 'A+':
      message.innerText = "Amazing work!";
      resultImg.src = "assets/img/90 avatar.png";
      sounds.AA_game.play();
      break;
    case 'A':
      message.innerText = "Great job!";
      resultImg.src = "assets/img/80 avatar.png";
      sounds.A_game.play();
      break;
    case 'B':
      message.innerText = "Nice effort!";
      resultImg.src = "assets/img/70 avatar.png";
      sounds.B_game.play();
      break;
    case 'C':
      message.innerText = "Keep going!";
      resultImg.src = "assets/img/xxx.png";
      sounds.C_game.play();
      break;
    default:
      message.innerText = "Don't worry, try again!";
      resultImg.src = "assets/img/60 avatar.png";
      sounds.F_game.play();
  }
}

// Show temporary +10 bonus message
function showBonusMessage() {
  const msg = document.createElement('div');
  msg.innerText = "+10 Bonus!";
  msg.style.color = "green";
  msg.style.fontWeight = "bold";
  msg.style.fontSize = "18px";
  msg.style.marginTop = "10px";
  document.getElementById('answers').appendChild(msg);

  setTimeout(() => msg.remove(), 1500);
}
