let zIndex = 1;

const exitBtns = document.querySelectorAll(".fa-times");
for (const exitBtn of exitBtns) {
    exitBtn.addEventListener("click", () => {
        exitBtn.parentElement.parentElement.parentElement.style.display =
            "none";
    });
}

const maximizeBtns = document.querySelectorAll(".fa-square");
for (const maximizeBtn of maximizeBtns) {
    maximizeBtn.addEventListener("click", () => {
        const window = maximizeBtn.parentElement.parentElement.parentElement;
        window.classList.toggle("maximized");
        maximizeBtn.classList.toggle("fa-square");
        maximizeBtn.classList.toggle("fa-minus-square");
    });
}

const windowHeaders = document.querySelectorAll(".window-header");
for (const windowHeader of windowHeaders) {
    windowHeader.addEventListener("mousedown", function (event) {
        const window = windowHeader.parentElement;
        window.style.zIndex = zIndex++;

        const startX = event.clientX - window.offsetLeft;
        const startY = event.clientY - window.offsetTop;

        document.addEventListener("mousemove", moveHandler);
        document.addEventListener("mouseup", function () {
            document.removeEventListener("mousemove", moveHandler);
        });

        function moveHandler(event) {
            if (!window.classList.contains("maximized")) {
                window.style.left = event.clientX - startX + "px";
                window.style.top = event.clientY - startY + "px";
            }
        }
    });
}
