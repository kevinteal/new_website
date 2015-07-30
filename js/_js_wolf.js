// JavaScript Document

$(document).ready(function(e) {
    
	
	var boxes = document.getElementsByClassName("center_box");
		for (var i = 0; i < boxes.length; i++) {			
			var rand =  Math.floor(Math.random() * (99 - 50 + 1)) + 50;
			rand=rand/100;
			boxes[i].style.opacity =  rand;
		}
	
});