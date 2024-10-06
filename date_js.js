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


function askForDate(answer) {
    var yesButton = document.getElementById('yesBTN');
    var noButton = document.getElementById('noBTN');
    var date_question = document.getElementById('date_question');

    if (answer === 'yes') {
        // Redirect to date picker
        window.location.href = "date-picker.html";
    } else {
        rejectionCount++;
        const messageDiv = document.getElementById('message');

        if (rejectionCount == 1) {
            messageDiv.innerHTML = "Please, let's go on a date 🥺💕";
            showDateQuestion();
        } else if (rejectionCount == 2) {
            messageDiv.innerHTML = "Please, my love 🥺";
            showDateQuestion();
        } else {
            moveNoButtonToRandomPosition(noButton);
        }
    }
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
    button.style.position = "absolute"; // Ensure the button can be positioned absolutely
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}




