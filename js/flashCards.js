
var card = document.getElementById('origin');
console.log(card)
card.addEventListener('click',flipMe)
var timer = 10000;
var timeout;

function flipMe(event) {

  if (event.target.parentNode.classList.contains('flipme')){
    event.target.parentNode.classList.remove('flipme');
  } 
  else {
    event.target.parentNode.classList.add('flipme');
  }
}

var flashCardArea = document.getElementById('cards');
var questionBank = JSON.parse(localStorage.getItem('generalQuestions'));

console.log('this is the bank ', questionBank)



function registerEvents() {
  var nextClick = document.getElementById('next');

  nextClick.addEventListener('click', randomCard);
};

registerEvents();

var uniqueId = 0;

window.setTimeout(() => {
  randomCard();
}, timer/2);

function randomCard() {
  clearTimeout(timeout);         // clears timeout to allow users to study when flipping to avoid accidental flip
  timeout = window.setInterval(function(){randomCard()}, timer);

  flashCardArea.innerHTML = '';

  var i = Math.floor(Math.random()*questionBank.length);
  // var j = Math.floor(Math.random()*questionBank[i].length);
  console.log('this is question', questionBank[i])

  uniqueId +=1; 
  answerText = questionBank[i].correctAnswer
console.log('this is answer', answerText)
  answerText = 'choice'+answerText
  var cardHolder = document.createElement('div'); // builds the card div
  cardHolder.id = uniqueId;
  cardHolder.classList.add('card');
  flashCardArea.appendChild(cardHolder);
  
  var frontCard = document.createElement('div'); // builds front face
  frontCard.classList.add('card__face')
  frontCard.classList.add('card__face--front')
  frontCard.innerHTML = '<p>' + questionBank[i].question + '</p>';
  cardHolder.appendChild(frontCard);
  
  
  var backCard = document.createElement('div'); // builds back face
  backCard.classList.add('card__face')
  backCard.classList.add('card__face--back')
  backCard.innerHTML = '<p>' + questionBank[i][answerText] + '</p>';
  cardHolder.appendChild(backCard);
  
  var card2 = document.getElementById(uniqueId);
  card2.addEventListener('click',flipMe);
  card2.classList.add('animate')
  console.log(questionBank[i])
}

// for (var i = 0; i < questionBank.length; i++) {
//   for (var j = 0; j < questionBank[i].length; j++ ) {
//     console.log('j ',j)
//     uniqueId +=1; 
//     answerText = questionBank[i][j].correctAnswer
//     answerText = 'choice'+answerText
//     console.log(questionBank[i][j][answerText])
//     var cardHolder = document.createElement('div'); // builds the card div
//     cardHolder.id = uniqueId;
//     cardHolder.classList.add('card');
//     flashCardArea.appendChild(cardHolder);
    
//     var frontCard = document.createElement('div'); // builds front face
//     frontCard.classList.add('card__face')
//     frontCard.classList.add('card__face--front')
//     frontCard.innerHTML = questionBank[i][j].question;
//     cardHolder.appendChild(frontCard);
    
    
//     var backCard = document.createElement('div'); // builds back face
//     backCard.classList.add('card__face')
//     backCard.classList.add('card__face--back')
//     backCard.innerHTML = questionBank[i][j][answerText];
//     cardHolder.appendChild(backCard);
    
//     var card2 = document.getElementById(uniqueId);
//     card2.addEventListener('click',flipMe)
//   }
//   console.log('i ',i)
// }

// }