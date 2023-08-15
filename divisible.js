// function counting(number){
let array = [];
    for (let i=1; i<=50; i++){
        let index=i;
         if(i%5 ===0 && i%3 ===0){
            array.push('fooboo')
        }
         else if(i%3 ===0){
            array.push('foo')
            // console.log(index)
        }
        else if(i%5 ==0){
            array.push('boo')
        }
       
        else{
            array.push(index);
        }

        console.log(array);
    }
// }