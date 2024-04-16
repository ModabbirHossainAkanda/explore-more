/*
fixed: per item wood requirements
1.chair ...> 3 cft
2. table ...> 10 cft
3. bed ...> 50 cft

vary: quantity
*/

// function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;
    
//     const chairWood = chairQuantity * perChairWood;
//     const tableWood = tableQuantity
//     const bedWood = bedQuantity * perBedWood;

//     // console.log(chairQuantity, tableQuantity, bedQuantity);
//     const totalWood = chairWood + tableWood + bedWood;
//     return totalWood;
// }

// const totalWood = woodCalculator(2, 2, 5);
// console.log('total wood required: ', totalWood);

// function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;

//     const chairWood = chairQuantity * perChairWood;
//     const tableWood = tableQuantity * perTableWood;
//     const bedWood = bedQuantity * perBedWood;
    
//     const totalWood = chairWood + tableWood + bedWood;
//     return totalWood;
// }
// const totalWood = woodCalculator(2, 1, 1);
// console.log('total wood requirements: ', totalWood)


// function woodCalculator(chairLagbe, tableLagbe, bedLagbe){
//     const perChairDam = 3;
//     const perTableDam = 5;
//     const perBedDam = 10;

//     const chairWood = chairLagbe * perChairDam;
//     const tableWood = tableLagbe * perTableDam;
//     const bedWood = bedLagbe * perBedDam;
//     const totalWood = chairWood + tableWood + bedWood;
//     return totalWood;
// }
// const totalWood = woodCalculator(2, 2, 5);
// console.log('total wood drkar: ', totalWood);

function bazarCalculation(chalLagbe , dalLagbe, aluLagbe){
    const perKgChal = 10;
    const perKgDal = 15;
    const perKgAlu = 20;
    const totalChal = chalLagbe * perKgChal;
    const totalDal = dalLagbe * perKgDal;
    const totalAlu = aluLagbe * perKgAlu;
    const totalBazar = totalChal + totalDal + totalAlu;
    return totalBazar;
}
const totalBazar = bazarCalculation(2, 2, 5);
console.log('Bazar niye asba: ', totalBazar);