"use strict;"

// -------------------- Objects -------------------- //
userArray = JSON.parse(localStorage.getItem('users')) || [];

function User(name, password, url , score) {
  this.name = name;
  this.password = password;
  this.url = url || '';
  // this.avatar = function() {
  //   return this.firstName + " " + this.lastName;
  // };
  // this.score = score;
  console.log(document.getElementsByClassName("avatar").src)
  document.getElementsByClassName("avatar").src = '';
  console.log(document.getElementsByClassName("avatar").src)

  document.getElementsByClassName("avatar").src = url;
  console.log(document.getElementsByClassName("avatar").src)

  userArray.push(this);
  localStorage.setItem('users', JSON.stringify(userArray));
  userArray = JSON.parse(localStorage.getItem('users'));
}

if (!userArray || !userArray.length){ // initializes admin and user roles when new
  new User("admin","admin"); 
  new User("Ahmad","123456");
  new User("Daoud","123456");
  new User("Rania","123456");
  new User("Rouqaia","123456");
  new User("Yahya","123456", "img/avatars/avatar-yahya.jpg");
  alert ("initialized admin and user roles")
}

// var options = { 
//   size: ["S", "M", "L", "XL", "XXL"],
//   color: ["Red", "Blue", "Green", "White", "Black"]
// };


// console.log(Object.keys(options));
// for (var key in options) {
//   console.log(options[key].length);
// }

// -------------------- Modal JS -------------------- //
var loginModal = document.getElementById('loginModal');
var infoModal = document.getElementById('infoModal');

function toggleLoginModal() {
  if (loginModal.classList.contains('open')){
    loginModal.classList.remove('open');
    // infoModal.classList.add('open');

  } else {
    loginModal.classList.add('open');
    // infoModal.classList.remove('open');

  }
}

function toggleScoreModal() {
  if (infoModal.classList.contains('open')){
    infoModal.classList.remove('open');

  } else {
    infoModal.classList.add('open');

  }
}

// -------------------- Login  -------------------- //
var login = document.getElementById('login');
login.addEventListener('submit', loginUser)
var score = document.getElementById('scoreBtn');

function loginUser(event) {
  event.preventDefault();
  setTimeout(toggleLoginModal, 2000);


  var uname = document.getElementById('uname').value;  // get form input
  var pwd = document.getElementById('pwd').value;
  var updateUser = [];
  var answer = document.getElementById('loginResult') // get span to print result
  var flagExists = false;
  console.log(userArray);

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
      updateUser = [userArray[i].name, userArray[i].url];
    }
  }
  if (!flagExists) {
    new User(uname,pwd);
  }
  else if (flagExists) {
    document.getElementById("avatar").src = '';
    document.getElementById("avatar").src = updateUser[1];
  }

  setTimeout(toggleScoreModal, 2400);
  score.classList.remove('disabled');
  score.addEventListener('click', toggleScoreModal);

  document.getElementById('name').innerHTML = 'Welcome back! ' + updateUser[0];
  document.getElementById('intro').innerHTML = 'Lets do some exercises today';

}