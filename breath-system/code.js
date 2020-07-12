const termList = [
    {
        quess: "מהי נשימה תאית?",
        ans0: "תהליך הפקת אנרגיה בתאי הגוף",
        ans1: "תהליך חילוף הגזים",
        ans2: "הפעולה הכימית של שחלוף גזים מזרם הדם לתאי הגוף",
        ans3: "הפעולה של הכנסת O2 והוצאת CO2",
        img: "#"
    },
    {
        quess: "מהו תפקיד האף?",
        ans0: "חימום, לחלוח וסינון של האוויר",
        ans1: "אין לאף תפקיד מיוחד",
        ans2: "סגירת קנה הנשימה בזמן בליעה ",
        ans3: "קירור, ייבוש וסינון של האוויר",
        img: "#"
    },
    {
        quess: "לאיזה צד סביר שייכנס גוף זר שחודר לסימפונות?",
        ans0: "ימין",
        ans1: "שמאל",
        ans2: "לשניהם באותה מידה",
        ans3: "הסימפונות קטנים מידי לחדירת גופים זרים",
        img: "#"
    },
    {
        quess: "תהליך השאיפה הוא תהליך-",
        ans0: "אקטיבי",
        ans1: "פאסיבי",
        ans2: "פראסימפטתי",
        ans3: "סימפטתי",
        img: "#"
    },
    {
        quess: "תהליך הנשיפה הוא תהליך-",
        ans0: "פאסיבי",
        ans1: "אקטיבי",
        ans2: "פראסימפטתי",
        ans3: "סימפטתי",
        img: "#"
    },
    {
        quess: "כמה אונות יש בריאות?",
        ans0: "3 בימין ו2 בשמאל",
        ans1: "2 בימין ו3 בשמאל",
        ans2: "2 בימין ו2 בשמאל",
        ans3: "3 בימין ו3 בשמאל",
        img: "#"
    },
    {
        quess: "מהו האפיגלוטיס?",
        ans0: "מכסה הגרון- סחוס המשמש כמכסה הסוגר את פתח הקנה בזמן בליעה",
        ans1: "הסחוס העליון של הגרון שתפקידו הוא להגן על מיתרי הקול",
        ans2: "הסחוס הטבעתי היחיד מבין סחוסי הגרון אשר מסייע ליציבות הקנה",
        ans3: "צינור באורך כ- 10 סמ המורכב מסחוסים בצורת פרסה",
        img: "#"
    },
    {
        quess: "מהו התירואיד?",
        ans0: "הסחוס העליון של הגרון שתפקידו הוא להגן על מיתרי הקול",
        ans1: "מכסה הגרון- סחוס המשמש כמכסה הסוגר את פתח הקנה בזמן בליעה",
        ans2: "הסחוס העליון של הגרון שתפקידו הוא להגן על מיתרי הקול",
        ans3: "צינור באורך כ- 10 סמ המורכב מסחוסים בצורת פרסה",
        img: "#"
    },
    {
        quess: "מהו הקריקואיד?",
        ans0: "הסחוס הטבעתי היחיד מבין סחוסי הגרון אשר מסייע ליציבות הקנה",
        ans1: "מכסה הגרון- סחוס המשמש כמכסה הסוגר את פתח הקנה בזמן בליעה",
        ans2: "הסחוס העליון של הגרון שתפקידו הוא להגן על מיתרי הקול",
        ans3: "צינור באורך כ- 10 סמ המורכב מסחוסים בצורת פרסה",
        img: "#"
    },
    {
        quess: "מדוע יש הרבה נדיות?",
        ans0: "הגדלת שטח הפנים לצורך הגברת יעילות שחלוף הגזים",
        ans1: "על מנת למנוע כניסת חלקיקים אל דרכי הנשימה",
        ans2: "על מנת לייצר כמה שיותר ליחה",
        ans3: "בשביל להקטין את החיכוך עם קרומי הפלאורה",
        img: "#"
    },
    {
        quess: "כיצד מתבצע שחלוף הגזים בנאדיות?",
        ans0: "דיפוזיה",
        ans1: "אוסמוזה",
        ans2: "ציטוזה",
        ans3: "אינפוזיה",
        img: "#"
    },
    {
        quess: "מה תפקיד הנוזל הבין- פלוארלי?",
        ans0: "הפחתת החיכוך בין הקרומים",
        ans1: "הגברת החיכוך בין הקרומים",
        ans2: "יצירת חלל פוטנציאלי",
        ans3: "יצירת דיפוזיה של גזים",
        img: "#"
    },
    {
        quess: "מה קורה במהלך שאיפה?",
        ans0: "אוויר נכנס לריאות",
        ans1: "אוויר יוצא מהריאות",
        ans2: "אוויר משתחלף בריאות",
        ans3: "האוויר לא זז",
        img: "#"
    },
    {
        quess: "מה קורה במהלך נשיפה?",
        ans0: "אוויר יוצא מהריאות",
        ans1: "אוויר נכנס לריאות",
        ans2: "אוויר משתחלף בריאות",
        ans3: "האוויר לא זז",
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
const quesValue = ["0", "100", "200", "500", "1,000", "2,000", "5,000", "10,000", "80,000", "100,000", "200,000", "400,000", "500,000", "800,000", "1,000,000", "1,000,000"];

var quessOrder = [];
var ansArr = [0, 1, 2, 3];
var currQues = 0;
var life = 0;
var timer;

if('serviceWorker' in navigator && location.hostname !== 'localhost'){
    let location = "../"
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

