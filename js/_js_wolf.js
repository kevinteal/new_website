// JavaScript Document
var counter = 1;
$(document).ready(function(e) {
    
	var myVar = setInterval(function(){ changwolf() }, 1800);
	
	
	
	$("#page_wrap").css("display","block");
	
	var boxes = document.getElementsByClassName("center_box");
		for (var i = 0; i < boxes.length; i++) {			
			var rand =  Math.floor(Math.random() * (99 - 50 + 1)) + 50;
			rand=rand/100;
			boxes[i].style.opacity =  rand;
		}
	
	setTimeout(function(){ 
		$( "#loading_screen" ).animate({opacity: 0 }, 1000, function() {
		// Animation complete.
		$("#loading_screen").css("display","none");
		
		var main_letters = document.getElementsByClassName("main_letters");
		for (var i = 0; i < main_letters.length; i++) {			
			$(main_letters[i]).delay(i*100).animate({top:"0px"},900,"swing");
		}
		
	  });
		var myBoxes = setInterval(function(){ changboxes() }, 3000);
		 clearInterval(myVar);
	}, 1000);
	
	$( "#about_link" ).mouseenter(function() {
		play_with_text("about_nav");
	  }).mouseleave(function() {
			reset_text("about_nav");
	  });
	  $( "#work_link" ).mouseenter(function() {
		play_with_text("work_nav");
	  }).mouseleave(function() {
			reset_text("work_nav");
	  });
	   $( "#history_link" ).mouseenter(function() {
		play_with_text("history_nav");
	  }).mouseleave(function() {
			reset_text("history_nav");
	  });
	   $( "#contact_link" ).mouseenter(function() {
		play_with_text("contact_nav");
	  }).mouseleave(function() {
			reset_text("contact_nav");
	  });
	  
	
});


function changwolf(){
var kk = $("#wolftie_load").css("borderSpacing");
var tt = kk.substr(0,1);
var animate_val = 180;
if(tt==0){
	animate_val = 180;
}else{
	animate_val = 0;
}
	
	$('#wolftie_load').animate({  borderSpacing: animate_val }, {
    step: function(now,fx) {
		if(animate_val==180){
			if(now>90){
         		$("#wolftie_img").attr("src","imgs/wolflogo"+counter+".png");  
        	}
		}else{
			if(now<90){
         		$("#wolftie_img").attr("src","imgs/wolflogo"+counter+".png");  
        	}
		}
        
      $(this).css('-webkit-transform','rotateY('+now+'deg)'); 
      $(this).css('-moz-transform','rotateY('+now+'deg)');
      $(this).css('transform','rotateY('+now+'deg)');
    },
    duration:'slow'
},'linear');

counter++
if(counter==5){
	counter = 1;
}
}


function changboxes(){
		var boxes = document.getElementsByClassName("center_box");
		for (var i = 0; i < boxes.length; i++) {			
			var rand =  Math.floor(Math.random() * (99 - 50 + 1)) + 50;
			rand=rand/100;
			$(boxes[i]).animate({opacity: rand }, 1000);
//			boxes[i].style.opacity =  rand;
		}
}

function play_with_text(element){
	var letters = document.getElementsByClassName(element);
	var rand =  Math.floor(Math.random() * (letters.length));
		
	$(letters[rand]).animate({  borderSpacing: 180 }, {
    step: function(now,fx) {
		if(now>90){
         		$(this).css("color","#ff9540");
        }
	  $(this).css('-webkit-transform','rotateY('+now+'deg)'); 
      $(this).css('-moz-transform','rotateY('+now+'deg)');
      $(this).css('transform','rotateY('+now+'deg)');
    },
    duration:'slow'
},'linear');
}



function scrollme(where){
	var location = $("#"+where).offset();
	var locationy = location.top - 10;
	$("body,html").animate({ scrollTop: locationy },1500);
}

function reset_text(element){
	var letters = document.getElementsByClassName(element);
	for(var i = 0;i<letters.length;i++){
		$(letters[i]).animate({  borderSpacing: 0 }, {
		step: function(now,fx) {
			if(now<90){
				$(this).css("color","#404040");
			}
		  $(this).css('-webkit-transform','rotateY('+now+'deg)'); 
		  $(this).css('-moz-transform','rotateY('+now+'deg)');
		  $(this).css('transform','rotateY('+now+'deg)');
		},
		duration:'slow'
	},'linear');
	}
}

