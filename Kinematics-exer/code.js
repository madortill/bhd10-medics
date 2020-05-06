var questions = [
    {
        //1
        "title": "מה נכון לגבי סיכויי התמותה של פצוע שהועף מהרכב?",
        "radio1": "שווים לסיכויי התמותה של פצוע שלא הועף מהרכב",
        "radio2": "גבוהים פי 6 מסיכויי התמותה של פצוע שלא הועף מהרכב",
        "radio3": "נמוכים פי 6 מסיכויי התמותה של פצוע שלא הועף מהרכב",
        "radio4": "סיכויי התמותה של פצוע שהועף מהרכב הם 100%"
    },
    {
        //2
        "title": "בתאונה קדמית/חזיתית סביר שהפצוע ינוע באחד משני מסלולים:",
        "radio1": "מסלול עילי ומסלול תחתי",
        "radio2": "מסלול צידי ומסלול תחתי",
        "radio3": "מסלול עליל ומסלול סיבובי",
        "radio4": "מסלול קדמי ומסלול אחורי"
    },
    {
        //3
        "title": "במה נחשוד כשנראה קורי עכביש על השמשה?",
        "radio1": "חבלת חזה בפצוע",
        "radio2": "מוות של הפצוע",
        "radio3": "חבלת ראש בפצוע",
        "radio4": "משהו נוסף פגע ברכב"
    },
    {
        "title": "מה נכון לגבי נפילה מגובה?",
        "radio1": "כל פצוע שנפל מגובה יוגדר כדחוף",
        "radio2": "מהירות הנפילה לא משתנה בהתאם לגובה הנפילה",
        "radio3": "כל פצוע שנפל מגובה גבוה פי 1.5 מגובהו יוגדר כדחוף",
        "radio4": "כל פצוע שנפל מגובה גבוה פי 3 מגובהו או יותר יוגדר כדחוף"
    },
    {
        //4
        "title": "מה נכון לגבי נפילה מגובה?",
        "radio1": "כל פצוע שנפל מגובה יוגדר כדחוף",
        "radio2": "מהירות הנפילה לא משתנה בהתאם לגובה הנפילה",
        "radio3": "כל פצוע שנפל מגובה גבוה פי 1.5 מגובהו יוגדר כדחוף",
        "radio4": "כל פצוע שנפל מגובה גבוה פי 3 מגובהו או יותר יוגדר כדחוף"
    },
    {
        //5
        "title": "מדוע חשוב לנו לדעת על איזה מצע נחת הפצוע?",
        "radio1": "במידה והפצוע נפל על משטח 'רך' ניתן להניח שהפגיעה תתפזר על פני שטח רחב יותר",
        "radio2": "במידה והפצוע נפל על משטח 'קשה' ניתן להניח שמהירות הפגיעה קטנה",
        "radio3": "במידה והפצוע נפל על משטח 'רך' ניתן להניח שעוצמת הפגיעה קטנה",
        "radio4": "במידה והפצוע נפל על משטח 'קשה' ניתן להניח שהפגיעה תהיה ממוקדת יותר"
    },
    {
        //6
        "title": "מה ניתן להסיק על האיבר שפגע ראשון בקרקע?",
        "radio1": "אין משמעות לאיבר שפגע ראשון בקרקע",
        "radio2": "נצפה לפגיעה משמעותית באיבר שפגע ראשון בקרקע",
        "radio3": "נצפה לדימומים באיבר הנגדי לאיבר שפגע ראשון בקרקע",
        "radio4": "אם הפצוע מסוגל ללכת הוא בוודאות לא נפל על הגב"
    },
    {
        //7
        "title": "הגעת לפצוע דקור שהסכין עדיין נעוצה בגופו. מה עליך לעשות?",
        "radio1": "יש לשלוף את הסכין על מנת לחפש  פציעות נסתרות ולעצור דימומים",
        "radio2": "יש לשלוף את הסכין על מנת לגלות אילו איברים נפגעו",
        "radio3": "אין לשלוף סכין הנעוצה בגוף של פצוע ויש להניח תחבושת על הסכין",
        "radio4": "אין לשלוף סכין הנעוצה בגוף של פצוע ויש לקבעה"
    },
    {
        //8
        "title": "מדוע חשוב להבין את המרחק שבו הפצוע היה ממוקד הפיצוץ?",
        "radio1": "משום שככל שהמרחק ממוקד הפיצוץ גדל, מהירות גל ההדף ועוצמתו יורדות",
        "radio2": "משום שככל שהמרחק ממוקד הפיצוץ גדל, גל ההדף צובר מהירות ועוצמתו גדלה",
        "radio3": "משום שככל שהמרחק ממוקד הפיצוץ קטן, מהירות גל ההדף ועוצמתו יורדות",
        "radio4": "משום שכך נדע אם הפצוע דחוף"
    },
    {
        //9
        "title": "מהם עצמים מחזירים?",
        "radio1": "עצמים בחלל, אשר מחזירים את גל ההדף וגורמים לעוצמתו ולמהירותו לרדת",
        "radio2": "עצמים בחלל, בהם אפשר להשתמש על מנת להתגונן מפני גל ההדף",
        "radio3": "עצמים בחלל, אשר מחזירים את גל ההדף וגורמים להחמרה בפציעה",
        "radio4": "עצמים בחלל, אשר מתפרקים לחלקים וגורמים לפגיעה שניונית בפגיעות הדף"
    },
    {
        //10
        "title": "במה תתבטא הפגיעה הראשונית?",
        "radio1": "פגיעות חודרות כתוצאה מפגיעת עצמים חדים המתעופפים בחלל",
        "radio2": "פגיעה באיברים חלולים כמו הריאות, איברי מערכת העיכול והאוזניים",
        "radio3": "פגיעות קהות כתוצאה מהטחת גוף הפצוע על עצמים קשים",
        "radio4": "פגיעות כתוצאה מכוויות ושאיפות עשן"
    },
    {
        //11
        "title": "הגעתם לפצוע הדף ואתם מזהים על גופו כמות גדולה של חתכים ורסיסים-לאיזה מנגנון פציעה הם שייכים?",
        "radio1": "פגיעה ראשונית",
        "radio2": "פגיעה שלישונית",
        "radio3": "פגיעה רביעונית",
        "radio4": "פגיעה שניונית"
    },
    {
        //12
        "title": "פגיעה שלישונית מאופיינת ב:",
        "radio1": "דימומים כתוצאה מקריעת איברים",
        "radio2": "חוסר התמצאות ובלבול כתוצאה מהפיצוץ",
        "radio3": "פגיעות קהות כתוצאה מהטחת גוף הפצוע על עצמים קשים",
        "radio4": "כוויות נרחבות ופגיעות שאיפה"
    },
    {
        //13
        "title": "פגיעה רביעונית נגרמת כתוצאה מ:",
        "radio1": "חום, להבות ואדים חמים שנגרמו כתוצאה מהפיצוץ",
        "radio2": "חומרים כימיים שהיו בחומר הנפץ",
        "radio3": "קרינה הנפלטת מחומר הנפץ במהלך הפיצוץ",
        "radio4": "הגברת עוצמת גל ההדף בעקבות נוכחות של עצמים מחזירים"
    }
];

