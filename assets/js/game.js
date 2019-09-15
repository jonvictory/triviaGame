window.onload() = function() {

    var questArr = [{
        question: "q1 holder",
        corrAns: "this is a correct ans for q1",
        incorrAnsOne: "this is 1 incorr ans for q1",
        incorrAnsTwo: "this is 2 incorr ans for q1",
        incorrAnsThree: "this is 3 incorr ans for q1",
        status: null,
    },
    {
        question: "q2 holder",
        corrAns: "this is a correct ans for q2",
        incorrAnsOne: "this is 1 incorr ans for q2",
        incorrAnsTwo: "this is 2 incorr ans for q2",
        incorrAnsThree: "this is 3 incorr ans for q2",
        status: null,
        
    },
    {
        question: "q3 holder",
        corrAns: "this is a correct ans for q3",
        incorrAnsOne: "this is 1 incorr ans for q3",
        incorrAnsTwo: "this is 2 incorr ans for q3",
        incorrAnsThree: "this is 3 incorr ans for q3",
        status: null,
        
    },
    {
        question: "q4 holder",
        corrAns: "this is a correct ans for q4",
        incorrAnsOne: "this is 1 incorr ans for q4",
        incorrAnsTwo: "this is 2 incorr ans for q4",
        incorrAnsThree: "this is 3 incorr ans for q4",
        status: null,
        
    },
    {
        question: "q5 holder",
        corrAns: "this is a correct ans for q5",
        incorrAnsOne: "this is 1 incorr ans for q5",
        incorrAnsTwo: "this is 2 incorr ans for q5",
        incorrAnsThree: "this is 3 incorr ans for q5",
        status: null,
        
    },
    {
        question: "q6 holder",
        corrAns: "this is a correct ans for q6",
        incorrAnsOne: "this is 1 incorr ans for q6",
        incorrAnsTwo: "this is 2 incorr ans for q6",
        incorrAnsThree: "this is 3 incorr ans for q6",
        status: null,
        
    },
    {
        question: "q7 holder",
        corrAns: "this is a correct ans for q7",
        incorrAnsOne: "this is 1 incorr ans for q7",
        incorrAnsTwo: "this is 2 incorr ans for q7",
        incorrAnsThree: "this is 3 incorr ans for q7",
        status: null,
    },
    {
        question: "q8 holder",
        corrAns: "this is a correct ans for q8",
        incorrAnsOne: "this is 1 incorr ans for q8",
        incorrAnsTwo: "this is 2 incorr ans for q8",
        incorrAnsThree: "this is 3 incorr ans for q8",
        status: null,
    },
    {
        question: "q9 holder",
        corrAns: "this is a correct ans for q9",
        incorrAnsOne: "this is 1 incorr ans for q9",
        incorrAnsTwo: "this is 2 incorr ans for q9",
        incorrAnsThree: "this is 3 incorr ans for q9",
        status: null,
        
    },
    {
        question: "q10 holder",
        corrAns: "this is a correct ans for q10",
        incorrAnsOne: "this is 1 incorr ans for q10",
        incorrAnsTwo: "this is 2 incorr ans for q10",
        incorrAnsThree: "this is 3 incorr ans for q10",
        status: null,
        
    }
];

function randomizer() {
    var actualIndex = questArr.length
    var tempVal
    var randomIndex

    while (0 !== actualIndex) {
        Math.floor(Math.random() * actualIndex)
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

        
}