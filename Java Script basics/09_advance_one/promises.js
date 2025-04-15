// const promiseOne = new Promise (function (resolve, reject) {
// 	// Do a async call 
//     setTimeout(() => {
//         console.log(`async task is completed`);
//         resolve() ;
//     }, 2000);
// });

// promiseOne.then(
//     () => {
//         console.log(`Promise consumed`);
        
//     }
// ) ;


// new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         console.log(`async task 2`);
//         resolve() ;
        
//     }, 3000) ;
// }).then (() => {
//     console.log(`Async 2 resolve`);
// })

// const promiseThree = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve ({username: "Chai", emial: "divyanshag2209@gmail.com"})
//     }, 1000);
// })

// promiseThree.then ((user) => {
//     // log 
//     console.log(`User data passing in resolve function `);
//     console.log(user);
    
    
// })

const promiseFour = new Promise ((resolve, reject) => {
    setTimeout(() => {
        let error = false ;
        if (!error)
        {
            resolve ({username: "Divyansh", password: "123"})
        }
        else
        {
            reject ("ERROR: Something went wrong") ;
        }
    }, 1000);
})


promiseFour.then ((user) => {
    console.log(user);
    return user.username
}).then ((user) => {
    console.log(user);
    
}).catch((error) => {
    console.log(error);
    
}).finally (() => console.log(`The promise is eohter resolved or rejected`));



const promiseFive = new Promise ((resolve, reject) => {
    setTimeout( () => {
        let error = true ;
        if (!error)
        {
            resolve ({username: "javascript", password: "123"}) ;
        }
        else
        {
            reject("Error : Js went wrong") ;
        }
    }, 1000)
})


// promiseFive.then (() => {})
    async function consumedPromiseFive() {
        // const response = await promiseFive ;
        // console.log(response);
        
        try {
            const response = await promiseFive ;
        console.log(response);
        } catch (error) {
            console.log(error);
            
        }
    }

    consumedPromiseFive() ;