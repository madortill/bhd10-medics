var text = [
    {
        "text": 'לשמוע את המטופל נושם.'
    },
    {
        "text": "לראות את בית החזה עולה ויורד."
    },
    {
        "text": "במקרה בו למטופל יש מסכת חמצן ניתן לראות אדים על המסכה."
    }
];

var nTextCounter = 0;
var nBreathingCounter = 0;
var nStepCounter = 1;
var nCurrStep = 0;
var elem = document.querySelector("html");

$(function(){
    $(".start").on("touchend", start);
});

function start(event) {
    openFullscreen();
    $(".opening").hide();
    $(".game").show();
    $("body").css({backgroundImage: 'url("assets/images/bg2.svg")'});
    $(".objects-breathing").on("touchmove", drag);
    $(".objects-breathing").on("touchend", dropItem);
    $(".objects-breathing").on("touchcancel", dropItem);
    window.dragged = $(".dragover");
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
    nCurrStep = Number(this.classList[1].charAt(4));
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
        for (let target of document.querySelectorAll(".target")) {
            if (target.getBoundingClientRect().contains(point)) {
                if(nCurrStep === nStepCounter) {
                    $(".question-text").html(text[nTextCounter]["text"]);
                    nTextCounter++;
                    if(this.id === "ear") {
                        $(".breathing-text").show();
                        $("#face").remove();
                        $("#chest").addClass("target");
                        nStepCounter++;
                    } else {
                        $(".objects-breathing").remove();
                        $(".object-div").html("<p>"+text[nTextCounter]["text"]+"</p>");
                        $(".object-div").css({right: "8.5%", color: "rgb(78,117,130)", paddingRight: "2%", paddingLeft: "2%", textAlign: "center"});
                        $(".next").delay(1000).fadeIn();
                        $(".next").on("touchend", finishExer);
                    }
                } else {
                    $(".x").show()
                    $(".x").delay(150).fadeOut(500);
                }
                break;
            } else {
                this.style.top = "";
                this.style.left = "";
                $(".x").show()
                $(".x").delay(150).fadeOut(500);
            }
        }
    }
    window.dragged.children().remove();
    window.dragged.origin.style.visibility = "";
}

function finishExer(event) {
    $(".next").hide();
    $(".back").show();
    $(".back").on("touchend", backToMenu);
    $(".object-div").html('<img class="goodjob" src="assets/images/goodjob.svg" />');
}

function backToMenu(event) {
    window.location.href = "main.html";
}