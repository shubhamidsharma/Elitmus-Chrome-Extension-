
//content.js
document.onkeydown = function(e) {
    if (e.key === "F11") {
        return false;
    }
    if (e.key === "Escape") {
        return false;
    }
};

document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

document.onmousedown = function(e) {
    if (e.button == 2) {
        return false;
    }
};
