const questions = [
    {
        question: "What is the primary goal of understanding the self?",
        answers: [
            { text: "To become wealthy", correct: false },
            { text: "To improve relationships only", correct: false },
            { text: "To develop self-awareness and personal growth", correct: true },
            { text: "To memorize philosophical terms", correct: false },
        ]
    },
    {
        question: "Which philosopher claimed that 'the unexamined life is not worth living'?",
        answers: [
            { text: "Plato", correct: false },
            { text: "Aristotle", correct: false },
            { text: "Socrates", correct: true },
            { text: "Descartes", correct: false },
        ]
    },
    {
        question: "Plato’s concept of the self is composed of what three elements?",
        answers: [
            { text: "Heart, Mind, Body", correct: false },
            { text: "Desire, Emotion, Reason", correct: false },
            { text: "Rational, Spirited, Appetitive", correct: true },
            { text: "Soul, Spirit, Ego", correct: false },
        ]
    },
    {
        question: "What did St. Augustine believe about the self?",
        answers: [
            { text: "The self is material", correct: false },
            { text: "The self is the brain only", correct: false },
            { text: "The self is the soul united with God", correct: true },
            { text: "The self is driven by pleasure", correct: false },
        ]
    },
    {
        question: "Which philosopher stated 'I think, therefore I am'?",
        answers: [
            { text: "Socrates", correct: false },
            { text: "Immanuel Kant", correct: false },
            { text: "René Descartes", correct: true },
            { text: "Plato", correct: false },
        ]
    },
    {
        question: "For David Hume, the self is:",
        answers: [
            { text: "A fixed soul", correct: false },
            { text: "A spiritual essence", correct: false },
            { text: "A bundle of perceptions", correct: true },
            { text: "A rational substance", correct: false },
        ]
    },
    {
        question: "Immanuel Kant believed the self is:",
        answers: [
            { text: "Not knowable at all", correct: false },
            { text: "Purely empirical", correct: false },
            { text: "A unified consciousness that makes experience possible", correct: true },
            { text: "Identical to the body", correct: false },
        ]
    },
    {
        question: "Which Eastern concept believes the self is an illusion?",
        answers: [
            { text: "Hindu Atman", correct: false },
            { text: "Taoist Energy", correct: false },
            { text: "Buddhist Anatta", correct: true },
            { text: "Confucian Self", correct: false },
        ]
    },
    {
        question: "Which of the following best represents the concept of 'social self'?",
        answers: [
            { text: "How one appears in the mirror", correct: false },
            { text: "The true self when alone", correct: false },
            { text: "How others perceive and interact with you", correct: true },
            { text: "The unconscious mind", correct: false },
        ]
    },
    {
        question: "What is self-concept?",
        answers: [
            { text: "Your job title", correct: false },
            { text: "Your physical appearance only", correct: false },
            { text: "The sum of beliefs one holds about oneself", correct: true },
            { text: "What others say about you", correct: false },
        ]
    },
    {
        question: "What is self-esteem?",
        answers: [
            { text: "A belief that others like you", correct: false },
            { text: "How much money you earn", correct: false },
            { text: "Your overall sense of self-worth or value", correct: true },
            { text: "An objective evaluation by others", correct: false },
        ]
    },
    {
        question: "Carl Rogers believed that a healthy self-concept is achieved when:",
        answers: [
            { text: "The real self and ideal self are in conflict", correct: false },
            { text: "There is unconditional positive regard", correct: true },
            { text: "The ideal self is rejected", correct: false },
            { text: "The self is isolated", correct: false },
        ]
    },
    {
        question: "Which concept emphasizes the gap between who we are and who we want to be?",
        answers: [
            { text: "Self-awareness", correct: false },
            { text: "Self-efficacy", correct: false },
            { text: "Ideal self", correct: true },
            { text: "Self-serving bias", correct: false },
        ]
    },
    {
        question: "What is self-efficacy?",
        answers: [
            { text: "Belief in one’s ability to succeed", correct: true },
            { text: "Self-hatred", correct: false },
            { text: "Overconfidence", correct: false },
            { text: "The tendency to compare oneself to others", correct: false },
        ]
    },
    {
        question: "Which part of Freud's personality structure operates on the reality principle?",
        answers: [
            { text: "Id", correct: false },
            { text: "Ego", correct: true },
            { text: "Superego", correct: false },
            { text: "Consciousness", correct: false },
        ]
    },
    {
        question: "According to Freud, the part of the personality that internalizes morals is:",
        answers: [
            { text: "Id", correct: false },
            { text: "Ego", correct: false },
            { text: "Superego", correct: true },
            { text: "Shadow", correct: false },
        ]
    },
    {
        question: "Which defense mechanism involves transferring emotions from a threatening target to a safer one?",
        answers: [
            { text: "Repression", correct: false },
            { text: "Denial", correct: false },
            { text: "Displacement", correct: true },
            { text: "Projection", correct: false },
        ]
    },
    {
        question: "Erikson’s stage for adolescents is:",
        answers: [
            { text: "Trust vs. Mistrust", correct: false },
            { text: "Initiative vs. Guilt", correct: false },
            { text: "Identity vs. Role Confusion", correct: true },
            { text: "Autonomy vs. Shame", correct: false },
        ]
    },

    {
        question: "According to Socrates, what is the key to wisdom?",
        answers: [
            { text: "Accumulating wealth", correct: false },
            { text: "Knowing oneself", correct: true },
            { text: "Reading many books", correct: false },
            { text: "Avoiding questions", correct: false },
        ]
    },
    {
        question: "Who believed that the self is composed of reason, physical appetite, and spirit?",
        answers: [
            { text: "Aristotle", correct: false },
            { text: "Plato", correct: true },
            { text: "Socrates", correct: false },
            { text: "St. Augustine", correct: false },
        ]
    },
    {
        question: "What did St. Augustine believe was essential for understanding the self?",
        answers: [
            { text: "Scientific knowledge", correct: false },
            { text: "Union with God", correct: true },
            { text: "Political power", correct: false },
            { text: "Isolation", correct: false },
        ]
    },
    {
        question: "For Rene Descartes, what defines existence?",
        answers: [
            { text: "Emotion", correct: false },
            { text: "Faith", correct: false },
            { text: "Thinking", correct: true },
            { text: "Movement", correct: false },
        ]
    },
    {
        question: "David Hume believed that the self is a:",
        answers: [
            { text: "Permanent soul", correct: false },
            { text: "Bundle of perceptions", correct: true },
            { text: "Logical concept", correct: false },
            { text: "Moral agent", correct: false },
        ]
    },
    {
        question: "Which philosopher argued that knowledge begins with experience?",
        answers: [
            { text: "David Hume", correct: false },
            { text: "Immanuel Kant", correct: true },
            { text: "Plato", correct: false },
            { text: "Descartes", correct: false },
        ]
    },
    {
        question: "According to Gilbert Ryle, how should the self be understood?",
        answers: [
            { text: "As a ghost in the machine", correct: false },
            { text: "As a pattern of behavior", correct: true },
            { text: "As a soul", correct: false },
            { text: "As divine essence", correct: false },
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHtml = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ".  " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);

    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML =`Your score ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();