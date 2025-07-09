# Fatema_Alzaki_unit1_project
# ElectroEasy Game – Pseudocode
## by Fatema Alzaki :>

## Slide 1: Main Menu

- Display Game Title: "ElectroEasy"
- Display two buttons:
  - [Theory]
  - [Practical]
- Display button: [Proceed]

- When [Theory] or [Practical] is clicked:
  - Set selectedMode = "theory" or "practical"
  - Highlight the selected option

- When [Proceed] is clicked:
  - If selectedMode is not empty:
    - Transition to Slide 2 (Game Screen)
  - Else:
    - Show error: "Please select a mode to proceed."

---

## Slide 2: Game Screen (Quiz with confused student)

- Initialize:
  - hearts = 3
  - score = 100 (Grade A+)
  - questionIndex = 0
  - totalQuestions = 5
  - questions = [Array of Question objects with question, options, correctAnswer]

- Display UI Elements:
  - Confused student avatar
  - Speech bubble with question text
  - Hearts remaining
  - Current score
  - Total questions remaining
  - Three answer boxes (buttons/images)

- Function: showQuestion()
  - Get question from questions[questionIndex]
  - Display question in speech bubble
  - Render options in 3 boxes

- When player clicks an answer:
  - If answer is correct:
    - Maintain score
    - Show positive feedback
  - Else:
    - Decrease hearts by 1
    - Deduct score (e.g., -20 per wrong answer)
    - Show correct answer
  - Increment questionIndex
  - If questionIndex < totalQuestions and hearts > 0:
    - Call showQuestion()
  - Else:
    - Transition to Slide 3 (Results Screen)

---

## Slide 3: Results Screen

- Display:
  - Final Score (A+ to F based on percentage)
  - Summary of player's answers
    - For each question: player's answer ✅/❌, correct answer
  - Motivational message based on score
    - If A or B → “Great job!”
    - If C or D → “Good effort, keep going!”
    - If F → “Don't worry, review and try again!”

- Display button: [Restart]
  - On click:
    - Reload game to Slide 1 (reset all variables)

![ElectroEasy Game Wireframe](https://media.discordapp.net/attachments/1390088235891298396/1392641929002352761/file-TTg8kKcUP2VqRPiRoiAsVr.png?ex=6870465d&is=686ef4dd&hm=ad1882ecd3f2e47a4b5cd41d9227aed95c69b2717b5a82be0692a5c858ec954e&=&format=webp&quality=lossless&width=1284&height=1216)


## You can check the [WireFrame here](https://drive.google.com/drive/folders/1PdHgi1IGEW4giMEXSoOJlYWYUAAjWao7?usp=sharing)

## You can check the [Trello To Do List here](https://trello.com/invite/b/686e636a6221a8c790788122/ATTIf2ab680e17f33265d939c0ee7946989619EA5869/project-1)
