const termList = [
    {
        quess: "מהם מרכיבי הדם?",
        ans0: "55% פסלמה, 45% גופיפים (כדוריות דם  אדומות, תאי דם לבנים וטסיות)",
        ans1: "45% פלסמה, 55% גופיפים (כדוריות דם אדומות, תאי דם לבנים וטסיות)",
        ans2: "90% מים, 8% חלבונים, 2% מומסים",
        ans3: "70% מים, 8% פלסמה, 12% כדוריות דם אדומות",
        img: "#"
    },
    // {
    //     quess: "מהו הסדר הנכון של שכבות כלי הדם (מחוץ אל הפנים)?",
    //     ans0: "Adventitia → media → intima",
    //     ans1: "Intima → adventitia → media",
    //     ans2: "Media → intima → adventitia",
    //     ans3: "Adventitia → intima → media",
    //     img: "#"
    // },
    {
        quess: "מה נכון לומר לגבי כלי הדם?",
        ans0: "בדרך כלל, הדם בוורידים הוא עני בחמצן ובעורקים הוא עשיר בחמצן",
        ans1: "הנימים מחברים בין העורקים לרקמות הגוף",
        ans2: "הווריד בנוי משכבה שרירית עבה המאפשרת לו להקטין או להרחיב את קוטרו",
        ans3: "תהליך חילוף החומרים מתרחש בעורקיקים",
        img: "#"
    },
    {
        quess: "מה הם תפקידי מערכת ההובלה?",
        ans0: "הובלה, וויסות חום הגוף ולוחמה בזיהומים",
        ans1: "הובלה, וויסות חום הגוף ויצירת לחץ דם",
        ans2: "חמצון, פיזור אבות היסוד לתאים וויסות חום הגוף",
        ans3: "איסוף תוצרי פירוק, אוורור ולוחמה בזיהומים",
        img: "#"
    },
    {
        quess: "מה היא מטרת מחזור הדם הגדול?",
        ans0: "להוביל דם עשיר בחמצן אל כל תאי הגוף",
        ans1: "להעביר דם עני בחמצן לחמצון מחדש בריאות",
        ans2: "לנקז נוזל מרקמות הגוף ולהעביר למחזור הדם",
        ans3: "להפעיל לחץ על הורידים ולסחוט אותם",
        img: "#"
    },
    {
        quess: "מה היא מטרת מחזור הדם הקטן?",
        ans0: "להוביל דם עני בחמצן לחמצון מחדש בריאות",
        ans1: "להוביל דם עשיר בחמצן אל כל תאי הגוף",
        ans2: "לנקז נוזל מרקמות הגוף ולהעביר למחזור הדם",
        ans3: "להפעיל לחץ על הורידים ולסחוט אותם",
        img: "#"
    },
    {
        quess: "מה תפקיד מערכת הלימפה?",
        ans0: "לנקז נוזל מרקמות הגוף ולסנן אותו מחלקיקים מזיקים ומזהמים",
        ans1: "להעביר דם עני בחמצן לחמצון מחדש בריאות",
        ans2: "להוביל דם עשיר בחמצן אל כל תאי הגוף",
        ans3: "להפעיל לחץ על הורידים ולסחוט אותם",
        img: "#"
    },
    {
        quess: "כמה מסתמים יש בלב?",
        ans0: "4",
        ans1: "2",
        ans2: "3",
        ans3: "8",
        img: "#"
    },
    {
        quess: "מהו הסדר הנכון במחזור הדם הגדול?",
        ans0: "חדר שמאל ← אבי העורקים ← עורקי הגוף ← נימים ← ורידי הגוף ← ורידים נבובים ← עליה ימין ← חדר ימין",
        ans1: "חדר ימין ← עורקי הריאה ← נימי הריאה ← ורידי הריאה ← עליה שמאל ← חדר שמאל",
        ans2: "חדר ימין ← אבי העורקים ← עורקי הגוף ← נימים ← ורידי הגוף ← ורידים נבובים ← עליה שמאל ← חדר שמאל",
        ans3: "חדר שמאל ← עורקי הריאה ← נימי הריאה ← ורידי הריאה ← עליה ימין ← חדר ימין",
        img: "#"
    },
    {
        quess: "מהו הסדר הנכון במחזור הדם הקטן?",
        ans0: "חדר ימין ← עורקי הריאה ← ינימי הריאה ← ורידי הריאה ← עליה שמאל ← חדר שמאל",
        ans1: "חדר שמאל ← אבי העורקים ← עורקי הגוף ← נימים ← ורידי הגוף ← ורידים נבובים ← עליה ימין ← חדר ימין",
        ans2: "חדר ימין ← אבי העורקים ← עורקי הגוף ← נימים ← ורידי הגוף ← ורידים נבובים ← עליה שמאל ← חדר שמאל",
        ans3: "חדר שמאל ← עורקי הריאה ← נימי הריאה ← ורידי הריאה ← עליה ימין ← חדר ימין",
        img: "#"
    },
    {
        quess: "מהי ההגדרה ללחץ דם?",
        ans0: "עוצמת הזרם שמפעיל הדם על דפנות כליו",
        ans1: "הלמות הדם על דפנות כליו",
        ans2: "עוצמת כיווץ שריר הלב",
        ans3: "התנפחות העורקים בזמן הסיסטולה",
        img: "#"
    },
    {
        quess: "מהי ההגדרה לדופק?",
        ans0: "הלמות הדם על דפנות כליו",
        ans1: "עוצמת הזרם שמפעיל הדם על דפנות כליו",
        ans2: "עוצמת כיווץ שריר הלב",
        ans3: "התנפחות העורקים בזמן הסיסטולה",
        img: "#"
    },
    {
        quess: "מהי ההגדרה לסיסטולה?",
        ans0: "כיווץ שריר הלב",
        ans1: "עוצמת הזרם שמפעיל הדם על דפנות כליו",
        ans2: "הלמות הדם על דפנות כליו",
        ans3: "הרפיית שריר הלב",
        img: "#"
    },
    {
        quess: "מהי ההגדרה לדיאסטולה?",
        ans0: "הרפיית שריר הלב",
        ans1: "הלמות הדם על דפנות כליו",
        ans2: "כיווץ שריר הלב",
        ans3: "התנפחות העורקים בזמן הסיסטולה",
        img: "#"
    }




    /* this question didnt enter to the game
        {
            quess: "מהו המוגלובין?",
            ans0: "חלבון הנמצא על כדוריות הדם האדומות אליו נקשר חמצן",
            ans1: "החלק המרכזי במערכת החיסון",
            ans2: "חומר הנמצא בפלסמה ונושא עליו חמצן",
            ans3: "חומר שתפקידו למנוע דימום מכלי דם פגועים",
            img: "images/cards/pic14.svg"
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
const quesValue = ["0", "100", "200", "500", "1,000", "2,000", "5,000", "20,000", "100,000", "200,000", "400,000", "500,000", "800,000", "1,000,000", "1,000,000"];


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

