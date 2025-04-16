let exitBtns = document.querySelectorAll(".fa-times");
for (let exitBtn of exitBtns) {
    exitBtn.addEventListener("click", () => {
        exitBtn.parentElement.parentElement.parentElement.remove();
    });
}

let maximizeBtns = document.querySelectorAll(".fa-square");
for (let maximizeBtn of maximizeBtns) {
    maximizeBtn.addEventListener("click", () => {
        let window = maximizeBtn.parentElement.parentElement.parentElement;
        window.classList.toggle("maximized");
        window.style.left = "0.5vw";
        window.style.top = "1vh";
    });
}

let windowHeaders = document.querySelectorAll(".window-header");
for (let windowHeader of windowHeaders) {
    windowHeader.addEventListener("mousedown", function (event) {
        let window = windowHeader.parentElement;
        const startX = event.clientX - window.offsetLeft;
        const startY = event.clientY - window.offsetTop;

        document.addEventListener("mousemove", moveHandler);
        document.addEventListener("mouseup", function () {
            document.removeEventListener("mousemove", moveHandler);
        });

        function moveHandler(event) {
            window.style.left = event.clientX - startX + "px";
            window.style.top = event.clientY - startY + "px";
        }
    });
}
