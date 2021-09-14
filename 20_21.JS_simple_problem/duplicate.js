// Remove duplicate items from an array
/* const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul'];

function removeDuplicate(names) {
    const unique = [];
    // for (let i = 0; i < names.length; i++) {
    //     const element = names[i];
    //     // console.log(element);
    // }
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames); */

const numbers = [1,2,3,4,5,2,6,7,4,2,1,8,9,3];

function uniqueNumbers(numbers){
    let uniqueNum = [];
    for(const element of numbers){
        if( uniqueNum.indexOf(element) == -1){
            uniqueNum.push(element);
        }
    }
    return uniqueNum;
}

console.log(uniqueNumbers(numbers));