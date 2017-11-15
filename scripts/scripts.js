/* Below codes are here to give animation to scroll-to-top button */

$(document).ready(function(){

	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});

/* Below codes are here to give validation for contact us form */


var name = document.getElementById("name");
var nameErrorInformer = document.getElementById("name-info");
var nameErrorInformerElement = document.createElement("div");


var email = document.getElementById("email");
var emailErrorInformer = document.getElementById("email-info");
var emailErrorInformerElement = document.createElement("div");

var message = document.getElementById("message");
var messageErrorInformer = document.getElementById("message-info");
var messageInformerElement = document.createElement("div");


var btn = document.getElementById("sendButton");

btn.addEventListener("click", ()=>{	

	if(email.value.length == 0 || message.value.length == 0){
		nameErrorInformerElement.setAttribute("class","alert alert-warning"); 
		nameErrorInformerElement.innerHTML = "Please, fill out the form!";
		nameErrorInformer.appendChild(nameErrorInformerElement);

		emailErrorInformerElement.setAttribute("class", "alert alert-warning");
		emailErrorInformerElement.innerHTML = "Please, fill out the form!";
		emailErrorInformer.appendChild(emailErrorInformerElement);

		messageInformerElement.setAttribute("class","alert alert-warning");
		messageInformerElement.innerHTML = "Please, fill out the form!";
		messageErrorInformer.appendChild(messageInformerElement);
	} else {
		console.log("Your message:" + "\n" + email.value + "\n" + message.value);
		alert("Your message is sent:" + "\n" + email.value + "\n" + message.value);		
	}
});

/* Below codes are here to give validation for password */

var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}