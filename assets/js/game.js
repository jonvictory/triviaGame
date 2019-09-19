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
        question: "q1 holder",
        corrAns: "this is a correct ans for q1",
        incorrAnsOne: ["this is 1 incorr ans for q1", "this is 2 incorr ans for q1", "this is 3 incorr ans for q1"]
    },
    {
        question: "q2 holder",
        corrAns: "this is a correct ans for q2",
        incorrAnsOne: ["this is 1 incorr ans for q2", "this is 2 incorr ans for q2", "this is 3 incorr ans for q2"]
        
    },
    {
        question: "q3 holder",
        corrAns: "this is a correct ans for q3",
        incorrAnsOne: ["this is 1 incorr ans for q3", "this is 2 incorr ans for q3", "this is 3 incorr ans for q3"]
        
    },
    {
        question: "q4 holder",
        corrAns: "this is a correct ans for q4",
        incorrAnsOne: ["this is 1 incorr ans for q4", "this is 2 incorr ans for q4", "this is 3 incorr ans for q4"]
    },
    {
        question: "q5 holder",
        corrAns: "this is a correct ans for q5",
        incorrAnsOne: ["this is 1 incorr ans for q5", "this is 2 incorr ans for q5", "this is 3 incorr ans for q5"]
        
    },
    {
        question: "q6 holder",
        corrAns: "this is a correct ans for q6",
        incorrAnsOne: ["this is 1 incorr ans for q6", "this is 2 incorr ans for q6", "this is 3 incorr ans for q6"]
        
    },
    {
        question: "q7 holder",
        corrAns: "this is a correct ans for q7",
        incorrAnsOne: ["this is 1 incorr ans for q7", "this is 2 incorr ans for q7", "this is 3 incorr ans for q7",]
    },
    {
        question: "q8 holder",
        corrAns: "this is a correct ans for q8",
        incorrAnsOne: ["this is 1 incorr ans for q8", "this is 2 incorr ans for q8", "this is 3 incorr ans for q8"]
    },
    {
        question: "q9 holder",
        corrAns: "this is a correct ans for q9",
        incorrAnsOne: ["this is 1 incorr ans for q9", "this is 2 incorr ans for q9", "this is 3 incorr ans for q9"]
        
    },
    {
        question: "q10 holder",
        corrAns: "this is a correct ans for q10",
        incorrAnsOne: ["this is 1 incorr ans for q10", "this is 2 incorr ans for q10", "this is 3 incorr ans for q10"]
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
            $(".updateDisp").html("<p>TIME is GONE!</p><p>The correct answer was: <span class='correct-text'>" + corrAnsDisp + "</span>.</p>");
            
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
}

// GAME OVER fucntion
function endGame() {
    timer.stop();
    $("#currQuest, #ansList, #timerDisp, .ansDisp, #corr-incorr").empty();
    // $("#pEndGame").html("<button id='endScore' class='gameButt'><See your results</button>");
                $(".maintain").hide();
                $("#pEndGame").show();
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
                    $("#corr-incorr").html("<p class='correct-text'>YESH!</p><p class='correct-text'>Correct!</p>");

                    $("#ansList").removeClass("active");

                    setTimeout(dispQuest, 3000);

                } else {

                    pIncorrCount++;
                    $(this).addClass("wrong");
                    $("#" + corrAnsDisp).addClass("correct");
                    $(".updateDisp").slideDown("slow");
                    $("#corr-incorr").html("<p>Wrong!</p><p>It was <span class='correct-text'>" + corrAnsText + "</span></p>");

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