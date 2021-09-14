const x = 1650;
const y = 850;
const z = 900;
// if (x > y) {
//     console.log('x is bigger');
// }
// else {
//     console.log('y is bigger');
// }

function findLargest(first, second) {
    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}

const largest = findLargest(154, 241);
// console.log('largest is', largest)

// compare 3
/* if (x > y && x > z) {
    console.log('x is bigger');
}
else if (y > x && y > z) {
    console.log('y is bigger');
}
else {
    console.log('z is bigger');
} */

// Task 1: create a function that takes three numbers as input parameter and returns you the largest number of the three

function largestAmongThree(a,b,c){
    if(a>b && a>c){
    return a;}
    else if(b>a && b>c){
    return b;}
    else 
    return c;
}

let largestNumb = largestAmongThree(45,24,88);
console.log('largest number is:', largestNumb);

// Task 2: Write a function to find the smallest of three numbers.

function smallestAmongThree(a,b,c){
    if(a<b && a<c){
    return a;}
    else if(b<a && b<c){
    return b;}
    else 
    return c;
}

let smallestNumb = smallestAmongThree(45,24,88);
console.log('smallest number is:', smallestNumb);


//math.max

var large = Math.max(67, 78, 12)
console.log('large number:',large);

var small = Math.min(67, 78, 12)
console.log('small number:',small);