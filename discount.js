function totalRate (ticketQuantity){
    const first100rate = 100;
    const secound100rate = 90;
    const restRate = 70;
    if(ticketQuantity <= 100){
        let cost = first100rate * ticketQuantity;
// console.log(cost)
    }
     else if ( ticketQuantity <= 200){
        let cost1 = first100rate * 100;
        let restTicketQuantity = ticketQuantity - 100;
        let cost2 =secound100rate * restTicketQuantity;
        let cost =cost1 + cost2;
        // console.log(cost);
    }
     else {
        let cost1 = first100rate * 100;
        let cost2 = secound100rate * 100;
        let restTicketQuantity = ticketQuantity - 200;
        let cost3 =restRate * restTicketQuantity;
        let cost =cost1 + cost2 + cost3;
        // console.log(cost);
    }
    // return cost;
}
const ticketPrice = totalRate(201);
console.log(ticketPrice);