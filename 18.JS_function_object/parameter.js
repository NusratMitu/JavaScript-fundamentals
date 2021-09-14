function bringTea (taka){
    console.log('provided',taka ,' taka for tea');
    var teaPrice = 10;
    var teaQuantity = taka / teaPrice;
    return teaQuantity;
    
}
// bringTea(100); //input parameter value
var money = 250;
var tea = bringTea(money); //input parameter variabe
console.log('tea price', tea, 'taka');