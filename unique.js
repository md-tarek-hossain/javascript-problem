// function removeDuplicate(names){
//     const unique = [];
//     for(let i=0; i<names.length; i++){
//         const name = names[i];
//         if(unique.includes(name) === false){
//             unique.push(name);
//         }
//     }
//     return unique;
// }
// const names =['tarek', 'jaber', 'kamrul', 'anwar', 'raju', 'chukku ', 'tarek', 'jaber', 
// 'kamrul', 'tarek'];
// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);


// ...............................................................................

function removeDuplicateName(names){
    const uniqueName = [];
    for(let i=0; i<names.length; i++){
        const name = names[i];
        if(uniqueName.includes(name) === false){
            uniqueName.push(name);
        }
    }
    return uniqueName;
}
const names =['tarek', 'jaber', 'kamrul', 'anwar', 'raju', 'chukku ', 'tarek', 'jaber', 'kamrul','tarek', 'jaber', 'kamrul', 'anwar', 'raju', 'chukku ', 'tarek', 'jaber', 'kamrul', 'tarfi' ]
const uniqueNameList = removeDuplicateName(names);
console.log(uniqueNameList);