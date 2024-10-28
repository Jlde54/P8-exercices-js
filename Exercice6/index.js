let array = [];
let keys = ["zero", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "plus", "moins", "mult", "divise"];

const display = document.querySelector("#display");

keys.forEach((key) => {
    const keypressed = document.querySelector(`#${key}`);
    keypressed.addEventListener("click", () => appendToDisplay(keypressed.innerText));
})

const miseAZero = document.querySelector("#miseAZero");
miseAZero.addEventListener("click", () => clearDisplay());

const egal = document.querySelector("#egal");
egal.addEventListener("click", () => calculateResult());

function appendToDisplay(keyPressed) {
    array.push(keyPressed);
    display.value = array.join("");
}

function clearDisplay() {
    display.value = "";
    array = [];
}

function calculateResult() {
    if (!array.join('').includes("/0")) {
        display.value = eval(array.join(''));
        array = [display.value];
    } else {
        display.value = "Division by zero is not allowed";
    }
}