var gotJob = false;
var moneySaved = 50000;
var hasFlat = false;
var hasHouse = true;

// if (gotJob == true && moneySaved > 200000) {
//     console.log('lets do travel');
// }
// else {
//     console.log('Stay home');
// }

// if (gotJob == true && moneySaved > 200000 && hasFlat == true) {
//     console.log('lets do travel');
// }
// else {
//     console.log('Stay home')
// }

// if (gotJob == true || moneySaved > 200000) {
//     console.log('lets do travel');
// }
// else {
//     console.log('Stay home');
// }

if ((gotJob == true && moneySaved > 200000) || hasHouse == true) {
    console.log('lets do travel');
}
else {
    console.log('Stay home');
}