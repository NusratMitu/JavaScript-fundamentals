//centimeter To Meter

function centimeterToMeter(cm) {
    const meter = cm / 100;
    return meter;
}

const cmGiven = 450;
const resultInMeter = centimeterToMeter(cmGiven);
console.log(resultInMeter);