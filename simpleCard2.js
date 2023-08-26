var list = [
    {name: 'shirt', price: 500, quantity: 2},
    {name: 'pant', price: 500, quantity: 3},
    {name: 'panjabi', price: 500, quantity: 4},
    {name: 'under wordl', price: 500, quantity: 0}
]
function totalCost (products){
let sum = 0;
for( i= 0; i<products.length; i++){
    let product = products[i];
   let total = product.price * product.quantity;
    sum = sum +total;


}
return sum;

}
var MonyNeeds = totalCost(list);
console.log(MonyNeeds);