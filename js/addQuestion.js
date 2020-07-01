'use strict';

// var addQuestionButton = document.getElementById('addQuestionButton');
// addQuestionButton.addEventListener("click", addQuestion);

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

var div = document.getElementById("img");
// img.style.display = "none";

addQuestionButton.addEventListener("mouseover", addPlus);

function addPlus(){
    // for (var k=0 ; i<7 ; i++){

        for (var t = 0 ; t < 2 ; t++ ){
           var img= document.createElement('img');
           document.getElementById("img").style.display = "block";
           img.src ="img/add.png";
           img.style.width= 50+ "px";
           img.style.height=50+"px";
           img.style.top = Math.floor(Math.random()*1500) + "px";
           img.style.left = Math.floor(Math.random()*1500) + "px" ;
           div.appendChild(img);
           setInterval(function (){}, 5000)
         
        }
       
        
    // }
    
    
}


addQuestionButton.addEventListener("mouseout", removePlus);

function removePlus(){
    img.parentNode.removeChild();
    // document.getElementById("img").style.display ="none";
}



