# ⌨️ Simple Speed Typing Test Project

Welcome to the **Simple Speed Typing Test**! This project is part of a journey to build functional and engaging web applications using **HTML5**, **CSS3**, and **JavaScript**. The Speed Typing Test allows users to measure their typing speed (WPM) and accuracy, offering an interactive experience to practice and improve typing skills.

---

## 📅 Project Log

**Day 1 - Project: Speed Typing Test (HTML, CSS, JavaScript)**

Today’s focus was on building a speed typing test to learn more about JavaScript DOM manipulation, timers, and real-time feedback.

---

## Project Overview

**Description:**

The Speed Typing Test is an interactive web application that presents users with a random sentence to type. The app calculates typing speed in **words per minute (WPM)** and **accuracy** once the sentence is completed. This project applies essential JavaScript concepts, including **DOM manipulation**, **event handling**, and **interval timing**.

---

## History

- **07/11/24** - Project created with basic files and folders. Next Goal: Refine accuracy and WPM calculations.

---

## Key Features

- **Typing Speed Calculation**: Measures WPM based on the time taken and words typed.
- **Accuracy Calculation**: Calculates the accuracy by comparing typed text to the original sentence.
- **Random Sentence Generator**: Provides a new random sentence for each typing test.
- **Real-time Feedback**: Highlights errors as you type for immediate correction.
- **Timer Control**: The timer starts automatically when typing begins and stops upon completion.

---

## Key Learnings

- **JavaScript DOM Manipulation**: Practiced adding event listeners and updating the DOM dynamically based on user input.
- **Event Handling**: Used JavaScript events to capture and validate user input in real-time.
- **Accuracy and WPM Calculation**: Explored methods for calculating typing speed and accuracy accurately and consistently.

---

## Code Highlights

Here’s a snippet of the JavaScript used to control the typing test:

```javascript
const sentence = "This is a sample sentence.";
let startTime, endTime;

// Function to start the timer
function startTimer() {
    startTime = new Date();
}

// Function to calculate WPM
function calculateWPM(wordCount) {
    const timeElapsed = (new Date() - startTime) / 1000; // seconds
    return Math.round((wordCount / timeElapsed) * 60);    // words per minute
}

// Event listener for typing input
document.getElementById("typingArea").addEventListener("input", (e) => {
    const userInput = e.target.value;
    if (userInput === sentence) {
        endTime = new Date();
        const wpm = calculateWPM(sentence.split(" ").length);
        alert(`WPM: ${wpm}`);
    }
});
```

---

## Challenges

- **Handling Accuracy**: Ensuring the accuracy calculation consistently reflected correct typing versus errors.
- **Responsive Layout**: Designing a UI that adapts to different screen sizes, making the test functional on both desktop and mobile devices.

---

## 🎯 Next Steps

- **Save High Scores**: Enable tracking and display of the user’s best WPM scores.
- **Leaderboard**: Display a leaderboard for top typists, adding a competitive edge to the app.
