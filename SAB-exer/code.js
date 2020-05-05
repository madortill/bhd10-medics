var nCurrStage = 1;
var nStepCounter = 1;
var elCurrPicked;
var bWasPicked = false;
var nMistakes = 0;
var nResaults = 0;
var bWasWrong;
var nNumPicks = 0;
var elem = document.querySelector("html");

$(function(){
    $(".ok").on("touchend", removeTurn);
    $(".navigate").on("touchend", Home);
    for(var i=1; i<=3; i++) {
        $("#exemination" + i).on("touchend", pressStage);
    }
    $(".about").on("touchend", about);
});

function removeTurn(event) {
    $(".turn-div").hide();
    openFullscreen();
}

function about() {
    if(!bPressedAbout) {
        bPressedAbout = true;
        $(".about-div").show();
        $(".head").html("קינמטיקה - אודות");
        $(".about").attr("src", "assets/images/about/play.svg");
    } else {
        bPressedAbout = false;
        $(".about-div").hide();
        $(".head").html("קינמטיקה");
        $(".about").attr("src", "assets/images/about.svg");
    }
}  

function Home() {
    window.location.href = "https://mador-till-prod.github.io/BHD-10-Medics/big-site/";
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
    $("body").scrollTop();
  }

function checkStep(event) {
    if(Number(this.id.charAt(4)) === nStepCounter) {
        nNumPicks = 0;
        bWasWrong = false;
        $(this).attr("src", "assets/images/" + this.id + "-right.svg");
        if(nStepCounter < 4) {
            if(nStepCounter === 1) {
                $(".steps").show();
                $(".instructions").css({marginTop: '-15%'});
                $(".instructions").css({paddingTop: '5%'});
                $(".instructions").css({paddingBottom: '10%'});
                $(".instructions").css({width: '40%', marginTop: "+=10%", height: "26vh"});
                $(".instructions").css({backgroundImage: 'url("assets/images/note7.svg")'});
                $(".instructions-text").html("");
            }
            $(".step" + nStepCounter).css({opacity: "1"});
            $(this).off("touchend", checkStep);
            $(this).delay(1200).fadeOut(1);
            nStepCounter++;
        } else {
            $(this).hide();
            for(var i=1; i<=3; i++) {
                $(".step" + i).css({display: "none"});
            }
            $(".instructions").hide();
            $(".nextstep").show();
            $(".check1").show();
            $(".check1").on("touchend", function(){
                if($(".input").val() !== "") {
                    $(".correct").html("הדיווח הראשוני יכלול את הפרטים הבאים:");
                    $(".correct").after("<p>מיקום, מתאר, מספר ומצב הפצועים, מי מדווח.</p>");
                    $(".what").hide();
                    $(".check1").hide();
                    $(".input").hide();
                    $(".answer").hide();
                    $(".continue").show();
                    $(".continue").on("touchend", nextStage);
                } else {
                    $(".nextstep").append('<p class="answer">יש להזין תשובה.</p>');
                }
            });
        }
    } else {
        elCurrPicked = this.id;
        $(this).attr("src", "assets/images/" + this.id + "-wrong.svg");
        if(!bWasWrong) {
            nMistakes++;
        }
        nNumPicks++;
        if(nNumPicks > 0) {
            bWasWrong = true;
        }
        setTimeout(changeBack, 1200);
    }
}

function changeBack() {
    $("#"+elCurrPicked).attr("src", "assets/images/" + elCurrPicked + ".svg");
}

function nextStage(event) {
    nCurrStage++;
    $(".steps").hide();
    $(".next").hide();
    $(".nextstep").hide();
    $(".instructions").show();
    $(".instructions").css({height: '10vh', paddingTop: '2%', paddingBottom: '3%'});
    $(".instructions").css({marginTop: '-5%'});
    $(".instructions").css({width: '24%'});
    $(".instructions").css({backgroundImage: 'url("assets/images/note1.svg")'});
    for(var i = 1; i<=3; i++) {
        $("#exemination" + i).show();
        $("#exemination" + i).css({backgroundImage: 'url("assets/images/exemination' + i + '.svg")'});
    }
    for(var i=1; i<=nCurrStage-1; i++) {
        $("#exemination" + i).css({opacity: "0.7"});
    }
    $(".instructions-text").html("מה השלב הבא בבדיקה?");
    $(".instructions-text").css({marginRight: "2%"});
    $(".options").hide();
    $(".divs").hide();
}

