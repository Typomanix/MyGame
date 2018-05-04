/**
 * 
 *///Word list
var words = ["A lesson is a structured period of time",
	"It involves one or more students",
	"A lesson may be either one section of a textbook",
	"It's that wishing doesn't make it so jkl",
	"If you don't spend your life yourself, other people spend it for you",
	"It's not the load that weighs you down, it's how you carry it",
	"Living your life is a task so difficult",
	"Life is too short to spend your precious time",
	"To be successful, you must act big, think big and talk big",
	"Some of life's best lessons are learned at the worst times",
	"Life is a succession of lessons",
	"Some people come in your life as blessings and lessons",
	"Life is a grindstone",
	"Experience is a hard teacher",
	"You get in life what you have the courage to ask for",
	"Be like a tree; let the dead leaves drop",
	"Life is not about waiting for the storms to pass",
	"Life is not a problem to be solved, but a reality to be experienced",
	"Time is one of the most important things in the life",
	"Your time is limited",
	"We are who we choose to be",
	"Courage is the most important of all the virtues",
	"I did get there by  working for it",
	"It's about learning how to dance in the rain",
	"We make a living by what we get",
	"We make a life by what we give",
	"Mistakes are part of the dues one pays for a full life",
	"Good judgement comes from experience",
	"Good judgement comes from experience",
	"Do good. And good will come to you",
	"Humble yourself or life will do it for you",
	"Don't take things personally",
	"Don't take things personally",
	"Don't take things personally",
	"Don't take things personally",
	"Things are made to happen.",
	"Things do not happen. Things are made to happen",
	"Things are made to happen",
	"We meet people for a reason",
	"We meet people for a reason",
	"People only hear what they want to Life is reality to be experienced.",
	"Life must be lived forward",
	"A comfort zone is a wonderful place",
	"Success is a lesson applied"];
words = shuffle(words);

//Word stats
var wordIndex = 2;
var numWords = 0;
var timerID;


function startWordRace() {
	document.getElementById("start").style.display = "none";
	document.getElementById("wordRace").style.display = "";

	populateWordTray();

	$("#input").focus();

	// Initialize timer
	var timer = 120;
	document.getElementById("timer").innnerHTML = "2:00";

	// Timer function that counts down the seconds
	timerID = setInterval(function() {
		timer--;

		// If is over a minute
		if (timer - 60 > 0) {
			if (timer - 60 >= 10)
				document.getElementById("timer").innerHTML = 1 + ":" + (timer - 60);
			else
				document.getElementById("timer").innerHTML = 1 + ":0" + (timer - 60);
		}
		// If timer is at exactly 1 minute
		else if (timer == 60)
			document.getElementById("timer").innerHTML = "1:00";
		// If time is up
		else if (timer == 0)
			endWordRace();
		// If is less than a minute
		else {
			if (timer >= 10)
				document.getElementById("timer").innerHTML = 0 + ":" + timer;
			else
				document.getElementById("timer").innerHTML = 0 + ":0" + timer;
		}

		// Calculate words per minute
		var seconds = 120 - timer;
		document.getElementById("wpmBox").innerHTML = ((numWords * 60*8)/ seconds).toFixed() + " wpm";
	}, 1000);

	document.getElementById("input").addEventListener('keyup', function() {
		var input = document.getElementById("input").value;
		input = input.trim();
		var test = document.getElementById("wordTray").innerHTML;
		var currentWord = test.split("&nbsp;")[0];

		if (input == currentWord) {
			// Update word tray
			var html = "";
			for (var i = (wordIndex - 1); i < (wordIndex); i++)
				html += words[i] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
			document.getElementById("wordTray").innerHTML = html;

			// Clear input box
			document.getElementById("input").value = "";
			document.getElementById("input").parentNode.parentNode.style.color = "";

			// Keep focus on input box
			$("#input").focus();

			// Increase word index and num words typed
			wordIndex++;
			numWords++;

			// Calculate how much the player will move
			var left = document.getElementById("player").style.left;
			var width = document.getElementById("wordRace").offsetWidth;

			if (parseInt(left.replace("px", ""), 10) >= width)
				endWordRace();

			var newLeft;
			if (!left.includes("px"))
				newLeft = "30px";
			else {
				left = left.replace("px", "");
				newLeft = (parseInt(left, 10) + 30) + "px";
			}

			// Move the player div
			$("#player").animate({
				"left": newLeft
			}, 200, "linear");

			// Calculate words per minute
			var seconds = 120 - timer;
			document.getElementById("wpmBox").innerHTML = ((numWords * 60)/ seconds).toFixed() + " wpm";
		}
		// If the input is correct
		else if (input == currentWord.substring(0, input.length))
			document.getElementById("input").parentNode.parentNode.style.color = "green";
		// If the input is incorrect
		else if (input != currentWord.substring(0, input.length))
			document.getElementById("input").parentNode.parentNode.style.color = "red";
	});

	function populateWordTray() {
		var html = "";

		for (var i = 0; i < 1; i++)
			html += words[i] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br>";

		document.getElementById("wordTray").innerHTML = html;
	}
}

function endWordRace() {
	// Stop timer
	clearInterval(timerID);

	// Show timer at 0:00
	document.getElementById("timer").innerHTML = "0:00";

	// Disable input
	document.getElementById("input").disabled = true;

	// Hide game and show end screen
	document.getElementById("wordRace").style.display = "none";
	document.getElementById("end").style.display = "";

	// Show stats
	document.getElementById("wpmStat").innerHTML = ((numWords * 60*8)/ 120).toFixed() + " wpm";
	 var cnt = parseInt(((numWords * 60)/ 120).toFixed() + " wpm");
	    alert("YOUR SCORE:"+cnt);
	    document.location.href ="../jsp/alpha_lessons.jsp?start="+cnt; 
	   
	document.getElementById("wordCountStat").innerHTML = numWords*8;
}

function shuffle(array) {
	var m = array.length, t, i;

	// While there remain elements to shuffle�
	while (m) {

		// Pick a remaining element�
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}

	return array;
}
