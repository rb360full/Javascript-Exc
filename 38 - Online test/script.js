let questions = [
    { question: "what is the type of water?", answer: "liquid" },
    { question: "what is the type of stone?", answer: "solid" },
    { question: "what is the type of air?", answer: "gas" },
    { question: "2 + 3", answer: "5" },
    { question: "7 - 4", answer: "3" },
    { question: "2 * 6", answer: "12" },
    { question: "5 * 3", answer: "15" }
];

let userScores = 0;
let userQuestion;
let userAnswer;

questions.forEach(function (question) {
    userQuestion = question.question;
    userAnswer = prompt(userQuestion);

    questions.forEach(function (question) {
        if (question.question === userQuestion && question.answer === userAnswer) {
            userScores++;
            console.log(userScores);
        }
    });
});

alert("Your Scores is : " + userScores);
