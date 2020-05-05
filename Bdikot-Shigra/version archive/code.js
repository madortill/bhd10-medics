$(function(){
    $(".navigate").on("touchend", onClickBurger);
    $(".about").on("touchend", about);
    $( function() {
        $( "#exem" ).draggable();
    });
});

/**
 * on click burger sign :
 * opens nav 
 * adds listeners to icons
 * @param {Event} event 
 */
function onClickBurger(event) {
    burgerNav.classList.add("open");
    burgerNav.querySelector(".x-icon").addEventListener("touchend", closeBurgerNav);
    let icons = burgerNav.querySelectorAll(".icon");
    for (let i = 0; i < icons.length; i++) {
        const element = icons[i];
        element.addEventListener("touchend", onClickIcon);
    }
}

/**
 * on click icon in burger nav : 
 * change src to marked image 
 * un mark prev image
 * @param {Event} event 
 */
function onClickIcon(event) {
    let icons = burgerNav.querySelectorAll(".icon");
    for (let i = 0; i < icons.length; i++) {
        const element = icons[i];
        element.querySelector("img").src = element.querySelector("img").src.replace("-current", "");
    }

    event.currentTarget.querySelector("img").src = event.currentTarget.querySelector("img").src.replace(".svg", "-current.svg");
}

/**
 * on click x icon in burger nav : 
 * close burger nav
 * remove listeners from icons
 * @param {Event} event 
 */
function closeBurgerNav(event) {
    burgerNav.classList.remove("open");
    burgerNav.querySelector(".x-icon").removeEventListener("touchend", closeBurgerNav);
    let icons = burgerNav.querySelectorAll(".icon");
    for (let i = 0; i < icons.length; i++) {
        const element = icons[i];
        element.removeEventListener("touchend", onClickIcon);
    }
}

function about() {
    
}

function drag(event) {
    $( "#draggable" ).draggable();
    // $( "#target" ).droppable({
    //     drop: function( event, ui ) {
    //     $( this )
    //         .addClass( "ui-state-highlight" )
    //         .find( "p" )
    //         .html( "Dropped!" );
    //     }
    // });
}