

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(event) {
  // TODO: suss out the item picked from the select list
  var selectedItem = event.target[1].value;

  // TODO: get the quantity
  var itemQuantity = event.target[2].value;

  // TODO: using those, add one item to the Cart
  cart.addItem(selectedItem, itemQuantity);
}

// Cart.prototype.saveToLocalStorage = function() {
//   localStorage.removeItem('cart');
//   localStorage.setItem('cart', JSON.stringify(allClicked));
// };

function updateCartPreview(event) {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  var HTMLcontent = document.getElementById("cartContents");
  HTMLcontent.innerHTML = ''
  if (!event) {
    console.log(allClicked.length)
    for (var i = 0; i < allClicked.length; i++){
      HTMLcontent.innerHTML += '<div>Item: ' + allClicked[i][0] + '</div>' 
      + '<div>Quantity: ' + allClicked[i][1] + '</div><br>'
    }
  } else {
      HTMLcontent.innerHTML += '<div>' + Product.allProducts[event.target[1].value].name + '</div>' 
      + '<div>' + event.target[2].value + '</div><br>'
  }

}


// ------------------- Textarea Work ------------------- //

  document.getElementById('textarea').onkeyup = function () {
  document.getElementById('textCount').innerHTML = "Characters left: " + (75 - this.value.length);
  }

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  var dateTitle = document.getElementById('dateTitle');
  dateTitle.innerHTML += today;

  var journalForm = document.getElementById('journalForm');
  journalForm.addEventListener('submit', handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();
    // Do all the things ...
    var text = event.target[1].value;
    var note = [today, text];
    activeUser[3].push(note)
    localStorage.setItem('activeUser', JSON.stringify(activeUser))
    renderNotes();
    // addSelectedItemToCart(event);
    // cart.saveToLocalStorage();
    // updateCartPreview();
    saveNotesUpdates();
  }

// ------------------- Print Notes from storage and add from input ------------------- //
  
  var activeUser = JSON.parse(localStorage.getItem('activeUser')) || [];

  var frame = document.getElementById('frame');
  function renderNotes() {

    var notes = activeUser[3];
    frame.innerHTML = '';
    for (var i = 0; i < notes.length; i++) {

      var anchor = document.createElement('a');
      anchor.classList.add('note','sticky'+i);

      var pin = document.createElement('div');
      pin.classList.add('pin');
      anchor.appendChild(pin);

      var text = document.createElement('div');
      text.innerHTML ='<p>' + notes[i][0] + '</p>' + notes[i][1];
      text.classList.add('text');
      anchor.appendChild(text);
      frame.appendChild(anchor);
      // if(i >= 11) {

      // }
    }
  }

  function renderProfile() {
    document.getElementById("profImage").src = '';
    document.getElementById("userName").innerHTML = activeUser[0];
    document.getElementById("profImage").src = activeUser[1];
    document.getElementById("highScore").innerHTML = activeUser[2];
  }

  renderNotes();
  renderProfile();
  // -------------------------- Save Active User Details ------------------------//

  var allUsers = JSON.parse(localStorage.getItem('users'));
  function saveNotesUpdates() {
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