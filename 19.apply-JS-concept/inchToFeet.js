function inchToFeet(inches){
    var feet= inches/12;
    return feet;
}

var myInchs = 150;
var feet = inchToFeet(myInchs);
console.log('my inches',feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log('dadi inches in feet', feet);

var naniInches = 156;
var feet = inchToFeet(naniInches);
console.log('nani inches in feet', feet);
