var palseText = [
  {
      "text": 'במקרה של טראומה יש למדוד דופק במשך <input type="text" class="input text1" /> שניות ולהכפיל ב <input type="text" class="input text2" />. <br> במקרה של שגרה יש למדוד דופק במשך <input type="text" class="input text3" /> שניות ולהכפיל ב <input type="text" class="input text4" />.'
  },
  {
      "text": "בבדיקה נמצא כי הדופק הוא 86. האם זהו דופק תקין?"
  }
];

var breathingText = [
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

var feverText = [
  {
      "text": 'לפני שנמדוד חום עלינו להכין<br> את כלל החומרים הנדרשים לביצוע הבדיקה. אחד מהחומרים האלו הוא <b>סביעור.</b>'
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
      "title": "על המיכל יש לשים <br>פתק, מה עלינו לרשום בו?",
      "1": "שם החומר, שם המכין ושם החומר הפעיל",
      "2": 'שם המכין, "רעיל" ותאריך הכנה',
      "3": '"רעיל", שם המרפאה ושם החומר הפעיל'
  },
  {
      "title": "מדוע עלינו לרשום את <br> השם שלנו על הפתק? ",
      "1": 'על מנת שידעו למי המיכל שייך',
      "2": 'על מנת שידעו מי החובש התורן',
      "3": "על מנת שידעו למי לפנות במידה ויש תקלה"
  },
  {
      "title": "מה הסיבה בגללה אנחנו <br>שמים צמר גפן בפעמונית?",
      "1": 'כדי למנוע פגישה של המדחום (החלק הסופי) בברזל הפעמונית.',
      "2": "כדי להשאיר את המדחום לח.",
      "3": 'כדי להעמיד את המדחום בפעמונית בצורה טובה'
  },
  {
      "title": "לאחר בדיקת החום,<br> מהו הטווח התקין לטמפרטורת הגוף?",
      "1": "PO - 36-38, PR - 36.5-38.5",
      "2": 'PO - 36-37.5, PR - 36.5-38',
      "3": 'PO - 36.5-38, PR - 36-37'
  },
  {
      "title": "על הפעמונית צריך<br> להיות כתוב מה סוג המדחום. מהן האפשרויות?",
      "1": 'PR - בדיקה בפה, PO - בדיקה רקטאלית' ,
      "2": 'PO - בדיקה בפה, OR - בדיקה רקטאלית',
      "3": "PO - בדיקה בפה, PR - בדיקה רקטאלית"
  }
];

var pressureText = [
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

var urineText = [
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
var elCurrDragged;
const CORRECT_1 = 15;
const CORRECT_2 = 4;
const CORRECT_3 = 30;
const CORRECT_4 = 2;
var nPalseCounter = 0;
var nPicked = 0;
var bWasPicked = false;
var nCorrect = 0;
var bPressedAbout = false;
var elem = document.querySelector("html");
var strCurrId;
var nBreathingCounter = 0;
var nStepCounter = 1;
var nCurrStep = 0;
var nQuestionCounter = 0;
var bLoaded = false;
var nWaterCounter = 1;
var elCurrDragged;
var bWasWrong = false;
var nNumPicks = 0;
var bPenCanDrag = false;
var bCottonCanDrag = false;
var nCupCounter = 1;

$(function(){
    $(".about").on("touchend", about);
    $(".navigate").on("touchend", Home);
    $(".start").on("touchend", start);
});

function Home(event) {
    window.location.href = "https://mador-till-prod.github.io/BHD-10-Medics/big-site/";
}

function about(event) {
    if(!bPressedAbout) {
        bPressedAbout = true;
        $(".about-div").show();
    } else {
        bPressedAbout = false;
        $(".about-div").hide();
    }
}

function start(event) {
    openFullscreen();
    $(".opening").hide();
    $(".exams").show();
    $("body").css({direction: "ltr"});
    for(var i=1; i<=5; i++) {
        $(".exam" + i).on("touchend", goToExam);
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

function goToExam(event) {
  strCurrId = this.id;
  $(this).off("touchend", goToExam);
  $(".opening-game").hide();
  $(".header").hide();
  $("." + this.id + "-game").show();
  $("body").css({direction: "rtl"});
  if(this.id === "palse") {
    palseStart();
  } else if(this.id === "breathing") {
    breathingStart();
   }else if(this.id === "fever") {
     feverStart();
   } else if(this.id === "pressure") {
    pressureStart();
   } else if(this.id === "urine") {
      urineStart();
   }
}

function palseStart(event) {
  $(".question").hide();
  $(".options").hide();
  $("body").css({backgroundImage: 'url("assets/images/bg2.svg")'});
  $(".objects").on("touchend", palseNext);
}

function palseNext(event) {
  if(this.id === "clock") {
      $(".objects").off("touchend", palseNext);
      $(".question").show();
      $(".palse-question").html(' <h1 class="question-text"></h1> <div class="options"> <div class="option1 div"><img class="option" id="palse-option1" src="assets/images/option.svg" /><p class="answer1 answer-text">כן</p></div> <div class="option2 div"> <img class="option" id="palse-option2" src="assets/images/option.svg" /> <p class="answer2 answer-text">לא</p></div></div><img class="absolute check" src="assets/images/check.svg" /><img class="absolute feedback" src="assets/images/vee.svg" /> ');
      $(".palse-question").css({top: "12%", height: "34%", paddingTop: "5%", paddingRight: "5%", width: "56%", right: "17%"});
      $(".options").hide();
      $(".question-text").html(palseText[nTextCounter]["text"]);
      nTextCounter++;
      $(".check").on("touchend", palseCheck);
  } else {
      $(".x").show()
      $(".x").delay(150).fadeOut(500);
  }
}

function palseCheck(event) {
  $(".check").off("touchend", palseCheck);
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
      setTimeout(palseContinue, 1500);
  } else {
      $(".check").on("touchend", check);
  }
}

function palseContinue() {
  $(".feedback").hide();
  $(".question").hide();
  $("body").css({backgroundImage: 'url("assets/images/bg3.svg")'});
  $(".patient1").hide();
  $(".patient-div").show();
  $(".clock").remove();
  $(".hand").before('<p class="objects-text">גררו את היד למקומות בגוף בהם ניתן לבדוק דופק</p>');
  $(".object-div").css({bottom: "1.3%"});
  $(".hand").on("touchmove", palseDrag);
  $(".hand").on("touchend", palseDropItem);
  $(".hand").on("touchcancel", palseDropItem);
  window.dragged = $(".dragover");
}

if (!('ClientRect' in window)) window.ClientRect = DOMRect;
/**
* 
* @param {TouchEvent} e 
*/
function palseDrag(e) {
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
function palseDropItem(event) {
  for (let touch of event.changedTouches) {
      var point = {x: touch.clientX,y: touch.clientY};
      var hitTarget = false;
      for (let target of document.querySelectorAll(".palse-game .target")) {
          if (target.getBoundingClientRect().contains(point)) {
              $(target).css({visibility: "visible"});
              $(target).removeClass("target");
              nPalseCounter++;
              if(nPalseCounter === 6) {
                  $(".object-div").hide();
                  $("body").css({backgroundImage: 'url("assets/images/bg4.svg")'});
                  $(".hand").off("touchmove", palseDrag);
                  $(".hand").off("touchend", palseDropItem);
                  $(".hand").off("touchcancel", palseDropItem);
                  $(".question").show();
                  $(".question-text").html(palseText[nTextCounter]["text"]);
                  $(".options").show();
                  $(".question").css({top: "55%", height: "33%", paddingTop: "2%"});
                  $("#palse-option1").on("touchend", palsePickAnswer);
                  $("#palse-option2").on("touchend", palsePickAnswer);
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

function palsePickAnswer(event) {
  $(this).attr("src", "assets/images/option-marked.svg");
  $(this).off("touchend", palsePickAnswer);
  if(bWasPicked) {
      $("#palse-option" + nPicked).attr("src", "assets/images/option.svg");
      $("#palse-option" + nPicked).on("touchend", palsePickAnswer);
  } else {
      bWasPicked = true;
  }
  nPicked = Number(this.id.charAt(12));
}

function check2(event) {
  $(".check").off("touchend", check2);
  nCorrect = 1;
  if(nPicked === nCorrect) {
      palseFinishExer();
  } else {
      $(".check").on("touchend", check2);
      $(".feedback").attr("src", "assets/images/wrong.svg");
      $(".feedback").show();
  }
}

function palseFinishExer(event) {
  $(".palse-question").html('<img class="goodjob" src="assets/images/goodjob.svg" />');
  $(".question").css({paddingTop: "15%", height: "20%", paddingRight: "15%", width: "51%"});
  $(".back").show();
  $(".back").on("touchend", backToMenu);
}

function breathingStart(event) {
  $("body").css({backgroundImage: 'url("assets/images/bg2.svg")'});
  $(".question").css({top: "12%", height: "42%", });
  $(".next").css({top: "unset", left: "13%"});
  $(".breathing-object-div").show();
  $(".objects-breathing").on("touchmove", breathingDrag);
  $(".objects-breathing").on("touchend", breathingDropItem);
  $(".objects-breathing").on("touchcancel", breathingDropItem);
  window.dragged = $(".dragover");
} 

if (!('ClientRect' in window)) window.ClientRect = DOMRect;
/**
* 
* @param {TouchEvent} e 
*/
function breathingDrag(e) {
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
function breathingDropItem(event) {
  for (let touch of event.changedTouches) {
      var point = {x: touch.clientX,y: touch.clientY};
      var hitTarget = false;
      for (let target of document.querySelectorAll(".breathing-game .target")) {
          if (target.getBoundingClientRect().contains(point)) {
              if(nCurrStep === nStepCounter) {
                  $(".question-text").html(breathingText[nTextCounter]["text"]);
                  nTextCounter++;
                  if(this.id === "ear") {
                      $(".breathing-text").show();
                      $("#face").remove();
                      $("#chest").addClass("target");
                      nStepCounter++;
                  } else {
                      $(".objects-breathing").remove();
                      $(".breathing-object-div").html("<p>"+breathingText[nTextCounter]["text"]+"</p>");
                      $(".breathing-object-div").css({right: "8.5%", color: "rgb(78,117,130)", paddingRight: "2%", paddingLeft: "2%", textAlign: "center"});
                      $(".next").delay(1000).fadeIn();
                      $(".next").on("touchend", breathingFinishExer);
                      $(".next").css({bottom: "6%"});
                  }
              } else {
                  $(".x").show()
                  $(".x").delay(150).fadeOut(500);
              }
              hitTarget = true;
              break;
          } 
          if (!hitTarget) {
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

function breathingFinishExer(event) {
  $(".next").hide();
  $(".back").show();
  $(".breathing-object-div").hide();
  $(".closing").css({display: "flex"});
  $(".closing").html('<img class="goodjob" src="assets/images/goodjob.svg" />');
  $(".back").on("touchend", backToMenu);
}

function feverStart() {
  $("body").css({backgroundImage: 'url("assets/images/bg1.svg")'});
  $(".question").hide();
  $(".question").html('<h1 class="question-title"></h1><div class="options"><div class="option1 div"><img class="option" id="fever-option1" src="assets/images/option.svg" /><p class="answer1 answer-text"></p></div><div class="option2 div"> <img class="option" id="fever-option2" src="assets/images/option.svg" /> <p class="answer2 answer-text"></p></div><div class="option3 div"><img class="option" id="fever-option3" src="assets/images/option.svg" /><p class="answer3 answer-text"></p></div></div><img class="absolute check" src="assets/images/check.svg" /><img class="absolute feedback" src="assets/images/vee.svg" /> <p class="drag">גררו את השלב הבא!</p>')
  $(".question").css({top: "8%", height: "42%", paddingTop: "7%", paddingRight: "6%", width: "58%", right: "17%"});
  $(".instructions").show();
  $(".instructions").html('<div class="text"></div>');
  $(".text").html(feverText[nTextCounter]["text"]);
  if(!bLoaded) {
      $("#water1").on("touchmove", feverDrag);
      $("#water2").on("touchmove", feverDrag);
      $(".savior").on("touchmove", feverDrag);
      $(".penpaper").on("touchmove", feverDrag);
      window.dragged = $(".dragover");
      $("#water1").on("touchend", feverDropItem);
      $("#water1").on("touchcancel", feverDropItem);
      $("#water2").on("touchend", feverDropItem);
      $("#water2").on("touchcancel", feverDropItem);
      $(".savior").on("touchend", feverDropItem);
      $(".savior").on("touchcancel", feverDropItem);
      $(".penpaper").on("touchend", feverDropItem);
      $(".penpaper").on("touchcancel", feverDropItem);
      bLoaded = true;
  }
}

if (!('ClientRect' in window)) window.ClientRect = DOMRect;
/**
* 
* @param {TouchEvent} e 
*/
function feverDrag(e) {
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
function feverDropItem(event) {
  for (let touch of event.changedTouches) {
      var point = {x: touch.clientX,y: touch.clientY};
      for (let target of document.querySelectorAll(".fever-game .target")) {
          if (target.getBoundingClientRect().contains(point)) {
              if (nCurrStep === nStepCounter) {
                  $(this).off("touchmove", feverDrag);
                  $(this).off("touchend", feverDropItem);
                  $(this).off("touchcancel", feverDropItem);
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
                      $(this).on("touchmove", feverDrag);
                      $(this).on("touchend", feverDropItem);
                      $(this).on("touchcancel", feverDropItem);
                      showQuestion();
                  } else if(!bPenCanDrag) {
                      $(".penpaper").on("touchmove", feverDrag);
                      $(".penpaper").on("touchend", feverDropItem);
                      $(".penpaper").on("touchcancel", feverDropItem);
                  } else if(this.id === "cottonsoaked") {
                      if(bCottonCanDrag) {
                          $(this).hide();
                          showQuestion();
                      }
                  } else if(!bCottonCanDrag) {
                      $(".cottonsoaked").on("touchmove", feverDrag);
                      $(".cottonsoaked").on("touchend", feverDropItem);
                      $(".cottonsoaked").on("touchcancel", feverDropItem);
                  } else if(this.id === "madhom") {
                      $(".bell").attr("src", "assets/images/paamonitmadhom.svg");
                      $(this).hide();
                      showQuestion();
                  } else if(this.id === "pen") {
                      $(".bell").attr("src", "assets/images/paamonitpo.svg")
                      $(".question").html('<img class="goodjob" src="assets/images/goodjob.svg" />');
                      $(".question").css({height: "19%", paddingTop: "9%", paddingRight: "11%", width: "51%"});
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
      feverStart();
  } else {
      $("#container").attr("src", "assets/images/container2.svg");
      showQuestion();
  }
  $(elCurrDragged).attr("src", "assets/images/" + elCurrDragged.classList[2] + "tilt.svg");
  $(elCurrDragged).delay(1000).fadeOut();
}

function showQuestion() {
    bWasPicked = false;
    $(".drag").hide();
  $(".instructions").hide();
  $(".question").show();
  $(".question-title").html(questions[nQuestionCounter]["title"])
  for(var i = 1; i<=3; i++) {
      $(".answer" + i).html(questions[nQuestionCounter][i]);
      document.querySelector(".fever-game .option"+i+".div").querySelector("img").setAttribute("src", "assets/images/option.svg");
      document.querySelector(".fever-game .option"+i+".div").addEventListener("touchend",feverPickAnswer);
  }
  $(".check").on("touchend", feverCheck);
}

function feverPickAnswer(event) {
  let img = event.currentTarget.querySelector("img");
  $(img).attr("src", "assets/images/option-marked.svg");
  $(this).off("touchend", feverPickAnswer);
  if(bWasPicked) {
      let pickedImg = document.querySelector(".fever-game .option"+nPicked+".div").querySelector("img");
      $(pickedImg).attr("src", "assets/images/option.svg");
      document.querySelector(".fever-game .option"+nPicked+".div").addEventListener("touchend", feverPickAnswer);
  } else {
      bWasPicked = true;
  }
  nPicked = Number(this.classList[0].charAt(6));
}

function feverCheck(event) {
  nCorrect = 0;
  for(var i = 1; i<=3; i++) {
      $("#fever-option" + i).off("touchend", feverPickAnswer);
  }
  $(".check").off("touchend", feverCheck);
  if(nQuestionCounter === 2) {
      nCorrect = 1;
  } else if(nQuestionCounter === 0 || nQuestionCounter === 3) {
      nCorrect = 2;
  } else if(nQuestionCounter === 1 || nQuestionCounter === 4) {
      nCorrect = 3;
  }
  if(nPicked === nCorrect) {
      $(".feedback").attr("src", "assets/images/vee.svg");
      if(nQuestionCounter !== 1) {
        $(".drag").show();
      }
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
  }
  $(".feedback").show();
  $(".feedback").delay(1000).fadeOut(1);
}

function showInstructions() {
  $(".question").hide();
  $(".instructions").show();
  feverStart();
  if (nTextCounter === 3) {
      nStepCounter++;
      $(".container").hide();
      $(".container").css({right: "60%", bottom: "35%"});
      $(".container").fadeIn(500);
      $(".fever-test").fadeIn(500);
      $(".cotton").on("touchmove", feverDrag);
      $(".cotton").on("touchend", feverDropItem);
      $(".cotton").on("touchcancel", feverDropItem);
      for(var i=6; i<=7; i++) {
          $(".step" + i).on("touchmove", feverDrag);
          $(".step" + i).on("touchend", feverDropItem);
          $(".step" + i).on("touchcancel", feverDropItem);
      }
  } 
}

function pressureStart(event) {
  $(".closing").hide();
  $(".question").html('<h1 class="question-text"></h1><div class="options"><div class="option1 div"><img class="option" id="pressure-option1" src="assets/images/option.svg" /><p class="answer1 answer-text">כן</p></div><div class="option2 div"><img class="option" id="pressure-option2" src="assets/images/option.svg" /><p class="answer2 answer-text">לא</p></div></div><img class="absolute check" src="assets/images/check.svg" /><img class="absolute feedback" src="assets/images/vee.svg" /> ')
  $(".question").hide();
  $(".question").css({  height: "31%", paddingTop: "2%", paddingRight: "5%"});
  $("body").css({backgroundImage: 'url("assets/images/bg5.svg")'});
  $(".pressure-check-text").html(pressureText[nTextCounter]["text"]);
  nTextCounter++;
  $(".pressure-object-div").css({flexDirection: "column", right: "4%", width: "92%", bottom: "2%"});
  $(".next").delay(1000).fadeIn();
  $(".next").css({bottom: "unset", top: "6%", left: "6%"});
  $(".next").on("touchend", pressureNext);
} 

function pressureNext(event) {
  $("body").css({backgroundImage: 'url("assets/images/bg1.svg")'});
  $(".next").hide();
  $(".pressure-object-div").hide();
  $(".arrow").hide();
  $(".window").attr("src", "assets/images/window.svg");
  $(".pressure-div").show();
  $(".manjet").on("touchmove", pressureDrag);
  $(".stetoscope").on("touchmove", pressureDrag);
  window.dragged = $(".dragover");
  $(".manjet").on("touchend", pressureDropItem);
  $(".manjet").on("touchcancel", pressureDropItem);
  $(".stetoscope").on("touchend", pressureDropItem);
  $(".stetoscope").on("touchcancel", pressureDropItem);
}

if (!('ClientRect' in window)) window.ClientRect = DOMRect;
/**
* 
* @param {TouchEvent} e 
*/
function pressureDrag(e) {
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
function pressureDropItem(event) {
  for (let touch of event.changedTouches) {
      var point = {x: touch.clientX,y: touch.clientY};
      for (let target of document.querySelectorAll(".pressure-game .target")) {
          if (target.getBoundingClientRect().contains(point)) {
              if(nCurrStep === nStepCounter) {
                  $(this).on("touchmove", pressureDrag);
                  $(this).off("touchend", pressureDropItem);
                  $(this).off("touchcancel", pressureDropItem);
                  if(nCurrStep === 1) {
                      $(this).css({bottom: "2%"});
                      $(".pressure-text").show();
                      $("#arm").removeClass("target");
                      $("#arm").hide();
                      $(this).addClass("target");
                  } else {
                      $(this).hide();
                      $("#manjet").attr("src", "assets/images/manjetstetoscope.svg");
                      setTimeout(function(){
                        $("#manjet").attr("src", "assets/images/manjetstetoscopehighlight.svg");
                      }, 1000);
                      $("#manjet").on("touchend", pressManjet);
                  }
                  nStepCounter++;
                  $(".pressure-text").html(pressureText[nTextCounter]["text"]);
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
  $(this).attr("src", "assets/images/stetoscopepressed.svg");
  $(".pressure-text").html(pressureText[nTextCounter]["text"]);
  $(".number").show();
  nTextCounter++;
  setTimeout(function(){
    $(".pressure-text").hide();
    bWasPicked = false;
    $(".question").show();
    $(".question-text").html(pressureText[nTextCounter]["text"]);
    document.querySelector(".pressure-game .option1.div").addEventListener("touchend",pressurePickAnswer);
    document.querySelector(".pressure-game .option2.div").addEventListener("touchend",pressurePickAnswer);
    $(".check").on("touchend", pressureCheck);
  }, 1500);
  
}

function pressurePickAnswer(event) {
    let img = event.currentTarget.querySelector("img");
  $(img).attr("src", "assets/images/option-marked.svg");
  $(this).off("touchend", pressurePickAnswer);
  if(bWasPicked) {
      let pickedImg = document.querySelector(".pressure-game .option"+nPicked+".div").querySelector("img");
      $(pickedImg).attr("src", "assets/images/option.svg");
      document.querySelector(".pressure-game .option"+nPicked+".div").addEventListener("touchend", pressurePickAnswer);
  } else {
      bWasPicked = true;
  }
  nPicked = Number(this.classList[0].charAt(6));
}


function pressureCheck(event) {
  $(".check").off("touchend", pressureCheck);
  nCorrect = 1;
  if(nPicked === nCorrect) {
    pressureFinishExer();
  } else {
      $(".check").on("touchend", pressureCheck);
      $(".feedback").attr("src", "assets/images/wrong.svg");
      $(".feedback").show();
  }
}

function pressureFinishExer() {
  $(".question").html('<img class="goodjob" src="assets/images/goodjob.svg" />');
  $(".question").css({paddingTop: "15%", height: "20%", paddingRight: "15%", width: "51%"});
  $(".back").show();
  $(".back").on("touchend", backToMenu);
}

function urineStart(event) {
  $("body").css({backgroundImage: 'url("assets/images/bg1.svg")'});
  $(".instructions").hide();
  $("#cup").on("touchend", urineNext);
  $("#gloves").on("touchend", urineNext);
  $("#urineguide").on("touchend", urineNext);
}

function urineNext(event) {
  if(nStepCounter !== 3) {
      nCurrStep = Number(this.classList[1].charAt(4));
  }
  if(nCurrStep === nStepCounter) {
      $(this).off("touchend", urineStart);
      $(".text").html(urineText[nStepCounter - 1]["text"]);
      if(!bLoaded) {
          $("#urinestick").on("touchmove", urineDrag);
          $("#urinestick").on("touchend", urineDropItem);
          $("#urinestick").on("touchcancel", urineDropItem);
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

if (!('ClientRect' in window)) window.ClientRect = DOMRect;
/**
* 
* @param {TouchEvent} e 
*/
function urineDrag(e) {
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
function urineDropItem(event) {
  for (let touch of event.changedTouches) {
      var point = {x: touch.clientX,y: touch.clientY};
      for (let target of document.querySelectorAll(".urine-game .target")) {
          if (target.getBoundingClientRect().contains(point)) {
              if (nCurrStep === nStepCounter) {
                  if(nStepCounter === 3) {
                      urineNext();
                      $(this).attr("src", "assets/images/urinestickcheck.svg");
                      $(this).css({width: "2vw", left: "unset", right: "33%", bottom: "23%"});
                      $("#cup").removeClass("target");
                      $("#urineguide").addClass("target");
                      $(this).removeClass("step3");
                      $(this).addClass("step5");
                  } else {
                      $(this).off("touchmove", urineDrag);
                      $(this).off("touchend", urineDropItem);
                      $(this).off("touchcancel", urineDropItem);
                      $(this).hide();
                      urineFinishExer();
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

function urineFinishExer() {
  $(".instructions").html('<img class="goodjob" src="assets/images/goodjob.svg" />');
  $(".instructions").css({paddingTop: "20%", height: "24%", paddingRight: "15%", width: "51%"});
  $(".back").show();
  $(".back").on("touchend", backToMenu);
}

function backToMenu(event) {
  $(".closing").css({display: "none"});
  $(".back").off("touchend", backToMenu);
  $(".back").hide();
  $("." + strCurrId + "-game").hide();
  $(".opening-game").show();
  $("#" + strCurrId).css({opacity: "0.5"});
  $("body").css({backgroundImage: 'url("assets/images/bg6.svg")', direction: "ltr"});
  $(".header").show();
  $(".question-text").html("");
  $(".text").html("");
  $(".next").off("touchend", breathingFinishExer);
  $(".next").off("touchend", pressureNext);
  nTextCounter = 0;
  nPicked = 0;
  nStepCounter = 1;
  nCurrStep = 0;
  nQuestionCounter = 0;
  bLoaded = false;
  bWasPicked = false;
  nWaterCounter = 1;
  nCorrect = 0;
  bWasWrong = false;
  nNumPicks = 0;
  bPenCanDrag = false;
  bCottonCanDrag = false;
  nCupCounter = 1;
}