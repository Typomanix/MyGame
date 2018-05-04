
var words = ["75 Percent of women ask questions in which they already know the answer to.",
	"This is why it's best to simply tell her the truth.",
	"It is also one of the more crucial elements in computer sciences.",
	"Many of the functions and operators in all programming languages requires some knowledge in mathematics.",
	"For example, these operator include arithmetic, comparison, logical, assignment and conditional operators.",
	"All of the aforesaid tasks need mathematics for them to be used and properly applied, specially the arithmetic and conditional operators.",
	"It was designed and written by a man named Dennis Ritchie.",
	"Anything that computes is a computer.",
	"I don't get lucky, I make my own luck",
	"Ketchup was sold in the 1830s as medicine",
	"'Almost' is the longest word in English with all the letters in alphabetical order",
	"You'll eat more than 35,000 cookies in your lifetime",
	"All swans in England belong to the queen",
	"No piece of square paper can be folded more than 7 times in half",
	"The 'hashtag' key on your keyboard (#) is called an octotroph",
	"A duck's quack doesn't echo, and nobody can figure out why",
	"Minnie Mouse full name is Minerva Mouse",
	"Grapes explode when you put them in the microwave",
	"A giraffe can clean its ears with its 21-inch tongue",
	"The fathers of the Internet is Vint Cerf"];

words = shuffle(words);

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
        document.getElementById("wpmBox").innerHTML = ((numWords * 13*60)/ seconds).toFixed() + " wpm";
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
                html += words[i] + "&nbsp;";
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
            document.getElementById("wpmBox").innerHTML = ((numWords *13* 60)/ seconds).toFixed() + " wpm";
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
    document.getElementById("wpmStat").innerHTML = ((numWords * 13*60)/ 120).toFixed() + " wpm";
    var cnt = parseInt(((numWords * 60)/ 120).toFixed() + " wpm");
    alert("YOUR SCORE:"+cnt);
    document.location.href ="facts.jsp?start="+cnt; 
    document.getElementById("wordCountStat").innerHTML = (numWords*13);
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
