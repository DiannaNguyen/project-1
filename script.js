// declare a funtion that would start the game when start button clicked
// declare a function that would allow player to click on and answer choice
// declare a function that would allow player to click on the continue button to continue to next question - ONLY if answered correctly
// display "correct"/"incorrect" and corresponding colors on button when answered right or wrong
// create list of questions and answers - or use API?
// randomly questions pop up



const startButton = document.getElementById("start");
const continueButton = document.getElementById("continue");
const questionBox_div = document.getElementById("question-box");
const questions_div = document.getElementById("questions");
const answerButtons = document.getElementById("answers");
const category_div =document.getElementById("category");

let randomQuestions;
let currentQuestion = 0;



startButton.addEventListener("click", startGame);
continueButton.addEventListener("click", () => {
    currentQuestion++;
    nextQuestion();
});

function startGame() {
	// console.log('Start Game');
	startButton.classList.add("hide-content"); //Reference: https://www.w3schools.com/jsref/prop_element_classlist.asp & https://git.generalassemb.ly/SEIR-201/js-dom
    
    randomQuestions = Math.floor(Math.random() * questions.length);
    while(questions2.includes(questions[randomQuestions])){
        randomQuestions= Math.floor(Math.random() * questions.length);
    }

    questionBox_div.classList.remove("hide-content"); 
    nextQuestion();
}

function nextQuestion() {
    displayCategory(questions.category);
    displayQuestion(randomQuestions);
}

function displayCategory(category) {
    for (let i = 0; i < questions.length;i++) {
        category_div.innerText = questions[i].category;
    }
}

function displayQuestion(question) {
    for (let i = 0; i < questions.length; i++) {
        questions_div.innerText = questions[i].question;
        
    }
}


function selectAnswer() {
    
}










//Reference: Questions and answers: https://thoughtcatalog.com/samantha-newman/2020/03/250-best-trivia-questions/#general-trivia-questions
const questions = [
    {
        category: "Geography",
        question: "Which two U.S. states don't observe Daylight Saving Time?",
        answer: [
            {option: "California and Washington", correct: false},
            {option: "New Mexico and Utah", correct: false},
            {option: "Hawaii and Arizona", correct: true},
            {option: "Florida and Alaska", correct: false},
        ]
    },
    {
        category: "Geography",
        question: "What is the world's biggest island?",
        answer: [
            {option: "Greenland", correct: true},
            {option: "Cuba", correct: false},
            {option: "Newfoundland", correct: false},
            {option: "Great Britain", correct: false},
        ]
    },
]
const questions2 = [];