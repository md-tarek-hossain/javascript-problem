function add(num1, num2){
   if(typeof num1 !=="number" && typeof num2 !== 'number'){
    console.log('please input num1 and num2 as a number, thank you.')
   }
    else if(typeof num1 !== "number"){
        console.log('Please input num1 as a number!!') 
    }
    else if(typeof num2 !== "number"){
        console.log('please input num2 as a number')
    }
    else{
         return num1 + num2;
    }


}
const result = add(12, 45);
console.log(result);