// Word list
var words = ["Though several days had gone by since Haiko's homecoming",
		"the event continued to generate much debate. some interpreted it as good karma"
	,"others saw it as a clear warning","and the most devout perceived it as nothing short of a miracle.",
	"On a humid summer day in August 1978, the Paris-Orly International Airport is teeming with people rushing to catch their flights.",
	"In the midst of this commotion, a sixteen-year-old boy stands alone, behind a pillar, watching the crowds and thinking about the terrible mission he has to fulfill.",
	"One sunny Sunday in Chicago, several former classmates, who were good friends in school, gathered for lunch, having attended their high school reunion the night before.",
	"They wanted to hear more about what was happening in each other's lives.",
	"Responsible for some of the world's most astounding heists with her brilliant, charming partner Jeff Stevens, Tracy Whitney has relished the intensity of a life on the wild side, conning the corrupt out of their ill-gotten fortunes.",
	"But the one thing that would make her life complete now is marriage and a child with Jeff.",
	"He turned around and looked back down the empty church, a sinking feeling in the pit of his stomach.",
	"People are mad after sense gratification, and they do not know that this is present body, which is full of miseries, is a result of one's fruitive activities in the past.",
	"Although this body is temporary, it is always giving one trouble in many ways.",
	"The supreme personality of godhead said: one who is unattached to the fruits of his works and who works as he is obligated is in the renounced order of life, and he is the true mystic, not he who lights no fire and performs not duty."];

// Word stats
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
        document.getElementById("wpmBox").innerHTML = ((numWords * 60*26)/ seconds).toFixed() + " wpm";
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
                html += words[i];
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
            document.getElementById("wpmBox").innerHTML = ((numWords*26 * 60)/ seconds).toFixed() + " wpm";
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
            html += words[i];

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
    document.getElementById("wpmStat").innerHTML = (((numWords * 60*26)/ 120).toFixed()) + " wpm";
    var cnt = parseInt(((numWords * 60)/ 120).toFixed() + " wpm");
    alert("YOUR SCORE:"+cnt);
    document.location.href ="fav_nov.jsp?start="+cnt; 
   
    document.getElementById("wordCountStat").innerHTML = (numWords*26);
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
