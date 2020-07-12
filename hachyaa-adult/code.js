const termList = [
    {
        quess: "ממה מורכב משולש החיים?",
        ans0: "מערכת העצבים, מערכת הנשימה ומערכת ההובלה",
        ans1: "מערכת ההובלה, מערכת הנשימה ומערכת החומציות",
        ans2: "מערכת העצבים, מערכת הנשימה ומערכת העיכול",
        ans3: "מערכת העצבים, מערכת ההובלה ומערכת הפליטה",
        img: "#"
    },
    {
        quess: "מה ההבדל בין מוות קליני למוות מוחי?",
        ans0: "ממות קליני הוא הפיך בעוד מוות מוחי הוא בלתי הפיך",
        ans1: "ממות מוחי הוא הפיך בעוד מוות קליני הוא בלתי הפיך",
        ans2: "ממות קליני ומוות מוחי הם שני כינויים לאותו מצב ואין בניהם הבדל",
        ans3: "במוות קליני חובש חייב להתחיל החייאה ובמוות מוחי הוא לא חייב",
        img: "#"
    },
    {
        quess: 'מהו השלב הראשון הראשון בשרשרת ההישרדות?',
        ans0: "זיהוי, קריאה לעזרה והבאת דפיברילטור",
        ans1: "חיבור דפיברילטור ודפיברילציה מהירה",
        ans2: "החייאה בסיסית - BLS",
        ans3: 'החייאה מתקדמת ALS',
        img: "#"
    },
    {
        quess: "מהו עומק העיסויים שיש לבצע במבוגר?",
        ans0: 'כ- 5-6 ס"מ',
        ans1: 'כ-4-5 ס"מ',
        ans2: 'כ-3 ס"מ',
        ans3: 'כ-10 ס"מ',
        img: "#"
    },
    {
        quess: "מהו קצב עיסויים נכון?",
        ans0: "100-120 עיסויים בדקה",
        ans1: "בדיוק 100 עיסויים בדקה",
        ans2: "הכי מהר שאפשר",
        ans3: "60-100 בדקה",
        img: "#"
    },

    {
        quess: "מה תעשו במידה שבית החזה לא עולה בעת ההנשמה?",
        ans0: 'שיפור קיבוע ראש המטופל, שיפור אטימת המסיכה, הגדלת נפח ההנשמה ושלילת חסימת נ"א',
        ans1: "שיפור קיבוע ראש המטופל, חיפוש גוף זר בעזרת האצבעות, מתן הנשמה חזקה",
        ans2: "שיפור אטימת המסיכה, מתן הנשמה ארוכה ומתונה עד לשחרור החסימה, חיבור לחמצן ושקית העשרה",
        ans3: 'החלפת מסיכה, החלפת אמבו, הגדלת נפח ההנשמה ושלילת חסימת נ"א',
        img: "#"
    },
    {
        quess: "מהו קצב ההנשמות שתבצעו לאחר חזרת דופק לאחר החייאת מבוגר?",
        ans0: "הנשמה כל 5-6 שניות",
        ans1: "הנשמה כל 4-5 שניות",
        ans2: "הנשמה כל 6-7 שניות",
        ans3: "הנשמה כל 10 שניות",
        img: "#"
    },
    {
        quess: "מה תפקידו של מכשיר הדפיברילטור?",
        ans0: "לזהות מקרים חריגים של הפרעות קצב מסכנות חיים ולהורות על מתן שוק כדי לאפס את הפעילות החשמלית ולהחזיר את הלב לפעילות תקינה",
        ans1: "לייצר רישום חשמלי של קצב הלבעל מנת שנדע האם לתת שוק חשמלי או להמשיך בהחייאה",
        ans2: "לזהות מקרים חריגים של הפרעות קצב מסכנות חיים ולהורות על ביצוע החייאה ולהחזיר את הלב לפעילות תקינה",
        ans3: "לסייע למטפל בכיר לקבל החלטה על ביצוע החייאה מתקדמת - ALS במקרים של הפרעות קצב חריגות אשר דורשות מתן שוק חשמלי",
        img: "#"
    },
    {
        quess: "מהן שתי הפעולות החשובות ביותר בביצוע החייאה?",
        ans0: 'עיסויים ודפיברילציה מוקדמת',
        ans1: 'עיסויים והנשמות',
        ans2: 'דפיברילציה מוקדמת וביצוע החייאה מתקדמת',
        ans3: 'עיסויים ופתיחת נתיב אוויר',
        img: "#"
    },
    {
        quess: "באיזה מקרה אין לבצע פעולות החייאה?",
        ans0: "טראומה חודרת",
        ans1: "כשיש מטפל בכיר",
        ans2: "כשעברו יותר מ6 דקות מאיבוד הדופק",
        ans3: "טביעה",
        img: "#"
    }

    /* an example for question template 
    {
    //     quess: "שאלה",
    //     ans0: "תשובה נכונה",
    //     ans1: "תשובה 1",
    //     ans2: "תשובה 2",
    //     ans3: "תשובה 3",
    //     img: "URL של התמונה"
    //      if there are no url put "#"" insted
     }*/

];

