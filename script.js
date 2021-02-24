// declare a funtion that would start the game when start button clicked
// declare a function that would allow player to click on and answer choice
// allow player to click on the continue button to continue to next question - ONLY if answered correctly
// display "correct"/"incorrect" and corresponding colors on button when answered right or wrong
// randomly questions pop up and answer choices are mixed

const questionBox = document.querySelector('.question-box');
const catergoryBox = document.querySelector(".category");
const questionsText = document.querySelector('.questions-text');
const correctText = document.querySelector(".correct-text");
const incorrectText = document.querySelector(".incorrect-text");
const optionsBox = document.querySelector('.answers-box');
const continueButton = document.querySelector(".continue-next-question");


// const questionBox = document.querySelector("#question-box");
// const categoryBox = document.querySelector(".category");
// const questionsText = document.querySelector(".questions-text");
// const optionsBox = document.querySelector(".answers-box");
// const correctButton = document.querySelector(".correct");
// const incorrectButton = document.querySelector(".incorrect");
// const correctText = document.querySelector("correct");
// const incorrectText = document.querySelector("incorrect");
// const continueButton = document.querySelector(".continue");

let currentQuestion;
let remainingQuestions = [];
let remainingOptions = [];


// push questions into empty array - remainingQuestions
function setRemainingQuestions() {
    for (let i = 0; i < questions.length; i++) {
        remainingQuestions.push(questions[i]);
    }
};

function nextQuestion() {
    // randomize questions
    const randomQuestions = remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)];
    currentQuestion = randomQuestions;
    // display category
    categoryBox.innerText = currentQuestion.category;
	console.log(randomQuestions);
    // display questionsText
    questionsText.innerText = currentQuestion.question;
    
    // find index of the randomQuestions in the remainingQuestion array - remove that question from the array so it doesn't repeat (splice)
    // Reference: https://www.w3schools.com/js/js_array_iteration.asp & https://www.w3schools.com/jsref/jsref_splice.asp
    
    const arrayQuestions = remainingQuestions.indexOf(randomQuestions);
    remainingQuestions.splice(arrayQuestions, 1);
    // push options into empty array - remainingOptions
    for (let i = 0; i < currentQuestion.options.length; i++) {
        remainingOptions.push(i);
    }
}


// set options (answer choices)
function displayAnswers() {
        //randomize answer choices
        const randomOptions =
            remainingOptions[Math.floor(Math.random() * remainingOptions.length)];
    
        // find index of the randomOptions in the remainingOptions array - remove that options from the array so it doesn't repeat when the correlating question is called (splice)
        const arrayO = remainingOptions.indexOf(randomOptions);
            remainingOptions.splice(arrayO, 1);
        
        const option = document.createElement("btn");
        option.innerText = currentQuestion.options[randomOptions];
        option.classList.add("button");

        optionsBox.appendChild(option);
}





        


//  function selectAnswer() {
//     if(selectAnswer === question[i].answer) {
//        nextQuestion(); 
//     } else {
//         return "GAME OVER";
//     }

// }










//Reference: Questions and correct answers: https://thoughtcatalog.com/samantha-newman/2020/03/250-best-trivia-questions/#general-trivia-questions & https://thoughtcatalog.com/january-nelson/2021/02/sports-trivia-questions/ & https://thoughtcatalog.com/katee-fletcher/2020/04/history-trivia-questions/ 
const questions = [
	{
		category: 'Geography',
		question: "Which two U.S. states don't observe Daylight Saving Time?",
		options: [
			'California and Washington',
			'New Mexico and Utah',
			'Hawaii and Arizona',
			'Florida and Alaska',
		],
		answer: 2,
	},
	{
		category: 'Geography',
		question: "What is the world's biggest island?",
		options: ['Greenland', 'Cuba', 'Newfoundland', 'Great Britain'],
		answer: 0,
	},
	{
		category: 'Geography',
		question: 'What is the smallest ocean in the world?',
		options: ['The Pacific', 'The Indian', 'The Antarctic', 'The Artic'],
		answer: 3,
	},
	{
		category: 'Geography',
		question: 'What is the only state that borders just one other state?',
		options: ['Alaska', 'Vermont', 'Maine', 'Washington'],
		answer: 2,
	},
	{
		category: 'Sports',
		question:
			'When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win?',
		option: ['6', '3', '0', '8'],
		answer: 0,
	},
	{
		category: 'Sports',
		question:
			'What is the only team in the NFL to neither host nor play in the Super Bowl?',
		options: [
			'Baltimore Ravens',
			'Detroit Lions',
			'Cleveland Browns',
			'Miami Dolphins',
		],
		answer: 2,
	},
	{
		category: 'Sports',
		question:
			'Which is the only team to play in every soccer World Cup tournment?',
		options: ['Brazil', 'Argentina', 'France', 'Italy'],
		answer: 0,
	},
	{
		category: 'Sports',
		question: 'What team owns the longest winning streak in NBA history?',
		options: [
			'Miami Heat',
			'Golden State Warriors',
			'Boston Celtics',
			'Los Angeles Lakers',
		],
		answer: 3,
	},
	{
		category: 'History',
		question: 'How many years did the 100 years war last?',
		options: ['200 years', '5 years', '116 years', '100 years'],
		answer: 2,
	},
	{
		category: 'History',
		question: 'Who painted the mural of "The Last Supper"?',
		options: ['Leonardo da Vinci', 'Michelangelo', 'Picasso', 'Donatello'],
		answer: 0,
	},
	{
		category: 'History',
		question: 'The Statue of Liberty was a gift from which country?',
		options: ['Spain', 'Japan', 'France', 'Canada'],
		answer: 2,
	},
	{
		category: 'History',
		question: 'Who did the United States acquire Alaska from?',
		options: ['Italy', 'China', 'Great Britain', 'Russia'],
		answer: 3,
	},
	{
		category: 'Pop Culture',
		question:
			'Which 2008 comedy had the tagline “Put this in your pipe and smoke it”?',
		options: [
			'Mama Mia',
			'Pineapple Express',
			'Step Brothers',
			'Forgetting Sarah Marshall',
		],
		answer: 1,
	},
	{
		category: 'Pop Culture',
		question: 'In which of Britney’s video does she appear as a stewardess?',
		options: ['Toxic', 'Opps! I Did It Again', 'Gimme More', 'Lucky'],
		answer: 0,
	},
	{
		category: 'Pop Culture',
		question: 'Who is the youngest person ever to appear on a Billboard chart?',
		options: ['Willow Smith', 'Billie Eilish', 'DaBaby', 'Blue Ivy Carter'],
		answer: 3,
	},
	{
		category: 'Pop Culture',
		question: 'Which singer’s real name is Stefani Joanne Angelina Germanotta?',
		options: ['Sia', 'Lady Gaga', 'P!nk', 'Rihanna'],
		answer: 1,
	},
];