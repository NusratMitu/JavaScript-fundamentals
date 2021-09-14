// 10. you have an array of numbers. display only the numbers bigger than 80

const numberArray = [10, 20, 30, 40, 80, 90, 50, 98, 102, 5, 16];

// function biggerNum(numbers){
for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 80)
        console.log(numberArray[i]);
}
// }