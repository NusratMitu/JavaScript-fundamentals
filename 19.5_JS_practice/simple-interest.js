/*
p=principle
r = rate of interest 5%
t=year 

X tk principle e koto tk interest pabe in certain year

SI = P × R × T,
*/
function simpleInterest(p,r,t){
    let SI =p*r*t;
    return SI;
}

let principleBefore = 500;
let interest = 5;
let rateOfInterest = interest / 100;
let time = 5;
let SINow = simpleInterest(principleBefore,rateOfInterest,time);
// let SINow = principleBefore * rateOfInterest * time;
console.log('after', time, 'years your simple  interest will be', SINow, 'tk.' );
let principleAfter = principleBefore + SINow;
console.log('after', time, 'years your  principle will be', principleAfter, 'tk.' );