function pressStage(event) {
    if(Number(this.id.charAt(11)) === nCurrStage) {
        nNumPicks = 0;
        bWasWrong = false;
        for(var i=1; i<=3; i++) {
            $("#exemination" + i).hide();
            $("#exemination" + i).attr("src", "assets/images/exemination" + i + ".svg");
        }
        $("#exemination" + nCurrStage).css({opacity: "0"});
        $("#exemination" + nCurrStage).off("touchend", pressStage);
        if (nCurrStage === 1) {
            $(".circle").show();
            $(".instructions").css({marginTop: '-5%', paddinTop: "-=3%"});
            $(".instructions-text").html("נכון מאוד! קודם כל יש לדאוג לבטיחות, על מנת למנוע היווצרות פצועים נוספים.");
            $(".instructions-text").css({marginRight: "1%"});
            $(".next").show();
            $(".next").on("touchend", function() {
                $(".instructions-text").html("מה סדר הפעולות בשלב הS? לחצו על הפריטים לפי הסדר.");
                $(".instructions-text").css({marginRight: "2%"});
                $(".instructions").css({backgroundImage: 'url("assets/images/note2.svg")'});
                $(".instructions").css({height: '30%'});
                for(var i=1; i<=4; i++) {
                    $("#clue" + i).show();
                    $("#clue" + i).on("touchend", checkStep);
                }
                $(".next").hide();
            });
        } else if(nCurrStage === 2) {
            nStepCounter = 1;
            $(".instructions").css({height: "unset"});
            $(".circle").attr("src", "assets/images/a.svg");
            $(".instructions-text").html("נכון מאוד! עכשיו יש לפתוח את נתיב האויר של המטופל. בחר את הצעדים בשלב הA לפי הסדר:");
            $(".instructions-text").css({marginRight: "1%"});
            $(".stage2").show();
            $(".options2").hide();
            for(var i=1; i<=7; i++) {
                $("#airway" + i).on("touchend", checkAirway);
            }
        } else {
            $(".circle").attr("src", "assets/images/b.svg");
            $(".options2").css({display: "flex"});
            $(".div2").css({display: "flex"});
            $(".instructions-text").html("איך נתחיל את שלב הB?");
            $(".instructions-text").css({marginRight:"6%", width: "70%", marginTop: "-=5%"});
            $(".instructions").css({backgroundImage: 'url("assets/images/note7.svg")', width: '60%', height: "75%", paddingLeft: "5%", top: "25%", paddingTop: "-=5%"});
            $(".radio").css({margin: "0"});
            nPicked = 0;
            for(var i=3; i<=6; i++) {
                $("#radio" + i).on("touchend", pickAnswer);
            }
            $(".check2").show();
            $(".check2").css({right: "40%", bottom: "20%"});
            $(".check2").on("touchend", checkRadio2);
        }
    } else {
        $(".instructions-text").html("זה לא השלב הנכון. נסו שוב!");
        $(".instructions-text").css({marginRight: "0"});
        $(this).css({backgroundImage: 'url("assets/images/' + this.id + '-x.svg")'});
        if(!bWasWrong) {
            nMistakes++;
        }
        nNumPicks++;
        if(nNumPicks > 0) {
            bWasWrong = true;
        }
    }
}

function checkAirway(event) {
    if(Number(this.id.charAt(6)) === nStepCounter) {
        nNumPicks = 0;
        bWasWrong = false;
        $(this).css({backgroundImage: 'url("assets/images/' + this.id +'.svg")'});
        $(this).off("touchend", checkAirway);
        nStepCounter++;
        if(nStepCounter > 6) {
            $(".instructions").css({backgroundImage: 'url("assets/images/note6.svg")'});
            $(".instructions").css({width: "60%"});
            $(".instructions").css({marginTop: "-5%"});
            for(var i=1; i<=7; i++) {
                $("#airway" + i).hide();
            }
            $(".conscious-cont").css({display: "flex"});
            $(".divs").css({display: "flex"});
            $(".instructions-text").html("כל הכבוד! מהן רמות ההכרה שיכולות להיות לפצוע?");
            $(".instructions-text").css({marginLeft: "41%", width: "40%", marginTop: "10%"});
            $(".conscious").on("touchmove", drag);
            window.dragged = $(".dragover");
            $(".conscious").on("touchend", dropItem);
            $(".conscious").on("touchcancel", dropItem);
            $(".div").on("drop", dropItem);
            $(".check2").show();
            $(".check2").on("touchend", checkDrag);
        }
    } else {
        $(this).css({backgroundImage: 'url("assets/images/exemination2-x.svg")'});
        elCurrPicked = this.id;
        setTimeout(shiftBack, 800);
        if(!bWasWrong) {
            nMistakes++;
        }
        nNumPicks++;
        if(nNumPicks > 0) {
            bWasWrong = true;
        }
    }
}

