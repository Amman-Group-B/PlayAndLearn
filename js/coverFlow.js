//  Code By Webdevtrick ( https://webdevtrick.com ) 
(function() {

  var index = 0,
  coverFlow = null,
  prevClick = null,
  nextClick = null,
  categories = [],

  OFFSET = 900; 
  ROTATION = 45;
  BASE_ZINDEX = 10; 
  MAX_ZINDEX = 42; 

  
  var mathImage = document.getElementById('math');
  var generalImage = document.getElementById('general');
  var arabicImage = document.getElementById('arabic');
  var englishImage = document.getElementById('english');

  function get( selector ) {
      return document.querySelector( selector );
  };


  function render() {


      for( var i = 0; i < categories.length; i++ ) {

          if( i < index ) {
              categories[i].style['transform'] = "translateX( -"+ ( OFFSET * ( index - i  ) ) +"% ) rotateY( "+ ROTATION +"deg )";
              categories[i].style.zIndex = BASE_ZINDEX + i;  
          } 


           if( i === index ) {
              categories[i].style['transform'] = "rotateY( 0deg ) translateZ( 140px )";
              categories[i].style.zIndex = MAX_ZINDEX;  
          } 

          if( i > index ) {
              categories[i].style['transform'] = "translateX( "+ ( OFFSET * ( i - index  ) ) +"% ) rotateY( -"+ ROTATION +"deg )";
              categories[i].style.zIndex = BASE_ZINDEX + ( categories.length - i  ); 
          }         
      
      }

  };

  function flowRight() {


     if( index ) {
          index--;
          render();
     }
    
  };

  function flowLeft() {


     if( categories.length > ( index + 1)  ) {
          index++;
          render();
     }
    
  };


  function keyDown( event ) {
      switch( event.keyCode ) {
          case 37: flowRight(); break; 
          case 39: flowLeft(); break; 
      }
  };

  function registerEvents() {
    prevClick.addEventListener('click', flowRight, false);
    nextClick.addEventListener('click', flowLeft, false);
    document.addEventListener('keydown', keyDown, false);
  };


  function init() {

     
      categories = document.querySelectorAll('section');
      index = Math.floor( categories.length / 2 );
      coverFlow = document.getElementById('coverFlow');

      console.log(document.getElementById('coverFlow'))
      prevClick = document.getElementById('prev');
      nextClick = document.getElementById('next');

      for( var i = 0; i < categories.length; i++ ) {
          var url = categories[i].getAttribute("data-cover");
          categories[i].style.backgroundImage = "url("+ url  +")";
      }

      registerEvents();
      render();

 };

  init();

}());