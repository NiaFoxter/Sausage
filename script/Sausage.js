/*колбаса правит миром...
начало размышления написано в ПростоБесполезныйТекст*/

let text_field = document.getElementById("text");
let first_choice = document.getElementById("firstChoice");
let second_choice = document.getElementById("secondChoice");
let stage = "mom's task";
let open_refrigerator = false;
function hide() {
    first_choice.style.display = "none";
    second_choice.style.display = "none";
}

function gameOver() {
    text_field.style.display = "none";
    hide()
    document.body.innerHTML = "Wasted";
    // document.body.style.background = "brown";
}
function OnClick(e) {
    switch (stage) {
        case "mom's task":
            if (e.target.id == "firstChoice") {
                stage = "agree?"
                text_field.innerText = "Сонечко, допоможи матусі. Поріж ковбасу, будь ласка, щоб я змогла зробити вам піцу."
                first_choice.innerText = "Добре.";
                second_choice.innerText = "Не хочу, сама ріж, в мене справи."
            } else {
                text_field.innerText = "..."
                setTimeout(gameOver, 4000)
            }
            break;
        case "agree?":
            if (e.target.id == "firstChoice") {
                setTimeout(gameOver, 15000);
                text_field.innerText = "Люблю тебе.";
                stage = "open fridge";
            } else {
                hide()
                setTimeout(gameOver, 3000);
                text_field.innerText = "Ясно, як завжди, усе потрібно робити самій."
            }
            break;
        case "open fridge":
            if (e.target.id == "firstChoice") {
                text_field.innerText = "*Ти стоїшь перед холодильником*";
                first_choice.innerText = "Відкрити";
                second_choice.innerText = "Дивитись на холодильник сумними очима, чогось очікуючи"
                stage = "take sausage"
            } else {
                hide()
                setTimeout(gameOver, 3000);
                text_field.innerText = "*Ти стоїшь... Нічого не відб- .\n Тобі дали тапком по голові*";
            }
            break;
        case "take sausage":
            if (e.target.id == "firstChoice") {
                text_field.innerText = "*Ковбаса спокійно лежить на другій поличці*";
                first_choice.innerText = "Взяти, порізати й залишити на столі";
                second_choice.innerText = "Взяти та з'їсти"
                stage = "final"
            } else {
                hide();
                setTimeout(gameOver, 5000);
                text_field.innerText = "Навіть якщо дивитись на холодильник годину, сам по собі він не відкриється. \n Твої дії тільки розізлили матір."
            }
            break;
        default:
            if (e.target.id == "firstChoice") {
                hide();
                setTimeout(gameOver, 5000);
                text_field.innerText = "Через деякий час прийшов тато та ковбаси не стало. \n Мати дала тапком по голові тату й тобі за одно.";
            } else {
                hide();
                setTimeout(gameOver, 3000);
                text_field.innerText = "Якщо ти такий голодний треба було просто сказати мамі, а не їсти те, що вона попросила залишити."
            }
            break;

    }

    // if (stage == "mom's task") {
    //     if (e.target.id == "firstChoice") {
    //         stage = "agree?"
    //         text_field.innerText = "Сонечко, допоможи матусі. Поріж ковбасу, будь ласка, щоб я змогла зробити вам піцу."
    //         first_choice.innerText = "Добре.";
    //         second_choice.innerText = "Не хочу, сама ріж, в мене справи."
    //     } else {
    //         hide()
    //         text_field.innerText = "..."
    //         setTimeout(gameOver, 2000)
    //     }
    // } else if (stage == "agree?") {
    //     if (e.target.id == "firstChoice") {
    //         text_field.innerText = "Люблю тебе.";
    //         first_choice.innerText = "Піти до холодильника";
    //         second_choice.innerText = "Просто стояти"
    //         stage = "open fridge"
    //     } else {
    //         hide()
    //         setTimeout(gameOver, 3000);
    //         text_field.innerText = "Ясно, як завжди, усе потрібно робити самій."
    //     }
    // } else if (stage == "open fridge") {
    //     if (e.target.id == "firstChoice") {
    //         text_field.innerText = "*Ти стоїшь перед холодильником*";
    //         first_choice.innerText = "Відкрити";
    //         second_choice.innerText = "Дивитись на холодильник сумними очима, чогось очікуючи"
    //         stage = "take sausage"
    //     } else {
    //         hide()
    //         setTimeout(gameOver, 3000);
    //         text_field.innerText = "*Ти стоїшь... Нічого не відб- .\n Тобі дали тапком по голові*";
    //     }
    // } else if (stage == "take sausage") {
    //     if (e.target.id == "firstChoice") {
    //         text_field.innerText = "*Ковбаса спокійно лежить на другій поличці*";
    //         first_choice.innerText = "Взяти, порізати й залишити на столі";
    //         second_choice.innerText = "Взяти та з'їсти"
    //         stage = "final"
    //     } else {
    //         hide();
    //         setTimeout(gameOver, 5000);
    //         text_field.innerText = "Навіть якщо дивитись на холодильник годину, сам по собі він не відкриється. \n Твої дії тільки розізлили матір."
    //     }
    // } else {
    //     if (e.target.id == "firstChoice") {
    //         hide();
    //         setTimeout(gameOver, 5000);
    //         text_field.innerText = "Через деякий час прийшов тато та ковбаси не стало. \n Мати дала тапком по голові тату й тобі за одно.";
    //     } else {
    //         hide();
    //         setTimeout(gameOver, 3000);
    //         text_field.innerText = "Якщо ти такий голодний треба було просто сказати мамі, а не їсти те, що вона попросила залишити."
    //     }
    // }
}

first_choice.addEventListener("click", (ev) => { OnClick(ev) })
second_choice.addEventListener("click", (ev) => { OnClick(ev) })
