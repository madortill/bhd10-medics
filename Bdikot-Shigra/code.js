var bPressedAbout = false;
var elem = document.querySelector("html");

$(function(){
    $(".about").on("touchend", about);
    $(".navigate").on("touchend", Home);
    if(localStorage.getItem("visited")) {
        start();
    } else {
        $(".start").on("touchend", start);
        localStorage.setItem("visited", true)
    }
});

function Home() {
    window.location.href = "https://mador-till-prod.github.io/BHD-10-Medics/big-site/";
}

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
    openFullscreen();
    $(".opening").hide();
    $(".exams").show();
    $("body").css({direction: "ltr"});
    for(var i=1; i<=5; i++) {
        $(".exam" + i).on("touchend", goToExam);
    }
}

function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullscreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }

  }

function goToExam(event) {
    window.location.href = this.id + "-test.html";
}