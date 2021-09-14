var first = 5;
var second = 8;

// first approach
let temp = first;
first = second;
second = first;
console.log(first, second);

// destructuring
[first, second] = [second, first];
console.log(first, second);