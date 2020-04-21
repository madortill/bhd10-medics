var info = [
    {
        //1
        "src": "patient1",
        "1": "מלאה",
        "2": "22",
        "3": "110",
        "4": "140/70"
    },
    {
        //2
        "src": "patient2 ",
        "1": "כאב",
        "2": "12",
        "3": "80",
        "4": "130/70"
    },
    {
        //3
        "src": "patient3 ",
        "1": "מלאה",
        "2": "28",
        "3": "90",
        "4": "120/80"
    },
    {
        //4
        "src": "patient4",
        "1": "מלאה",
        "2": "24",
        "3": "110",
        "4": "105/60"
    },
    {
        //5
        "src": "patient5",
        "1": "מלאה",
        "2": "18",
        "3": "85",
        "4": "120/80"
    },
    {
        //6
        "src": "patient6 ",
        "1": "קול",
        "2": "18",
        "3": "90",
        "4": "170/110"
    },
    {
        //7
        "src": "patient7 ",
        "1": "קול",
        "2": "22",
        "3": "110",
        "4": "110/60"
    },
    {
        //8
        "src": "patient8",
        "1": "מלאה",
        "2": "16",
        "3": "90",
        "4": "120/70"
    }
];

var questions = [
    {
        //1
        "1": "קוצר נשימה",
        "2": "כאבים בחזה",
        "3": "הרעלה"
    },
    {
        //1
        "1": "אתחיל לבצע החייאה ואזעיק רופא.",
        "2": "אציע אקמול, אתן כוס מים ואזעיק מטפל בכיר.",
        "3": 'אזעיק רופא, ארגיע את המטופל ואחבר לאק"ג'
    },
    {
        //2
        "1": "פרכוסים",
        "2": "אפנדיציטיס",
        "3": "גוז בעין"
    },
    {
        //2
        "1": 'אושיב את המטופל, אתן לו כוס מים ואזעיק רופא. במידת הצורך אתחיל לבצע החייאה ואחבר לאק"ג',
        "2": 'ארחיק מחפצים חדים, אבצע סכמת SAB לאחר שההתקף חלף, אביא את המטופל למצה חצי ישיבה חצי שכיבה (חש"י) ואקפיד לא להחזיק את המטופל בכוח במהלך ההתקף.',
        "3": 'אציע אקמול, אתן כוס מים, אביא את המטופל למצב חצי ישיבה חצי שכיבה(חש"י) ואקפיד לא להחזיק את המטופל בכוח במהלך ההתקף. אזעיק מטפל בכיר.'
    },
    {
        //3
        "1": "פרכוסים",
        "2": "הלם אנאפילקטי",
        "3": "קוצר נשימה/אסטמה"
    },
    {
        //3
        "1": "אזעיק רופא, אתן למטופל חמצן ואקח ממנו אנמנזה.",
        "2": "אושיב את המטופל, אתן לו כוס מים ואזעיק רופא.",
        "3": 'אתחיל לבצע החייאה ואחבר לאק"ג'
    },
    {
        //4
        "1": "הלם אנאפילקטי",
        "2": "אפנדיציטיס",
        "3": "הרעלה"
    },
    {
        //4
        "1": "אוודא שנתיב האוויר של המטופל פתוח, אשכיב את המטופל וארים את רגליו, אזריק אפיפן  ואזעיק רופא.",
        "2": 'אציע אקמול, אתן כוס מים, אביא את המטופל למצב חצי ישיבה חצי שכיבה (חש"י) ואקפיד לא להחזיק את המטופל בכוח. אזעיק מטפל בכיר.',
        "3": "אזעיק מטפל בכיר, אזריק אפיפן, אשכיב את המטופל וארים את רגליו ואתן חמצן. אדאג שהוא יפונה תוך שעה לכל היותר.",
    },
    {
        //5
        "1": "הלם אנאפילקטי",
        "2": "התעלפות",
        "3": "אירוע מוחי"
    },
    {
        //5
        "1": "אזעיק רופא, אתן למטופל חמצן ואקח ממנו אנמנזה.",
        "2": 'אתחיל לבצע החייאה ואחבר לאק"ג ולחמצן. אדאג שהמטופל יפונה תוך שעה לכל היותר.',
        "3": "אוודא שנתיב האוויר של המטופל פתוח, אשכיב אותו וארים את רגליו ואזעיק רופא."
    },
    {
        //6
        "1": "אוטם בשריר הלב",
        "2": "אירוע מוחי",
        "3": "פרכוסים"
    },
    {
        //6
        "1": "אפנה מיידית לרופא.",
        "2": 'אחבר לאק"ג ואפנה מיידית לרופא.',
        "3": "אקח מדדים ואפנה לרופא בהקדם."
    },
    {
        //7
        "1": "הלם אנאפילקטי",
        "2": "אירוע מוחי",
        "3": "הרעלה"
    },
    {
        //7
        "1": 'אזעיק רופא, אבצע אנמנזה, אנטר את מצב ההכרה והמדדים של המטופל ואבצע החייאה על פי הצורך.',
        "2": 'אזעיק רופא, ארגיע את המטופל, אמדוד חום וסטורציה ואחבר לאק"ג.',
        "3": "אזעיק רופא, אמדוד חום וסטורציה, ארגיע את המטופל ואתן לו חמצן ואבצע אנמנזה."
    },
    {
        //8
        "1": "אירוע מוחי",
        "2": "אפנדיציטיס",
        "3": "אוטם בשריר הלב"
    },
    {
        //8
        "1": "אנטר את מצב ההכרה ואפנה לרופא תוך 24 שעות.",
        "2": "אפנה מיידית לרופא.",
        "3": 'ארחיק חפצים חדים, אניח מצע רך מתחת לראשו של המטופל ואפנה מיידית לרופא.'
    }
];

