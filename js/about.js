'use strict'

var roqaiaText = document.getElementById('roqaiaText');
roqaiaText.style.display = "none";
var img = document.getElementById('roqaiaImg');

img.addEventListener('mouseover',displayRoqaiaText);

function displayRoqaiaText(event){
    event.preventDefault()
    roqaiaText.style.display ="block";
}

var yahyaText = document.getElementById('yahyaText');
yahyaText.style.display = "none";
var img = document.getElementById('yahyaImg');

img.addEventListener('mouseover',displayyahyaText);

function displayyahyaText(event){
    event.preventDefault() 
    yahyaText.style.display ="block";
}

var ahmadText = document.getElementById('ahmadText');
ahmadText.style.display = "none";
var img = document.getElementById('ahmadImg');

img.addEventListener('mouseover',displayahmadText);

function displayahmadText(event){
    event.preventDefault()
    ahmadText.style.display ="block";
}

var raniaText = document.getElementById('raniaText');
raniaText.style.display = "none";
var img = document.getElementById('raniaImg');

img.addEventListener('mouseover',displayraniaText);

function displayraniaText(event){
    event.preventDefault()
    raniaText.style.display ="block";
}

var daoudText = document.getElementById('daoudText');
daoudText.style.display = "none";
var img = document.getElementById('daoudImg');

img.addEventListener('mouseover',displaydaoudText);

function displaydaoudText(event){
    event.preventDefault() 
    daoudText.style.display ="block";
}