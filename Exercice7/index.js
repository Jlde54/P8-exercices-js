/********************************************************************
 * @description - Conversion d'un nombre décimal en binaire
 * @function (convertToBinary)
 */
function convertToBinary() {
    let number = document.querySelector("#decimalInput").value;
    const binaire = document.querySelector("#binaryResult");

    if (estNombreDecimal(number)) {
        let array = [];
        let rest = 0;
        while (number !== 0) {
            rest = parseInt(number % 2);
            array.unshift(rest);
            number = parseInt(number / 2);
        }
        binaire.textContent = array.join("");
    } else {
        binaire.textContent = "";
    }
    // binaire.textContent = estNombreDecimal(number) ? Number(number).toString(2) : "";
}

/********************************************************************
 * @description - Test nombre décimal
 * @function (estNombreDecimal)
 * @param {valeur} - valeur à tester
 * @return {} - true si la valeur est un nombre décimal
 */
function estNombreDecimal(valeur) {
    return !isNaN(valeur) && Number(valeur) === parseFloat(valeur);
}
