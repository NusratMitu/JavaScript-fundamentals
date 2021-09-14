const myString = 'Hello, are you there?';

function reverseString(text){
    let reverse = '';
    for(const char of text){        //char of text k input hisebe nibo
        reverse = char + reverse;   //reverse korbo
    }
    return reverse;
}

const revesed = reverseString(myString);
console.log(revesed);