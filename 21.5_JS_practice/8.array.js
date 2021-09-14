// 8. declare an array. number of elements. update or change 4th position element. add or remove elements. check whether a specific value exists in the array

const ages = [22, 25, 30, 12, 18, 15, 20];
// console.log(ages.length);   //num of element

//update
ages[3] = 122;
// console.log(ages);

//push
ages.push(115, 1, 221);
ages.pop(221);
// console.log(ages);

// check whether a specific value exists in the array

var indexCheck = ages.indexOf(1);
console.log('index no', indexCheck);
if (ages.indexOf(23) != -1) {
    console.log('value exists');
}
else {
    console.log('value does not exists');
}
