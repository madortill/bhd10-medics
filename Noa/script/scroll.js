
function setupScroll(scroller) {
    // let parrentPadding = scroller.clientHeight - parseFloat(getComputedStyle(scroller).height);
    /**
     * @param {EventSc} e
     */
    for (let el of scroller.querySelectorAll(".scroll-point")) {
        el.affinityDown = 1;
        el.affinityUp = 1;
    }
    scroller.onscroll = e => {
        // console.log(document.body.scrollTop, document.body.scrollHeight, "body");
        // console.log(e);
        let parrentPadding = parseFloat(getComputedStyle(scroller).paddingTop);
        /** @type {HTMLElement} */
        for (let el of scroller.querySelectorAll(".scroll-point")) {
            // console.log(el.scrollTop, el.scrollHeight, el.offsetTop);
            let src = "scrollTop" in e.srcElement ? e.srcElement : document.scrollingElement;
            // if (el.offsetTop <= src.scrollTop && el.offsetHeight <= src.scrollHeight) {
            let screenTop = src.scrollTop + e.srcElement.offsetTop + parrentPadding;
            let screenBottom = src.scrollTop + src.clientHeight + e.srcElement.offsetTop + parrentPadding;
            let elBounds = new Rect(
                el.offsetLeft + el.offsetParent.offsetLeft,
                el.offsetTop + el.offsetParent.offsetTop,
                el.clientWidth, el.clientHeight);


            if (elBounds.y >= screenBottom || elBounds.yEnd <= screenTop) {
                if (el.scrollState) {
                    el.scrollState = undefined;
                    // console.log("viewOut", el);
                    //$0.offsetTop + el.parentElement.offsetTop
                    el.dispatchEvent(new Event("viewout"));
                }
            } else {
                if (elBounds.y > screenTop && elBounds.yEnd < screenBottom) {
                    if (el.scrollState !== "viewfull") {
                        el.scrollState = "viewfull";
                        // console.log("viewfull", el);
                        el.dispatchEvent(new Event("viewfull"));
                    }
                } else if (!el.scrollState) {
                    el.scrollState = "viewin";
                    el.dispatchEvent(new Event("viewenter"));
                } else if (cmpFloat(elBounds.y, screenTop) !== el.affinityUp || (screenTop === scroller.offsetTop + parrentPadding && elBounds.y === screenTop)) {
                    el.scrollState = "viewtop";
                    el.affinityUp = cmpFloat(elBounds.y, screenTop);
                    // console.log("viewtop", el);
                    el.dispatchEvent(new Event("viewtop"));
                } else if (cmpFloat(elBounds.yEnd, screenBottom) !== el.affinityDown || (screenBottom === scroller.scrollHeight + scroller.offsetTop && screenBottom === elBounds.yEnd)) {
                    el.scrollState = "viewbottom";
                    el.affinityDown = cmpFloat(elBounds.yEnd, screenBottom);
                    // console.log("viewbottom", el);
                    el.dispatchEvent(new Event("viewbottom"));
                }
            }

            // if (el.offsetTop >= screenBottom || el.offsetTop + el.clientHeight <= screenTop) {
            //     if (el.scrollState) {
            //         el.scrollState = undefined;
            //         // console.log("viewOut", el);
            //         //$0.offsetTop + el.parentElement.offsetTop
            //         el.dispatchEvent(new Event("viewout"));
            //     }
            // } else {
            //     if (el.offsetTop >= screenTop && el.offsetTop + el.clientHeight < screenBottom) {
            //         if (el.scrollState !== "viewfull") {
            //             el.scrollState = "viewfull";
            //             // console.log("viewfull", el);
            //             el.dispatchEvent(new Event("viewfull"));
            //         }
            //     } else if (!el.scrollState) {
            //         el.scrollState = "viewin";
            //         el.dispatchEvent(new Event("viewenter"));
            //     } else if (cmpFloat(el.offsetTop, screenTop) !== el.affinityUp) {
            //         el.scrollState = "viewtop";
            //         el.affinityUp = cmpFloat(el.offsetTop, screenTop);
            //         // console.log("viewtop", el);
            //         el.dispatchEvent(new Event("viewtop"));
            //     } else if (cmpFloat(el.offsetTop + el.clientHeight, screenBottom) !== el.affinityDown) {
            //         el.scrollState = "viewbottom";
            //         el.affinityDown = cmpFloat(el.offsetTop + el.clientHeight, screenBottom);
            //         // console.log("viewbottom", el);
            //         el.dispatchEvent(new Event("viewbottom"));
            //     }
            // }
        }
    }
}

function cmpFloat(i, j) {
    let diff = i - j;
    if (diff < 0)
        return -1;
    return 1;
}

function cmp(i, j) {
    return ((i - j) >> 63) - (-(i - j) >> 63)
}

class Rect {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    get xEnd() { return this.x + this.width };
    get yEnd() { return this.y + this.height };
}