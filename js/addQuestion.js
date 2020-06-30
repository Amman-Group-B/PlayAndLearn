'use strict';
var img = document.getElementById("img");
img.style.display = "none";
var addQuestionButton = document.getElementById('addQuestionButton');
addQuestionButton.addEventListener("click", addQuestion);

// var numberOfQuestions = document.getElementById('numberOfQuestions').value; 

//Add questions
function addQuestion() {
    event.preventDefault();
    
    var categoryitem = document.getElementById('category');
    var category = categoryitem.options[categoryitem.selectedIndex].value;
    console.log('category: ', category);
    var question = document.getElementById('question').value;
    var imgSrc = document.getElementById('imgSrc').value;
    var choiceA = document.getElementById('choiceA').value;
    var choiceB = document.getElementById('choiceB').value;
    var choiceC = document.getElementById('choiceC').value;
    var correctAnswer = document.getElementById('correctAnswer').value;

    new Question(category, imgSrc, question, choiceA, choiceB, choiceC, correctAnswer);
   
   
    location.reload();
    }
  
   

console.log(localStorage);

addQuestionButton.addEventListener("mouseover", addPlus);

function addPlus(){
    document.getElementById("img").style.display = "block"; 
}
addQuestionButton.addEventListener("mouseout", removePlus);
function removePlus(){
    document.getElementById("img").style.display ="none";
}

