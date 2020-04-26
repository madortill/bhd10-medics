// on load page
window.onload = () => {
    customElements.define("note-section", Note);
    customElements.define("scrolling-title", ScrollingTitle);

    // setBurgerNav();

    createScrollListeners();
    createNavListeners();
    createAnimListeners();
    creatHoverListeners();

    if (document.getElementsByTagName("title")[0].innerHTML == "מחלות כרוניות") {
        setBMI();
    }

    document.body.style.setProperty("--top", document.querySelector(".top").offsetHeight + "px");
    window.onresize = () => {
        document.body.style.setProperty("--top", document.querySelector(".top").offsetHeight + "px");
    }
};

// define scrolling note title
class ScrollingTitle extends HTMLElement {
    constructor() {
        super();

        var regularWrapper = document.createElement("div");
        var regularTitle = document.createElement("div");
        var scrolledWrapper = document.createElement("div");
        var scrolledTitle = document.createElement("div");

        // default color
        var color = "green";

        if (this.hasAttribute("color")) {
            color = this.getAttribute("color");
        }

        regularWrapper.classList.add("center");
        regularTitle.classList.add("highlight");
        regularTitle.classList.add(color);
        regularTitle.innerHTML = this.innerHTML;
        regularWrapper.appendChild(regularTitle);

        scrolledWrapper.classList.add("title-wrapper");
        scrolledTitle.innerHTML = this.innerHTML.replace("<br>", "");
        scrolledWrapper.appendChild(scrolledTitle);

        this.innerHTML = "";
        this.appendChild(regularWrapper);
        this.appendChild(scrolledWrapper);
    }
}

// define note-section element
class Note extends HTMLElement {
    constructor() {
        super();

        var main = document.createElement("div");
        var top = document.createElement("img");
        var bottom = document.createElement("img");

        // default color        
        var color = "blue";

        if (this.hasAttribute("color")) {
            color = this.getAttribute("color");
        }

        main.classList.add(color);
        main.classList.add("note");
        main.classList.add("section");
        main.innerHTML = this.innerHTML;
        this.innerHTML = "";

        top.src = "assests/images/generic/note-top-" + color + ".svg";
        top.classList = "note-top";

        bottom.src = "assests/images/generic/note-bottom-" + color + ".svg";
        bottom.classList = "note-bottom";

        this.appendChild(top);
        this.appendChild(main);
        this.appendChild(bottom);
    }
}

// add listeners for typing in bmi calculator
function setBMI() {
    document.querySelectorAll(".bmi .calc input")[0].addEventListener("input", onType);
    document.querySelectorAll(".bmi .calc input")[1].addEventListener("input", onType);
}

// on typing in weight or height in bmi calculator
// if both have value calc bmi
function onType() {
    let weight = document.querySelectorAll(".bmi .calc input")[0].value;
    let height = document.querySelectorAll(".bmi .calc input")[1].value;
    let ans = document.querySelector(".bmi .ans");
    ans.classList.remove("text-green");
    ans.classList.remove("text-blue");
    ans.classList.remove("text-red");
    if (weight != "" && height != "") {
        // document.querySelector(".bmi .ans").style.display = "flex";
        ans.innerHTML = (Number(weight) / (Math.pow(Number(height), 2))).toFixed(1);
        
        if(ans.innerHTML >= 30 || ans.innerHTML < 19){
            ans.classList.add("text-red");
        }
        else if(ans.innerHTML >= 26){
            ans.classList.add("text-blue");
        }
        else{
            ans.classList.add("text-green");

        }
    }
    else {
        document.querySelector(".bmi .ans").innerHTML = "הכניסו נתונים";
    }
}

// creat listener for scrolling => 
// update progress bar 
// creat lisners for entering a subject =>
// highlights subject name in navigation bar
function createScrollListeners() {
    main.addEventListener("scroll", onScroll);

    setupScroll(main);
    let subject = document.querySelectorAll(".subject");

    // go over the subjects and add enter listeners
    for (let i = 0; i < subject.length; i++) {
        const element = subject[i];
        // element.addEventListener("viewfull", subjectIn);
        // element.addEventListener("viewenter", subjectIn);
        element.addEventListener("viewtop", subjectIn);
        element.addEventListener("viewbottom", subjectIn);
    }

    // about.addEventListener("viewenter", subjectIn);
    about.addEventListener("viewtop", subjectIn);
    about.addEventListener("viewbottom", subjectIn);
}

// add click listeners for subject name in navigation bar =>
// highlights subject name in navigation bar
function createNavListeners() {
    let li = document.querySelectorAll("nav li");

    // go over all the subject name in navigation bar and add click listener    
    for (let i = 0; i < li.length; i++) {
        const element = li[i];
        element.addEventListener("click", onClickNav);
    }
}

