//odd
 function isOdd(number){
     if(number % 2 == 1){
         return true;
     }
     return false;
 }

 const myNumb = 56;
 const checkMyNumb = isOdd(myNumb);
 console.log('check odd number status:',checkMyNumb);

 //even
 function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    return false;
}

const myNumb2 = 58;
const checkMyNumb2 = isEven(myNumb2);
 console.log('check even number status:',checkMyNumb2);
