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
        } else{
            messageDiv.innerHTML = "I understand, we can go next time love.";
            yesButton.hidden = true;
            noButton.hidden = true;
            date_question.hidden = true;
        }
    }
}

