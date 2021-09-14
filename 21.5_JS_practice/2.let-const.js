// Variables defined with let cannot be redeclared.
let x = "John Doe";
let x = 0;
// SyntaxError: 'x' has already been declared

//With var you can:
var x = "John Doe";
var x = 0;

//ES6 introduced two important new JavaScript keywords: let and const.These two keywords provide Block Scope in JavaScript.Variables declared inside a { } block cannot be accessed from outside the block:
let x = 10;
// Here x is 10

{
    let x = 2;
    // Here x is 2
}

// Here x is 10

// Variables defined with const cannot be Redeclared and Reassigned.


/* Always use const when you declare:
A new Array
A new Object
A new Function
A new RegExp */