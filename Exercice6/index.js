let array = [];
let keys = ["zero", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "plus", "moins", "mult", "divise"];

const display = document.querySelector("#display");

// Appel de l'affichage des touches cliquées
keys.forEach((key) => {
    const keypressed = document.querySelector(`#${key}`);
    keypressed.addEventListener("click", () => appendToDisplay(keypressed.innerText));
})

// Appel de la mise à 0 de l'affichage
const miseAZero = document.querySelector("#miseAZero");
miseAZero.addEventListener("click", () => clearDisplay());

// Appel du calcul du résultat
const egal = document.querySelector("#egal");
egal.addEventListener("click", () => calculateResult());

/********************************************************************
 * @description - Affichage de la touche cliquée
 * @function (appendToDisplay)
 * @param {keyPressed} - touche cliquée
 */
function appendToDisplay(keyPressed) {
    array.push(keyPressed);
    display.value = array.join("");
}

/********************************************************************
 * @description - Effacer la saisie
 * @function (clearDisplay)
 */
function clearDisplay() {
    display.value = "";
    array = [];
}

/********************************************************************
 * @description - Calcul et affichage du résultat
 * @function (calculateResult)
 */
function calculateResult() {
    if (!array.join('').includes("/0")) {
        display.value = eval(array.join(''));
        array = [display.value];
    } else {
        display.value = "Division by zero is not allowed";
    }
}