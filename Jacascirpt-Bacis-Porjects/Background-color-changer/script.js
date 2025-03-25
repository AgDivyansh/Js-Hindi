const button = document.querySelectorAll('.button');
console.log(button);

const body = document.querySelector('body');
body.style.backgroundColor = '#A3F7B5';

button.forEach((btn) => {
    console.log(btn);
    btn.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target.id);
        body.style.backgroundColor = e.target.id;
    })
})