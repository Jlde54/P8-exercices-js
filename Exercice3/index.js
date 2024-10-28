function calculateAverage (array){
    let sum = 0;
    if (!array || !array.length) {
        return "No numbers to calculate average";
    } else {
        for (let i = 0; i < array.length; i++) {
            sum += parseInt(array[i]);
        }
        return sum / array.length;
    }
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
