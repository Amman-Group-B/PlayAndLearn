'use strict'

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