var text = [
    {
        "a": "המטופל חווה התקף באורך 10 דקות שחלף מעצמו."
    },
    {
        "a": "המטופלת הגיעה לאחר ריצת בר אור."
    },
    {
        "a": "המטופל הגיע לאחר ארוחת הצהריים."
    },
    {
        "a": "המטופלת יצאה מהשירותים ואיבדה את ההכרה למשך דקה."
    },
    {
        "a": "המטופלת נגדת מבוגרת, לא מדברת בצורה ברורה ונראית מבולבלת."
    },
    {
        "a": "הדופק שלקחת למטופלת לא סדיר. מדיווח עולה כי חושדת ששתתה חומר ניקוי."
    },
    {
        "a": "למטופל חום של 38.6."
    }
];

var nCurrQuestion = 0;
var bWasWrong = false;
var bWasPicked = false;
var bSecond = false;
var nNumPicks = 0;
var nPatientNum = 0;
var nMistakes = 0;
var nResaults = 0;
var nTextCounter = -1;

$(function(){
    $(".about").on("touchend", about);
    $(".start").on("touchend", function(){
        $("body").css({backgroundImage: 'url("assets/images/bg.svg")'});
        $(".opening").hide();
        $(".info").show();
        $(".question").show();
        showPatient();
    });
});

function about() {
    
}

