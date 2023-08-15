// const chair = 30;
// const table = 10;
// const bed = 95;
// const chairWood = chair * 3;
// const tableWood = table * 10;
// const bedWood = bed * 50;
// const totalWood = chairWood + tableWood + bedWood;
// console.log('total wood needs;', totalWood, 'cft')
// .....alternative way...........

function woodCalculation(chair, table, bed){
    const perChaie = 5;
    const perTable = 10;
    const perbed = 15;
    woodforChair = perChaie * chair;
    woodforTable = perTable * table;
    woodforBed = perbed * bed;
    const totalWoodNeeds = woodforChair + woodforTable + woodforBed;
    return totalWoodNeeds
}
const totalwood = woodCalculation(1, 3, 3)
console.log(totalwood);
console.log('chair',woodforChair)
console.log('table',woodforTable)
console.log('bed',woodforBed)