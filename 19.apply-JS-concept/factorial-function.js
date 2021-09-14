function getFactorial(number){
    let factorial = 1;
    for(let i=0; i<=number; i++){
        factorial =factorial* i;
    }
    return factorial;
}

let num = 5;
let getFactorialNumb = getFactorial(num);
console.log(getFactorialNumb);