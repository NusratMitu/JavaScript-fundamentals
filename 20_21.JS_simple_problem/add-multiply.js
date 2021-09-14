/* 
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/

/* function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    // wood calculation
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    // adding all wood quantity
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}

const firstOption = woodCalculator(1, 2, 3);
console.log(firstOption); */

function priceCalculation(eggQuantity, chickenQuantity, cokeQuantity){
    const pricePerEgg = 8;
    const pricePerChicken = 220;
    const pricePerCoke = 70;
    const total = pricePerEgg * eggQuantity + pricePerChicken * chickenQuantity + pricePerCoke * cokeQuantity;
    return total;
}

const moneyNedded = priceCalculation(12,3,5);
console.log(moneyNedded,'tk');