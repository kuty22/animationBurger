window.onload = function() {
	   	var tl = new TimelineLite();
    	var breadB = document.getElementById("breadB");
    	var steak = document.getElementById("steak");
    	var cheese = document.getElementById("cheese");
    	var tomato = document.getElementById("tomato");
    	var breadT = document.getElementById("breadT");
    	var button = document.getElementById("toggle-button");


		tl.to(breadB, 1, {top:"300px", ease:Bounce.easeOut}, '+=0.5');
     	tl.to(steak, 2, {top:"280px", ease:Bounce.easeOut}, '-=0.5');
     	tl.to(cheese, 2, {top:"270px", ease:Bounce.easeOut}, '-=0.5');
     	tl.to(tomato, 2, {top:"255px", ease:Bounce.easeOut}, '-=0.5');
     	tl.to(breadT, 2, {top:"190px", ease:Bounce.easeOut}, '-=0.5');

		tl.staggerTo("h2", 0.5, {className:"+=superShadow", top:"-=10px", ease:Power1.easeIn});
		tl.from('h2', 2, {opacity:0}, '-=3');


		button.onclick = function() {
  			document.location.href = '404.html';
		}
}