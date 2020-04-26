const termList = [
    {
        quess: "מהו הסדר הנכון של שכבות העצבם (מהחוץ אל הפנים)?",
        ans0: "compact bone → spongy bone → bone marrow",
        ans1: "spongy bone → compact bone → bone marrow",
        ans2: "bone marrow → compact bone → spongy bone",
        ans3: "spongy bone → bone marrow → compact bone",
        img: "#"
    },
    {
        quess: "מהו סחוס?",
        ans0: "רקמת חיבור צפופה הנמצאת בין עצם לעצם",
        ans1: "רקמת חיבור המחברת בין עצם לעצם במפרק",
        ans2: "רקמת חיבור המחברת בין שריר לעצם",
        ans3: "רקמה שתאיה מסוגלים להתכווץ ולייצר תנועה",
        img: "#"
    },
    {
        quess: "מהי רצועה?",
        ans0: "רקמת חיבור המחברת בין עצם לעצם במפרק",
        ans1: "רקמת חיבור צפופה הנמצאת בין עצם לעצם",
        ans2: "רקמת חיבור המחברת בין שריר לעצם",
        ans3: "רקמה שתאיה מסוגלים להתכווץ ולייצר תנועה",
        img: "#"
    },
    {
        quess: "מהו גיד?",
        ans0: "רקמת חיבור המחברת בין שריר לעצם",
        ans1: "רקמת חיבור צפופה הנמצאת בין עצם לעצם",
        ans2: "רקמת חיבור המחברת בין עצם לעצם במפרק",
        ans3: "רקמה שתאיה מסוגלים להתכווץ ולייצר תנועה",
        img: "#"
    },
    {
        quess: "מהו שריר?",
        ans0: "רקמה שתאיה מסוגלים להתכווץ ולייצר תנועה",
        ans1: "רקמת חיבור צפופה הנמצאת בין עצם לעצם",
        ans2: "רקמת חיבור המחברת בין עצם לעצם במפרק",
        ans3: "רקמת חיבור המחברת בין שריר לעצם",
        img: "#"
    },

    {
        quess: "מהם תפקידי השלד?",
        ans0: "תמיכה, לאפשר תנועה, הגנה, ייצור תאי דם ומאגר מינירלים",
        ans1: "תמיכה, לאפשר תנועה, הגנה, ייצור מינירלים ומאגר לימפה",
        ans2: "וויסות חום הגוף, לאפשר תנועה, ייצוב וקליטת גירויים",
        ans3: "החזקת השרירים, סילוק פסולת, מאגר מינרלים וייצור תאי דם",
        img: "#"
    },
    {
        quess: "מה מיוחד בשריר הלב?",
        ans0: "מבנהו כשל שריר משורטט אבל הוא פועל כשריר חלק",
        ans1: "מבנהו כשל שריר חלק אבל הוא פועל כשריר משורטט",
        ans2: "מבנהו סיבי ופועל כמשולב בין שריר חלק לשריר משורטט",
        ans3: "יש לו מבנה ייחודי שאינו שריר חלק ואינו שריר משורטט אך פועל כחלק",
        img: "#"
    },
    {
        quess: "מה מיוחד בשריר חלק?",
        ans0: "בלתי רצוני ופועל לאורך זמן",
        ans1: "חזק ורצוני ופועל לזמן קצר",
        ans2: "שריר חזק הפועל כל עוד האדם חי",
        ans3: "ניתן לשלוט בו",
        img: "#"
    },
    {
        quess: "מה מיוחד בשריר משורטט?",
        ans0: 'חזק ורצוני ופועל זמן קצר',
        ans1: 'בלתי רצוני ופועל לאורך זמן',
        ans2: 'שריר חזק הפועל כל עוד האדם חי',
        ans3: 'לא ניתן לשלוט בו',
        img: "#"
    },
    {
        quess: "מה תפקיד מערכת ההפרשה?",
        ans0: "שמירה על מאזן נוזלים וחומציות תקין בגוף, הפרשת פסולת והפרשת הורמונים",
        ans1: "סילוק פסולת והובלת חומרים מזינים לתאי הגוף",
        ans2: "ספיגת חומרים חיוניים לגוף והוצאת פסולת אל מחוץ לגוף",
        ans3: "שמירה על מאזן נוזלים חומצי בגוף וספיגת הורמונים",
        img: "#"
    },
    {
        quess: "מהו נפרון?",
        ans0: "היחידה התפקודית בכליה",
        ans1: "גופיף זעיר במעי",
        ans2: "יחידה תפקודית בשריר הלב",
        ans3: "יחידה תפקודית בשרירי השלד",
        img: "#"
    },
    {
        quess: "כיצד מועבר השתן מהכליה אל השלפוחית?",
        ans0: "בתנועה פריסטלטית",
        ans1: 'באמצעות כוח הכבידה',
        ans2: 'על גבי נפרונים',
        ans3: "באמצעות השופכה",
        img: "#"
    },
    {
        quess: "אילו סוגרים קיימים בשלפוחית השתן?",
        ans0: "לא רצוני (פנימי) ורצוני (חיצוני)",
        ans1: "לא רצוני (חיצוני) ורצוני (פנימי)",
        ans2: "שני סוגרים רצוניים (חיצוני ופנימי)",
        ans3: "שני סוגרים לא רצוניים (חיצוני ופנימי)",
        img: "#"
    },
    {
        quess: "מהו הסדר הנכוןשל מעבר הנוזל במערכת השתן?",
        ans0: "כליות ← שופכנים ← שלפוחית השתן ← שופכה",
        ans1: "כליות← שופכה ← שלפוחית השתן ← שופכנים",
        ans2: "שופכנים ← כליות ← שופכה ← שלפוחית השתן",
        ans3: "כליות ← שופכנים ← שופכה ← שלפוחית השתן",
        img: "#"
    }

    /*
    {
        quess: "מהו סדר השלבים ביצירת השתן?",
        ans0: "סינון הדם ← ספיגה חוזרת ← הפרשה",
        ans1: "ספיגה חוזרת ← סינון הדם ← הפרשה",
        ans2: "הפרשה ← סינון הדם ← ספיגה חוזרת",
        ans3: "סינון הדם ← הפרשה ← ספיגה חוזרת",
        img: "images/cards/pic15.svg"
    },
    {
        quess: "מהו האיבר הגדול ביותר בגוף האדם?",
        ans0: "העור",
        ans1: "הכבד",
        ans2: "הטחול",
        ans3: "המעי הגס",
        img: "images/cards/pic16.svg"
    },
    {
        quess: "מה תפקיד שכבת השומן בעור?",
        ans0: "שמירה על חום הגוף",
        ans1: "הזעה",
        ans2: "גמישות",
        ans3: "שמירה על מאזן הנוזלים בגוף",
        img: "images/cards/pic17.svg"
    },
    {
        quess: "מהו הסדר הנכון (מהחוץ אל הפנים)",
        ans0: "אפידרמיס ← דרמיס ← סאב- קוטן",
        ans1: "דרמיס ← אפידרמיס ← סאב- קוטן",
        ans2: "סאב- קוטן ← אפידרמיס ← דרמיס",
        ans3: "דרמיס ← סאב- קוטן ← אפידרמיס",
        img: "images/cards/pic18.svg"
    }
    */

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
const quesValue = ["0", "100", "200", "500", "1,000", "2,000", "5,000", "10,000", "80,000", "100,000", "200,000", "400,000", "500,000", "800,000", "1,000,000","1,000,000"];



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

