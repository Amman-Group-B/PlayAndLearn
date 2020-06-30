'use strict'

// var roqaiaText = document.getElementById('roqaiaText');
// var yahyaText = document.getElementById('yahyaText');
// var ahmadText = document.getElementById('ahmadText');
// var raniaText = document.getElementById('raniaText');
// var daoudText = document.getElementById('daoudText');

// var roqaiaImg = document.getElementById('roqaiaImg');
// var ahmadImg = document.getElementById('ahmadImg');
// var daoudImg = document.getElementById('daoudImg');
// var yahyaImg = document.getElementById('yahyaImg');
// var raniaImg = document.getElementById('raniaImg');

// var textArray = [roqaiaText, yahyaText, ahmadText, raniaText, daoudText];
// var imgArray = [roqaiaImg, yahyaImg, ahmadImg, raniaImg, daoudImg];
// for (i = o; i < textArray.length; i++) {
//     textArray[i].style.display = 'none';
// }

// for (i = 0; i < imgArray.length; i++) {
//     imgArray[i].addEventListener('mouseover', displayText);
//     function displayText(event) {
//         event.preventDefault()
//         textArray[i].style.display = "block";
//     }
//     imgArray[i].addEventListener('mouseout', removeText);
//     function removeText(event) {
//         event.preventDefault()
//         textArray[i].style.display = "none";

//     }
// }












var roqaiaText = document.getElementById('roqaiaText');
roqaiaText.style.display = "none";
var img = document.getElementById('roqaiaImg');

img.addEventListener('mouseover',displayRoqaiaText);

function displayRoqaiaText(event){
    event.preventDefault()
    roqaiaText.style.display ="block";
}

img.addEventListener('mouseout', removeRoqaiaText);

function removeRoqaiaText (event){
    event.preventDefault()
    roqaiaText.style.display ="none";
}

var yahyaText = document.getElementById('yahyaText');
yahyaText.style.display = "none";
var img = document.getElementById('yahyaImg');

img.addEventListener('mouseover',displayyahyaText);

function displayyahyaText(event){
    event.preventDefault() 
    yahyaText.style.display ="block";
}
img.addEventListener('mouseout', removeYahyaText);

function removeYahyaText (event){
    event.preventDefault();
    yahyaText.style.display ="none";
}
var ahmadText = document.getElementById('ahmadText');
ahmadText.style.display = "none";
var img = document.getElementById('ahmadImg');

img.addEventListener('mouseover',displayahmadText);

function displayahmadText(event){
    event.preventDefault()
    ahmadText.style.display ="block";
}
img.addEventListener('mouseout', removeAhmadText);

function removeAhmadText (event){
    event.preventDefault();
    ahmadText.style.display ="none";
}


var raniaText = document.getElementById('raniaText');
raniaText.style.display = "none";
var img = document.getElementById('raniaImg');

img.addEventListener('mouseover',displayRaniaText);

function displayRaniaText(event){
    event.preventDefault()
    raniaText.style.display ="block";
}
img.addEventListener('mouseout', removeRaniaText);

function removeRaniaText (event){
    event.preventDefault()
    raniaText.style.display ="none";
}

var daoudText = document.getElementById('daoudText');
daoudText.style.display = "none";
var img = document.getElementById('daoudImg');

img.addEventListener('mouseover',displayDaoudText);

function displayDaoudText(event){
    event.preventDefault() 
    daoudText.style.display ="block";
}
img.addEventListener('mouseout', removeDaoudText);

function removeDaoudText (event){
    event.preventDefault();
    daoudText.style.display ="none";
}