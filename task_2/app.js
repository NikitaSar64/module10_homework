let width = window.screen.width;
let height = window.screen.height;
let btn = document.querySelector('button');

btn.addEventListener('click', () =>{
    alert(`Размерах экрана: ${width}x${height}`);
})
