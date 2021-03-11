

$(document).ready(function () {
    var today = new Date();
    var date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
    var hour = moment().format('LT');
    var AMPM = hour.slice(-2);
    if(hour.indexOf(":") === 1){
        hour = hour.slice(0,1)
    } else {
        hour = hour.slice(0,2)
    }
    console.log(AMPM, hour)
    hour = parseInt(hour);
    if (hour < 6) {
        hour = hour + 12;
    }
    $(".row").each(function(){
        var blockTime = parseInt($(this).attr("id"));
        if (blockTime < 6) {
            blockTime = blockTime + 12;
        }
        if (blockTime > hour){
            $(this).addClass("pasthour")
        } else if (blockTime < hour) {
            $(this).removeClass("pasthour");
            $(this).addClass("futurehour");
        }
    });
    var dateTime = date;
    console.log(dateTime)
    document.getElementById("date").innerHTML = dateTime;

    var currentHour = today.getHours();
    var plannerHour = parseInt(".hour")
    console.log(plannerHour)
    console.log(currentHour)

    function storePlanner() {
        var hournine = $(".nine").val();
        var hourten = $(".ten").val();
        var houreleven = $(".eleven").val();
        var hourtwelve = $(".twelve").val();
        var hourone = $(".one").val();
        var hourtwo = $(".two").val();
        var hourthree = $(".three").val();
        var hourfour = $(".four").val();
        var hourfive = $(".five").val();
        console.log(hournine)
        localStorage.setItem("nine", JSON.stringify(hournine));
        localStorage.setItem("ten", JSON.stringify(hourten));
        localStorage.setItem("eleven", JSON.stringify(houreleven));
        localStorage.setItem("twelve", JSON.stringify(hourtwelve));
        localStorage.setItem("one", JSON.stringify(hourone));
        localStorage.setItem("two", JSON.stringify(hourtwo));
        localStorage.setItem("three", JSON.stringify(hourthree));
        localStorage.setItem("four", JSON.stringify(hourfour));
        localStorage.setItem("five", JSON.stringify(hourfive));
    }

    function listPlanner() {
        var hournine = $(".nine").val();
        var hourten = $(".ten").val();
        var houreleven = $(".eleven").val();
        var hourtwelve = $(".twelve").val();
        var hourone = $(".one").val();
        var hourtwo = $(".two").val();
        var hourthree = $(".three").val();
        var hourfour = $(".four").val();
        var hourfive = $(".five").val();
    }

    $("#save").click(function (event) {
        console.log(event);
        storePlanner();
        console.log(storePlanner);
    });


    $("#9 .description").val((localStorage.getItem("nine")))
    $("#10 .description").val((localStorage.getItem("ten")))
    $("#11 .description").val((localStorage.getItem("eleven")))
    $("#12 .description").val((localStorage.getItem("twelve")))
    $("#1 .description").val((localStorage.getItem("one")))
    $("#2 .description").val((localStorage.getItem("two")))
    $("#3 .description").val((localStorage.getItem("three")))
    $("#4 .description").val((localStorage.getItem("four")))
    $("#5 .description").val((localStorage.getItem("five")))
    console.log(JSON.parse(localStorage.getItem("nine")))
    console.log("word")
});