//farenheit to celcius

function farenheitToCelcius(farenheit){
   let cel = (farenheit - 32) * (5 / 9);
   return cel;
}

let farNow = 87;
let celNow = farenheitToCelcius(farNow);
console.log(parseFloat(celNow.toFixed(3)), 'degree celcius');