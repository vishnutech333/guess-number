const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const userGuessInput = document.getElementById("userGuess");
const checkButton = document.getElementById("bt1");
const resultMessage = document.getElementById("para1");
const attemptsMessage = document.getElementById("attemptnum");
const resetButton = document.getElementById("bt2");

checkButton.addEventListener("click", guessNumber);
resetButton.addEventListener("click", resetGame);

function guessNumber() {
    const guess = Number(userGuessInput.value);
    attempts++;
    if (guess === randomNumber) {
        resultMessage.textContent = `Congratulations! You guessed the correct number ${randomNumber}`;
        resultMessage.style.color = "white";
        endGame();
    } else if (guess < randomNumber) {
        resultMessage.textContent = "Try with larger number";
        resultMessage.style.color = "white";
    } else if (guess > randomNumber) {
        resultMessage.textContent = "Try with smaller number.";
        resultMessage.style.color = "white";
    } else {
        resultMessage.textContent = "Please enter a valid number.";
        resultMessage.style.color = "white";
    }
    attemptsMessage.textContent = `Attempts: ${attempts}`;
}
function endGame() {
    userGuessInput.disabled = true;
    checkButton.disabled = true;

    resetButton.style.display = "block";
}

function resetGame() {
    attempts = 0;
    randomNumber = Math.floor(Math.random() * 100) + 1;

    userGuessInput.value = "";
    resultMessage.textContent = "";
    attemptsMessage.textContent = "";

    userGuessInput.disabled = false;
    checkButton.disabled = false;

    resetButton.style.display = "none";
}
