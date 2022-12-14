/* An array of objects. Each object contains a question, four options, and the correct answer. */
const quizData = [
  {
    question: "How do we get the DOM object in JavaScript?",

    a: "getElementById()",
    b: "getObject()",
    c: "getElement()",
    d: "getNode()",
    correct: "a",
  },
  {
    question: "How are the objects organized in the HTML DOM?",
    a: "Class wise",
    b: "Hierarchy",
    c: "Stack",
    d: "Queue",
    correct: "b",
  },
  {
    question: "Which of the following can be implemented using animation?",
    a: "Fireworks",
    b: " Fade Effect",
    c: " Roll-in or Roll-out",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];
/* Getting the elements from the HTML page. */
const box = document.getElementById("quiz");
const ques = document.getElementById("question");
const option1 = document.getElementById("a_text");
const option2 = document.getElementById("b_text");
const option3 = document.getElementById("c_text");
const option4 = document.getElementById("d_text");
const submitbtn = document.getElementById("submit");
const answerbtn = document.querySelectorAll(".answer");
var currentQuestion = 0;
var score = 0;
loading();
/**
 * It takes the current question from the quizData array and displays it on the page.
 */
function loading() {
  deselectionAns();
  const current = quizData[currentQuestion];
  ques.innerText = current.question;
  option1.innerText = current.a;
  option2.innerText = current.b;
  option3.innerText = current.c;
  option4.innerText = current.d;
}
/**
 * For each answer button, set the checked property to false.
 */
function deselectionAns() {
  answerbtn.forEach((answer) => {
    answer.checked = false;
  });
}
// selection();

/**
 * It loops through the answer buttons, and if one of them is checked, it returns the id of that
 * button.
 * @returns The id of the checked radio button.
 */
function selection() {
  let a;
  answerbtn.forEach((answer) => {
    if (answer.checked) {
      a = answer.id;
    }
  });
  return a;
}

/* An event listener that listens for a click on the submit button. When the submit button is clicked,
it calls the selection function. If the selection function returns a value, it checks if the value
is equal to the correct answer. If it is, it increments the score. It then increments the
currentQuestion variable. If the currentQuestion variable is less than the length of the quizData
array, it calls the loading function. If the currentQuestion variable is not less than the length of
the quizData array, it replaces the contents of the box element with a message that displays the
score and a button that reloads the page. */
submitbtn.addEventListener("click", () => {
  const myAns = selection();
  if (myAns) {
    if (myAns == quizData[currentQuestion].correct) {
      score++;
    }
    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loading();
    } else {
      box.innerHTML = `<h2> your score is ${score}</h2>
      <button onclick="location.reload()">Reload</button>`;
    }
  }
});
