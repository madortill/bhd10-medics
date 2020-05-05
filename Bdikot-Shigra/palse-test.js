var text = [
    {
        "text": 'במקרה של טראומה יש למדוד דופק במשך <input type="text" class="input text1" /> שניות ולהכפיל ב <input type="text" class="input text2" />. <br> במקרה של שגרה יש למדוד דופק במשך <input type="text" class="input text3" /> שניות ולהכפיל ב <input type="text" class="input text4" />.'
    },
    {
        "text": "בבדיקה נמצא כי הדופק הוא 86. האם זהו דופק תקין?"
    }
];

var nTextCounter = 0;
var elCurrDragged;
const CORRECT_1 = 15;
const CORRECT_2 = 4;
const CORRECT_3 = 30;
const CORRECT_4 = 2;
var nPalseCounter = 0;
var nPicked = 0;
var bWasPicked = false;
var nCorrect = 0;
var elem = document.querySelector("html");

$(function(){
    $(".start").on("touchend", start);
   
});

function start(event) {
    openFullscreen();
    $(".opening").hide();
    $(".game").show();
    $(".question").hide();
    $(".options").hide();
    $("body").css({backgroundImage: 'url("assets/images/bg2.svg")'});
    $(".objects").on("touchend", next);
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

function next(event) {
    if(this.id === "clock") {
        $(".objects").off("touchend", start);
        $(".question").show();
        $(".question-text").html(text[nTextCounter]["text"]);
        nTextCounter++;
        $(".check").on("touchend", check);
    } else {
        $(".x").show()
        $(".x").delay(150).fadeOut(500);
    }
}

function check(event) {
    $(".check").off("touchend", check);
    for(var i = 1; i<=4; i++) {
        if(Number($(".text"+ i).val()) === eval("CORRECT_" + i)) {
            $(".text"+ i).css({backgroundColor: "rgb(28,163,109)"});
        } else {
            $(".text"+ i).css({backgroundColor: "rgb(236,36,41)"});
        }
    }
    if(Number($(".text1").val()) === CORRECT_1 && Number($(".text2").val()) === CORRECT_2 && Number($(".text3").val()) === CORRECT_3 && Number($(".text4").val()) === CORRECT_4) {
        $(".feedback").attr("src", "assets/images/vee.svg");
        $(".feedback").show();
        setTimeout(Continue, 1500);
    } else {
        $(".check").on("touchend", check);
    }
}

function Continue() {
    $(".feedback").hide();
    $(".question").hide();
    $("body").css({backgroundImage: 'url("assets/images/bg3.svg")'});
    $(".patient1").hide();
    $(".patient-div").show();
    $(".clock").remove();
    $(".hand").before('<p class="objects-text">גררו את היד למקומות בגוף בהם ניתן לבדוק דופק</p>');
    $(".object-div").css({bottom: "1.3%"});
    $(".hand").on("touchmove", drag);
    $(".hand").on("touchend", dropItem);
    $(".hand").on("touchcancel", dropItem);
    window.dragged = $(".dragover");
}

if (!('ClientRect' in window)) window.ClientRect = DOMRect;
/**
 * 
 * @param {TouchEvent} e 
 */
function drag(e) {
    let el = e.target;
    elCurrDragged = this;
    var [x,y] = el.hasAttribute("drag-origin") ? el.getAttribute("drag-origin").split(",") : [50, 50];
    x /= 100;
    y /= 100;
    $(el).attr("src", "assets/images/" + this.id + ".svg");
    el.style.top = 0;
    el.style.left = 0;
    el.style.right = 0;
    el.style.bottom = 0;
    if (!window.dragged.children().length)
    window.dragged.append(el.cloneNode(true));
    
    el.style.top = "";
    el.style.left = "";
    el.style.right = "";
    el.style.bottom = "";
    el.style.visibility = "hidden";
    for (let touch of e.touches) {
        var point = {x: touch.clientX,y: touch.clientY};
        window.dragged.css({top: `${point.y - el.clientHeight * y}px`, left: `${point.x - el.clientWidth * x}px`});
        window.dragged.origin = el;
    }
}

ClientRect.prototype.contains = function({x, y}) {
    return this.top <= y && this.bottom >= y && this.left <= x && this.right >= x;
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
        var hitTarget = false;
        for (let target of document.querySelectorAll(".target")) {
            if (target.getBoundingClientRect().contains(point)) {
                $(target).css({visibility: "visible"});
                $(target).removeClass("target");
                nPalseCounter++;
                if(nPalseCounter === 6) {
                    $(".object-div").hide();
                    $("body").css({backgroundImage: 'url("assets/images/bg4.svg")'});
                    $(".hand").off("touchmove", drag);
                    $(".hand").off("touchend", dropItem);
                    $(".hand").off("touchcancel", dropItem);
                    $(".question").show();
                    $(".question-text").html(text[nTextCounter]["text"]);
                    $(".options").show();
                    $(".question").css({top: "55%", height: "33%", paddingTop: "2%"});
                    $("#option1").on("touchend", pickAnswer);
                    $("#option2").on("touchend", pickAnswer);
                    $(".check").on("touchend", check2);
                }
                hitTarget = true;
                break;
            }
        }
        if (!hitTarget) {
            this.style.top = "";
            this.style.left = "";
            $(".x").show()
            $(".x").delay(150).fadeOut(500);
        }
    }
    window.dragged.children().remove();
    window.dragged.origin.style.visibility = "";
}

function pickAnswer(event) {
    $(this).attr("src", "assets/images/option-marked.svg");
    $(this).off("touchend", pickAnswer);
    if(bWasPicked) {
        $("#option" + nPicked).attr("src", "assets/images/option.svg");
        $("#option" + nPicked).on("touchend", pickAnswer);
    } else {
        bWasPicked = true;
    }
    nPicked = Number(this.id.charAt(6));
}

function check2(event) {
    $(".check").off("touchend", check2);
    nCorrect = 1;
    if(nPicked === nCorrect) {
        finishExer();
    } else {
        $(".check").on("touchend", check2);
        $(".feedback").attr("src", "assets/images/wrong.svg");
        $(".feedback").show();
    }
}

function finishExer(event) {
    $(".question").html('<img class="goodjob" src="assets/images/goodjob.svg" />');
    $(".question").css({paddingTop: "15%", height: "20%", paddingRight: "15%", width: "51%"});
    $(".back").show();
    $(".back").on("touchend", backToMenu);
}

function backToMenu(event) {
    window.location.href = "main.html";
}