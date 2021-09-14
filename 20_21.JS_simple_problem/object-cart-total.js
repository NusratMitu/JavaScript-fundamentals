//sum of array objects property

const products = [
    {name:'laptop', price: 44000},
    { name: 'shirt', price: 500 },
    { name: 'watch', price: 3680 },
    { name: 'phone', price: 55000 }
];

 let totalPrice = 0;
for( const product of products){
    totalPrice = totalPrice + product.price;
}
// console.log(totalPrice);

//total price of n quantity of products

const cart =[
    { name: 'laptop', price: 43000, quantity: 1 },
    { name: 'shirt', price: 500, quantity: 8 },
    { name: 'watch', price: 3680, quantity: 3 },
    { name: 'phone', price: 55000, quantity: 1 }
];

let cartTotal = 0;
for (const product of cart){
    let productTotal = product.price * product.quantity;
     cartTotal = cartTotal + productTotal;
}

console.log('tolal amount',cartTotal,'tk');