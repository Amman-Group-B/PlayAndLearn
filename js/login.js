"use strict;"

// -------------------- Objects -------------------- //
userArray = JSON.parse(localStorage.getItem('users')) || [];

function User(name, url, score, notes) {
  this.name = name;
  this.url = url || '';
  this.score = score;
  this.notes = notes || [];
  // this.avatar = function() {
  //   return this.firstName + " " + this.lastName;
  // };
  document.getElementsByClassName("avatar").src = '';
  document.getElementsByClassName("avatar").src = url;

  userArray.push(this);
  localStorage.setItem('users', JSON.stringify(userArray));
  userArray = JSON.parse(localStorage.getItem('users'));
}

if (!userArray || !userArray.length){ // initializes admin and user roles when new
  new User("admin", '' , 300); 
  new User("Ahmad", "img/ahmad.png", 700);
  new User("Daoud", "img/daoud.png", 900);
  new User("Rania", "img/rania.png", 800);
  new User("Rouqaia", "img/roqaia.jpg", 600);
  new User("Yahya", "img/avatars/avatar-yahya.jpg", 500, [['28/06/2020','this is my first note'], ['29/06/2020','and second note'], ['30/06/2020','and third note'], ['31/06/2020','and etc']]);
  alert ("initialized admin and user roles")
}


// -------------------- Modal JS -------------------- //
var loginModal = document.getElementById('loginModal');
var infoModal = document.getElementById('infoModal');
infoModal.addEventListener('click', toggleScoreModal)


function toggleLoginModal() {
  if (loginModal.classList.contains('open')){
    loginModal.classList.remove('open');
    // infoModal.classList.add('open');

  } else {
    loginModal.classList.add('open');
    infoModal.classList.remove('open');

  }
}

function toggleScoreModal() {
  if (infoModal.classList.contains('open')){
    infoModal.classList.remove('open');

  } else {
    loginModal.classList.remove('open');
    infoModal.classList.add('open');

  }
}

// -------------------- Login  -------------------- //
var login = document.getElementById('login');
login.addEventListener('submit', loginUser)
var scoreModal = document.getElementById('scoreBtn');
var activeUser = JSON.parse(localStorage.getItem('activeUser')) || [];

function loginUser(event) {
  event.preventDefault();
  setTimeout(toggleLoginModal, 2000);

  var uname = document.getElementById('uname').value;
  // var avatarUpload = document.getElementById('avatarUpload').value;  // get form input
  var answer = document.getElementById('loginResult') // get span to print result
  var flagExists = false;
  // console.log(avatarUpload);

  Capuname = capitalize(uname); //check name string capitalization
  function capitalize(string) {
    return string.toUpperCase();
  }

  for (var i = 0; i < userArray.length; i++) {
    var capitalized = userArray[i].name.toUpperCase();

    if (Capuname != capitalized) {
      answer.innerHTML = '';
      flagExists = false;
      answer.innerHTML = 'New user detected';
    } 
    else if (Capuname == capitalized) {
      answer.innerHTML = '';
      flagExists = true;
      answer.innerHTML = 'User exists.. Importing data';
      activeUser = [userArray[i].name, userArray[i].url, userArray[i].score, userArray[i].notes];
      break;
    }
  }
  if (!flagExists) {
    var user = new User(uname);
    activeUser = [user.name]
    console.log(userArray);
    console.log(activeUser);

  }
  else if (flagExists) {
    document.getElementById("avatar").src = '';
    document.getElementById("avatar").src = activeUser[1];
  }

  localStorage.setItem('activeUser', JSON.stringify(activeUser))
    setTimeout(toggleScoreModal, 2400);
  activateScore();
}

function activateScore() {
  scoreModal.classList.remove('disabled');
  scoreModal.addEventListener('click', toggleScoreModal);

  document.getElementById('name').innerHTML = 'Welcome back! ' + activeUser[0];
  document.getElementById('intro').innerHTML = 'Lets do some exercises today';
}

if (activeUser) {
  activateScore();
}

