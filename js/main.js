$(document).ready(function(){

  var s = skrollr.init();	

  // Variable, um dieses DOM-Element von Audio zu speichern
  var bubbleAudio = $('#bubble_sound').get(0);

  // Event Scroll löst anonyme Callback-Funktion aus.
  $(window).scroll(function() {

    // console.log(window.pageYOffset);
    if(window.pageYOffset > 31000 && window.pageYOffset < 34500) {
      bubbleAudio.play();
    } else if (window.pageYOffset > 63000 && window.pageYOffset < 67000) {
      bubbleAudio.play();
    } else if (window.pageYOffset > 101000 && window.pageYOffset < 104800) {
      bubbleAudio.play();
    } else if (window.pageYOffset > 135000 && window.pageYOffset < 138400) {
      bubbleAudio.play();
    } else if (window.pageYOffset > 162200 && window.pageYOffset < 165400) {
      bubbleAudio.play();
    } else {
      bubbleAudio.pause();
    }
  });

});

// Funktion, um Ladenstatus zu überprüfen
function loadingCheck() {
  if (document.readyState != "complete") {
    showIntro();
    window.setTimeout(loadingCheck, 10000);    
  }
  else {
    document.getElementById('loading').id = 'loaded';
  }
}

// Funktion, um Intro-Szene darzustellen
function showIntro() {
  $('#intro').fadeIn('slow', function() {
    $(this).css('display', 'block'); 
    $('#loading').css('display','none');
  });				
}



