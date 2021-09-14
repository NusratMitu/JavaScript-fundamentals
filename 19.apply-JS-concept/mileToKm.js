//mile to km

function mileToKm(miles){
    var km = miles * 1.6;
    return km;
}

var marathon = 5;
var km = mileToKm(marathon);
console.log(km);