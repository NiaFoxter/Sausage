/*колбаса правит миром...
текст написан в ПростоБесполезныйТекст*/

let text_field = document.getElementById("text");
let first_choice = document.getElementById("firstChoice");
let second_choice = document.getElementById("secondChoice");
let stage = "mom's task";
let wasted = false, open_refrigerator = false;
let timer = 10;

function gameOver() {
    text_field.style.display = "none";
    first_choice.style.display = "none";
    second_choice.style.display = "none";
    document.body.innerHTML = "Wasted";
    // document.body.style.background = "brown";
}
function OnClick(e) {
    if (stage == "mom's task") {
        if (e.target.id == "firstChoice") {
            stage = "agree?"
            text_field.innerHTML = "Сонечко, допоможи матусі. Поріж ковбасу, будь ласка, щоб я змогла зробити вам піцу."
            first_choice.innerText = "Добре.";
            second_choice.innerText = "Не хочу, сама ріж, в мене справи."
        } else {
            gameOver();
        }
    }// else if () {}
}

first_choice.addEventListener("click", (ev) => {OnClick(ev)})
second_choice.addEventListener("click", (ev) => {OnClick(ev)})
