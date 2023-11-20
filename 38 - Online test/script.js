let questions = [
    { question: "what is the type of water?", answer: "liquid" },
    { question: "what is the type of stone?", answer: "solid" },
    { question: "what is the type of air?", answer: "gas" },
];

let userScores = 0;
let userQuestion;
let userAnswer;

questions.forEach(function (question) {
    userQuestion = question.question;
    userAnswer = prompt(userQuestion + "\nliquid \nsolid \ngas");

    questions.forEach(function (question) {
        if (question.question == userQuestion && question.answer == userAnswer) {
            userScores++;
        }
    });
});

alert("Your Scores is : " + userScores);
