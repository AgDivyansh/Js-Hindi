const user = {
    username: "Divyansh Agarwal",
    price: 999,

    welcomemmessage: function () {
        console.log(`${this.username} welcome to the website.`);

    }
}

user.welcomemmessage();
user.username = "Divyansh";
console.log(`afer updating username in the user object. `);

user.welcomemmessage();


// const test = function () {
    // console.log(`this is normal function using function keyword`);    
    // console.log(this);
    
// }
const test = () => {
    console.log(`this is sample arrow function`);
    console.log(this);
    
    
}
test() ;