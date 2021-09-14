// problem 1: Convert Seer to Mon
function seerToMon(seer) {
    //input validate condition if the parameter is not a number or a negetive number
    if (typeof (seer) != 'number' || seer < 0 ) {
    return 'please enter a positive number as input';
    }
    else {
    //conversion formula
    let mon = seer / 40;
    return mon;
    }
    }
    console.log(seerToMon(80));
    //Problem 2: Find total sales of n number of products
    function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    //check whether all the input parameters are positive and integer number or not
    if ( shirtQuantity >= 0 && Number.isInteger(shirtQuantity) ) {
    if(pantQuantity >= 0 && Number.isInteger(pantQuantity) ) {
    if(shoeQuantity >= 0 && Number.isInteger(shoeQuantity)){
    //calculation for total sales
    const pricePerShirt = 100;
    const pricePerPant = 200;
    const pricePerPairShoe = 500;
    const totalSale = pricePerShirt * shirtQuantity + pricePerPant * pantQuantity + pricePerPairShoe * shoeQuantity;
    return totalSale;
    }
    else {
    return 'Please enter a positive integer as third parameter & \nremember string is not a valid parameter';
    }
    }
    else {
    return 'Please enter a positive integer as second parameter & \nremember string is not a valid parameter';
    }
    }
    else {
    return 'Please enter a positive integer as first parameter & \nremember string is not a valid parameter';
    }
    }
    const totalPrice = totalSales(1,1,1);
    console.log(totalPrice);
    // Problem 3: Find the delivery cost of n quantity of Tshirt
    function deliveryCost (tshirtQuantity){
    const first100PerTshirtCost = 100; //shipping cost
    const second100PerTshirtCost = 80; //shipping cost
    const restPerTshirtCost = 50; //shipping cost
    //check whether the input parameter is positive number or not
    if(typeof(tshirtQuantity) == 'number' && tshirtQuantity >= 0){
    //check quantity
    if( tshirtQuantity <= 100 ){
    const totalShippingCost = tshirtQuantity * first100PerTshirtCost;
    return totalShippingCost;
    }
    else if( tshirtQuantity < 200){
    const first100ShippingCost = 100 * first100PerTshirtCost;
    const restTshirtQuantity = tshirtQuantity - 100;
    const restShippingCost = restTshirtQuantity * second100PerTshirtCost;
    const totalShippingCost = first100ShippingCost + restShippingCost;
    return totalShippingCost;
    }
    else {
    const first100ShippingCost = 100 * first100PerTshirtCost;
    const second100ShippingCost = 100 * second100PerTshirtCost;
    const restTshirtQuantity = tshirtQuantity - 200;
    const restShippingCost = restTshirtQuantity * restPerTshirtCost;
    const totalShippingCost = first100ShippingCost + second100ShippingCost + restShippingCost;
    return totalShippingCost;
    }
    }
    else {
    return 'you\'ve given a wrong input';
    }
    }
    console.log(deliveryCost(200));
    // Problem 4: Find the name of the perfect friend
    const friendsName = ['mushfiq', 'sakib', 'taskin', 'tamim'];
    // const friendsName =[];
    // const friendsName =['sakib', 1];
    function perfectFriend(names) {
    //check if array is empty or not
    if( names.length != 0 ){
    for(let name of names){
    //check if the array has any element other than string
    if ( typeof(name) != 'string'){
    return 'all array elements should be string';
    }
    }
    for( let name of names){
    //check if the array element has 5 characher
    if(name.length == 5){
    return name;
    }
    }
    return 'you don\'t have friends whose name has five letters';
    }
    else
    return 'please enter array element';
    }
    let friendName = perfectFriend(friendsName);
    console.log(friendName);