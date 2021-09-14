// function isLeapYear(year) {
//     if  (year % 400 == 0){
//         return true;
//     }
//      else if (year % 4 == 0 && year % 100 != 0) ||){
//          return true;
//     }
//     else {
//         return false;
//     }
// }
function isLeapYear(year){
    if(year % 4 == 0){
        if(year % 100 == 0){
            if (year % 400 == 0){
                return true;
            }
            else return false;
        }
        else return true;
    }
    else{
        return false;
    }
}

const myYear = 1900;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('Is my year leap year', isMyYearLeapYear);

const yourYear = 1700;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('is your year leap year', isYourYearLeapYear);