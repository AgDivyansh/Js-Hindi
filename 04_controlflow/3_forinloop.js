console.log(`for in loop gives the key of the object `);
console.log(`we can not traverse map using for in loop `);






const myObject = {
    cpp: "C++",
    js: "Java Script",
    rb: "Ruby",
    swift: "Swift By Apple"
}

for (const i in myObject) {
    // console.log(`${i} :- ${myObject[i]}`);
}

const arr = [10,20,30,40,50] ;
for (const i in arr) {
    // console.log(i);
    
}

const m = new Map() ;
m.set("1", "Gym") ;
m.set("2", "Bikes") ;

console.log(`for in loop does not works on map`);

for (const i in m) {
    console.log(`for in loop does not works on map`);
    
    console.log(i);
    
}