if (!('ClientRect' in window)) window.ClientRect = DOMRect;
/**
 * 
 * @param {TouchEvent} e 
 */
function drag(e) {
    let el = e.target;
    if (!window.dragged.children().length)
        window.dragged.append(el.cloneNode(true));

    // el.style.position = "absolute";
    for (let touch of e.touches) {
        var point = {x: touch.clientX,y: touch.clientY};
        window.dragged.css({top: `${point.y - el.clientHeight / 2}px`, left: `${point.x - el.clientWidth / 2}px`});
    }
}

ClientRect.prototype.contains = function({x, y}) {
    return this.top <= y && this.bottom >= y && this.left <= x && this.right >= x;
}

function shiftBack() {
    $("#"+elCurrPicked).css({backgroundImage: 'url("assets/images/note4.svg")'});
}

function startDrag(event) {
    this.preventDefault();
}

/**
 * 
 * @param {TouchEvent} event 
 */
function dropItem(event) {
    for (let touch of event.changedTouches) {
        var point = {x: touch.clientX,y: touch.clientY};
        for (let target of document.querySelectorAll(".drag-target")) {
            if (target.getBoundingClientRect().contains(point)) {
                target.innerHTML = window.dragged.children().text();
                break;
            }
        }
    }
    window.dragged.children().remove();
}

function checkDrag(event) {
    $(".check2").off("touchend", checkDrag);
    if($("#div1").text() === "הכרה מלאה" && $("#div2").text() === "מגיב לקול" && $("#div3").text() === "מגיב לכאב" && $("#div4").text() === "מחוסר הכרה") {
        nNumPicks = 0;
        bWasWrong = false;
        $(".wrong").hide();
        for(var i = 1; i<=4; i++) {
            $("#div" + i).css({color: "rgb(28, 163, 109)"});
        }
        $(".next").show();
        $(".next").css({marginRight: "-40%", marginTop: "30%"})
        $(".next").on("touchend", function(){
            $(".instructions").css({height: '10%',marginTop: '-7%',paddingTop: '5%',paddingBottom: '30%',width: '50%',backgroundImage: 'url("assets/images/note7.svg")'});
            $(".instructions").append('<div class="options"><div class="radios"><img class="radio" id="radio1" src="assets/images/option.svg" /><img class="radio" id="radio2" src="assets/images/option.svg" /></div><div class="answer"><p>Jaw Thrust - דחיקת לסת</p><p>Head Tilt - הטיית ראש</p></div></div>');
            $(".instructions-text").html("פצוע נפגע כתוצאה מפיצוץ, באיזו שיטה נשתמש על מנת לפתוח נתיב אוויר?");
            $(".instructions-text").css({width: "70%", marginRight: "4.5%"});
            $(".conscious").hide();
            $(".div").hide();
            $(".check2").css({position: "absolute", right: "25%", bottom: "15%"});
            for(var i=1; i<=4; i++) {
                $("#clue" + i).hide();
            }
            for(var i = 1; i<=2; i++) {
                $("#radio" + i).on("touchend", pickAnswer);
            }
            $(".check2").on("touchend", checkRadio);
            $(".steps").hide();
        });
    } else {
        $(".check2").on("touchend", checkDrag);
        $(".wrong").show();
        if(!bWasWrong) {
            nMistakes++;
        }
        nNumPicks++;
        if(nNumPicks > 0) {
            bWasWrong = true;
        }
    }
}

function pickAnswer(event) {
    $(this).attr("src", "assets/images/option-marked.svg");
    $(this).off("touchend", pickAnswer);
    if(bWasPicked) {
        $("#radio" + nPicked).attr("src", "assets/images/option.svg");
        $("#radio" + nPicked).on("touchend", pickAnswer);
    } else {
        bWasPicked = true;
    }
    nPicked = Number(this.id.charAt(5));
}

