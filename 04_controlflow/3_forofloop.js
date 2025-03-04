console.log(`for of loop drictly prints the value of the array, map, and can also get the [keys, value] of the map`);



const arr = [1,2,3,4,5] ;

for (const num of arr) {
    // console.log(num);
}
const name = "Divyansh" ;
for (const s of name) {
    // console.log(s);   
}

const m = new Map() ;
m.set("IN", "India") ;
m.set("USA", "United States Of America") ;
m.set("Fr", "France") ;

for (const i of m) {
    console.log(`${i[0]} is mapped with :- ${i[1]}`);
}

for (const [key, value] of m) {
    console.log(`${key} :- ${value}`);
}