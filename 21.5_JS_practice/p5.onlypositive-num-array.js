const numbers = [10, 15, 5, 18, -15, 17, 20, -4];

function findPositive(num) {
    const positiveNumbers = [];
    for (let number of numbers) {
        if (number >= 0) {
            positiveNumbers.push(number);
        }
        else break;
    }
    return positiveNumbers;
}

console.log('positive numbers:', findPositive(numbers));