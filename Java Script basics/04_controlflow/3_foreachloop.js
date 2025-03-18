const arr = ["C++", "Jaca Script", "Java", "Ruby", "Swift"];

console.log(`we have give a call back function in for each loop`);
console.log(`And call back funciton does not have any name `);



// arr.forEach((item) => console.log(item))


arr.forEach((item, index, arr) => {
    console.log(item, index, arr);
    
})
// arr.forEach( function (item) {
//     console.log(item);
    
// } )