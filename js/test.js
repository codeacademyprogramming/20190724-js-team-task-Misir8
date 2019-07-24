


let btnResize = document.querySelector("#btn-resize");
btnResize.addEventListener("click", btnResizeClick);
function btnResizeClick(){
    window.resizeBy(500, 150);
}