var nCurrStage = 1;
var nStepCounter = 1;
var elCurrPicked;
var bWasPicked = false;
var nMistakes = 0;
var nResaults = 0;
var bWasWrong;
var nNumPicks = 0;

$(function(){
    for(var i=1; i<=3; i++) {
        $("#exemination" + i).on("touchend", pressStage);
    }
    $(".navigate").on("touchend", onClickBurger);
    $(".about").on("touchend", about);
});

/**
 * on click burger sign :
 * opens nav 
 * adds listeners to icons
 * @param {Event} event 
 */
function onClickBurger(event) {
    burgerNav.classList.add("open");
    burgerNav.querySelector(".x-icon").addEventListener("touchend", closeBurgerNav);
    let icons = burgerNav.querySelectorAll(".icon");
    for (let i = 0; i < icons.length; i++) {
        const element = icons[i];
        element.addEventListener("touchend", onClickIcon);
    }
}

/**
 * on click icon in burger nav : 
 * change src to marked image 
 * un mark prev image
 * @param {Event} event 
 */
function onClickIcon(event) {
    let icons = burgerNav.querySelectorAll(".icon");
    for (let i = 0; i < icons.length; i++) {
        const element = icons[i];
        element.querySelector("img").src = element.querySelector("img").src.replace("-current", "");
    }

    event.currentTarget.querySelector("img").src = event.currentTarget.querySelector("img").src.replace(".svg", "-current.svg");
}

/**
 * on click x icon in burger nav : 
 * close burger nav
 * remove listeners from icons
 * @param {Event} event 
 */
function closeBurgerNav(event) {
    burgerNav.classList.remove("open");
    burgerNav.querySelector(".x-icon").removeEventListener("touchend", closeBurgerNav);
    let icons = burgerNav.querySelectorAll(".icon");
    for (let i = 0; i < icons.length; i++) {
        const element = icons[i];
        element.removeEventListener("touchend", onClickIcon);
    }
}

function about() {
    
}    

