/********************************************************************
 * @description - Effectuer l'opération mathématique
 * @function (calculate)
 * @param {nbre1} - 1er nombre entier
 * @param {nbre2} - 2ème nombre entier
 * @param {op} - opérateur
 * @return {} - résultat de l'opération
 */
function calculate (nbre1, nbre2, op) {
    let result = "";
    const num1 = parseInt(nbre1);
    const num2 = parseInt(nbre2);
    switch (op) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                result = "Division by zero is not allowed";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Invalid operator";
    }
    return result;
}

export default calculate
