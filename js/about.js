// 'use strict'

// var roqaiaText = document.getElementById('roqaiaText');
// roqaiaText.style.display = "none";
// var img = document.getElementById('roqaiaImg');
// var containerRo = document.getElementById(1)
// img.addEventListener('click',displayRoqaiaText);

// function displayRoqaiaText(event){
//     // event.preventDefault()
//     if (roqaiaText.style.display =='block'){
//         roqaiaText.style.display ="none";
//         containerRo.classList.add('mainView')

//     }
//     else {
//         roqaiaText.style.display ="block";
//         containerRo.classList.remove('mainView')

//     }
//     console.log(event.target)

// }


// function removeRoqaiaText (event){
//     event.preventDefault()

//     if (roqaiaText.getAttribute("style") =='block'){
//         roqaiaText.style.display ="none";
//     }

// }

// var yahyaText = document.getElementById('yahyaText');
// yahyaText.style.display = "none";
// var img = document.getElementById('yahyaImg');

// img.addEventListener('mouseover',displayyahyaText);

// function displayyahyaText(event){
//     event.preventDefault() 
//     yahyaText.style.display ="block";
// }
// img.addEventListener('mouseout', removeYahyaText);

// function removeYahyaText (event){
//     event.preventDefault();
//     yahyaText.style.display ="none";
// }
// var ahmadText = document.getElementById('ahmadText');
// ahmadText.style.display = "none";
// var img = document.getElementById('ahmadImg');

// img.addEventListener('mouseover',displayahmadText);

// function displayahmadText(event){
//     event.preventDefault()
//     ahmadText.style.display ="block";
// }
// img.addEventListener('mouseout', removeAhmadText);

// function removeAhmadText (event){
//     event.preventDefault();
//     ahmadText.style.display ="none";
// }

// var raniaText = document.getElementById('raniaText');
// raniaText.style.display = "none";
// var img = document.getElementById('raniaImg');

// img.addEventListener('mouseover',displayRaniaText);

// function displayRaniaText(event){
//     event.preventDefault()
//     raniaText.style.display ="block";
// }
// img.addEventListener('mouseout', removeRaniaText);

// function removeRaniaText (event){
//     event.preventDefault()
//     raniaText.style.display ="none";
// }

// var daoudText = document.getElementById('daoudText');
// daoudText.style.display = "none";
// var img = document.getElementById('daoudImg');

// img.addEventListener('mouseover',displayDaoudText);

// function displayDaoudText(event){
//     event.preventDefault() 
//     daoudText.style.display ="block";
// }
// img.addEventListener('mouseout', removeDaoudText);

// function removeDaoudText (event){
//     event.preventDefault();
//     daoudText.style.display ="none";
// }

// // --------------------- implement about us animation --------------------- //
// var timer;
// var i=0;
// var developers = document.getElementsByClassName("developersInitial");

// // function displayDevelopers(){
// //     var displayOne = function(){
// //         if (i <= developers.length) {
// //             if (i > 0){
// //                 developers[i-1].style.display = "none";
// //                 if (i == developers.length){                // delete last element and move to next function
// //                     displayAll();
// //                 }
// //             }
// //             developers[i].classList.add('mainView')
// //             timer = setTimeout(displayOne, 2000);
// //             i++;
// //         }
// //     }; 
// //     displayOne();
// // }

// // function displayAll() {
// //     // alert('display')
// //     for(var i = 0; i < developers.length; i++) {
// //         developers[i].style.display = "block";
// //         developers[i].classList.remove('mainView');
// //         developers[i].classList.add('developers');

// //     }
// // }
// //     // for(var i = 0; i < developers.length; i++) {
// //     // }

// // displayDevelopers()