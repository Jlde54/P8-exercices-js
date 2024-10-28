function convertToBinary() {
    let number = document.querySelector("#decimalInput").value;
    const binaire = document.querySelector("#binaryResult");
    console.log("number : ", number)
    console.log("estNombreDecimal(number) : ", estNombreDecimal(number))
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
}

function estNombreDecimal(valeur) {
    return !isNaN(valeur) && Number(valeur) === parseFloat(valeur);
}
