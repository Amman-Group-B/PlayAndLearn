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
var startPlayingButton=document.getElementById('startPlayingButton');
var constructorGif=document.getElementById('constructorGif');
var coverflow=document.getElementById('coverflow');
var questionsContainer=document.getElementById('questionsContainer');
var questionsDiv=document.getElementById('questionsDiv');






// create some variables
var runningQuestion = 0;
var count = 0;
var questionTime = 10; // 10s
var gaugeWidth = 150; // 150px
var gaugeUnit = gaugeWidth / questionTime;
var TIMER;
var score = 0;
var questionQuantity;
var randomQuestionIndex;
var questionsBank = [];
var categoryIndex;
var questionsSourceArray = [];
var shownQuestions = [];
// var mathQuestions = [];
// var arabicQuestions = [];
// var generalQuestions = [];
// var englishQuestions = [];
questionsSourceArray = mathQuestions;
console.log('questionsSourceArray: ', questionsSourceArray);
console.log('mathQuestions: ', mathQuestions);
// render a question
function renderQuestion() {
    console.log('shownQuestions: ', shownQuestions);

    randomQuestionIndex = Math.floor(Math.random() * questionsSourceArray.length);

    while (shownQuestions.includes(randomQuestionIndex)) {
        console.log('this is question has been shown ');
        randomQuestionIndex = Math.floor(Math.random() * questionsSourceArray.length);

    }


    var q = questionsSourceArray[randomQuestionIndex];
    console.log('questionsSourceArray: ', questionsSourceArray);
    console.log('q: ', q);
    question = document.getElementById("question");
    question.innerHTML = "<p>" + q.question + "</p>";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    shownQuestions.push(randomQuestionIndex);
}
// start.addEventListener("click", chooseCategory);
var mathImage = document.getElementById('math');
var generalImage = document.getElementById('general');
var arabicImage = document.getElementById('arabic');
var englishImage = document.getElementById('english');

var coverFlow = document.getElementById('coverflow');

mathImage.addEventListener('click', function () {
    coverFlow.style.display='none';
    questionsContainer.style.display='inline';
    questionsDiv.style.display='inline';

    chooseCategory('Math')
})
generalImage.addEventListener('click', function () {
    coverFlow.style.display='none';
    questionsContainer.style.display='inline';
    questionsDiv.style.display='inline';

    chooseCategory('General')
})
arabicImage.addEventListener('click', function () {
    coverFlow.style.display='none';
    questionsContainer.style.display='inline';
    questionsDiv.style.display='inline';

    chooseCategory('Arabic')
})
englishImage.addEventListener('click', function () {
    coverFlow.style.display='none';
    questionsContainer.style.display='inline';
    questionsDiv.style.display='inline';

    chooseCategory('English');
})

// start quiz
function chooseCategory(categ) {

    var range = document.getElementById("myRange").value;
    console.log('range: ', range)
    var quantity = 0;
    if (range <= 25) {
        quantity = 2;
    } else if (range <= 50) {
        quantity = 4;
    } else if (range <= 75) {
        quantity = 8;
    } else if (range < 100) {
        quantity = 10;
    } else if (range == 100) {
        quantity = 15;            // implement all later !!!!!!!!!!
    }

    questionQuantity = quantity - 1;

    coverFlow.style.display = 'none'

    event.preventDefault();
    var questionCategory = categ;
    console.log('questionQuantity: ', questionQuantity);
    console.log('questionCategory: ', questionCategory);

    if (questionCategory == 'Math') {
        //questionsSourceArray = mathQuestions.slice();
        questionsSourceArray = JSON.parse(localStorage.getItem('mathQuestions'));
    } else if (questionCategory == 'General') {
        questionsSourceArray = JSON.parse(localStorage.getItem('generalQuestions'));
    } else if (questionCategory == 'Arabic') {
        //questionsSourceArray = arabicQuestions.slice();
        questionsSourceArray = JSON.parse(localStorage.getItem('arabicQuestions'));
    } else if (questionCategory == 'English') {
        //questionsSourceArray = englishQuestions.slice();
        questionsSourceArray = JSON.parse(localStorage.getItem('englishQuestions'));
    }
    startQuiz();
}
function startQuiz() {
    //start.style.display = "none";
    renderQuestion();
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}
// render progress
function renderProgress() {
    console.log('questionQuantity before if:', questionQuantity);
    if (questionQuantity > questionsSourceArray.length) {
        questionQuantity = questionsSourceArray.length - 1;
    }
    console.log('questionQuantity after if:', questionQuantity);

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

    updateScore();
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
    new Question(question, imgSrc, choiceA, choiceB, choiceC, correctAnswer);
}
//console.log('questions[0]: ', questions[0]);

// --------------------------- User updates on score -------------------------------//
var welcomeGif = document.getElementById("welcomeGif");
var welcomeDiv = document.getElementById("welcomeDiv");
var activeUser = JSON.parse(localStorage.getItem('activeUser')) || [];

     //displayNone();

    welcomeGif.addEventListener('click', welcomeDisplay);



function welcomeDisplay(event) {
    event.preventDefault();
    welcomeGif.classList.add('member');
    welcomeGif.classList.add('imgDiv');

    setTimeout(displayNone, 1500);

}

function displayNone() {
    welcomeDiv.style.display = "none";
}

function updateScore() {
    activeUser[2] += score;

    localStorage.setItem('activeUser', JSON.stringify(activeUser))
    saveScoreUpdates()
}

var allUsers = JSON.parse(localStorage.getItem('users'));
function saveScoreUpdates() {
  for (var i = 0; i < allUsers.length; i++) {
    if (activeUser[0] == allUsers[i].name) {
      console.log('found match at', allUsers[i].name);
      allUsers[i].notes = activeUser[3];
      allUsers[i].score = activeUser[2];
      break;
    }
  }
  localStorage.setItem('users', JSON.stringify(allUsers))
}


//startPlayingButton.style.display='None';
startPlayingButton.addEventListener('click',function(){
    event.preventDefault();

    
    constructorDiv.style.display='none';
    coverflow.style.display='inline';
    startPlayingButton.style.display='none';


})