function showPatient() {
    for(var i=1; i<=4; i++) {
        $(".text" + i).html(info[nPatientNum][i]);
    }
    for(var i=1;i<=3;i++) {
        $(".answer" + i).html(questions[nCurrQuestion][i]);
        $("#option" + i).on("touchend", pickAnswer);
    }
    if(nPatientNum === 2 || nPatientNum === 4) {
        $(".question").css({height: "40%", paddingTop: "10%"});
        $(".infobutton").css({bottom: "80%"});
        $(".vitals").css({bottom: "50%"});
    } else if(nPatientNum === 7) {
        $(".options").css({fontSize: "2.5vh"});
    }
    $(".check").on("touchend", Check);
    if(nPatientNum > 0) {
        $(".infobutton").on("touchend", showInfo);
    }
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

function Check(event) {
    $(".feedback").hide();
    if(nCurrQuestion === 2 || nCurrQuestion === 5 || nCurrQuestion === 6 || nCurrQuestion === 11 || nCurrQuestion === 13) {
        nCorrect = 1;
    } else if (nCurrQuestion === 0 || nCurrQuestion === 3 || nCurrQuestion === 8 || nCurrQuestion === 10 || nCurrQuestion === 14 || nCurrQuestion === 15){
        nCorrect = 2;
    } else if (nCurrQuestion === 1 || nCurrQuestion === 4 || nCurrQuestion === 7 || nCurrQuestion === 9 || nCurrQuestion === 12){
        nCorrect = 3;
    }
    if(nPicked === nCorrect) {
        $(".check").off("touchend", Check);
        for(var i=1; i<=3; i++) {
            $("#option" + i).attr("src", "assets/images/option.svg");
        }
        nNumPicks = 0;
        for(var i=1; i<=3; i++) {
            $("#option" + i).off("touchend", pickAnswer);
        }
        nCurrQuestion++;
        bWasWrong = false;
        bWasPicked = false;
        if(!bSecond) {
            bSecond = true;
            showSecond();
        } else {
            bSecond = false;
            $(".question-title").hide();
            $(".options").hide();
            $(".check").hide();
            $(".goodjob").show();
            $(".speech-bubble").show();
            $(".speech").html("תודה רבה!");
            $(".speech-bubble").css({paddingRight: "22vw", width: "33vw", paddingTop: "7vh", height: "13vh"});
            if(nPatientNum === 7){
                setTimeout(finishExer, 1500);
            } else {
                if(nPatientNum === 6) {
                    nPatientNum++;
                    setTimeout(function(){
                        for(var i=1; i<=3; i++) {
                            $("#option" + i).off("touchend", pickAnswer);
                        }
                            $(".question").show();
                            $(".question-title").show();
                            $(".options").show();
                            $(".check").show();
                            $(".check").off("touchend", Check);
                            $(".goodjob").hide();
                            $(".question-title").html("עם מה תאבחנו את המטופל?");
                            $(".patient").attr("src","assets/images/patient"+ (nPatientNum+1) +".svg" );
                            $(".speech-bubble").show();
                            $(".speech-bubble").css({paddingTop: "4vh", height: "16vh"});
                            $(".speech").html("כואבת לי הבטן בצד ימין והכאב מתגבר...");
                            $(".text1").css({marginRight: "4vw"});
                            $(".infobutton").off("touchend", showInfo);
                            showPatient();
                    },1500);
                } else {
                    nPatientNum++;
                    nTextCounter++;
                    setTimeout(showInfo, 1500);
                }
            }
        }
    } else {
        $(".feedback").show();
        if(!bWasWrong) {
            nMistakes++;
        }
        nNumPicks++;
        if(nNumPicks > 0) {
            bWasWrong = true;
        }
    }
}

function showSecond() {
    $(".question-title").html("כל הכבוד! איזה טיפול תבחרו לתת?");
    $(".feedback").hide();
    $(".options").css({marginTop: "-4vh"});
    if(nPatientNum === 1 || nPatientNum === 3) {
        $(".options").css({fontSize: "2vh"});
        $(".question").css({height: "45%", paddingTop: "10%"});
        $(".infobutton").css({bottom: "80%"});
        $(".vitals").css({bottom: "92vw"});
    } else if(nPatientNum === 4 || nPatientNum === 6 || nPatientNum === 7){
        $(".options").css({fontSize: "2vh"});
     } else {
        $(".options").css({fontSize: "2.5vh"});
    }
    showPatient();
}

function showInfo(event) {
    $(".case").css({display: "flex"});
    $(".question").hide();
    $(".speech-bubble").hide();
    $(".patient").attr("src","assets/images/patient"+ (nPatientNum+1) +".svg" );
    if(nPatientNum === 1 || nPatientNum === 3 || nPatientNum === 4) {
        $(".speech-bubble").hide();
        if(nPatientNum === 1) {
            $(".text1").css({marginRight: "6vw"});
            $(".text3").css({marginRight: "9vw"});
        } else if(nPatientNum === 3) {
            $(".case-text").html("אלרגי לבוטנים");
            $(".text3").css({marginRight: "8vw"});
        } else {
            $(".case-text").html("אין מידע ");
            $(".exit").css({marginTop: "1%"});
            $(".text3").css({marginRight: "9vw"});
        }
    } else if(nPatientNum === 2)  {
        $(".speech-bubble").show();
        $(".speech-bubble").css({paddingRight: "15vw", width: "40vw", paddingTop: "5vh", height: "15vh"})
        $(".speech").html("ס..סחרחורת.... ....קשה...לנ..לנשום...");
        $(".speech").css({width: "30vw", height: "40vh"});
        $(".text1").css({marginRight: "4vw"});
        $(".exit").css({marginTop: "13vh"});
    } else if(nPatientNum === 5 || nPatientNum === 6) {
        $(".text1").css({marginRight: "8vw"});
        $(".case-description").css({marginBottom: "0"});
        $(".exit").css({marginTop: "4%"});
        if(nPatientNum === 6) {
            $(".speech-bubble").show();
            $(".text3").css({marginRight: "8vw"});
            $(".text2").css({marginRight: "7vw"});
            $(".speech").html("כואבת לי הבטן, ויש לי בחילות וצרבות...");
            $(".speech-bubble").css({paddingTop: "5vh", height: "15vh"})
        } else {
            $(".text3").css({marginRight: "10vw"});
            $(".text2").css({marginRight: "8vw"});
        }
    } else if(nPatientNum === 7) {
        $(".text2").css({marginRight: "6vw"});
        $(".text3").css({marginRight: "10vw"});
    }
    $(".case-description").html(text[nTextCounter].a);
    $(".exit").on("touchend", Continue);
}

function Continue(event) {
    for(var i=1; i<=3; i++) {
        $("#option" + i).off("touchend", pickAnswer);
    }
    $(".exit").off("touchend", Continue);
    $(".case").hide();
    $(".question").show();
    $(".question-title").show();
    $(".options").show();
    $(".check").show();
    $(".check").off("touchend", Check);
    $(".goodjob").hide();
    $(".question-title").html("עם מה תאבחנו את המטופל?");
    if(nCurrQuestion === 3 || nCurrQuestion === 7) {
        $(".options").css({fontSize: "2vh"});
        $(".question").css({height: "45%", paddingTop: "10%"});
        $(".infobutton").css({bottom: "72vw"});
        $(".vitals").css({bottom: "92vw"});
    } else if(nCurrQuestion === 9){
        $(".options").css({fontSize: "2vh"});
    } else {
        $(".options").css({fontSize: "2.5vh"});
    }
    $(".patient").attr("src","assets/images/patient"+ (nPatientNum+1) +".svg" );
    showPatient();
}

function finishExer() {
    nResaults = 10-nMistakes;
    $("body").css({backgroundImage: 'url("assets/images/openendbg.svg")'})
    $(".closing").show();
    $(".game").hide();
    $(".start").css({bottom: "-12%"});
    $(".start").off("touchend");
    $(".resaults").html("עניתם נכון על " + nResaults + " שאלות מתוך 10.");
    $(".start-text").html(nResaults+"/10");
}