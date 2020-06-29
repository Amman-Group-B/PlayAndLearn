// select all elements
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var question;
var qImg = document.getElementById("qImg");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var counter = document.getElementById("counter");
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");
var container = document.getElementById("container");

// create some variables

var runningQuestion = 0;
var count = 0;
var questionTime = 10; // 10s
var gaugeWidth = 150; // 150px
var gaugeUnit = gaugeWidth / questionTime;
var TIMER;
var score = 0;
var questionQuantity;
var randomIndex;
var randomQuestionIndex;
var questionsBank = [];
var categoryIndex;
var questionsSourceArray=[];
var mathQuestions = [];
var arabicQuestions = [];
var generalQuestions = [];
var englishQuestions = [];

// render a question
function renderQuestion() {
    randomQuestionIndex = Math.floor(Math.random() * questionsSourceArray.length);
    var q = questionsSourceArray[randomQuestionIndex];
    console.log('q: ', q.correctAnswer);
    question= document.getElementById("question");
    question.innerHTML = "<p>" + q.question + "</p>";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click", chooseCategory);

// start quiz
function chooseCategory() {
    start.style.display = 'none';

    var chooseCategoryForm = document.createElement('form');
    var fieldset = document.createElement('fieldset');
    var select = document.createElement('select');
    var optionMath = document.createElement('option');
    var optionGeneral = document.createElement('option');
    var optionArabic = document.createElement('option');
    var optionEnglish = document.createElement('option');
    optionMath.innerHTML = 'Math';
    optionGeneral.innerHTML = 'General';
    optionArabic.innerHTML = 'Arabic';    
    optionEnglish.innerHTML = 'English';

    //number of question
    var questionQuantityArea = document.createElement('input');
    var button = document.createElement('input');
    button.type = 'submit';
    button.innerHTML = 'Go';
    select.appendChild(optionMath);
    select.appendChild(optionGeneral);
    select.appendChild(optionArabic);
    select.appendChild(optionEnglish);

    fieldset.appendChild(select);
    fieldset.appendChild(questionQuantityArea);
    fieldset.appendChild(button);
    chooseCategoryForm.appendChild(fieldset);
    container.appendChild(chooseCategoryForm);



    chooseCategoryForm.addEventListener("submit", function (event) {
        event.preventDefault();
        questionQuantity = questionQuantityArea.value - 1;
        var questionCategory = select.options[select.selectedIndex].value;
        console.log('questionQuantity: ', questionQuantity);
        console.log('questionCategory: ', questionCategory);


        chooseCategoryForm.innerHTML = '';
        if (questionCategory == 'Math') {
            questionsSourceArray = mathQuestions;
        } else if (questionCategory == 'General') {
            questionsSourceArray = generalQuestions;

        }else if (questionCategory == 'Arabic') {
            questionsSourceArray = arabicQuestions;

        }else if (questionCategory == 'English') {
            questionsSourceArray = englishQuestions;

        }

        startQuiz();



        //start.style.display = "Choose Category";
        //quiz.style.display = "block";
    })
}

function startQuiz() {
    //start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
    for (var qIndex = 0; qIndex <= questionQuantity; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

// counter render

function renderCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;
        // change progress color to red
        answerIsWrong();
        if (runningQuestion < questionQuantity) {
            runningQuestion++;
            renderQuestion();
        } else {
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer
function checkAnswer(answer) {
    if (answer == questionsSourceArray[randomQuestionIndex].correctAnswer) {
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    } else {
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if (runningQuestion < questionQuantity) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect() {
    var x = document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
    console.log('x:', x);
}

// answer is Wrong
function answerIsWrong() {
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender() {
    scoreDiv.style.display = "block";
    // calculate the amount of question percent answered by the user
    var scorePerCent = Math.round(100 * score / (questionQuantity + 1));
    // choose the image based on the scorePerCent
    var img = (scorePerCent >= 80) ? "img/5.png" :
        (scorePerCent >= 60) ? "img/4.png" :
            (scorePerCent >= 40) ? "img/3.png" :
                (scorePerCent >= 20) ? "img/2.png" :
                    "img/1.png";
    scoreDiv.innerHTML = "<img src=" + img + ">";
    scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}


var addQuestionButton = document.getElementById('addQuestionButton');
//addQuestionButton.addEventListener("click",addQuestion);

//Add questions
function addQuestion() {
    event.preventDefault();

    var categori = document.getElementById('category');
    var category = categori.options[categori.selectedIndex].value;
    console.log('category: ', category);
    var question = document.getElementById('question').value;
    var imgSrc = document.getElementById('imgSrc').value;
    var choiceA = document.getElementById('choiceA').value;
    var choiceB = document.getElementById('choiceB').value;
    var choiceC = document.getElementById('choiceC').value;
    var correctAnswer = document.getElementById('correctAnswer').value;
    new Question(question,imgSrc,choiceA,choiceB,choiceC,correctAnswer);
    


}
    //console.log('questions[0]: ', questions[0]);
