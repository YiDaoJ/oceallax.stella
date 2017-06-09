// $(window).load(ladenAnimation);
<<<<<<< HEAD
// 



$(document).ready(function(){
	var s = skrollr.init();
	// console.log('test');
	// ladenAnimation();
=======

function ladenAnimation() {
	var $elem = $('#loading div');

	$({deg: 0}).animate({deg: 1080}, {
		duration: 5000,
		step: function(now) {
			$elem.css({
				transform: "rotate(" + now + "deg)"
			});
		}
	});
}

$(document).ready(function(){
	console.log('test');
	ladenAnimation();
>>>>>>> origin/master
});