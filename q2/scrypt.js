const initBtn = document.querySelector(".btn");

initBtn.addEventListener('click', () =>{
    widthValue = window.screen.width;
    heigthValue = window.screen.height;

    alert(`Ширина экрана: ${widthValue}, высота экрана: ${heigthValue}`);
})