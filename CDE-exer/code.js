var nCurrStage = 1;
var nStepCounter = 1;
var elCurrPicked;
var bWasPicked = false;
var nMistakes = 0;
var nResaults = 0;
var bWasWrong = false;
var nPicked;
var nNumPicks = 0;
var bPressedAbout = false;

$(function(){
    $(".ok").on("touchend", removeTurn);
    $(".about").on("touchend", about);
    for(var i=1; i<=3; i++) {
        $("#exemination" + i).on("touchend", pressStage);
    }
});

function removeTurn(event) {
    $(".turn-div").hide();
}

function about() {
    if(!bPressedAbout) {
        bPressedAbout = true;
        $(".about-div").show();
        $(".head").html("CDE - אודות")
        $(".about").attr("src", "assets/images/about/play.svg");
    } else {
        bPressedAbout = false;
        $(".about-div").hide();
        $(".head").html("CDE")
        $(".about").attr("src", "assets/images/about.svg");
    }
}    

function pressStage(event) {
    if(Number(this.id.charAt(11)) === nCurrStage) {
        bWasWrong = false;
        nNumPicks = 0;
        for(var i=1; i<=3; i++) {
            $("#exemination" + i).hide();
            $("#exemination" + i).attr("src", "assets/images/exemination" + i + ".svg");
        }
        $("#exemination" + nCurrStage).off("touchend", pressStage);
        if (nCurrStage === 1) {
            $(".circle").show();
            $(".instructions").css({backgroundImage: 'url("assets/images/note3.svg")', width: "30%", paddingRight: "7%"});
            $(".instructions-text").html("נכון מאוד! עכשיו נעצור דימומים שיכולים להיות למטופל, שבניגוד לשלב הS, לא פורצים.");
            $(".instructions-text").css({width: '70%'});
            $(".next").show();
            $(".next").on("touchend", function() {
                $(".next").hide();
                $(".instructions").css({backgroundImage: 'url("assets/images/note5.svg")', height: "25%", bottom: "40%"});
                $(".instructions-text").html("בחר את הצעדים בשלב הC לפי הסדר:");
                $(".instructions-text").css({marginRight: "2.5%", marginTop: "-1%"});
                $(".circ-steps").css({display: "flex"});
                for(var i=1; i<=7; i++) {
                    $("#circ" + i).on("touchend", checkCirc);
                }
            });
        } else if (nCurrStage === 2) {
            $(".circle").attr("src", "assets/images/d.svg");
            $(".instructions-text").html("כל הכבוד! עכשיו נבדוק חסכים נוירולוגיים למטופל. אילו איברים נבקש ממנו להזיז?");
            $(".instructions-text").css({width: "65%", textAlign: "right", marginRight: "8%", marginTop: "1%"});
            $(".instructions").css({backgroundImage: 'url("assets/images/note3.svg")', width: "60%", height: "80%", marginRight: "0.5%", paddingTop: "1%", bottom: "3%"});
            $(".options").css({display: "flex"});
            for(var i = 1; i<=3; i++) {
                $("#option" + i).on("touchend", pickAnswer);
            }
            $(".check").show();
            $(".check").on("touchend", checkRadio);
        } else if (nCurrStage === 3){
            $(".circle").attr("src", "assets/images/e.svg");
            $(".instructions-text").html("נכון מאוד! עכשיו נכין את המטופל לפינוי. מהם הצעדים בשלב זה? ");
            $(".instructions-text").css({width: "85%", textAlign: "right", marginRight: "8%", marginTop: "6%"});
            $(".instructions").css({backgroundImage: 'url("assets/images/note3.svg")', width: "60%", height: "70%", marginRight: "0.5%", paddingTop: "2%", bottom: "3%"});
            $(".answers").show();
            for(var i=1; i<=3; i++){
                $("#answer" + i).on("touchend", pickAnswer2);
            }
            $(".check").show();
            $(".check").css({marginRight: "110%", marginBottom: "-62%" });
            $(".check").on("touchend", checkAnswer);
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

function checkCirc(event) {
    if(Number(this.id.charAt(4)) === nStepCounter) {
        bWasWrong = false;
        nNumPicks = 0;
        $(this).css({backgroundImage: 'url("assets/images/' + this.id +'.svg")'});
        $(this).off("touchend", checkCirc);
        nStepCounter++;
        if(nStepCounter > 7) {
            $(".injury").hide();
            $(".instructions").css({backgroundImage: 'url("assets/images/note1.svg")'});
            $(".instructions").css({width: "30%", height: "60%", bottom: "5%", marginRight: "0.5%"}); 
            for(var i=1; i<=7; i++) {
                $("#circ" + i).hide();
            }
            $(".instructions-text").html("כל הכבוד! מדדתם למטופל 30 פעימות לב ב15 שניות. האם התוצאה מראה על דופק תקין?");
            $(".instructions-text").css({marginTop: "8%", marginRight: "0"});
            $(".yes-or-no").css({display: "flex"});
            $(".answer").on("touchend", checkPalse);
           
        }
    } else {
        $(this).css({backgroundImage: 'url("assets/images/exemination3-x.svg")'});
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

function shiftBack() {
    $("#"+elCurrPicked).css({backgroundImage: 'url("assets/images/note4.svg")'});
}

function checkPalse(event) {
    $(".answer").off("touchend", checkPalse);
    if(this.id === "no") {
        $(".instructions-text").html('נכון מאוד!');
    } else {
        $(".instructions-text").html("טעות!");
        nMistakes++;
    }
    $(".instructions-text").css({marginTop: "3%", marginRight: "-1%"});
    $(".instructions-text").after('<p class="palse">דופק כמותי מודדים במשך 15 שניות, ומכפילים את מספר הפעימות ב4 כדי לקבל את מספר הפעימות בדקה. מספר פעימות תקין הוא 60-90 פעימות בדקה.</p> <p class="palse">30X4=120</p>');
    $(".instructions").css({height: "75%", width: "35%", marginRight: "0", marginTop: "10%", paddingRight: "-=3%"});
    $(".next").show();
    $(".next").css({bottom: "8%", right: "47%"})
    $(".next").on("touchend", nextStage);
    $(".yes-or-no").hide();
}              

function nextStage(event) {
    nCurrStage++;
    $(".next").off("touchend", nextStage);
    $(".next").hide();
    $(".nextstep").hide();
    $(".instructions").css({height: '20%', marginTop: '15%', paddingTop: '3%', paddingBottom: '0', width: '24%', backgroundImage: 'url("assets/images/note5.svg")'});
    for(var i = 1; i<=3; i++) {
        $("#exemination" + i).show();
        $("#exemination" + i).css({backgroundImage: 'url("assets/images/exemination' + i + '.svg")'});
    }
    for(var i=1; i<=nCurrStage-1; i++) {
        $("#exemination" + i).css({opacity: "0.7"});
    }
    $(".instructions-text").html("מה השלב הבא בבדיקה?");
    $(".instructions-text").css({width: "70%", marginTop: "-3%", textAlign: "center", marginRight: "-3%"});
    $(".options").hide();
    if (nCurrStage === 2) {
        $(".palse").hide();
        $(".yes-or-no").hide();
    } else if (nCurrStage === 3) {
        $(".feedback").hide();
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

function pickAnswer2(event) {
    $(this).attr("src", "assets/images/option-marked.svg");
    $(this).off("touchend", pickAnswer2);
    if(bWasPicked) {
        $("#answer" + nPicked).attr("src", "assets/images/option.svg");
        $("#answer" + nPicked).on("touchend", pickAnswer2);
    } else {
        bWasPicked = true;
    }
    nPicked = Number(this.id.charAt(6));
}

function checkRadio(event) {
    $(".feedback").show();
    if(nPicked === 1) {
        nNumPicks = 0;
        $(".option").off("touchend", pickAnswer);
        $(".feedback").attr("src", "assets/images/vee.svg");
        $(".check").off("touchend", checkRadio);
        $(".check").hide();
        $(".next").show();
        $(".next").css({marginTop: "60%", marginRight: "37%"});
        $(".next").on("touchend", nextStage );
    } else {
        $(".feedback").attr("src", "assets/images/x.svg");
        if(!bWasWrong) {
            nMistakes++;
        }
        nNumPicks++;
        if(nNumPicks > 0) {
            bWasWrong = true;
        }
    }
}

function checkAnswer(event) {
    if(nPicked === 2) {
        nNumPicks = 0;
        $(".option2").off("touchend", pickAnswer2);
        $(".feedback").attr("src", "assets/images/vee.svg");
        $(".check").off("touchend", checkAnswer);
        $(".check").hide();
        $(".next").show();
        $(".next").css({marginTop: "60%", marginRight: "57%"});
        $(".next").on("touchend", function(){
            $(".answers").hide();
            $(".feedback").hide();
            $(".instructions-text").html("כל הכבוד!");
            $(".instructions-text").css({marginRight: "20%", width: "55%", fontWeight: "600", marginTop: "8%"});
            $(".instructions-text").after("<p class=extra>לא נעצור דימומים של המטופל מהפופיק ומעלה מחשש להחמרת פגיעת חזה.</p>"); 
            $(".instructions").css({backgroundImage: 'url("assets/images/note1.svg")', width: "30%", height: "70%", marginRight: "0.5%", paddingTop: "3%", bottom: "3%", marginTop: "10%"});
            $(".yes-or-no").show();
            $("#yes").html("נכון");
            $("#no").html("לא נכון");
            $(".answer").on("touchend", checkBleeding)
        });
    } else {
        $(".feedback").attr("src", "assets/images/x.svg");
        if(!bWasWrong) {
            nMistakes++;
        }
        nNumPicks++;
        if(nNumPicks > 0) {
            bWasWrong = true;
        }
    }
    $(".feedback").show(); 
}

function checkBleeding(event) {
    if(this.id ===  "yes") {
        $(".instructions-text").html("נכון מאוד!");
    } else {
        $(".instructions-text").html("טעות!");
        nMistakes++;
    }
    $(".instructions-text").css({marginRight: "17%", marginTop: "10"});
    $(".extra").html("אין לעצור דימומים מנקודת הפופיק ומעלה.");
    $(".extra").css({marginTop: "25%"});
    $(".yes-or-no").hide();
    $(".next").show();
    $(".next").css({right: "-10%", bottom: "10%"});
    $(".next").on("touchend", finishExer);
}

function finishExer(event) {
    $(".circle").hide();
    $(".extra").hide();
    $(".yes-or-no").hide();
    $(".instructions").hide();
    $(".man").hide();
    nResaults = 14-nMistakes;
    $("body").css({backgroundImage: 'url("assets/images/bg8.svg")'});
    $(".closing").show();
    $(".resaults").html("הצלחתם " + nResaults + " שאלות מתוך 14.");
}