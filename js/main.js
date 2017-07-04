$(document).ready(function(){
	var s = skrollr.init();	
  var scroll = window.pageYOffset;

  // playSound();
});

// function playSound() {
//   if(scroll > 31000 && scroll < 34500) {
//     console.log("test");
//     $('#bubble_sound').play();
//   }
// }

function loadingCheck() {
  if (document.readyState != "complete") {
    showIntro();
    window.setTimeout(loadingCheck, 10000);    
  }
  else {
    document.getElementById('loading').id = 'loaded';
  }
}

function showIntro() {
  $('#intro').fadeIn('slow', function() {
    $(this).css('display', 'block'); 
    $('#loading').css('display','none');
  });				
}

