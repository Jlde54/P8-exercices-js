/********************************************************************
 * @description - Retourner une chaine de caractères avec tous les nombres pairs entre un minimum et maximum
 * @function (pairNumbers)
 * @param {min} - nombre min
 * @param {max} - nombre max
 * @return {} - chaine de caractères avec tous les nombres pairs entre un minimum et maximum
 */
function pairNumbers (min, max) {
    let array = [];
    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            array.push(i);
        }
    }
    return array.join(",");
    // return Array.from({ length: max - min + 1 }, (_, i) => min + i).filter(i => i % 2 === 0).join(",");
}

let min = 1;
let max = 10;
pairNumbers(min, max);

export default pairNumbers;
