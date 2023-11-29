
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const quEL = document.getElementById("question");

quEL.innerText = `What is ${num1} multiplied by ${num2}?`;
const correctAnswer = num1 * num2;
const scoreEl = document.getElementById("score");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");

let score = localStorage.getItem("score");

if (!score) {
    score = 0;
}

scoreEl.innerText = `score: ${score}`;

formEl.addEventListener("submit", () => {
    

    const userAns = +inputEl.value;

    if (userAns === correctAnswer) {
        score++;
        updateScore();
    } else {
        score--;
        updateScore();
    }

    // Update the question and reset the form
    num1 = Math.ceil(Math.random() * 10);
    num2 = Math.ceil(Math.random() * 10);
    quEL.innerText = `What is ${num1} multiplied by ${num2}?`;
    correctAnswer = num1 * num2;
    //formEl.reset();
    scoreEl.innerText = `score: ${score}`;
});

function updateScore() {
    localStorage.setItem("score", JSON.stringify(score));
}
