/* function animalCount(miles) {
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityRestMiles = 100;
    if (miles <= 10) {
        const count = miles * animalDensityFirst10Miles;
        return count;
    }
    else if (miles <= 20) {
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10;
        const secondDenseAnimals = restMiles * animalDensitySecond10Miles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals;
        return totalAnimals;
    }
    else {
        const firstDenseAnimals = 10 * animalDensityFirst10Miles;
        const secondDenseAnimals = 10 * animalDensitySecond10Miles;
        const restMiles = miles - 20;
        const RestDenseAnimals = restMiles * animalDensityRestMiles;
        const totalAnimals = firstDenseAnimals + secondDenseAnimals + RestDenseAnimals;
        return totalAnimals;
    }
}

const animals = animalCount(35);
console.log(animals); */


function coinEarn (miles){
    const first10PerMile = 5;           //coins
    const second10PerMile = 10;         //coins
    const restPerMile = 15;             //coins
    
    if(miles<=10){
        const earn = miles * first10PerMile;
        return earn;
    }

    else if( miles <= 20){
       const coinEarnInFirst10 = 10 * first10PerMile;
       const restMiles = miles - 10;
       const coinEarnInRest = restMiles * second10PerMile;
       const totalCoinEarn = coinEarnInFirst10 + coinEarnInRest;
       return totalCoinEarn;
    }

    else {
        const coinEarnInFirst10 = 10 * first10PerMile;
        const coinEarnInsecond10 = 10 * second10PerMile;
        const restMiles = miles - 20;
        const coinEarnInRest = restMiles * restPerMile;
        const totalCoinEarn = coinEarnInFirst10 + coinEarnInsecond10 + coinEarnInRest;
        return totalCoinEarn;
    }
}

console.log(coinEarn(25));