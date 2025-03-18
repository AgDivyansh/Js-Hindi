let arr = [1,2,3,4,5] ;
for (const i of arr) {
    // console.log(i);   
}

let name = "Divyansh Agarwal" ;
for (const i of name) {
    // console.log(i);
    if (i == ' ')
        break ;
}


// map 

const map = new Map() ;
map.set("IN", "India") ;
map.set("USA", "United States Of America") ;
map.set("Fr", "France"); 
for (const i of map) {
    // console.log(i[0]);
}

// destructure of array in map 
for (const [key, value] of map) {
    console.log(`value of ${key} is ${value}`);
    
}