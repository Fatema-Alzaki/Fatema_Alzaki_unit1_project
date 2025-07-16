// Show question and options on the screen
function updateQuestionUI(questionObj) {
  document.getElementById('game-speech-bubble').innerText = questionObj.prompt;

  const studentImg = document.getElementById('student-avatar');

  // Set student image if in lab or class
  if (selectedMode === 'theory') {
    studentImg.src = 'assets/img/sad in class.png';
  } else {
    studentImg.src = 'assets/img/sad in lab.png';
  }

  // show the answer buttons
  const buttons = document.querySelectorAll('#answers button');
  questionObj.options.forEach((opt, i) => {
    buttons[i].innerText = opt;
    buttons[i].onclick = () => {
      const isCorrect = opt === questionObj.correctAnswer;

      // Show feedback image
      studentImg.src = isCorrect
        ? 'assets/img/correct answer.png'
        : 'assets/img/wrong answer.png';

      // not activating all buttons while waiting
      buttons.forEach(btn => btn.disabled = true);

      // adding a delay for the next question
      setTimeout(() => {
        checkAnswer(opt);
        buttons.forEach(btn => btn.disabled = false);
      }, 1000);
    };
  });
}

// Update top the panel info 
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

  // Update final avatar and message 
  // i wanted to add sounds and i tried but it wasn't working :(
  const message = document.getElementById('motivational-message');
  const resultImg = document.getElementById('student-result-avatar');

  switch (score) {
    case 'A+':
      message.innerText = "Amazing work!";
      resultImg.src = "assets/img/90 avatar.png";
      
      break;
    case 'A':
      message.innerText = "Great job!";
      resultImg.src = "assets/img/80 avatar.png";
      
      break;
    case 'B':
      message.innerText = "Nice effort!";
      resultImg.src = "assets/img/70 avatar.png";
      
      break;
    case 'C':
      message.innerText = "Keep going!";
      resultImg.src = "assets/img/xxx.png";
      
      break;
    default:
      message.innerText = "Don't worry, try again!";
      resultImg.src = "assets/img/60 avatar.png";
      
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
