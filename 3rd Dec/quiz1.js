const quizData = [
    {
        question: "How do we get the DOM object in JavaScript?",

        a:'getElementById()',
        b: 'getObject()',
        c:'getElement()',
        d:'getNode()',
        correct:"a"      
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

const box = document.getElementById("quiz");
const ques = document.getElementById("question");
const op1 = document.getElementById("a_text");
const op2 = document.getElementById("b_text");
const op3 = document.getElementById("c_text");
const op4 = document.getElementById("d_text");
const subbtn = document.getElementById("submit");
const ansbtn = document.querySelectorAll(".answer");
var currentquestion =  0;
var score = 0
loading();

function loading()
{   
    deselection()
    
    const currant = quizData[currentquestion];
    ques.innerText = currant.question;
    op1.innerText = currant.a;
    op2.innerText = currant.b;
    op3.innerText = currant.c;
    op4.innerText = currant.d;
}
function deselection()
{
    ansbtn.forEach((answer)=>{
        answer.checked=false;
    })
    }

// selection();

function selection()
{
    let a;
    ansbtn.forEach((answer)=>{
        if(answer.checked){
            a = answer.id;

        }
        });
        return a;
    }

subbtn.addEventListener("click",()=>{
    const myAns = selection()

    if(myAns)
    {
        if (myAns == quizData[currentquestion].correct){

            score++;
    }

    currentquestion++;

    if(currentquestion < quizData.length)
    {
        loading();

    } else
    {
        box.innerHTML =`<h2>your score is ${score}</h2>
        <button onclick = "location.reload()"> Reaload </button>`
    }

        }
        
    })