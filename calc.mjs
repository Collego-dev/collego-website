import { mystia } from "https://kajizukataichi.github.io/mystia/binding/web.mjs";

const padCode = document.getElementById("pad-code");
let codeBuffer = "";
padCode.addEventListener("keydown", async function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        try {
            const code2eval = `${codeBuffer};${padCode.value}`;
            console.log(code2eval);
            const result = await mystia(code2eval);
            if (result === null) {
                codeBuffer = code2eval;
                padCode.value = "";
            } else {
                padCode.value = result;
            }
        } catch (error) {
            console.log(error);
        }
    }
});
