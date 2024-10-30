/********************************************************************
 * @description - Calcul de la moyenne
 * @function (calculateAverage)
 * @param {array} - tableau contenant les nombres
 * @return {} - retourne la moyenne ou un msg d'erreur
 */
function calculateAverage (array){
    let sum = 0;
    if (!array || !array.length) {
        return "No numbers to calculate average";
    } else {
        for (let i = 0; i < array.length; i++) {
            sum += parseInt(array[i]);
        }
        // const sum = array.reduce((acc, num) => acc + parseInt(num), 0);
        return sum / array.length;
    }
}

export default calculateAverage
