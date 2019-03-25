
var count = 60;

var correct = 0;
var incorrect = 0;
var unanswered = 0

$("start-button").on("click", function () {
    startCountdown();
    return;

});

function countdown() {
    count--;

    $('timerNumber').text(count + "Seconds");

}

function startCountdown() {
    setInterval(countdown, 1000);
}
//i don't think this is the right way to get my timer to operate.
//not sure how to set the page to check answers once the timer is up. will need to figure that out, 
//also how to have it check for the correct answers/values, should I use an array of the answers?