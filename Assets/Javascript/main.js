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


//Variable containing the quizes and answers
var questions = [
	{
		question: "What is the value of absolute zero",
		q1: "0",
		q2: "zero",
		q3: "-273.10°C",
		q4: "-273.15°C",
		answer: "-273.15°C"
	},
	{
		question: "Do pineapples belong on pizza?",
		q1: "no",
		q2: "yes",
		q3: "YES!",
		q4: "YES!!",
		answer: "YES!!",
	
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
		q4: "Romeo and Juliet",
		answer: "Hamlet"
	}];


// The below function loads the questions
function loadQuestions() {
	questionEl.textContent = questions[questionIndex].question;
	b1El.textContent = `${questions[questionIndex].q1}`;
	b2El.textContent = `${questions[questionIndex].q2}`;
	b3El.textContent = `${questions[questionIndex].q3}`;
	b4El.textContent = `${questions[questionIndex].q4}`;
};

//The query selector below is based on the users inputs
var wrongEl = document.querySelector("#wrong");
quizEl.addEventListener("click", function (event) {
	var element = event.target;
	if (element.matches(".quizB")) {
		var check = element.innerText;
		if (check === questions[questionIndex].answer) {
			secondsLeft = secondsLeft + 5;
			alert("Correct! You have gained 5 additional seconds :D");
			wrongEl.textContent = " ";
			//Run through the questions
			var qLength = questions.length - 1;
			if (questionIndex < qLength) {
				questionIndex++;
				loadQuestions();
			} else {
				//Ran through all the questions - finish
				alert("All Done!");
				userScore = secondsLeft;
				clearInterval(timeInt);
				timerEl.textContent = " ";
				enterHiSc();
			}
		} else {
			secondsLeft = secondsLeft - 5;
			wrongEl.textContent = "Incorrect! You have lost 5 seconds D:";
			if (secondsLeft <= 0) {
				userScore = 0;
				clearInterval(timeInt);
				timerEl.textContent = " ";
				alert("Ran out of time!");
				enterHiSc();
			}
		}
	}
});

