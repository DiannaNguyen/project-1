// allow player to click on the continue button to continue to next question - ONLY if answered correctly??
// display "correct"/"incorrect" and corresponding colors on button when answered right or wrong
// randomly questions pop up and answer choices are mixed

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
		options: ['The Pacific', 'The Indian', 'The Antarctic', 'The Arctic'],
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
		options: ['6', '3', '0', '8'],
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
const startButton = document.querySelector('.start-screen');
const questionBox = document.querySelector('.question-box');
const categoryBox = document.querySelector('.category');
const questionsText = document.querySelector('.questions-text');
const correctText = document.querySelector('.correct-text');
const incorrectText = document.querySelector('.incorrect-text');
const optionsBox = document.querySelector('.answers-box');
const continueButton = document.querySelector('.continue-next-question');
const scoreButton = document.querySelector('.score-board-btn');
const scoreBox = document.querySelector('.score-box');
const restartButton = document.querySelector(".restart-btn");

let currentQuestion;
let remainQuestions = [];
let remainOptions = [];

startButton.addEventListener('click', startGame);

function startScreen() {
	startButton.display = 'none';
}
function startGame() {
	startButton.classList.add('hide');
	questionBox.classList.remove('hide');
	setRemainQuestions();
	nextQuestion();
}

// push questions into empty array - remainQuestions
function setRemainQuestions() {
	const totalQuestion = questions.length;
	for (let i = 0; i < totalQuestion; i++) {
		remainQuestions.push(questions[i]);
	}
}

function nextQuestion() {
	// randomize questions
	const randomQuestions =
		remainQuestions[Math.floor(Math.random() * remainQuestions.length)];
	currentQuestion = randomQuestions;

	// display category
	categoryBox.innerText = currentQuestion.category;

	// display questionsText
	questionsText.innerText = currentQuestion.question;

	// find index of the randomQuestions in the remainQuestion array - remove that question from the array so it doesn't repeat (splice)
	// Reference: https://www.w3schools.com/js/js_array_iteration.asp & https://www.w3schools.com/jsref/jsref_splice.asp
	const arrayQuestions = remainQuestions.indexOf(randomQuestions);
	remainQuestions.splice(arrayQuestions, 1);

	// set options - answer choices
	// ge the length of options
	const totalOptions = currentQuestion.options.length;
	for (let i = 0; i < totalOptions; i++) {
		remainOptions.push(i);
	}

	optionsBox.innerText = '';

	for (let i = 0; i < totalOptions; i++) {
		// const randomOptions =
		// 	remainOptions[Math.floor(Math.random() * remainOptions.length)];
		// const arrayOptions = remainOptions.indexOf(randomOptions);
		// remainOptions.splice(arrayOptions, 1);

		const option = document.createElement('div');
		option.innerText = currentQuestion.options[i];
		option.id = i;
		option.className = 'option';
		option.addEventListener('click', () => {
			if (currentQuestion.answer == option.id) {
				option.style.backgroundColor = 'limegreen';
				option.style.color = 'black';
				correctText.classList.remove('hide');
				continueButton.classList.remove("hide");
				continueButton.addEventListener('click', nextQuestion);
			} else if (currentQuestion.answer != option.id) {
				option.style.backgroundColor = 'red';
				option.style.color = 'black';
				incorrectText.classList.remove('hide');
				//move to scoreboard, input name and show score
				//provide restart button to go back to start button
				scoreButton.classList.remove("hide");
				scoreButton.addEventListener("click", scoreBoard);
			}	
		});
		optionsBox.appendChild(option);
		correctText.classList.add('hide');
		continueButton.classList.add("hide");
	}
}

function scoreBoard() {
	questionBox.classList.add("hide");
	scoreBox.classList.remove("hide");
	restartButton.addEventListener("click", nextQuestion);
	
}