function checkRadio(event) {
    if(nPicked === 1) {
        nNumPicks = 0;
        bWasWrong = false;
        bWasPicked = false;
        $(".instructions").css({marginTop: "-5%", height: "5%", paddingTop: "15%", paddingBottom: "30%",  width:" 50%",top: "21.7817%"});
        $(".instructions-text").html('נכון מאוד! נשתמש בדחיקת לסת כשיש חשש לפגיעה בעמש"צ או כשלא ידוע לנו סיפור המקרה.');
        $(".instructions-text").css({marginRight: "3%"});
        $(".next").show();
        $(".next").css({marginRight: "25%", marginTop: "40%"});
        $(".check2").hide();
        $(".check2").off("touchend", checkRadio);
        $(".options").hide();
        $(".wrong").hide();
        $(".next").off("touchend", )
        $(".next").on("touchend", nextStage);
        for(var i = 1; i<=6; i++) {
            $("#radio" + i).off("touchend", pickAnswer);
        }
    } else {
        $(".wrong").show();
        $(".wrong").css({right: "35%"});
        if(!bWasWrong) {
            nMistakes++;
        }
        nNumPicks++;
        if(nNumPicks > 0) {
            bWasWrong = true;
        }
    }
}

function checkRadio2(event) {
    if(nPicked === 5) {
        bWasWrong = false;
        nNumPicks = 0;
        $(".wrong").hide();
        $(".options2").css({display: 'none'});
        $(".check2").hide();
        $(".instructions-text").html("נכון מאוד! קודם כל יש לסרוק את בית החזה בהסתכלות ובמישוש. אין לאטום חורי ירי בשום אופן!");
        $(".instructions-text").css({marginRight: '4%', marginTop: "7%"});
        $(".next").show();
        $(".next").css({marginTop: "50%", marginRight: "30%"});
        $(".next").off("touchend", nextStage);
        $(".next").on("touchend", function(){
            $(".next").hide();
            $(".scan").hide();
            $(".instructions-text").html("מדדתם למטופל 12 נשימות ב-30 שניות. האם התוצאה מעידה על נשימה תקינה?");
            $(".instructions-text").css({marginRight: '3%', marginTop: "8%"});
            $(".instructions").css({backgroundImage: 'url("assets/images/note1.svg")', height: '60%', width: '34%',  marginTop: '-10%', marginRight: '0.5%', paddinTop: '6%', paddingRight: '3%', paddingLeft: '4%'});
            $(".options").hide();
            $(".yes-or-no").show();
            $("#yes").on("touchend", checkYesOrNo);
            $("#no").on("touchend", checkYesOrNo);
        });
    } else {
        $(".wrong").show();
        $(".wrong").css({right: '35%'});
        if(!bWasWrong) {
            nMistakes++;
        }
        nNumPicks++;
        if(nNumPicks > 0) {
            bWasWrong = true;
        }
    }
}

function checkYesOrNo(event) {
    if(this.id === "no") {
        bWasWrong = false;
        nNumPicks = 0;
        $(".instructions-text").html("נכון מאוד!");
    } else {
        $(".instructions-text").html("טעות!");
        if(!bWasWrong) {
            nMistakes++;
        }
        nNumPicks++;
        if(nNumPicks > 0) {
            bWasWrong = true;
        }
    }
    $(".instructions-text").css({marginTop: "3%", marginRight: "5%"})
    $(".instructions").append('<div class="absolute breath"<p>בדיקת הנשימה תתבצע למשך 30 שניות ונכפיל את התוצאה פי 2.</p><p>נשימה תקינה היא 8-20 נשימות בדקה.</p><p>2X12=24</p><p>כלומר לא בטווח התקין.</p></div>');
    $(".instructions").css({height: "90%", width:"45%",   marginTop: '5%'});
    $(".next").show();
    $(".next").css({position: "absolute", bottom: '5%', right: '40%'});
    $(".yes-or-no").hide();
    $("#yes").hide();
    $("#no").hide();
    $(".next").on("touchend", function() {
        nResaults = 22-nMistakes;
        $(".instructions").hide();
        $(".man").hide();
        $(".next").hide();
        $(".circle").hide();
        $(".closing").show();
        $(".resaults").append("עניתם נכון על " + nResaults + " שאלות מתוך 22");
        $("body").css({backgroundImage: 'url("assets/images/bg8.svg")'});
    });
}