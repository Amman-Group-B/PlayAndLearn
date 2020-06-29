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

  // addSelectedItemToCart(event);
  // cart.saveToLocalStorage();
  // updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(event) {
  // TODO: suss out the item picked from the select list
  var selectedItem = event.target[1].value;

  // TODO: get the quantity
  var itemQuantity = event.target[2].value;

  // TODO: using those, add one item to the Cart
  cart.addItem(selectedItem, itemQuantity);
}

Cart.prototype.saveToLocalStorage = function() {
  localStorage.removeItem('cart');
  localStorage.setItem('cart', JSON.stringify(allClicked));
};

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