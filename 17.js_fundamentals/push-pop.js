//add element to an array
var friendsName= ['salam', 'kalam', 'adam'];
friendsName.push('smith', 'jon');
console.log(friendsName);


//remove element to an array
var friendsAge= [13,17,15,22];
// console.log(friendsAge);

// friendsAge.pop();
// console.log(friendsAge);

var lastElement=friendsAge.pop();
console.log(friendsAge);
console.log(lastElement);

// javascript remove first item from an array !!
var cats = ['Bob', 'Willy', 'Mini'];
cats.shift();
console.log(cats);

// javascript array add element in the beginning !!!
cats = ['Bob'];
cats.unshift('Willy'); // ['Willy', 'Bob']
cats.unshift('Puff', 'George');
// console.log(cats);