//value of the questions
const quesValue = ["0", "100", "200", "500", "1,000", "5,000", "10,000", "80,000", "100,000", "500,000", "1,000,000", "1,000,000"];



var quessOrder = [];
var ansArr = [0, 1, 2, 3];
var currQues = 0;
var life = 0;
var timer;

window.onload = () => {
    document.querySelector(".i-icon").addEventListener("click", onClickI);
    startGame();

};

function startGame() {
    quessOrder = [];
    ansArr = [0, 1, 2, 3];
    currQues = 0;
    life = 0;
    //not on use make another order of the questions
    //createQuessOrder();

    if (document.querySelectorAll(".help.disable")[0]) {
        document.querySelector(".help.disable").style.visibility = "visible";
        document.querySelector(".help.disable").classList.remove("disable");
    }
    if (document.querySelectorAll(".help.disable")[1]) {
        document.querySelector(".help.disable").style.visibility = "visible";
        document.querySelector(".help.disable").classList.remove("disable");
    }

    document.querySelectorAll(".help")[0].addEventListener("click", onClickHelp);
    document.querySelectorAll(".help")[1].addEventListener("click", onClickHelp);

    enterText();

}

//the function enter the informaition the the specific place
function enterText() {

    //chaeck if there is an image to replace the background of the question
    if (termList[currQues].img != "#") {
        document.getElementById("quess-card").style.backgroundImage = `url("${termList[currQues].img}")`;
    }


    //enter the value of the money and the
    document.getElementById("quess-value").innerHTML = quesValue[currQues + 1];
    document.getElementById("money-bank").innerHTML = quesValue[currQues];


    //change the question text
    document.getElementById("quess-card").innerHTML = termList[currQues].quess;

    //shffel the answers array to make the answers random
    ansArr = shuffle(ansArr);

    //enter to the answers card the text and adds listeners
    var allNotes = document.querySelectorAll(".ans");
    for (var i = 0; i < ansArr.length; i++) {
        allNotes[i].innerHTML = termList[currQues][`ans${ansArr[i]}`];
        allNotes[i].addEventListener("click", cheack);
    }

    console.log("1");
    //enter the quess number
    document.getElementById("quess-count").innerHTML = `${currQues + 1}/${termList.length}`;
}


// the function checks if the user clicked on the right answer or not
function cheack(e) {
    currQues++;

    if (currQues == termList.length) {
        console.log("finel choice");
        if (e.currentTarget.textContent == termList[currQues - 1].ans0) {

            //change cards color- green color
            e.currentTarget.classList.add("correct");
        }
        else {
            //remove life counter and img
            document.querySelectorAll(".heart")[life].style.visibility = "hidden";
            life++;

            //change cards color
            //red color
            e.currentTarget.classList.add("worng");

            //green color- show the right answer
            var allNotes = document.querySelectorAll(".ans");
            for (var i = 0; i < ansArr.length; i++) {
                if (allNotes[i].textContent == termList[currQues - 1].ans0) {
                    allNotes[i].classList.add("correct");
                }
            }
        }
        timer = setTimeout(winMessege, 2500, e.currentTarget, document.querySelector(".correct"));
    }
    else {

        console.log(" not finel choice");
        console.log(e.currentTarget.textContent);
        console.log(termList[currQues].ans0);
        //cheack if the text in the card that has click is the same as the correct answer
        if (e.currentTarget.textContent == termList[currQues - 1].ans0) {

            //change cards color- green color
            e.currentTarget.classList.add("correct");

            timer = setTimeout(nextQuestionRight, 2500, e.currentTarget);
        }
        else {
            //remove life counter and img
            document.querySelectorAll(".heart")[life].style.visibility = "hidden";
            life++;

            //change cards color
            //red color
            e.currentTarget.classList.add("worng");

            //green color- show the right answer
            var allNotes = document.querySelectorAll(".ans");
            for (var i = 0; i < ansArr.length; i++) {
                if (allNotes[i].textContent == termList[currQues - 1].ans0) {
                    allNotes[i].classList.add("correct");
                    timer = setTimeout(nextQuestionWorng, 2500, e.currentTarget, allNotes[i]);
                }
            }
            //if the user lose the game
            if (life == 3) {
                timer = setTimeout(loseMessege, 2500, e.currentTarget, document.querySelector(".correct"));
                //clearInterval(timer);
            }
        }


    }

    //make the buttens un tocheable
    document.querySelector(".answer-place").classList.add("disable");

}

