console.log(`all is working fine`);


const addlanguage =  (lan) => {
    const newlan = document.createElement('li');
    newlan.innerText = lan;
    document.querySelector('.language').appendChild(newlan);
}

addlanguage('Python');
addlanguage('Java');
addlanguage('C++');
addlanguage('JavaScript'); 


// this is the nore optimized way to add the language
// const addlanguage = (lan) => {  

const changename = (lan) => {
    const select = document.querySelector('Li:nth-child(2)');
    console.log(` selected object is : ${select}`);
    // select.innerText = lan;
    const newli = document.createElement('li');
    newli.appendChild(document.createTextNode(lan));
    select.replaceWith(newli)

    
}
changename('c#');