function checkStep(event) {
    if(Number(this.id.charAt(4)) === nStepCounter) {
        nNumPicks = 0;
        bWasWrong = false;
        $(this).attr("src", "assets/images/" + this.id + "-right.svg");
        if(nStepCounter < 4) {
            if(nStepCounter === 1) {
                $(".steps").show();
                $(".instructions").css({height: '45vh'});
                $(".instructions").css({marginTop: '-15vh'});
                $(".instructions").css({paddingTop: '15vh'});
                $(".instructions").css({paddingBottom: '10vh'});
                $(".instructions").css({width: '60vh'});
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
                    $(".correct").css({marginRight: "2vw"});
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
    $(".next").hide();
    $(".nextstep").hide();
    $(".instructions").show();
    $(".instructions").css({height: '60vh'});
    $(".instructions").css({marginTop: '1vh'});
    $(".instructions").css({paddingTop: '6vh'});
    $(".instructions").css({paddingBottom: '0'});
    $(".instructions").css({width: '24vw'});
    $(".instructions").css({backgroundImage: 'url("assets/images/note1.svg")'});
    for(var i = 1; i<=3; i++) {
        $("#exemination" + i).show();
        $("#exemination" + i).css({backgroundImage: 'url("assets/images/exemination' + i + '.svg")'});
    }
    for(var i=1; i<=nCurrStage-1; i++) {
        $("#exemination" + i).css({opacity: "0.7"});
    }
    $(".instructions-text").html("מה השלב הבא בבדיקה?");
    $(".instructions-text").css({marginRight: "2vw", width: "20vw"});
    $(".options").hide();
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
            $(".instructions").css({marginTop: '-5vh'});
            $(".instructions-text").html("נכון מאוד! קודם כל יש לדאוג לבטיחות, על מנת למנוע היווצרות פצועים נוספים.");
            $(".instructions-text").css({marginRight: "1vw"});
            $(".next").show();
            $(".next").on("touchend", function() {
                $(".instructions-text").html("מה סדר הפעולות בשלב הS? לחצו על הפריטים לפי הסדר.");
                $(".instructions-text").css({marginRight: "2vw"});
                $(".instructions").css({backgroundImage: 'url("assets/images/note2.svg")'});
                $(".instructions").css({height: '30vh'});
                for(var i=1; i<=4; i++) {
                    $("#clue" + i).show();
                    $("#clue" + i).on("touchend", checkStep);
                }
                $(".next").hide();
            });
        } else if(nCurrStage === 2) {
            nStepCounter = 1;
            $(".circle").attr("src", "assets/images/a.svg");
            $(".instructions-text").html("נכון מאוד! עכשיו יש לפתוח את נתיב האויר של המטופל. בחר את הצעדים בשלב הA לפי הסדר:");
            $(".instructions-text").css({marginRight: "1vw"});
            $(".stage2").show();
            for(var i=1; i<=7; i++) {
                $("#airway" + i).on("touchend", checkAirway);
            }
        } else {
            $(".circle").attr("src", "assets/images/b.svg");
            $(".options2").css({display: "flex"});
            $(".instructions-text").html("איך נתחיל את שלב הB?");
            $(".instructions-text").css({marginRight:"6vw", width: "30vw"});
            $(".instructions").css({backgroundImage: 'url("assets/images/note7.svg")', width: '60vh', marginTop: '-15vh', height: "75vh", paddingLeft: "5vw"});
            $(".radio").css({margin: "0"});
            nPicked = 0;
            for(var i=3; i<=6; i++) {
                $("#radio" + i).on("touchend", pickAnswer);
            }
            $(".check2").show();
            // $(".check2").css({marginBottom: "-2vw"});
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
            $(".instructions").css({width: "60vw"});
            $(".instructions").css({marginTop: "-5vh"});
            for(var i=1; i<=7; i++) {
                $("#airway" + i).hide();
            }
            $(".conscious-cont").css({display: "flex"});
            $(".divs").css({display: "flex"});
            $(".instructions-text").html("כל הכבוד! מהן רמות ההכרה שיכולות להיות לפצוע?");
            $(".instructions-text").css({marginRight: "4vw"});
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
    if($("#div1").text() === "הכרה מלאה" && $("#div2").text() === "מגיב לקול" && $("#div3").text() === "מגיב לכאב" && $("#div4").text() === "מחוסר הכרה") {
        nNumPicks = 0;
        bWasWrong = false;
        $(".wrong").hide();
        for(var i = 1; i<=4; i++) {
            $("#div" + i).css({color: "rgb(28, 163, 109)"});
        }
        $(".next").show();
        $(".next").css({marginRight: "55vw", marginTop: "48vh"})
        $(".next").on("touchend", function(){
            $(".instructions").css({height: '45vh',marginTop: '-15vh',paddingTop: '5vh',paddingBottom: '30vh',width: '60vh',backgroundImage: 'url("assets/images/note7.svg")'});
            $(".instructions").append('<div class="options"><div class="radios"><img class="radio" id="radio1" src="assets/images/option.svg" /><img class="radio" id="radio2" src="assets/images/option.svg" /></div><div class="answer"><p>Jaw Thrust - דחיקת לסת</p><p>Head Tilt - הטיית ראש</p></div></div>');
            $(".instructions-text").html("פצוע נפגע כתוצאה מפיצוץ, באיזו שיטה נשתמש על מנת לפתוח נתיב אוויר?");
            $(".instructions-text").css({width: "30vw", marginRight: "4.5vw"});
            $(".conscious").hide();
            $(".div").hide();
            $(".check2").css({position: "absolute", right: "2vw", bottom: "-41vw"});
            $(".check2").off("touchend", checkDrag);
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
        $(".instructions").css({height: '35vh',paddingTop: '15vh'});
        $(".instructions-text").html('נכון מאוד! נשתמש בדחיקת לסת כשיש חשש לפגיעה בעמש"צ או כשלא ידוע לנו סיפור המקרה.');
        $(".instructions-text").css({marginRight: "3vw"});
        $(".next").show();
        $(".next").css({marginRight: "25vw"});
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
        $(".wrong").css({right: "35vw"});
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
        $(".instructions-text").css({marginRight: '4vw', marginTop: "7vh"});
        $(".next").show();
        $(".next").css({marginTop: "60vh", marginRight: "30vw"});
        $(".next").off("touchend", nextStage);
        $(".next").on("touchend", function(){
            $(".next").hide();
            $(".scan").hide();
            $(".instructions-text").html("מדדתם למטופל 12 נשימות ב-30 שניות. האם התוצאה מעידה על נשימה תקינה?");
            $(".instructions-text").css({marginRight: '3vw', marginTop: "8vh"});
            $(".instructions").css({backgroundImage: 'url("assets/images/note1.svg")', height: '60vh', width: '34vw',  marginTop: '-10vh', marginRight: '0.5vw', paddinTop: '6vh', paddingRight: '3vw', paddingLeft: '4vw'});
            $(".options").hide();
            $(".yes-or-no").show();
            $("#yes").on("touchend", checkYesOrNo);
            $("#no").on("touchend", checkYesOrNo);
        });
    } else {
        $(".wrong").show();
        $(".wrong").css({right: '35vw'});
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
    $(".instructions-text").css({marginTop: "3vh", marginRight: "5vw"})
    $(".instructions").append('<div class="absolute breath"<p>בדיקת הנשימה תתבצע למשך 30 שניות ונכפיל את התוצאה פי 2.</p><p>נשימה תקינה היא 8-20 נשימות בדקה.</p><p>2X12=24</p><p>כלומר לא בטווח התקין.</p></div>');
    $(".instructions").css({height: "80vh", width:"45vw",   marginTop: '-15vh'});
    $(".next").show();
    $(".next").css({position: "absolute", bottom: '5vw', right: '20vw'});
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