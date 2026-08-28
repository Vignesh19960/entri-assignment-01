
// Questions Array
const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Home Tool Markup Language",
            "Hyperlinks Text Mark Language"
        ],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "Which language is used to style web pages?",
        options: [
            "HTML",
            "CSS",
            "Java",
            "Python"
        ],
        correctAnswer: "CSS"
    },
    {
        question: "Which symbol is used for JavaScript comments",
        options: [
            "//",
            "#",
            "<!-- -->",
            "**"
        ],
        correctAnswer: "//"
    },
    {
        question: "Which keyword is used to declare a variable?",
        options: [
            "let",
            "function",
            "return",
            "console"
        ],
        correctAnswer: "let"
    },
    {
        question: "Which method is used to print in the console?",
        options: [
            "console.log()",
            "print()",
            "document.write()",
            "alert()"
        ],
        correctAnswer: "console.log()"
    },
    {
        question: "What does DOM stand for?",
        options: [
            "Document Object Model",
            "Data Object Model",
            "Digital Object Method",
            "Document Order Method"
        ],
        correctAnswer: "Document Object Model"
    },
    {
        question: "Which operator checks both value and type?",
        options: [
            "==",
            "=",
            "===",
            "!="
        ],
        correctAnswer: "==="
    },
    {
        question: "Which keyword is used to create a function?",
        options: [
            "function",
            "create",
            "method",
            "make"
        ],
        correctAnswer: "function"
    }
];



let currentQuestionIndex = 0;
let score = 0;


// Select HTML Elements
const quiz = document.getElementById("quiz");
const nextButton = document.getElementById("next-btn");


function renderQuestion() {

    // Clear previous question
    quiz.innerHTML = "";

    // Get current question
    const currentQuestion = questions[currentQuestionIndex];


    // Create Question Heading
    const questionText = document.createElement("h2");

    questionText.textContent =
        `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;

    quiz.appendChild(questionText);


    // Create Options Container
    const optionsContainer = document.createElement("div");

    optionsContainer.id = "options";

    quiz.appendChild(optionsContainer);


    // Create Option Buttons Dynamically
    currentQuestion.options.forEach(function(option) {

        const optionButton = document.createElement("button");

        optionButton.textContent = option;

        // Add click event
        optionButton.addEventListener("click", function() {

            selectAnswer(optionButton, option);

        });

        optionsContainer.appendChild(optionButton);

    });


    // Hide Next Button
    nextButton.classList.add("hidden");
}


// Check Selected Answer
function selectAnswer(selectedButton, selectedAnswer) {

    const currentQuestion = questions[currentQuestionIndex];

    const optionButtons =
        document.querySelectorAll("#options button");


    // Prevent clicking again
    optionButtons.forEach(function(button) {
        button.disabled = true;
    });


    // Correct Answer
    if (selectedAnswer === currentQuestion.correctAnswer) {

        selectedButton.classList.add("correct");

        score++;

    } else {

        // Wrong selected answer
        selectedButton.classList.add("wrong");


        // Show correct answer
        optionButtons.forEach(function(button) {

            if (
                button.textContent === currentQuestion.correctAnswer
            ) {

                button.classList.add("correct");

            }

        });

    }


    // Show Next Button
    nextButton.classList.remove("hidden");
}


// Next Question
nextButton.addEventListener("click", function() {

    currentQuestionIndex++;

    // Check if quiz is finished
    if (currentQuestionIndex < questions.length) {

        renderQuestion();

    } else {

        showFinalScore();

    }

});


// Final Score Screen
function showFinalScore() {

    quiz.innerHTML = "";


    // Feedback message
    let feedback;

    if (score === 8) {

        feedback = "Excellent! Perfect score! ";

    } else if (score >= 6) {

        feedback = "Great job! 👍";

    } else if (score >= 4) {

        feedback = "Good effort! Keep practicing.";

    } else {

        feedback = "Keep learning and try again!";
    }


    // Create Score Message
    const scoreText = document.createElement("h2");

    scoreText.textContent =
        `You scored ${score} out of ${questions.length} — ${feedback}`;

    quiz.appendChild(scoreText);


    // Create Restart Button
    const restartButton = document.createElement("button");

    restartButton.textContent = "Restart Quiz";

    restartButton.id = "restart-btn";


    // Restart Event
    restartButton.addEventListener("click", restartQuiz);


    quiz.appendChild(restartButton);


    // Hide Next Button
    nextButton.classList.add("hidden");
}


// Restart Quiz
function restartQuiz() {

    // Reset index
    currentQuestionIndex = 0;

    // Reset score
    score = 0;

    // Render first question
    renderQuestion();
}


// Start Quiz
renderQuestion();

