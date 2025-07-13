// ui.js

function updateQuestionUI(questionObj) {
  document.getElementById('speech-bubble').innerText = questionObj.prompt;
  const buttons = document.querySelectorAll('#answers button');
  questionObj.options.forEach((opt, i) => {
    buttons[i].innerText = opt;
    buttons[i].onclick = () => checkAnswer(opt);
  });
}

function updateStats(score, hearts, total, current) {
  document.getElementById('grade').innerText = score;
  document.getElementById('hearts').innerText = hearts;
  document.getElementById('question-count').innerText = `${total - current} Questions`;
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
  message.innerText =
    score === 'A+' ? "Amazing work! ⚡" :
    score === 'A' ? "Great job! 💡" :
    score === 'B' ? "Nice effort! 🔋" :
    score === 'C' ? "Keep going! 🔧" :
    "Don't worry, try again! 🛠️";
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
