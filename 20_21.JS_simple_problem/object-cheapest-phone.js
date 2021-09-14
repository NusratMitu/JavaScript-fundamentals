//array of objects

const phones =[
    {name:'iphone', price:'75000', storage:'128gb'},
    {name:'poko', price:'56000', storage:'256gb'},
    {name:'realme', price:'18000', storage:'256gb'},
    {name:'xaomi', price:'25000', storage:'128gb'},
];

let cheapest = phones[0];
for( const phone of phones){
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
console.log(cheapest);