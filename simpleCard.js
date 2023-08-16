// const shoppingCard = [
//     {name:'shoe', price:5, quantity:2},
//     {name:'pant', price:15, quantity:3},
//     {name:'shirt', price:10, quantity:4},
//     {name:'belt', price:20, quantity:2}
// ]
// function totlCost (products){
//     let sum = 0;
//     for (let i = 0; i<products.length; i++){
//         const product = products[i];
//         const total = product.price * product.quantity;
//         sum = sum + total;
//     }
//     return sum;
// }
// const expense = totlCost(shoppingCard);
// console.log(expense)
// .............................................
const shoppingCard = [
    {name:'shoe', price:5, quantity:2},
    {name:'pant', price:15, quantity:3},
    {name:'shirt', price:10, quantity:4},
    {name:'belt', price:20, quantity:2}
]
function totalExpanse(products){
    let sum = 0;
    for(let i=0; i<products.length; i++){
        let product = products[i];
        let total = product.quantity * product.price;
        sum = sum + total; 
        // console.log(sum)


    }
    return sum;
}
const expense = totalExpanse(shoppingCard);
console.log('total expense for shopping:', expense, "taka");