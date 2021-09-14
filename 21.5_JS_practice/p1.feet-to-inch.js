function feetToInch(feet) {
    const inch = feet * 12;
    return inch;
}

const givenFeet = 5;
const resultInInch = feetToInch(givenFeet);
console.log(resultInInch);