class Screen {
    constructor(questions) {
        this.questions = questions;
        this.answered = [];
    }
}

var screens = [
    new Screen([1,2]),
    new Screen([3]),
    new Screen([5,6]),
    new Screen([11,12,13,14]),
    new Screen([9,10]),
    new Screen([8])
];
var screen; 

var nCurrQuestion = 0;
var nCorrect = 0;
var nPrevCorrect = 0;
var nMistakes = 0;
var nHints = 0;
var nQuestionsCounter = 0;
var nPicked;
var bWasPicked = false;
var bWasWrong = false;
var bHintWasPressed = false;
var bQuestion7 = false;
var arrAnswered =[];
var nNumPicks = 0;
var bPressedAbout = false;
var canShowQuestion = true;
var elem = document.querySelector("html");


$(function(){
    $(".ok").on("touchend", removeTurn);
    $(".start").on("touchend", start);
    $(".play").on("touchend", start);
    $(".about").on("touchend", about);
    $(".navigate").on("touchend", Home);
});

function removeTurn(event) {
    $(".turn-div").hide();
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

function start(event) {
    openFullscreen();
    screen = screens[0];
    $(".opening").hide();
    $(".header").hide();
    $("body").css({backgroundImage: 'url("assets/images/bg2.svg")'});
    $(".hint").show();
    $(".hint").on("touchend", Hint);
    $("#clue1").show();
    $("#clue2").show();
    $(".car").show();
    for(var i=1; i<=3; i++) {
        $("#clue"+i).on("touchend", showQuestion);
    }
    $(".car").on("touchend", ZoomIn);
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

function ZoomIn(event) {
    if(nQuestionsCounter < 3) {
        screen = screens[1];
        $("body").css({backgroundImage: 'url("assets/images/bg3.svg")'});
        $(".car").off("touchend", ZoomIn)
        $("#clue1").hide();
        $(".car").attr("src", "assets/images/car2.svg");
        $(".car").css({width: "62%", height: "60%", right: "38%", top: "45%"});
        $("#clue2").attr("src", "assets/images/clue22.svg");
        $("#clue2").css({right: "0", width: "unset", height: "100%",top: "0px"});
        for(var i=3; i<=4; i++) {
            $("#clue" + i).show();
        }
    } else {
        $(".glow").css({display: "flex"});
        screen = screens[3];
        $(".exploaded").off("touchend", ZoomIn);
        $(".smoke").hide();
        $(".bomb").hide();
        $("#clue9").hide();
        $("#clue10").hide();
        $(".exploaded").css({display: "inline", width: "100%", right: "unset", height: "100%", bottom: 'unset'});
        $(".clues").css({display: "block", bottom: "1vw", width: "50vw", height: "17vw",left: "25vw", right: "unset"});
        $(".glow").css({display: "block", bottom: "1vw", width: "50vw", height: "17vw",left: "25vw", right: "unset"});
        for(var i=11; i<=14; i++) {
            $("#clue"+i).show();
        }
        $("#clue121").show();
        $("#clue141").show();
        $("#clue142").show();
    }
    $(".back").show();
    $(".back").on("touchend", ZoomOut);
}

function ZoomOut(event) {
    if(nQuestionsCounter < 3) {
        screen = screens[0];
        $("body").css({backgroundImage: 'url("assets/images/bg2.svg")'});
        $(".car").on("touchend", ZoomIn)
        $("#clue1").show();
        $(".car").attr("src", "assets/images/car1.svg");
        $(".car").css({width: "52%", height: "30%", right: "47.6%", top: "34%"});
        $("#clue2").attr("src", "assets/images/clue2.svg");
        $("#clue2").css({ width: "52%", height: "65%", right: "32%",});
        for(var i=3; i<=4; i++) {
            $("#clue" + i).hide();
        }
    } else {
        screen = screens[4];
        $(".glow").css({display: "none"});
        $(".exploaded").on("touchend", ZoomIn);
        $(".smoke").show();
        $(".bomb").show();
        $("#clue9").show();
        $("#clue10").show();
        $(".exploaded").css({width: "90%"});
        $(".exploaded").css({right: "60%"});
        $(".clues").css({bottom: "20%"});
        for(var i=11; i<=14; i++) {
            $("#clue"+i).hide();
        }
        $("#clue121").hide();
        $("#clue141").hide();
        $("#clue142").hide();
    }
    $(".back").hide();
    $(".back").off("touchend", ZoomOut);
}

function Animate() {
    $("#clue1").show();
    $(".car").attr("src", "assets/images/car1.svg");
    $("body").css({backgroundImage: 'url("assets/images/bg2.svg")'});
    $(".car").css({width: "52%"});
    $(".car").css({height: "30%"});
    $(".car").css({right: "47.5%"});
    $(".car").css({top: "36%"});
    $("#clue2").attr("src", "assets/images/clue2.svg");
    $("#clue2").css({ width: "52%", height: "65%", right: "32%",});
    for(var i=3; i<=4; i++) {
        $("#clue" + i).hide();
    }
    $(".back").hide();
    $(".car").delay(1500).fadeOut(500);
    $("#clue1").delay(1500).fadeOut(500);
    $("#clue2").delay(1500).fadeOut(500);
    $(".black").delay(1500).fadeIn(500);
    $(".hint").delay(1500).fadeOut(500);
    $(".black").delay(2000).fadeOut(500);
    setTimeout(continueAnimate, 4000);
}

function continueAnimate() {
    screen = screens[2];
    for(var i=5; i<=6; i++) {
        $("#clue" + i).fadeIn();
    }
    $("#woman").fadeIn();
    $(".hint").fadeIn();
    $("body").css({backgroundImage: 'url("assets/images/bg4.svg")'});
}

function goIntoBuilding() {
    for(var i=5; i<=6; i++) {
        $("#clue" + i).delay(1500).fadeOut();
    }
    $("#woman").delay(1500).fadeOut();
    $(".hint").delay(1500).fadeOut();
    $(".hint").delay(1000).fadeIn();
    $("#clue8").delay(3000).fadeIn();
    setTimeout(continueBuilding, 3000);
}

function continueBuilding() {
    screen = screens[5];
    $("body").css({backgroundImage: 'url("assets/images/bg6.svg")'});
    $(".black").fadeOut();
    $(".back").hide();
}

function changeRoom() {
    $("#clue8").delay(3500).fadeOut();
    $(".hint").delay(3500).fadeOut();
    setTimeout(continueRoom, 4000);
}

function continueRoom() {
    screen = screens[4];
    $(".back").hide();
    $("body").css({backgroundImage: 'url("assets/images/bg7.svg")'});
    $(".black").fadeOut();
    $(".hint").fadeIn();
    $(".smoke").show();
    $(".bomb").show();
    $(".exploaded").css({display: "inline"});
    $("#clue9").fadeIn();
    $("#clue10").fadeIn();
    $(".exploaded").on("touchend", ZoomIn);
}

function showQuestion(event) {
    if(canShowQuestion) {
        canShowQuestion = false;
        $(".feedback").html("");
        for(var i = 1; i<=14; i++) {
            $("#clue" + i).attr("src", "assets/images/clue" + i + ".svg");
        }
        $(".bomb").attr("src", "assets/images/bomb.svg");
        $(".clue6glow").hide();
        for(var i=10; i<=14; i++) {
            $(".clue" + i +"glow").css({opacity: "0"});
        }
        if(screen.questions.indexOf(3) !== -1) {
            $("#clue2").attr("src", "assets/images/clue22.svg");
        }
        if(nQuestionsCounter !== 0) {
            $("#radio" + nPicked).attr("src", "assets/images/option.svg");
        }
        if(this.id.length < 7) {
            /**
             * @type {string}
             */
            let s = this.id;
            nCurrQuestion = Number(s.substr(4));
        } else {
            nCurrQuestion = Number(this.id.substr(4,2));
        }
        for(var i=1; i<=14; i++) {
            $("#clue" + i).off("touchend", showQuestion);
        }
        $("#clue121").off("touchend", showQuestion);
        $("#clue141").off("touchend", showQuestion);
        $("#clue142").off("touchend", showQuestion);
        $(".questions").show();
        $(".title").html(questions[nCurrQuestion - 1].title);
        for(var i=1; i<=4; i++) {
            $(".answer" + i).html(questions[nCurrQuestion - 1]["radio"+i]);
        }
        for(var i=1; i<=4; i++) {
            $("#radio" + i).on("touchend", pickAnswer);
        }
        if (nCurrQuestion === 7) {
            bQuestion7 = true;
        }
        $(".check").on("touchend", Check);
    }
}

function Hint(event) {
    if (screen.answered.length === screen.questions.length) return;
    bHintWasPressed = true;
    $(".hint").off("touchend", Hint);
    nHints++;
    nRandom = Math.round(Math.random()*(13)+1);
    while(arrAnswered.indexOf(nRandom) !== -1 || screen.questions.indexOf(nRandom) === -1 || nRandom === 4 || nRandom === 7) {
        nRandom = Math.round(Math.random()*(13)+1);
    }
    if (nRandom === 1 || (nRandom >= 3) && (nRandom <= 5) || (nRandom >= 7) && (nRandom <= 8)) {
        $("#clue" + nRandom).attr("src", "assets/images/clue" + nRandom + "-glow.svg");
    } else if(nRandom === 2) {
        if(screen.questions.indexOf(3) !== -1) {
            $("#clue" + nRandom).attr("src", "assets/images/tree-glow.svg");
        } else {
            $("#clue" + nRandom).attr("src", "assets/images/clue2-glow.svg");
        }
    } else if(nRandom === 9) {
        $(".bomb").attr("src", "assets/images/clue9-glow.svg");
    } else if(nRandom === 6 || (nRandom >= 10) && (nRandom <= 14)) {
        $(".clue" + nRandom + "glow").css({opacity: "1"});
        $(".clue" + nRandom + "glow").show();
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

function Check(event) {
    $(".check").off("touchend", Check);
    if(nCurrQuestion === 2 || nCurrQuestion === 4 || nCurrQuestion === 9 || nCurrQuestion === 14) {
        nCorrect = 1;
    } else if (nCurrQuestion === 1 || nCurrQuestion === 7 || nCurrQuestion === 11){
        nCorrect = 2;
    } else if (nCurrQuestion === 3 || nCurrQuestion === 6 || nCurrQuestion === 10 || nCurrQuestion === 13){
        nCorrect = 3;
    } else if (nCurrQuestion === 5 || nCurrQuestion === 8 || nCurrQuestion === 12){
        nCorrect = 4;
    }
    if(nPicked === nCorrect) {
        nNumPicks = 0;
        for(var i=1; i<=4; i++) {
            $("#radio" + i).off("touchend", pickAnswer);
        }
        $(".feedback").attr("src", "assets/images/vee.svg");
        $(".feedback").show();
        $(".questions").delay(1000).fadeOut(1);
        $(".feedback").delay(1000).fadeOut(1);
        setTimeout(changeBoolean, 1000);
        nQuestionsCounter++;
        arrAnswered.push(nCurrQuestion);
        screen.answered.push(nCurrQuestion);
        if(nCurrQuestion === 12) {
            arrAnswered.push(121);
        } else if(nCurrQuestion === 14) {
            arrAnswered.push(141);
            arrAnswered.push(142);
        }
        if(arrAnswered.length === 3) {
            Animate();
        } else  if(arrAnswered.length === 5) {
            $(".black").delay(1500).fadeIn();
            goIntoBuilding();
        } else if (arrAnswered.length === 6) {
            $(".knife").delay(1500).fadeIn(1);
            $(".knife").delay(2000).fadeOut(1);
            $(".black").delay(3500).fadeIn();
            changeRoom();
        } else if (arrAnswered.length > 14) {
            finishExer();
        }
        for(var i=1; i<=14; i++) {
            if(arrAnswered.indexOf(i) === -1){
                $("#clue" + i).on("touchend", showQuestion);
            }
        }
        if(arrAnswered.indexOf(121) === -1){
            $("#clue121").on("touchend", showQuestion);
        }
        if(arrAnswered.indexOf(141) === -1){
            $("#clue141").on("touchend", showQuestion);
        }
        if(arrAnswered.indexOf(142) === -1){
            $("#clue142").on("touchend", showQuestion);
        }
        bWasWrong = false;
        if(bHintWasPressed) {
            $(".hint").on("touchend", Hint);
            bHintWasPressed = false;
        }
        bWasPicked = false;
    } else {
        $(".feedback").attr("src", "assets/images/x.svg");
        $(".feedback").show();
        $(".check").on("touchend", Check);
        if(!bWasWrong) {
            nMistakes++;
        }
        nNumPicks++;
        if(nNumPicks > 0) {
            bWasWrong = true;
        }
    }
}

function changeBoolean() {
    canShowQuestion = true;
}

function finishExer() {
    $(".black").delay(1500).fadeIn();
    for(var i=9; i<=14; i++) {
        $("#clue"+i).delay(1500).fadeOut(1);
    }
    $(".exploaded").delay(1500).fadeOut(1);
    $(".bomb").delay(1500).fadeOut(1);
    $(".hint").delay(1500).fadeOut();
    $(".smoke").delay(1500).fadeOut();
    $(".back").delay(1500).fadeOut();
    $(".black").delay(2500).fadeOut();
    $(".closing").delay(2500).fadeIn();
    setTimeout(Finish, 2500);
}

function Finish() {
    var nScore = (14-nMistakes);
    $("body").css({backgroundImage: 'url("assets/images/bg8.svg")'});
    $(".resaults").html("הצלחתם " + nScore + " שאלות מתוך 14 והשתמשתם ב " + nHints +" רמזים.");
}