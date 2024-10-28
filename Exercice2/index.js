function calculate (nbre1, nbre2, op) {
    let result = "";
    switch (op) {
        case "+":
            result = parseInt(nbre1) + parseInt(nbre2);
            break;
        case "-":
            result = parseInt(nbre1) - parseInt(nbre2);
            break;
        case "*":
            result = parseInt(nbre1) * parseInt(nbre2);
            break;
        case "/":
            if (parseInt(nbre2) === 0) {
                result = "Division by zero is not allowed";
            } else {
                result = parseInt(nbre1) / parseInt(nbre2);
            }
            break;
        default:
            result = "Invalid operator";
    }
    return result;
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate
