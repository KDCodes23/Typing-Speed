let timerInterval;
let startTime;
let isTypingStarted = false;
let typedText = '';
let sampleText = document.getElementById('sample-text').innerText;
let typingArea = document.getElementById('typing-area');
let timer = document.getElementById('timer');
let speed = document.getElementById('speed');
let accuracy = document.getElementById('accuracy');
let resetBtn = document.getElementById('reset-btn');

// Start the typing speed test
typingArea.addEventListener('input', function() {
    if (!isTypingStarted) {
        startTimer();
        isTypingStarted = true;
    }

    typedText = typingArea.value;
    let wordsTyped = typedText.split(/\s+/).filter(function(word) { return word.length > 0; }).length;
    let elapsedTime = (Date.now() - startTime) / 1000;  // Time in seconds
    let wordsPerMinute = Math.floor((wordsTyped / elapsedTime) * 60);
    speed.textContent = wordsPerMinute;

    let correctWords = 0;
    let sampleWords = sampleText.split(' ');

    typedText.split(' ').forEach((word, index) => {
        if (sampleWords[index] === word) {
            correctWords++;
        }
    });

    let accuracyPercentage = Math.floor((correctWords / sampleWords.length) * 100);
    accuracy.textContent = accuracyPercentage;

    timer.textContent = Math.floor(elapsedTime); // Update timer
});

// Start timer function
function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(function() {
        let elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        timer.textContent = elapsedTime;
    }, 1000);
}

// Reset the test
resetBtn.addEventListener('click', function() {
    clearInterval(timerInterval);
    typingArea.value = '';
    typedText = '';
    isTypingStarted = false;
    timer.textContent = '0';
    speed.textContent = '0';
    accuracy.textContent = '100';
});
