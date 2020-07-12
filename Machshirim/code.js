const termList = [
    {
        quess: "מתי ניתן למטופל חמצן?",
        ans0: "מטופל בעל סימני מצוקה נשמתית",
        ans1: "מטופל שמבקש חמצן",
        ans2: "מטופל עם כאבי ראש שאומר שרק חמצן עוזר לו",
        ans3: "כל מטופל שמרגיש לא טוב",
        img: "#"
    },
    {
        quess: "איך מודדים התאמת מנתב אוויר (AW)?",
        ans0: "מקצה קו חיבור הלסת לתחילת הפה",
        ans1: "מהאוזן אל זווית הלסת",
        ans2: "לפי צבע וגיל המטופל",
        ans3: "מנסים להכניס ואם לא מצליחים מחליפים",
        img: "#"
    },
    {
        quess: 'למה מיועד מפוח הנשמה "אמבו"?',
        ans0: "הנשמה בלחץ חיובי",
        ans1: "הנשמה בלחץ שלילי",
        ans2: "העשרה בחמצן בלבד",
        ans3: 'צמצום ה"חלל המת" בעת הנשימה',
        img: "#"
    },
    {
        quess: "מה ההבדל בין מסיכת הנשמה שחורה למסיכת הנשמה שקופה בצהל?",
        ans0: 'שחורה עמידה לחל"כ ושקופה לא עמידה לחל"כ',
        ans1: 'שקופה עמידה לחל"כ ושחורה לא עמידה לחל"כ',
        ans2: "משיכה שקופה יותר אלסטית אך מתבלה מהר יותר ממסיכה שחורה",
        ans3: "אין הבדל בין המסיכות",
        img: "#"
    },
    {
        quess: "מהם חלקי האמבו?",
        ans0: "מחבר T, מסיכה, מפוח וחיבור לחמצן",
        ans1: "שקית העשרה, מסיכה, מפוח",
        ans2: "מסיכה, מפוח, קפנו וחיבור לחמצן",
        ans3: "מסנן T מפוח, מסנן ויראלי וחיבור לחמצן",
        img: "#"
    },

    {
        quess: "כמה זמן ניתן להקדיש לביצוע סקשן?",
        ans0: "עד 30 שניות",
        ans1: "עד 10 שניות",
        ans2: "עד 40 שניות",
        ans3: "המבצע עוצר את הנשימה. מתי שנגמר לו האוויר הוא צריך להפסיק את הסקשן",
        img: "#"
    },
    {
        quess: "אם יש תקלה במכשיר הסקשן מה נעשה?",
        ans0: "נפנה הפרשות ידנית",
        ans1: "נתעקש על שימוש במכשיר",
        ans2: "נמשיך לשאוב עד שהחסימה תשתחרר",
        ans3: "נחליף קטטר וננסה שוב",
        img: "#"
    },
    {
        quess: "כיצד נניח את מיכל החמצן במהלך השימוש בו?",
        ans0: "בשכיבה כשהווסת כלפי כפות רגלי המטופל",
        ans1: "בעמידה לצד ראש המטופל",
        ans2: "בשכיבה כשהווסת כלפי ראש המטופל",
        ans3: "בידי המטפל- מעל המטופל",
        img: "#"
    },
    {
        quess: "מתי נכניס מנתב אוויר?",
        ans0: 'לכל מטופל שאינו מגיב לכאב',
        ans1: 'למטופל שאינו נושם בלבד',
        ans2: 'לכל מטופל הזקוק להעשרה בחמצן',
        ans3: 'אך ורק בנוכחות מטפל בכיר',
        img: "#"
    },
    {
        quess: "אם נפלט מנתב אוויר שלא כתוצאה מהפרשות מפיו של מטופל, מה נעשה?",
        ans0: "לא נחדיר אותו בחזרה",
        ans1: "ננקה ונחזיר לווסט לשימוש במטופל הבא",
        ans2: "נשפר קיבוע ראש ונחדיר אותו בחזרה",
        ans3: "ננקה אותו ונחדיר בחזרה",
        img: "#"
    },
    {
        quess: "באיזה קצב זרימה חובש ראשי לתת טיפול בחמצן?",
        ans0: "10 LPM",
        ans1: "5 LPM",
        ans2: "6 LPM",
        ans3: "25 LPM",
        img: "#"
    },
    {
        quess: "מהו נפח מפוח הנשמה מסוג אמבו?",
        ans0: "1 ליטר",
        ans1: '0.5 ליטר',
        ans2: '2 ליטר',
        ans3: "1.5 ליטר",
        img: "#"
    },
    {
        quess: "מה תפקיד שקית העשרה?",
        ans0: "ניתן לחברה לאמבו אך ורק בתוספת חיבור לחמצן לצורך העשרה בחמצן",
        ans1: "חיבורה לאמבו מעשיר את המטופל בעוד חמצן",
        ans2: "מגדילה את נפח ההנשמה ובכך מעשירה את הנשמת המטופל",
        ans3: "מונעת חדירה של מזהמים לאמבו",
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
const quesValue = ["0", "100", "200", "500", "1,000", "2,000", "5,000", "10,000", "80,000", "100,000", "200,000", "400,000", "800,000", "1,000,000", "1,000,000"];




var quessOrder = [];
var ansArr = [0, 1, 2, 3];
var currQues = 0;
var life = 0;
var timer;

if('serviceWorker' in navigator && location.hostname !== 'localhost'){
    let location = ""
    navigator.serviceWorker.register(location + 'sw.js');
}

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

