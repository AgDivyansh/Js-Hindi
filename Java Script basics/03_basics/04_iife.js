// const welcome = () => console.log('welcome and get redy for the race');

// to prevent the global scope polution in the function 
// it will automatically exxute the function when compiler reaches this function 
(function redy() {
    console.log('get redy for the race');
    
}) () ;

// and remember to use ; at the end of the iife to end the iife 

( () => {
    return console.log(`start your bike `);
    
} ) ()