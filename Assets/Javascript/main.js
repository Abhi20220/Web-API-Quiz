//Variables
var startButton = document.querySelector("#startButton");
var timerEl = document.querySelector('#timer');

var questionEl = document.querySelector('#question');
var b1El = document.querySelector('#b1');
var b2El = document.querySelector('#b2');
var b3El = document.querySelector('#b3');
var b4El = document.querySelector('#b4');

var introEl = document.querySelector("#intro");
var quizEl = document.querySelector("#quiz");


//The function below starts the game
startButton.addEventListener("click", startQuiz);
function startQuiz() {
	userScore = 0;
	startTimer();
	introEl.setAttribute("style", "display: none");
	quizEl.setAttribute("style", "display: block");
	loadQuestions();
};

//Variable containing the quizes and answers
var questions = [
	{
		question: "What is absolute zero",
		q1: "0",
		q2: "zero",
		q3: "lower temperature that is theorteically possible, -273.10°C",
		q4: " lower temperature that is theorteically possible, -273.15°C",
		answer: "lower temperature that is theorteically possible, -273.15°C"
	},
	{
		question: "Do pineapples belong on pizza?",
		q1: "no",
		q2: "yes",
		q3: "YES!",
		q4: "Big Yes This is the answer :)",
		answer: "Big Yes This is the answer :)"
	},
	{
		question: "in a website browser address bar, what does “www” stand for?",
		q1: "World Wide Web",
		q2: "World Web Wide",
		q3: "Wide web World",
		q4: "Web World Wide",
		answer: "World Wide Web"
	},
	{
		question: "According to Greek mythology, who was the first woman on earth?",
		q1: "Aphrodite",
		q2: "Pandora",
		q3: "Hera",
		q4: "KRATOS ",
		answer: "Pandora"
	},
	{
		question: "Which country consumes the most chocolate per capita?",
		q1: "America",
		q2: "Australia",
		q3: "Switzerland",
		q4: "Denmark",
		answer: "Switzerland"
	},
	{
		question: "Which of Shakespeare’s plays is the longest?",
		q1: "Macbeth",
		q2: "Hamlet",
		q3: "The Tempest ",
		q4: "Much Ado about Nothing",
		answer: "Hamlet"
	}];


//Variables for the timer

var userScore;
var secondsLeft = 60;
var questionIndex = 0;
var timeInt;

//Function below is for when the timer starts
function startTimer() {
	timeInt = setInterval(
		function () {
			secondsLeft--;
			timerEl.textContent = `Timer: ${secondsLeft}`;
			if (secondsLeft === 0) {
				userScore = 0;
				clearInterval(timeInt);
				timerEl.textContent = " ";
				alert("Your time is up, your score is 0!!");
				userScore = 0;
				enterHiSc();
			}
		}, 1000);
};
