var story = '*בתאריך 12/5/20* *בשעה 15:00* הגעתי, *חופי* שתפקידי הוא *החופל של בה"ד 10*, למטווחים *לרב"ט ישראל ישראלי*, *מספר אישי 1234567*, בן 19 המשרת בבה"ד 10, ש*נפצע כ-5 דקות קודם* מ*כדור שנפלט* במטווח\.כשהגעתי אליו, הוא היה *בהכרה מלאה*, צרח מכאבים, *ללא פגיעה בנתיב אוויר* ו*ללא פגיעה בנשימה*, עם *חור ירי בזרוע ימין* ושטף דם שפורץ ממנו בפולסים  \.*הנחתי CAT* שעצר את הדימום *בשעה 15:01*\.החייל התנשם במהירות, מדדתי *26 נשימות* בדקה, ומד הסטורציה שהנחתי לו על האצבע הראה *סטורציה 97 %* עם *דופק  של 110 פעימות בדקה*\.לאחר מכן מדדתי *לחץ דם, שהיה 100 / 70 ממ"כ*,  המטופל *לא בהלם*\.בסריקת הדימומים ולאחר מכן *בהפשטה* *ובהפיכה* לא מצאנו דימומים נוספים\.העלתי אותו עם 2 חבר\'ה נוספים על אלונקה וכיסיתי אותו בשמיכת מילוט\.העברתי דיווח *למרפאת קריית ההדרכה*, ומנהל האירוע אמר שיגיעו בעוד כ7 דקות\.*פתחתי לו וריד*, ובשיחה נוספת עם *המטפל הבכיר* *שבאמבולנס* הוא אמר שהם מגיעים למטווחים עוד 3 דקות\.הם הגיעו בזמן ולאחר שהמטפל הבכיר סיים לבצע הערכה - כ3 דקות נוספות מהגעתם - נתן לפצוע *אקטיק* לשיכוך הכאב\.הם העמיסו את ישראל לאמבולנס\.ראיתי שהם חיברו אותו *לחמצן* והחובש הכריז שהכריז שהסטורציה עלתה ל98%\.בשעה 15:10 צוות אר"ן קריית ההדרכה התחיל *פינוי דחוף* על גבי האמבולנס *לבית חולים סורוקה*\. בדרך לבית החולים לאחר סיום *הטיפול הראשוני כחובש* התחלתי למלא טופס 101 עם *פרטיו של ישראל ישראלי* בזמן *שדוקטור דוקטור* (המט"ב) היה אחראי על הטיפול '; var wordBank = [];
var draggArr = [];
var storyHTML = "";
window.onload = () => {
    document.querySelector(".i-icon").addEventListener("click", onClickI);

    screenHeight();
    window.onresize = screenHeight;
    initDrag();
    setFirstScreen();
    setMidSummery();
    set101();
}
var countMark = 0;

function onClickI() {
    // document.querySelector(".home-page").classList.add("inactive");
    // document.querySelector(".info").classList.remove("inactive");
    // void document.querySelector(".info").offsetWidth;
    document.querySelector(".info").classList.add("transition");
    document.querySelector(".play-icon").addEventListener("click", onClickPlay);

}

function onClickPlay() {
    
    document.querySelector(".info").classList.remove("transition");
    // document.querySelector(".home-page").classList.remove("inactive");

    // document.querySelector(".info").classList.add("inactive");
}



function screenHeight(){
    let emptySpace = window.innerHeight - document.querySelector("header").offsetHeight;
    let screens = document.querySelectorAll(".screen");
    for (let i = 0; i < screens.length; i++) {
        const screen = screens[i];
        screen.style.height =  emptySpace + "px";
    }
}