//the function make the question change and the cards came back to the original color- if the user was right
function nextQuestionRight(userAnswer) {
    document.querySelector(".answer-place").classList.remove("disable");
    userAnswer.classList.remove("correct");


    enterText();

    if (document.querySelector(".ans.disable")) {
        showHiddenAnswer();
    }
}

//the function make the question change and the cards came back to the original color- if the user was worng
function nextQuestionWorng(userAnswer, correctAnswer) {
    document.querySelector(".answer-place").classList.remove("disable");
    userAnswer.classList.remove("worng");
    correctAnswer.classList.remove("correct");

    enterText();

    if (document.querySelector(".ans.disable")) {
        showHiddenAnswer();
    }
}

//the function opens the losing page and closing the game page
function loseMessege(userAnswer, correctAnswer) {
    //remove the game page
    document.querySelector(".game").classList.add("inactive");

    //add losing page
    document.querySelector(".lose-page").classList.remove("inactive");


    //returns the cards to the right color
    document.querySelector(".answer-place").classList.remove("disable");
    userAnswer.classList.remove("worng");
    correctAnswer.classList.remove("correct");

    document.querySelector(".try-again").addEventListener("click", backToGame);
    currQues = 0;
}

//the function opens the wining page and closing the game page
function winMessege(userAnswer, correctAnswer) {
    document.querySelector(".game").classList.add("inactive");

    document.getElementById("money-bank").innerHTML = quesValue[currQues + 1];

    //remove inactive class from wining page
    document.querySelector(".win-page").classList.remove("inactive");

    document.querySelector(".answer-place").classList.remove("disable");
    userAnswer.classList.remove("worng");
    correctAnswer.classList.remove("correct");
    currQues = 0;
}

//the function make 2 answer and the button disapper.it keep that the correct answer will stay
function onClickHelp(e) {
    var allNotes = document.querySelectorAll(".ans");

    for (var i = 0; i < 2; i++) {
        //if the answer we wnat to disapper is the right one
        if (allNotes[i].textContent == termList[currQues].ans0) {
            //the next 2 answer wiil disapper
            allNotes[i + 2].style.visibility = "hidden";
            allNotes[i + 2].classList.add("disable");
        }
        else {
            //disapper this answer
            allNotes[i].style.visibility = "hidden";
            allNotes[i].classList.add("disable");
        }
    }

    //disapper the button
    e.currentTarget.classList.add("disable");
    e.currentTarget.style.visibility = "hidden";
}

//make a random array of the qustion didnwt use it in this program, an option for update
function createQuessOrder() {
    for (var i = 0; i < termList.length; i++) {
        quessOrder.push(i);
    }
    quessOrder = shuffle(quessOrder);
}

//init the game
function backToGame() {
    document.querySelector(".game").classList.remove("inactive");

    //remove inactive class from wining page
    document.querySelector(".lose-page").classList.add("inactive");


    for (var i = 0; i < document.querySelectorAll(".heart").length; i++) {
        document.querySelectorAll(".heart")[i].style.visibility = "visible";
    }

    startGame();
}

//show hidden buttons of help
function showHiddenAnswer() {
    document.querySelector(".ans.disable").style.visibility = "visible";
    document.querySelector(".ans.disable").classList.remove("disable");
    document.querySelector(".ans.disable").style.visibility = "visible";
    document.querySelector(".ans.disable").classList.remove("disable");
}

/**
 * take orgnaiz array and shffel it
 * @param {Array} arr 
 */
function shuffle(arr) {
    var tmp = arr.slice();
    for (var i = 0; i < arr.length; i++) {
        var index = Math.floor(Math.random() * tmp.length);
        arr[i] = tmp[index];
        tmp = tmp.slice(0, index).concat(tmp.slice(index + 1));
    }
    return arr;
}

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

