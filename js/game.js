const theoryQuestions = [
  {
    prompt: "This component resists electrical current. What is it?",
    options: ["Resistor", "Capacitor", "Multimeter"],
    correctAnswer: "Resistor"
  },
  {
    prompt: "Which law is represented by V = IR?",
    options: ["Ohm’s Law", "Kirchhoff’s Law", "Faraday’s Law"],
    correctAnswer: "Ohm’s Law"
  },
  {
    prompt: "Which unit is used to measure resistance?",
    options: ["Ohm", "Volt", "Ampere"],
    correctAnswer: "Ohm"
  },
  {
    prompt: "A diode allows current to flow in which direction?",
    options: ["One direction", "Both directions", "Depends on voltage"],
    correctAnswer: "One direction"
  },
  {
    prompt: "What does a capacitor store?",
    options: ["Charge", "Current", "Magnetic field"],
    correctAnswer: "Charge"
  },
  {
    prompt: "Which of these is not a passive component?",
    options: ["Transistor", "Inductor", "Resistor"],
    correctAnswer: "Transistor"
  }
];

const practicalQuestions = [
  {
    prompt: "Which tool measures voltage?",
    options: ["Multimeter", "Inductor", "Battery"],
    correctAnswer: "Multimeter"
  },
  {
    prompt: "What is the function of a breadboard?",
    options: ["Testing circuits", "Measuring current", "Generating frequency"],
    correctAnswer: "Testing circuits"
  },
  {
    prompt: "Which side of a polarized capacitor is negative?",
    options: ["Short leg", "Long leg", "Striped side"],
    correctAnswer: "Striped side"
  },
  {
    prompt: "You want to measure resistance. Where should the multimeter be connected?",
    options: ["Across the component", "In series", "To ground"],
    correctAnswer: "Across the component"
  },
  {
    prompt: "Soldering requires which material?",
    options: ["Flux", "Wire", "Tin-lead alloy"],
    correctAnswer: "Tin-lead alloy"
  },
  {
    prompt: "A probe is used with which device?",
    options: ["Oscilloscope", "Transformer", "Battery"],
    correctAnswer: "Oscilloscope"
  }
];

// Game state variables
let hearts;
let score;
let questionIndex;
let answerLog;
let currentQuestions;
let bonusEnabled = true;

// Start or reset game
function initGame() {
  hearts = 3;
  score = 100;
  questionIndex = 0;
  answerLog = [];

  currentQuestions = selectedMode === "theory" ? theoryQuestions : practicalQuestions;

  updateStats(getGrade(score), hearts, currentQuestions.length, questionIndex);
  updateQuestionUI(currentQuestions[questionIndex]);
}

// Check selected answer
function checkAnswer(selected) {
  const currentQ = currentQuestions[questionIndex];
  const correct = selected === currentQ.correctAnswer;

  if (correct) {
    if (bonusEnabled) {
      score += 10;
      showBonusMessage();
    }
  } else {
    hearts--;
    score -= 20;
  }

  answerLog.push({
    selected,
    correct,
    correctAnswer: currentQ.correctAnswer
  });

  questionIndex++;

  if (hearts === 0 || questionIndex >= currentQuestions.length) {
    showResultScreen(getGrade(score), answerLog);
  } else {
    updateStats(getGrade(score), hearts, currentQuestions.length, questionIndex);
    updateQuestionUI(currentQuestions[questionIndex]);
  }
}

// Get grade from score
function getGrade(score) {
  if (score >= 90) return "A+";
  if (score >= 80) return "A";
  if (score >= 70) return "B";
  if (score >= 60) return "C";
  return "F";
}
