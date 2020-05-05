var text = [
    {
        "text": 'לפני שנמדוד חום עלינו להכין את כלל החומרים הנדרשים לביצוע הבדיקה. אחד מהחומרים האלו הוא <b>סביעור.</b>'
    },
    {
        "text": "כדי לוודא שאנחנו מכניסים כמות מים מדויקת יש לשפוך לתוך המיכל החדש של הסביעור <b> 2 בקבוקי מים קטנים</b> (0.5 ליטר)."
    },
    {
        "text": "כדי להכניס כמות מדויקת של סביעור אל תוך המיכל נשתמש בפקק של הסביעור. כלומר, עבור כל <b>ליטר מים פקק סביעור אחד.</b>"
    },
    {
        "text": "אחרי שלמדתם בספר איך מבצעים בדיקת חום, בחרו וגררו את הכלים בהם צריך להשתמש בסדר הנכון:"
    }
];
 
var questions = [
    {
        "title": "על המיכל יש לשים פתק, מה עלינו לרשום בו?",
        "1": "שם החומר, שם המכין ושם החומר הפעיל",
        "2": 'שם המכין, "רעיל" ותאריך הכנה',
        "3": '"רעיל", שם המרפאה ושם החומר הפעיל'
    },
    {
        "title": "מדוע עלינו לרשום את השם שלנו על הפתק? ",
        "1": 'על מנת שידעו למי המיכל שייך',
        "2": 'על מנת שידעו מי החובש התורן',
        "3": "על מנת שידעו למי לפנות במידה ויש תקלה"
    },
    {
        "title": "מה הסיבה בגללה אנחנו שמים צמר גפן בפעמונית?",
        "1": 'כדי למנוע פגישה של המדחום (החלק הסופי) בברזל הפעמונית.',
        "2": "כדי להשאיר את המדחום לח.",
        "3": 'כדי להעמיד את המדחום בפעמונית בצורה טובה'
    },
    {
        "title": "לאחר בדיקת החום, מהו הטווח התקין לטמפרטורת הגוף?",
        "1": "PO - 36-38, PR - 36.5-38.5",
        "2": 'PO - 36-37.5, PR - 36.5-38',
        "3": 'PO - 36.5-38, PR - 36-37'
    },
    {
        "title": "על הפעמונית צריך להיות כתוב מה סוג המדחום. מהן האפשרויות?",
        "1": 'PR - בדיקה בפה, PO - בדיקה רקטאלית' ,
        "2": 'PO - בדיקה בפה, OR - בדיקה רקטאלית',
        "3": "PO - בדיקה בפה, PR - בדיקה רקטאלית"
    }
];

var nTextCounter = 0;
var nQuestionCounter = 0;
var bLoaded = false;
var nStepCounter = 1;
var nCurrStep = 0;
var nWaterCounter = 1;
var elCurrDragged;
var bWasPicked = false;
var nPicked = 0;
var nCorrect = 0;
var nMistakes = 0;
var nResault = 5;
var bWasWrong = false;
var nNumPicks = 0;
var bPenCanDrag = false;
var bCottonCanDrag = false;
var arrShadowIds = ["water1", "water2", "savior", "cotton", "madhom", "pen" ];
var bPressedAbout = false;

$(function(){
    $("body").css({backgroundImage: 'url("assets/images/bg1.svg")'});
    start();
});

function start() {
    $(".text").html(text[nTextCounter]["text"]);
    if(!bLoaded) {
        $("#water1").on("touchmove", drag);
        $("#water2").on("touchmove", drag);
        $(".savior").on("touchmove", drag);
        $(".penpaper").on("touchmove", drag);
        window.dragged = $(".dragover");
        $("#water1").on("touchend", dropItem);
        $("#water1").on("touchcancel", dropItem);
        $("#water2").on("touchend", dropItem);
        $("#water2").on("touchcancel", dropItem);
        $(".savior").on("touchend", dropItem);
        $(".savior").on("touchcancel", dropItem);
        $(".penpaper").on("touchend", dropItem);
        $(".penpaper").on("touchcancel", dropItem);
        bLoaded = true;
    }
}

if (!('ClientRect' in window)) window.ClientRect = DOMRect;
/**
 * 
 * @param {TouchEvent} e 
 */
