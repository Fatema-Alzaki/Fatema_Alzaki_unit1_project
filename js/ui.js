// ui.js

const sounds = {
   wrong_Answer : new Audio('../assets/audio/wrong answer.mp3'),
   Right_Answer : new Audio('../assets/audio/correct answer.mp3'),
   Whole_game : new Audio('../assets/audio/the whole game sound effect.mp3'),
   AA_game : new Audio('../assets/audio/happy sound effect A+.mp3'),
   A_game : new Audio('../assets/audio/yayy sound effect A.mp3'),
   B_game: new Audio('../assets/audio/sad sound effect (B).mp3'),
   C_game: new Audio('../assets/audio/crying and coffing (C).mp3'),
   F_game: new Audio('../assets/audio/crying (fail).mp3')
}

function updateQuestionUI(questionObj) {
  document.getElementById('game-speech-bubble').innerText = questionObj.prompt;

  const studentImg = document.getElementById('student-avatar');
  if (selectedMode === 'theory') {
    studentImg.src = 'assets/img/sad in class.png';  
  } else {
    studentImg.src = 'assets/img/sad in lab.png';  
  }

  const buttons = document.querySelectorAll('#answers button');
  questionObj.options.forEach((opt, i) => {
    buttons[i].innerText = opt;
    buttons[i].onclick = () => {
      const isCorrect = opt === questionObj.correctAnswer;
      studentImg.src = isCorrect 
        ? 'assets/img/correct answer.png' 
        : 'assets/img/wrong answer.png'; 

      // Disable buttons temporarily
      buttons.forEach(btn => btn.disabled = true);

      // Wait 1 second to show the image before continuing
      setTimeout(() => {
        checkAnswer(opt);
        // Re-enable buttons after new question is shown
        buttons.forEach(btn => btn.disabled = false);
      }, 1000);
    };
  });
}


function updateStats(score, hearts, total, current) {
  document.getElementById('grade').innerText = score;
  document.getElementById('hearts').innerText = hearts;
  document.getElementById('question-count').innerText = `${total - current} Questions`;
  const progressPercent = Math.round((current / total) * 100);
  document.getElementById('progress-bar').style.width = `${progressPercent}%`;
}


function showResultScreen(score, answerLog) {
  document.getElementById('game-screen').classList.add('hidden');
  document.getElementById('results-screen').classList.remove('hidden');
  document.getElementById('final-grade').innerText = score;

  const ul = document.getElementById('answer-summary');
  ul.innerHTML = "";
  answerLog.forEach((item, idx) => {
    const li = document.createElement('li');
    li.innerText = `Q${idx + 1}: You answered "${item.selected}" — ${item.correct ? '✅ Correct' : `❌ Wrong, correct: ${item.correctAnswer}`}`;
    ul.appendChild(li);
  });

  const message = document.getElementById('motivational-message');
  const resultImg = document.getElementById('student-result-avatar');

  switch (score) {
    case 'A+':
      message.innerText = "Amazing work! ⚡";
      resultImg.src = "assets/img/90 avatar.png";
      AA_game.play()
      break;
    case 'A':
      message.innerText = "Great job! 💡";
      resultImg.src = "assets/img/80 avatar.png";
      A_game.play()
      break;
    case 'B':
      message.innerText = "Nice effort! 🔋";
      resultImg.src = "assets/img/70 avatar.png";
      B_game.play()
      break;
    case 'C':
      message.innerText = "Keep going! 🔧";
      resultImg.src = "assets/img/xxx.png";
      C_game.play()
      break;
    default:
      message.innerText = "Don't worry, try again! 🛠️";
      resultImg.src = "assets/img/60 avatar.png";
      F_game.play()
  }
}


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

