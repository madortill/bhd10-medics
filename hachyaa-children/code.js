const termList = [
    {
        quess: "כיצד נתייחס להחייאת ילד לעומת החייאת מבוגר?",
        ans0: 'ילדים הם לא "מבוגרים קטנים" ובהתאם לזאת נתאים את טכניקת ההחייאה שלנו',
        ans1: 'ילדים הם למעשה "מבוגרים קטנים" ובהתאם לזאת נתאים את טכניקת ההחייאה שלנו',
        ans2: 'לילדים סיכויי השרדות גבוהים ולכן אנו מבצעים החייאה שונה מאשר במבוגרים',
        ans3: "לילדים סיוכיי השרדות נמוכים ולכן ניתן לבחור שלא להתחיל החייאה על ילד",
        img: "#"
    },
    {
        quess: "מה מהבאים אינו הבדל אנטומי בין תינוקות למבוגרים?",
        ans0: "דופק נשימה איטיים יותר בתינוקות",
        ans1: "ראש גדול ביחס לגוף בתינוקות",
        ans2: "לשון גדולה בתינוקות",
        ans3: "נפח דם קטן בתינוקות",
        img: "#"
    },
    {
        quess: "מה מהבאים אינו גורם מוות נפוץ בילדים ותינוקות?",
        ans0: "הפרעות קצב",
        ans1: "מוות בעריסה",
        ans2: "מומי לב מולדים",
        ans3: "בעיה נשימתית",
        img: "#"
    },
    {
        quess: "כיצד נבצע עיסויים בילדים?",
        ans0: "בעזרת יד אחת",
        ans1: "בעזרת שני אגודלים או בעזרת שתי אבצעות",
        ans2: "בעזרת שתי ידיים",
        ans3: "בעזרת טפיחות על הגב",
        img: "#"
    },
    {
        quess: "היכן נחפש דופק בתינוקות?",
        ans0: "בעורק הברכיאלי",
        ans1: "בעורק הרדיאלי",
        ans2: "בעורק הקרוטידי",
        ans3: "בעורק הפמורלי",
        img: "#"
    },
    {
        quess: 'כיצד נפתח נתיב אוויר בתינוקות?',
        ans0: "נניח מצע רך מתחת לשכמות התינוק",
        ans1: "בעזרת הטיית הראש לאחור",
        ans2: 'אין צורך בפתיחת נ"א בתינוקות',
        ans3: "על ידי הרמת הלסת כלפי מעלה",
        img: "#"
    },
    {
        quess: "כיצד נבצע עיסויים בתינוקות?",
        ans0: "בעזרת שני אגודלים או בעזרת שתי אצבעות",
        ans1: "בעזרת יד אחת",
        ans2: "בעזרת שתי ידיים",
        ans3: "בעזרת טפיחות על הגב",
        img: "#"
    },
    {
        quess: "מהו יחס העיסויים להנשמות בהחייאת יילוד?",
        ans0: "1:3",
        ans1: "2:15",
        ans2: "2:30",
        ans3: "1:5",
        img: "#"
    },
    {
        quess: "מהו קצב ההנשמות שתבצעו לאחר חזרת דופק לאחר החייאת ילד?",
        ans0: "הנשמה כל 4 שניות",
        ans1: "הנשמה כל 6 שניות",
        ans2: "הנשמה כל 10 שניות",
        ans3: "הנשמה כל 12 שניות",
        img: "#"
    },
    {
        quess: "מהו קצב ההנשמות שתבצעו לאר חזרת דופק לאחר החייאת תינוק?",
        ans0: "הנשמה כל 3 שניות",
        ans1: "הנשמה כל 4 שניות",
        ans2: "הנשמה כל 5 שניות",
        ans3: "הנשמה כל 6 שניות",
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
const quesValue = ["0", "100", "200", "500", "1,000", "10,000", "50,000", "100,000", "500,000", "800,000", "1,000,000"];

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
        timer = setTimeout(winMessege, 1500, e.currentTarget, document.querySelector(".correct"));
    }
    else {

        console.log(" not finel choice");
        console.log(e.currentTarget.textContent);
        console.log(termList[currQues].ans0);
        //cheack if the text in the card that has click is the same as the correct answer
        if (e.currentTarget.textContent == termList[currQues - 1].ans0) {

            //change cards color- green color
            e.currentTarget.classList.add("correct");

            timer = setTimeout(nextQuestionRight, 1500, e.currentTarget);
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
                    timer = setTimeout(nextQuestionWorng, 1500, e.currentTarget, allNotes[i]);
                }
            }
            //if the user lose the game
            if (life == 3) {
                timer = setTimeout(loseMessege, 1500, e.currentTarget, document.querySelector(".correct"));
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
    document.querySelector(".home-page").classList.add("inactive");
    document.querySelector(".info").classList.remove("inactive");
    document.querySelector(".play-icon").addEventListener("click", onClickPlay);

}

function onClickPlay() {
    document.querySelector(".home-page").classList.remove("inactive");
    document.querySelector(".info").classList.add("inactive");
}

