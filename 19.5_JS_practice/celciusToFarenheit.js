//celcius to farenheit
function celciusToFarenheit(cel){
    let far = (cel * (9/5)) +32;
    return far;
}

let farenheit = celciusToFarenheit(27);
// let farenheitNow= parseFloat(farenheit.toFixed(3));  //to conver string to mber
// let farenheitNow= farenheit.toFixed(3);  //farenheite in number
// console.log( farenheitNow, 'is today\'s temperature in farenheit');
console.log( parseFloat(farenheit.toFixed(1)), 'is today\'s temperature in farenheit');