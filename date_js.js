let rejectionCount = 0;

function notOkay() {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = "Aww, love. Don't worry, I'm always here for you! 💖";
    showOkayButton();
}

function moreThanOkay() {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = "Yay! I'm glad you're feeling great, love! 😘";
    showOkayButton();
}

function showOkayButton() {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML += `<br><button class="option" onclick="showDateQuestion()">Okay 💕</button>`;
}

function showDateQuestion() {
    document.getElementById('date-question').classList.remove('hidden');
}

// Function to move the "no" button to a random position
function moveNoButtonToRandomPosition(button) {
    // Get the dimensions of the window
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Generate random x and y positions
    const randomX = Math.random() * (windowWidth - button.offsetWidth);
    const randomY = Math.random() * (windowHeight - button.offsetHeight);

    // Set the new position of the button
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}


