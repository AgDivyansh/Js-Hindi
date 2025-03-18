const arr = [1, 2, 3];


// console.log(`acc takes the initial value which is present after the "," or value present after the call back funcion`);

const total = arr.reduce(function (acc, curr) {
    console.log(`current value of arr : ${acc} and value of curr : ${curr}`);

    return acc + curr
}, 0);
// const total = arr.reduce((acc,curr) => acc+curr , 0) ;
// console.log(total);



const courses = [
    {
        course: "DSA",
        price: 9999
    },
    {
        course: "Full-Stack",
        price: 5999
    },
    {
        course : "Java-Script",
        price: 2999
    },
    {
        course: "Android Development",
        price: 8999
    }
]

const sum = courses.reduce((acc, arr) => acc + arr.price , 0); 
console.log(`Total value of all the courses are ${sum}`);
