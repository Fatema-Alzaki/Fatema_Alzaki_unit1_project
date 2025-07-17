
# ElectroEasy Game – A Quiz Application

## by Fatema Alzaki

## Project Overview

**ElectroEasy** is a simple, interactive quiz game designed to test and reinforce students’ knowledge of basic electrical components and concepts. This game has two distinct modes: **Theory** and **Practical**. The game presents a series of questions related to electronics theory and practical electrical knowledge, helping users learn in a fun and engaging way. It uses a dynamic question presentation format, visual feedback, and a motivational scoring system.

---

## Game Flow

### **Slide 1: Main Menu**
![ElectroEasy main menu](./assets/img/main%20menu.jpeg)

- The game begins with the main menu where the user is presented with two buttons:
  - **Theory**
  - **Practical**

- The user selects a mode by clicking one of the buttons. Upon selecting, the corresponding mode (either theory or practical) will be activated, and the selected option will be highlighted for feedback.

- **Proceed Button**: Once a mode is selected, the user clicks the "Proceed" button to move to the next screen (teacher screen). If no mode is selected, an error message will prompt the user to choose a mode.

### **Slide 2: Teacher Screen**
![ElectroEasy teacher screen](./assets/img/teacher%20screen.jpeg)
- This screen provides a quick rundown of the topics covered in both the theory and practical sections:
  - In the **Theory** section, key concepts such as resistors, Ohm’s Law, capacitors, diodes, and transistors are explained.
  - The **Practical** section highlights the use of essential tools such as multimeters, breadboards, polarized capacitors, and probes for oscilloscopes.

- Once the user is ready, they click the "Next" button to move to the game screen where the quiz begins.

### **Slide 3: Game Screen (Quiz)**
![ElectroEasy game screen](./assets/img/game%20screen.jpeg)
- The game screen displays:
  - **Student Avatar**: An avatar appears with a confused expression, encouraging the user to help by answering questions.
  - **Speech Bubble**: Displays the current question.
  - **Score & Hearts**: Displays the score and the number of hearts (lives) the player has.
  - **Progress Bar**: A visual progress indicator shows how far the user is through the quiz.
  - **Answer Buttons**: Three answer options are provided for each question.

- As the user answers the questions:
  - If the answer is correct, the score remains the same and the correct answer is displayed.
  - If the answer is incorrect, the user loses one heart, and the score is reduced by a fixed amount.
  - The game progresses to the next question until the user either runs out of hearts or completes all questions.

### **Slide 4: Results Screen**
![ElectroEasy Results screen](./assets/img/results%20screen.jpeg)
- Upon completion of the quiz, the **Results Screen** displays:
  - **Final Score**: The user’s final score, with a letter grade (A+ to F), based on the percentage of correct answers.
  - **Summary of Answers**: A list of each question, the user's answer, and whether it was correct or wrong.
  - **Motivational Message**: A personalized message based on the score:
    - A+ and A: "Great job!"
    - B and C: "Good effort, keep going!"
    - F: "Don’t worry, review and try again!"
  - **Restart Button**: The user can click "Try Again" to restart the quiz.

---

## Features

- **Interactive Quiz**: Engaging and challenging quiz format.
- **Visual Feedback**: Positive and negative reinforcement based on the player's choices.
- **Score System**: A dynamic score system that adjusts based on correct and incorrect answers.
- **Responsive Design**: The game adjusts well to different screen sizes, making it accessible on both mobile and desktop devices.
- **Motivational Messages**: Messages encouraging the user to try again, reinforcing a growth mindset.

---

## Question Format

### **Theory Questions**
These questions focus on theoretical knowledge related to electrical components and laws.
- Example: "This component resists electrical current. What is it?"  
  - Options: Resistor, Capacitor, Multimeter  
  - Correct Answer: Resistor

- Example: "Which law is represented by V = IR?"  
  - Options: Ohm’s Law, Kirchhoff’s Law, Faraday’s Law  
  - Correct Answer: Ohm’s Law

### **Practical Questions**
These questions test practical knowledge, such as the use of tools and components in a lab setting.
- Example: "Which tool measures voltage?"  
  - Options: Multimeter, Inductor, Battery  
  - Correct Answer: Multimeter

- Example: "What is the function of a breadboard?"  
  - Options: Testing circuits, Measuring current, Generating frequency  
  - Correct Answer: Testing circuits

---

## Files Overview

### **HTML Structure**
The HTML file contains the structure for the game’s interface, including the main menu, teacher screen, game screen, and results screen. Each section corresponds to different stages of the game.

### **CSS Styling**
The CSS file is used for styling the layout, ensuring that the game has a user-friendly and responsive design. Key styles include:
  - Flexbox layout to ensure responsiveness across devices.
  - Button styling with hover and active states.
  - Visual hierarchy for easy navigation and engagement.

### **JavaScript Logic**
The JavaScript files handle the game’s logic:
  - **`game.js`**: Contains the main logic for tracking the player’s score, handling questions, and navigating through the quiz.
  - **`ui.js`**: Manages user interface updates, such as changing the question text, updating the score, and displaying feedback.
  - **`utils.js`**: Handles utility functions like mode selection, question setup, and game state initialization.

---

## References
![ElectroEasy Game Wireframe](https://media.discordapp.net/attachments/1390088235891298396/1392641929002352761/file-TTg8kKcUP2VqRPiRoiAsVr.png?ex=6870465d&is=686ef4dd&hm=ad1882ecd3f2e47a4b5cd41d9227aed95c69b2717b5a82be0692a5c858ec954e&=&format=webp&quality=lossless&width=1284&height=1216)

## You can check the [WireFrame here](https://drive.google.com/drive/folders/1PdHgi1IGEW4giMEXSoOJlYWYUAAjWao7?usp=sharing)

## You can check the [Trello To Do List here](https://trello.com/invite/b/686e636a6221a8c790788122/ATTIf2ab680e17f33265d939c0ee7946989619EA5869/project-1)
