var text = [
    {
        "text": 'יש לבקש מהמטופל לגשת לשירותים ולמלא את הכוסית בשתן.'
    },
    {
        "text": "על החובש ללבוש כפפות."
    },
    {
        "text": "יש לקחת את הסטיק לבדיקת שתן. <br> יש לוודא כי <b> כל הסטיק</b> נכנס לתוך הכוס."
    },
    {
        "text": "יש להשוות בין הצבעים של הסטיק לצבעים שמופיעים על הקופסה."
    }
];

var nTextCounter = 0;
var nStepCounter = 1;
var nCurrStep = 0;
var bLoaded = false;
var nCupCounter = 1;
var elem = document.querySelector("html");

$(function(){
    $(".start").on("touchend", start);
});

function start(event) {
    openFullscreen();
    $(".opening").hide();
    $(".game").show();
    $("body").css({backgroundImage: 'url("assets/images/bg1.svg")'});
    $(".instructions").hide();
    $("#cup").on("touchend", next);
    $("#gloves").on("touchend", next);
    $("#urineguide").on("touchend", next);
}

function next(event) {
    if(nStepCounter !== 3) {
        nCurrStep = Number(this.classList[1].charAt(4));
    }
    if(nCurrStep === nStepCounter) {
        $(this).off("touchend", start);
        $(".text").html(text[nStepCounter - 1]["text"]);
        if(!bLoaded) {
            $("#urinestick").on("touchmove", drag);
            $("#urinestick").on("touchend", dropItem);
            $("#urinestick").on("touchcancel", dropItem);
            window.dragged = $(".dragover");
            bLoaded = true;
        }
        if(nStepCounter === 1) {
            $(".instructions").show();
        }
        if (nCurrStep === 2) {
            $(this).hide();
        } else {
            nCupCounter++;
            $("#cup").attr("src", "assets/images/urine" + nCupCounter +".svg");
        }
        nStepCounter++;
    } else {
        $(".x").show()
        $(".x").delay(150).fadeOut(500);
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

if (!('ClientRect' in window)) window.ClientRect = DOMRect;
/**
 * 
 * @param {TouchEvent} e 
 */
function drag(e) {
    let el = e.target;
    nCurrStep = Number(this.classList[1].charAt(4));
    var [x,y] = el.hasAttribute("drag-origin") ? el.getAttribute("drag-origin").split(",") : [50, 50];
    x /= 100;
    y /= 100;
    if(this.classList[1] !== "step5") {
        $(el).attr("src", "assets/images/" + this.id + ".svg");
    }
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
                if (nCurrStep === nStepCounter) {
                    if(nStepCounter === 3) {
                        next();
                        $(this).attr("src", "assets/images/urinestickcheck.svg");
                        $(this).css({width: "2vw", left: "unset", right: "33%", bottom: "23%"});
                        $("#cup").removeClass("target");
                        $("#urineguide").addClass("target");
                        $(this).removeClass("step3");
                        $(this).addClass("step5");
                    } else {
                        $(this).off("touchmove", drag);
                        $(this).off("touchend", dropItem);
                        $(this).off("touchcancel", dropItem);
                        $(this).hide();
                        finishExer();
                    }
                } else {
                    $(".x").show()
                    $(".x").delay(150).fadeOut(500);
                    if(nStepCounter < 3) {
                        $(this).attr("src", "assets/images/" + this.id + "shadow.svg");
                    } else {
                        $(this).css({left: "unset", right: "33%", bottom: "23%"});
                        $(this).attr("src", "assets/images/urinestickcheck.svg");
                    }
                }
                break;
            } else {
                if(nStepCounter < 4) {
                    $(this).attr("src", "assets/images/" + this.id + "shadow.svg");
                } else {
                    $(this).css({left: "unset", right: "33%", bottom: "23%"});
                    $(this).attr("src", "assets/images/urinestickcheck.svg");
                }
            }
        }
    }
    window.dragged.children().remove();
    window.dragged.origin.style.visibility = "";
}

function finishExer() {
    $(".instructions").html('<img class="goodjob" src="assets/images/goodjob.svg" />');
    $(".instructions").css({paddingTop: "20%", height: "24%", paddingRight: "15%", width: "51%"});
    $(".back").show();
    $(".back").on("touchend", backToMenu);
}

function backToMenu(event) {
    window.location.href = "main.html";
}