function drag(e) {
    let el = e.target;
    nCurrStep = Number(this.classList[3].charAt(4));
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
                    $(this).off("touchmove", drag);
                    $(this).off("touchend", dropItem);
                    $(this).off("touchcancel", dropItem);
                    if(this.classList[2] === "water" || this.classList[2] === "savior") {
                        if(this.classList[2] === "water") {
                            $(this).css({right: "20%", bottom: "90%"});
                        }
                        pourWater();
                    } else if(bPenCanDrag && this.classList[2] === "penpaper") {
                        $(".container").attr("src", "assets/images/containerpetek.svg");
                        $(this).delay(1000).fadeOut();
                        showQuestion();
                    } else if(this.id === "cotton") {
                        this.style.top = "";
                        this.style.left = "";
                        $(this).attr("src", "assets/images/cottonsoakedshadow.svg");
                        $("#bell").addClass("target");
                        $("#container").removeClass("target");
                        $(this).removeClass("cotton");
                        $(this).removeClass("step4");
                        $(this).addClass("cottonsoaked");
                        $(this).addClass("step5");
                        this.id = "cottonsoaked";
                        $(this).on("touchmove", drag);
                        $(this).on("touchend", dropItem);
                        $(this).on("touchcancel", dropItem);
                        showQuestion();
                    } else if(!bPenCanDrag) {
                        $(".penpaper").on("touchmove", drag);
                        $(".penpaper").on("touchend", dropItem);
                        $(".penpaper").on("touchcancel", dropItem);
                    } else if(this.id === "cottonsoaked") {
                        if(bCottonCanDrag) {
                            $(this).hide();
                            showQuestion();
                        }
                    } else if(!bCottonCanDrag) {
                        $(".cottonsoaked").on("touchmove", drag);
                        $(".cottonsoaked").on("touchend", dropItem);
                        $(".cottonsoaked").on("touchcancel", dropItem);
                    } else if(this.id === "madhom") {
                        $(".bell").attr("src", "assets/images/paamonitmadhom.svg");
                        $(this).hide();
                        showQuestion();
                    } else if(this.id === "pen") {
                        $(".bell").attr("src", "assets/images/paamonitpo.svg")
                        $(".question").html('<img class="goodjob" src="assets/images/goodjob.svg" />');
                        $(".question").css({paddingTop: "20%", height: "24%", paddingRight: "15%", width: "51%"});
                        $(".back").show();
                        $(".back").on("touchend", backToMenu);
                    }
                } else {
                    $(".x").show()
                    $(".x").delay(150).fadeOut(500);
                    $(this).attr("src", "assets/images/" + this.classList[2] + "shadow.svg");
                }
                break;
            } else {
                this.style.top = "";
                this.style.left = "";
                if((this.id) !== "penpaper") {
                    $(this).attr("src", "assets/images/" + this.classList[2] + "shadow.svg");
                }
            }
        }
    }
    window.dragged.children().remove();
    window.dragged.origin.style.visibility = "";
}

function pourWater() {
    if(nWaterCounter > 1) {
        nStepCounter++;
        if(nStepCounter < 3) {
            $("#container").attr("src", "assets/images/containerwater.svg");
        }
    } else {
        nWaterCounter++;
        $("#container").attr("src", "assets/images/containeropen.svg");
    }
    if(nStepCounter < 3) {
        nTextCounter++;
        start();
    } else {
        $("#container").attr("src", "assets/images/container2.svg");
        showQuestion();
    }
    $(elCurrDragged).attr("src", "assets/images/" + elCurrDragged.classList[2] + "tilt.svg");
    $(elCurrDragged).delay(1000).fadeOut();
}

function showQuestion() {
    $(".instructions").hide();
    $(".question").show();
    $(".question-title").html(questions[nQuestionCounter]["title"])
    for(var i = 1; i<=3; i++) {
        $(".answer" + i).html(questions[nQuestionCounter][i]);
        $("#option" + i).attr("src", "assets/images/option.svg");
        $("#option" + i).on("touchend", pickAnswer);
    }
    $(".check").on("touchend", check);
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
    for(var i = 1; i<=3; i++) {
        $("#option" + i).off("touchend", pickAnswer);
    }
    $(".check").off("touchend", check);
    if(nQuestionCounter === 2) {
        nCorrect = 1;
    } else if(nQuestionCounter === 0 || nQuestionCounter === 3) {
        nCorrect = 2;
    } else if(nQuestionCounter === 1 || nQuestionCounter === 4) {
        nCorrect = 3;
    }
    if(nPicked === nCorrect) {
        $(".feedback").attr("src", "assets/images/vee.svg");
        bPenCanDrag = true;
        nQuestionCounter++;
        if (nQuestionCounter < 2) {
            nPicked = 0;
        } else if(nQuestionCounter < 6 && nQuestionCounter > 2) {
            bCottonCanDrag = true;
            nStepCounter++;
        } else {
            nTextCounter++;
            setTimeout(showInstructions, 1000);
        }
    } else {
        $(".feedback").attr("src",  "assets/images/wrong.svg");
        showQuestion();
        if(!bWasWrong) {
            nMistakes++;
        }
        nNumPicks++;
        if(nNumPicks > 0) {
            bWasWrong = true;
        }
    }
    $(".feedback").show();
    $(".feedback").delay(1000).fadeOut(1);
}

function showInstructions() {
    $(".question").hide();
    $(".instructions").show();
    start();
    if (nTextCounter === 3) {
        nStepCounter++;
        $(".container").hide();
        $(".container").css({right: "60%", bottom: "35%"});
        $(".container").fadeIn(500);
        $(".fever-test").fadeIn(500);
        $(".cotton").on("touchmove", drag);
        $(".cotton").on("touchend", dropItem);
        $(".cotton").on("touchcancel", dropItem);
        for(var i=6; i<=7; i++) {
            $(".step" + i).on("touchmove", drag);
            $(".step" + i).on("touchend", dropItem);
            $(".step" + i).on("touchcancel", dropItem);
        }
    } else if(nTextCounter === 4) {
        $(".fever-test").hide();
        $(".container").hide();
        $("body").css({backgroundImage: "assets/images/bg2.svg"});
        $(".palse-check").show();
    }
}

function backToMenu(event) {
    window.location.href = "main.html";
}