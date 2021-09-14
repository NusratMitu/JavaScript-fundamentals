const numbers = [52,12,25,78,65];
// sum = 0;
// for (i=0; i<numbers.length; i++){
//    let sum = sum + numbers[i];
// }
// console.log('array sum:',sum);

//function

function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
         sum = sum + numbers[i];
    }
    return sum;
}

const total = arrayTotal([32, 45, 67]);
console.log('array total', total)