// set marking screen
// set wordBank 
function setFirstScreen() {
    let words = story.match(/\S+/g);
    // let storyHTML = "";
    let word = "";

    // go over every word in story
    // put every word/sentence(surrounded by *xxx*) that needs to be marked in a "to-mark" div
    // put any other word in a "word" div
    for (let i = 0; i < words.length; i++) {
        storyHTML += " ";
        word = words[i];

        // there is a * in the word => class="to-mark"
        if (word.search(/\*/) != -1) {
            storyHTML += word.substring(0, word.search(/\*/));
            word = word.substring(word.search(/\*/) + 1);

            // there isnt a closing * in the word => add words until there is 
            if (word.search(/\*/) == -1) {
                storyHTML += "<div class='to-mark'>" + word;
                if (i < words.length - 1) {
                    i++;
                    word = words[i];

                    while (word.search(/\*/) == -1) {
                        console.log(word);
                        storyHTML += " " + word;
                        i++;
                        if (i < words.length) {
                            word = words[i];
                        }
                        else {
                            break;
                        }
                    }
                }
                storyHTML += " " + word.substring(0, word.search(/\*/)) + "</div>";
                storyHTML += word.substring(word.search(/\*/) + 1);
            }
            // there is a closing * in the word => add the word to storyHTML(in a to-mark div)
            else {
                storyHTML += "<div class='to-mark'>" + word.substring(0, word.search(/\*/)) + "</div>" + word.substring(word.search(/\*/) + 1);
            }
        }
        // there is not a * in the word => class="word"
        else {
            storyHTML += "<div class='word'>" + word + "</div>";
        }

    }

    // add story to speech bubble
    document.querySelector(".speech").innerHTML = storyHTML;

    // add listeners for words that need to be marked
    let toMark = document.querySelectorAll(".speech > .to-mark");
    for (let index = 0; index < toMark.length; index++) {
        // toMark[index].innerHTML = toMark[index].innerHTML.replace(/(<div class="word">|<\/div>)/g, "");s
        wordBank.push(toMark[index].innerText);
        toMark[index].addEventListener("click", mark);
    }

    //add listeners for words that *DONT* need to be marked
    let wrong = document.querySelectorAll(".speech >.word");
    for (let index = 0; index < wrong.length; index++) {
        wrong[index].addEventListener("click", mark);
    }

    document.querySelector(".marking .counter").innerText = "0/" + document.querySelectorAll(".marking .to-mark").length;
}

/**
 * on click word that needs to be marked
 * @param {Event} event 
 */
function mark(event) {
    let element = event.currentTarget;
    element.removeEventListener("click", mark);
    element.classList.add("marked");
    if (element.className.includes("word")) {
        setTimeout(() => {
            element.classList.remove("marked");
            element.addEventListener("click", mark);
        }, 1000);
    }
    else if (element.className.includes("to-mark")) {
        countMark++;
        document.querySelector(".marking .counter").innerText = countMark + "/" + document.querySelectorAll(".marking .to-mark").length;

    }

    // all words marked ->
    if (document.querySelectorAll(".marking .to-mark").length ==
        document.querySelectorAll(".marking .to-mark.marked").length) {
        setTimeout(midSummery, 1000);
    }
}

function setMidSummery() {
    for (let index = 0; index < wordBank.length; index++) {
        const element = wordBank[index];
        let div = document.createElement("div");
        div.innerText = element;
        div.classList.add("highlight");
        div.classList.add("blue");
        document.querySelector(".mid-summery .word-bank").appendChild(div);
    }

    document.querySelector(".mid-summery .next").addEventListener("click", goToTofes);
}

function midSummery() {
    document.querySelectorAll("body > .screen")[0].classList.add("inactive");
    document.querySelectorAll("body > .screen")[1].classList.remove("inactive");
}

function goToTofes(e) {
    document.querySelectorAll("body > .screen")[1].classList.add("inactive");
    document.querySelectorAll("body > .screen")[2].classList.remove("inactive");
}


function set101() {
    let divs = [document.createElement("div"), document.createElement("div"), document.createElement("div")];
    for (let index = 0; index < wordBank.length; index++) {
        const element = wordBank[index];
        let div = document.createElement("div");
        div.innerText = element;
        div.classList.add("highlight");
        div.classList.add("blue");
        // div.addEventListener("drag", drag);
        // div.addEventListener("dragstart", startDrag);
        // div.addEventListener("dragend", dropItem);
        div.addEventListener("touchmove", drag);
        div.addEventListener("touchend", dropItem);
        console.log(wordBank);
        // document.querySelector(".tofes .word-bank").appendChild(div);
        divs[index % 3].appendChild(div);
        draggArr.push(div);
    }
    document.querySelector(".tofes .word-bank").appendChild(divs[0]);
    document.querySelector(".tofes .word-bank").appendChild(divs[1]);
    document.querySelector(".tofes .word-bank").appendChild(divs[2]);

    document.querySelector(".tofes .story").innerHTML = storyHTML;

}

function changeDragTarget(el) {
    if (document.querySelector(".drag-target") != null) {
        document.querySelector(".drag-target").classList.remove("drag-target");
    }

    var parent = el.parentNode;
    var place = Array.prototype.indexOf.call(draggArr, el);


    document.querySelector(`.index${place}`).classList.add("drag-target");
}


function finishLomda(correctCounter) {

    if (correctCounter == draggArr.length) {
        document.querySelector(".tofes").classList.add("inactive");
        document.querySelector(".finish").classList.remove("inactive");

        console.log("finish");
    }

}

function helpTofes() {
    document.querySelector(".marking .help-tofes").classList.toggle("inactive");
}

function helpStory() {
    document.querySelector(".tofes .help-story").classList.toggle("inactive");
}




