// Word list
var words = ['a','b','c','d','e','f','z','h','i','k','l','m','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F','G','H','I','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
words = shuffle(words);

// Word statistics
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
        document.getElementById("wpmBox").innerHTML = ((numWords * 60)/ seconds).toFixed() + " wpm";
    }, 1000);

    document.getElementById("input").addEventListener('keyup', function() {
        var input = document.getElementById("input").value;
        input = input.trim();
        var test = document.getElementById("wordTray").innerHTML;
        var currentWord = test.split("&nbsp;")[0];

        if (input == currentWord) {
            // Update word tray
            var html = "";
            for (var i = (wordIndex - 1); i < (wordIndex + 4); i++)
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
                newLeft = (parseInt(left, 10) + 10) + "px";
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

        for (var i = 0; i < 5; i++)
            html += words[i]+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

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
    document.getElementById("wpmStat").innerHTML = ((numWords * 60)/ 120).toFixed() + " wpm";
    var cnt = parseInt(((numWords * 60)/ 120).toFixed() + " wpm");
    alert("YOUR SCORE:"+cnt);
    document.location.href ="text_alpha.jsp?start="+cnt; 
   
    document.getElementById("wordCountStat").innerHTML = numWords;
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
