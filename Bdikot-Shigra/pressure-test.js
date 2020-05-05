var text = [
    {
        "text": 'על החובש לוודא כי החייל יושב בצורה ישרה, החדר מאוורר, ושהחייל לא שתה קפה, עישן סיגריה או התאמן חצי שעה לפני הבדיקה.'
    },
    {
        "text": "יש להניח את המנג'טה על הזרוע החלשה. "
    },
    {
        "text": "משחילים את הסטטוסקופ מעל העורק הברכיאלי בשקע המרפק."
    },
    {
        "text": "יש ללחוץ על הבלון עד שהשעון מראה 180 ואז להתחיל לשחרר את הלחץ."
    },
    {
        "text": "הבדיקה מראה לחץ דם של 120/80. האם טווח זה תקין?"
    }
];

var nTextCounter = 0;
var nPressureCounter = 0;
var nStepCounter = 1;
var nCurrStep = 0;
var nPicked = 0;
var bWasPicked = false;
var nCorrect = 0;

$(function(){
    $("body").css({backgroundImage: 'url("assets/images/bg5.svg")'});
    $(".pressure-check-text").html(text[nTextCounter]["text"]);
    nTextCounter++;
    $(".object-div").css({flexDirection: "column", right: "4%", width: "92%", bottom: "2%"});
    $(".next").delay(1000).fadeIn();
    $(".next").css({bottom: "unset", top: "6%", left: "6%"});
    $(".next").on("touchend", start);
});

function start(event) {
    $("body").css({backgroundImage: 'url("assets/images/bg1.svg")'});
    $(".next").hide();
    $(".object-div").hide();
    $(".arrow").hide();
    $(".window").attr("src", "assets/images/window.svg");
    $(".pressure-div").show();
    $(".manjet").on("touchmove", drag);
    $(".stetoscope").on("touchmove", drag);
    window.dragged = $(".dragover");
    $(".manjet").on("touchend", dropItem);
    $(".manjet").on("touchcancel", dropItem);
    $(".stetoscope").on("touchend", dropItem);
    $(".stetoscope").on("touchcancel", dropItem);
} 

if (!('ClientRect' in window)) window.ClientRect = DOMRect;
/**
 * 
 * @param {TouchEvent} e 
 */
function drag(e) {
    nCurrStep = Number(this.classList[2].charAt(4));
    let el = e.target;
    elCurrDragged = this;
    var [x,y] = el.hasAttribute("drag-origin") ? el.getAttribute("drag-origin").split(",") : [50, 50];
    x /= 100;
    y /= 100;
    $(el).attr("src", "assets/images/" + this.id + "2.svg");
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
        window.dragged.css({top: `${point.y - el.clientHeight * y}px`, left: `${point.x + el.clientWidth * x}px`});
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
        for (let target of document.querySelectorAll(".target")) {
            if (target.getBoundingClientRect().contains(point)) {
                if(nCurrStep === nStepCounter) {
                    $(this).on("touchmove", drag);
                    $(this).off("touchend", dropItem);
                    $(this).off("touchcancel", dropItem);
                    if(nCurrStep === 1) {
                        $(this).css({bottom: "3%"});
                        $(".pressure-text").show();
                        $("#arm").removeClass("target");
                        $("#arm").hide();
                        $("#manjet").addClass("target");
                    } else {
                        $(this).hide();
                        $("#manjet").attr("src", "assets/images/manjetstetoscope.svg");
                        $("#manjet").on("touchend", pressManjet);
                    }
                    nStepCounter++;
                    $(".pressure-text").html(text[nTextCounter]["text"]);
                    nTextCounter++;
                } else {
                    $(".x").show();
                    $(".x").delay(150).fadeOut(500);
                }
                break;
            } else {
                this.style.top = "";
                this.style.left = "";
                $(this).attr("src", "assets/images/" + this.id + "1.svg");
                $(".x").show()
                $(".x").delay(150).fadeOut(500);
            }
        }
    }
    window.dragged.children().remove();
    window.dragged.origin.style.visibility = "";
}

function pressManjet(event) {
    nPressureCounter++;
    $(this).attr("src", "assets/images/stetoscopepressed.svg");
    if(nPressureCounter === 1) {
        setTimeout(changeBack, 1000);
        $(".pressure-text").html(text[nTextCounter]["text"]);
        nTextCounter++;
    } else{
        $(".number").show();
        setTimeout(function(){
            $(".pressure-text").hide();
            $(".question").show();
            $(".question-text").html(text[nTextCounter]["text"]);
            $("#option1").on("touchend", pickAnswer);
            $("#option2").on("touchend", pickAnswer);
            $(".check").on("touchend", check);
        }, 1000);
    }
}

function changeBack() {
    $("#manjet").attr("src", "assets/images/manjetstetoscope.svg");
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


function check(event) {
    $(".check").off("touchend", check);
    nCorrect = 1;
    if(nPicked === nCorrect) {
        finishExer();
    } else {
        $(".check").on("touchend", check);
        $(".feedback").attr("src", "assets/images/wrong.svg");
        $(".feedback").show();
    }
}

function finishExer() {
    $(".question").html('<img class="goodjob" src="assets/images/goodjob.svg" />');
    $(".question").css({paddingTop: "15%", height: "20%", paddingRight: "15%", width: "51%"});
    $(".back").show();
    $(".back").on("touchend", backToMenu);
}

function backToMenu(event) {
    window.location.href = "main.html";
}