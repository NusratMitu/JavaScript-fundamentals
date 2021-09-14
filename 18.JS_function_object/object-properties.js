var computer = {
    price: 29000,
    storage: '256gb',
    processor: 'core i5',
    color: 'black'
};

//read object properties or object single property
// console.log(computer.storage);     //way 1 to read output

var computerStorage=computer.storage;   //way 2 to reed output
console.log(computerStorage);



// set a object property value
// computer.processor='core i7';   //1
computer["processor"]='core i9';   //2

var computerPrice= "price";        //3
computer[computerPrice]= 25000;


console.log(computer);
