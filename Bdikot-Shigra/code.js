var bPressedAbout = false;

$(function(){
    $(".about").on("touchend", about);
    if(localStorage.getItem("visited")) {
        start();
    } else {
        $(".start").on("touchend", start);
        localStorage.setItem("visited", true)
    }
});

function about() {
    if(!bPressedAbout) {
        bPressedAbout = true;
        $(".about-div").show();
    } else {
        bPressedAbout = false;
        $(".about-div").hide();
    }
}

function start(event) {
    $(".opening").hide();
    $(".exams").show();
    $("body").css({direction: "ltr"});
    for(var i=1; i<=5; i++) {
        $(".exam" + i).on("touchend", goToExam);
    }
}

function goToExam(event) {
    window.location.href = this.id + "-test.html";
}