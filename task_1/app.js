let svg = document.querySelectorAll('button svg');
let btn = document.querySelector('button');


btn.addEventListener('click', () => {
    svg[0].classList.toggle('hide');
    svg[1].classList.toggle('show');
})
