window.onload = function() {

    var pCorrCount = 0
    var pIncorrCount = 0
    var corrAnsDisp
    var currQuest 
    var q = 0
    var userChoice
    var intervalId

    var questArr = [
        {
        question: "What do you get when you cross an owl with a bungie cord?",
        corrAns: "My Ass",
        incorrAnsOne: ["A Bowel", "A Towel", "Milk-duds"]
    },
    {
        question: "What country is the Evil Council from?",
        corrAns: "France",
        incorrAnsOne: ["Canada", "Germany", "Mars"]
        
    },
    {
        question: "Birdie, Birdie, ____________ . ",
        corrAns: "Birdie",
        incorrAnsOne: ["Tiger", "Tonguey", "Towel"]
        
    },
    {
        question: "My nipples look like __________ . ",
        corrAns: "Milk-duds",
        incorrAnsOne: ["swinging chain", "cow", "waterfall"]
    },
    {
        question: "From now on, you will all call me be the game: ____________ ? ",
        corrAns: "Aw jeeze did I say game",
        incorrAnsOne: ["Evil Betty", "Wind Blows", "Chosen One"]
        
    },
    {
        question: "You should be able to: ________ . ",
        corrAns: "beat em now",
        incorrAnsOne: ["rub it in my hair", "kill the dog", "Yeee-Yi-Yow-YOOOOIIIIIIII!"]
        
    },
    {
        question: "A-wee-a-wee-ah- ____________ ",
        corrAns: "woo",
        incorrAnsOne: ["birdie", "YOOOOOOIIII", "wrrrcchhh. . .",]
    },
    {
        question: "Taco Bell, Taco Bell. Product Placement for: _________ . ",
        corrAns: "Taco Bell",
        incorrAnsOne: ["Nacho", "Burrito", "Ranchorito"]
    },
    {
        question: "Yes, play me like a ________ . ",
        corrAns: "drum",
        incorrAnsOne: ["swinging chain", "Chosen One", "Stomach Blood"]
        
    },
    {
        question: "I'm a magician, your clothes are: ______ !",
        corrAns: "red",
        incorrAnsOne: ["black again", "blue", "curly-cue"]
    }
];

function randomizer() {
    var actualIndex = questArr.length
    var tempVal
    var randomIndex

    while (0 !== actualIndex) {
        randomIndex = Math.floor(Math.random() * actualIndex)
        actualIndex -= 1

    tempVal = questArr[actualIndex];
    questArr[actualIndex] = questArr[randomIndex];
    questArr[randomIndex] = tempVal;

    }
}

var timer = {
    seconds: 10,
    decrement: function() {

        timer.seconds--;

        $("#timerDisp").html(timer.seconds);

        if (timer.seconds < 4) {
            $("#timerDisp").css("color", "red");
        }

        
        if (timer.seconds === 0) {
            pIncorrCount++;
            $("#" + corrAnsDisp).addClass("correct");
            $(".updateDisp").html("<p>TIME is GONE!</p><p>The correct answer was: " + corrAnsDisp + ".</p>");
            
            timer.stop();
            
            $("#ansList").removeClass("active");

            setTimeout(dispQuest, 3000);
        }
    },

    // function to start timer
    run: function() {

        clearInterval(intervalId);

        intervalId = setInterval(timer.decrement, 1000);

        $("#timerText").html("Time remaining: <span id='timerDisp'>10</span> <span id='seconds'>seconds</span>");

        $("#timerDisp").text(10);
        timer.seconds = 10;
    },
 
    stop: function() {

        clearInterval(intervalId);
    }
};

// function to display questions and answers

function dispQuest() {

    if (q < questArr.length) {

        $("#currQuest, #ansList, #corr-incorr, .updateDisp").empty();
        timer.run();

        currQuest = questArr[q].question;

        $("#currQuest").append("<h2>" + currQuest + "</h2>");

        var answers = [];
        answers = [questArr[q].corrAns, questArr[q].incorrAnsOne[0], questArr[q].incorrAnsOne[1], questArr[q].incorrAnsOne[2]];

    var actualIndex = answers.length;
    var tempVal;
    var randomIndex;

    while (0 !== actualIndex) {
        randomIndex = Math.floor(Math.random() * actualIndex);
        actualIndex -= 1;

    tempVal = answers[actualIndex];
    answers[actualIndex] = answers[randomIndex];
    answers[randomIndex] = tempVal; 

    }

        corrAnsText = questArr[q].corrAns;

        corrAnsDisp = corrAnsText.replace(/\s/g, "");

        $("#ansList").addClass("active");

        for (var i = 0; i < 4; i++) {
            $("#ansList").append("<li class='ansBullet' id='" + answers[i].replace(/\s/g, "") + "'>" + answers[i] + "</li>");
        }

        q++;

    } else {
        endGame();
    }
}

// Get Start Fucntion!
function startGame() {
    randomizer();
    dispQuest();
    // $("header").hide()
}

// GAME OVER fucntion
function endGame() {
    timer.stop();
    $("#currQuest, #ansList, #timerDisp, .ansDisp, #corr-incorr").empty();
    // $("#pEndGame").html("<button id='endScore' class='gameButt'><See your results</button>");
                $(".maintain").hide();
                $("#pEndGame").show();
                // $("header").show()
                $(".endgame").show();
                results();
}

 // score function, for the end my friend.
 function results() {
    $(".score").append("<h2 class='mb-1'>This is the end, my friend:</h2>").append("<p>Correct answers: " + pCorrCount + "</p>").append("<p>Incorrect answers: " + pIncorrCount + "</p>");

}

// CLICKERS!
            $(document).on("click", ".active .ansBullet", function() {

                timer.stop();
                userChoice = $(this).text();

                if (userChoice === corrAnsText) {

                    pCorrCount++;
                    $(this).addClass("correct");
                    $("#corr-incorr").html("<p class='correct-text'>Even a broken watch manages to be right twice a day.</p><p class='correct-text'>Correct!</p>");

                    $("#ansList").removeClass("active");

                    setTimeout(dispQuest, 3000);

                } else {

                    pIncorrCount++;
                    $(this).addClass("wrong");
                    $("#" + corrAnsDisp).addClass("correct");
                    $(".updateDisp").slideDown("slow");
                    $("#corr-incorr").html("<p>You should give up, spare yourself the embaressment.</p><p>It was <span class='correct-text'>" + corrAnsText + "</span></p>");

                    $("#ansList").removeClass("active");

                    setTimeout(dispQuest, 3000);
                }
            });

            // Player Start!
            $("#gameStart").on("click", function() {
                $(".startScreen").hide();
                $(".bg").show();
                $(".maintain").show();
                startGame();
            });

            // End Game early
            $(document).on("click", "#gameEndButt", function() {
                $("#currQuest").empty();
                $(".maintain").hide();
                $("#pEndGame").show();
                $(".endgame").show();
                results();
            });

            // RESET!
            $(document).on("click", "#resetButt", function() {
                $(".score, #result-holder").empty();
                $("#pEndGame").hide();
                $(".bg").hide();
                $(".startScreen").show();
                q = 0;
                pCorrCount = 0;
                pIncorrCount = 0;
            });

}