// add listeners for animation start on enter screen
// and restart on screen out
function createAnimListeners() {
    let toAnimate = document.querySelectorAll(".toAnimate");

    // go over all animated divs and add scroll-point
    // and listeners for enter and exit screen
    for (let i = 0; i < toAnimate.length; i++) {
        const element = toAnimate[i];
        element.classList.add("scroll-point");
        element.classList.remove("toAnimate");
        element.addEventListener("viewenter", animate);
        element.addEventListener("viewout", resetAnimation);
    }

    let imgDiv = document.querySelectorAll(".switch-img");
    // go over all switching images divs and add enter screen listener
    for (let i = 0; i < imgDiv.length; i++) {
        const element = imgDiv[i];
        element.classList.add("scroll-point");
        element.addEventListener("viewenter", switchImgTimer);
    }
}

/**
 * on switching image div enter screen
 * start timer to switch img
 * @param {Event} event 
 */
function switchImgTimer(event) {
    // get all children of div
    let children = Array.prototype.slice.call(event.currentTarget.children);

    for (let i = 0; i < children.length; i++) {
        setTimeout(switchImg, 500 * i, children, i);
    }
}

// switch to current image 
// hide last image
function switchImg(children, i) {
    children[i].style.display = "block";
    if (i > 0) {
        children[i - 1].style.display = "none";
    }
    else {
        children[children.length - 1].style.display = "none";
    }
}

/**
 * on animated div enter screen
 * starts animation
 * @param {Event} event 
 */
function animate(event) {
    // remove class that cancle transition
    event.currentTarget.classList.remove("reverse");

    // add class that start animation
    event.target.classList.add("animate");

    // adding listener for animation end to imgages that switch
    let switchSrc = event.target.querySelectorAll(".switch-src");
    for (let i = 0; i < switchSrc.length; i++) {
        const element = switchSrc[i];
        element.addEventListener("transitionend", onTransitionEnd);

        // reset src
        element.src = element.src.replace("-animated.svg", ".svg");
    }
}

/**
 * on the end of animation transition 
 * switch image src 
 * @param {Event} event 
 */
function onTransitionEnd(event) {
    event.currentTarget.removeEventListener("transitionend", onTransitionEnd);
    event.currentTarget.src = event.currentTarget.src.replace(".svg", "-animated.svg");
}

/**
 * on animation div exit screen
 * reset animation
 * @param {Event} event 
 */
function resetAnimation(event) {
    event.currentTarget.classList.remove("animate");

    // add class that cancle transition
    event.currentTarget.classList.add("reverse");
}

/**
 * on click subject name in navigation bar
 * highlight subject name
 * @param {Event} event 
 */
function onClickNav(event) {
    updateNav(event.currentTarget);
}

/**
 * on scoll in of subject
 * highlight subject name in navigation bar
 * @param {Event} event 
 */
function subjectIn(event) {
    let subject = event.currentTarget;
    let li = document.querySelector(`[href="#${subject.id}"]`).parentElement;
    updateNav(li);
}

/**
 * get li of subject name in navigation bar
 * reset prev highlighted subject name
 * highlights new subject name 
 */
function updateNav(li) {
    let currrent = document.querySelector(".current");
    currrent.classList.remove("current");
    li.classList.add("current");
}

/**
 * on scroll
 * updates progress bar
 * @param {Event} event 
 */
function onScroll(event) {
    progBar.style.width = ((main.scrollTop + main.clientHeight) / main.scrollHeight) * 100 + "vw";
    // progBar.style.width = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100 + "vw";
}

// add listeners for .slide-out & .link
// close every hover elment
function creatHoverListeners() {
    let hover = document.querySelectorAll(".slide-out, .link");
    for (let i = 0; i < hover.length; i++) {
        const element = hover[i];
        element.addEventListener("click", openHover);
        element.classList.remove("open");
    }
}

// remove listeners for slide out
function removeHoverListeners() {
    let hover = document.querySelectorAll(".slide-out, .link");
    for (let i = 0; i < hover.length; i++) {
        const element = hover[i];
        element.removeEventListener("click", openHover);
    }
}

/**
 * on click hover or slide-out tab opens it
 * add click listener to body for closing hover
 * @param {Event} event 
 */
function openHover(event) {
    removeHoverListeners();
    // let element=event.currentTarget;
    // // if(event.currentTarget.classList.indexOf("tab") != -1){
    // //     element = element.parentElement;
    // // }
    event.currentTarget.classList.add("open");
    // element.removeEventListener("click", openHover);
    setTimeout(() => {
        document.body.addEventListener("click", closeHover);
        // element.addEventListener("click", closeHover);
        // element.parentElement.addEventListener("click", closeSlideOut);
    }, 100);
}

/**
 * on click body when there is a hover element open
 * closes all hover elements
 * @param {Event} event 
 */
function closeHover(event) {
    document.body.removeEventListener("click",closeHover);
    creatHoverListeners();
    // let element = event.currentTarget;
    // element.classList.remove("open");
    // // element.querySelector(".tab").addEventListener("click", openSlideOut);
    // element.addEventListener("click", openHover);
    // element.removeEventListener("click", closeHover);
}

