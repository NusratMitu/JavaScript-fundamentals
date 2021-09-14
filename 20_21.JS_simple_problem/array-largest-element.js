function largestElement(numbers){
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > largest){
            largest = numbers[i];
        }
    }
    return largest;
}

let arrayList = [12,18,22,36,70,45,92,4,8];
let largestNumb2 = largestElement([-4,-3,-15]);
let largestNumb = largestElement(arrayList);
console.log('largest element of the array is:', largestNumb,'&', largestNumb2);