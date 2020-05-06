function initDrag() {
    window.dragged = document.querySelector(".dragover");
}

if (!('ClientRect' in window)) window.ClientRect = DOMRect;
/**
 * 
 * @param {TouchEvent} e 
 */
function drag(e) {
    let el = e.target;
    if (!window.dragged.children.length)
        window.dragged.append(el.cloneNode(true));
    changeDragTarget(this);
    for (let touch of e.touches) {
        var point = { x: touch.clientX, y: touch.clientY };
        window.dragged.style.top = `${point.y - el.clientHeight / 2}px`;
        window.dragged.style.left = `${point.x - el.clientWidth / 2}px`;
    }
}

ClientRect.prototype.contains = function ({ x, y }) {
    return this.top <= y && this.bottom >= y && this.left <= x && this.right >= x;
}

function startDrag(event) {
    this.preventDefault();
}

var countCorrectDrag = 0;
/**
 * 
 * @param {TouchEvent} event 
 */
function dropItem(event) {
    for (let touch of event.changedTouches) {
        var point = { x: touch.clientX, y: touch.clientY };
        for (let target of document.querySelectorAll(".drag-target")) {
            if (target.getBoundingClientRect().contains(point)) {
                //put code here
                console.log("correct");
                document.querySelector(".drag-target").classList.add("showAns");
                this.remove();
                countCorrectDrag++;
                finishLomda(countCorrectDrag);

                break;
            }
        }
    }
    window.dragged.children[0].remove();
}