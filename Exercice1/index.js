function pairNumbers (min, max) {
    let array = [];
    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            array.push(i);
        }
    }
    return array.join(",");
}

let min = 1;
let max = 10;
pairNumbers(min, max);

export default pairNumbers;
