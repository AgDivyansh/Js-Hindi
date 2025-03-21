console.log('hello world');
const parent = document.querySelector('.parent');
console.log(parent);
// const child = parent.children;
for (let i = 0; i < parent.children.length; i++) {
    // const element = array[i];
    console.log(parent.children[i].innerText);   
}

// parent.children[1].style.backgroundColor = 'red';
console.log(parent.firstElementChild.innerText);


const day1 = document.querySelector('.day') ;
console.log(` this is the value of day 1 : ${day1}`);

// this is used to get the parent node of the day1
console.log(`parent node of day1 is : ${day1.parentNode}`);

console.log(`next sibling of day1 is : ${day1.nextElementSibling}`);
