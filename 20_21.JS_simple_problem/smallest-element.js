function smallestElement(numbers){
    let smallest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < smallest){
            smallest = numbers[i];
        }
    }
    return smallest;
}

let arrayList = [12,18,22,36,70,45,92,4,8];
let smallestNumb2 = smallestElement([-4,-3,-15]);
let smallestNumb = smallestElement(arrayList);
console.log('smallest element of the array is:', smallestNumb,'&', smallestNumb2);