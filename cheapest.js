const phones = [
    {name: "samsung", camera: 10, Storage: 256, price: 33000},
    {name: "oppo", camera: 10, Storage: 256, price: 34000},
    {name: "nokia", camera: 10, Storage: 256, price: 39000},
    {name: "htc", camera: 10, Storage: 256, price: 25000},
]

function cheapestPhone(phones){
let cheapest= phones[0]
    for(let i=0; i< phones.length; i++ ){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }

    }
return cheapest;
}
const mySelection = cheapestPhone(phones);
console.log(mySelection);