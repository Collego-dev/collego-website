let zIndex = 1;

let exitBtns = document.querySelectorAll(".fa-times");
for (let exitBtn of exitBtns) {
    exitBtn.addEventListener("click", () => {
        exitBtn.parentElement.parentElement.parentElement.style.display =
            "none";
    });
}

let maximizeBtns = document.querySelectorAll(".fa-square");
for (let maximizeBtn of maximizeBtns) {
    maximizeBtn.addEventListener("click", () => {
        let window = maximizeBtn.parentElement.parentElement.parentElement;
        window.classList.toggle("maximized");
        maximizeBtn.classList.toggle("fa-square");
        maximizeBtn.classList.toggle("fa-minus-square");
    });
}

let windowHeaders = document.querySelectorAll(".window-header");
for (let windowHeader of windowHeaders) {
    windowHeader.addEventListener("mousedown", function (event) {
        let window = windowHeader.parentElement;
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

function openWindow(id) {
    let window = document.getElementById(id);
    window.style.display = "";
    window.style.zIndex = zIndex++;
}
