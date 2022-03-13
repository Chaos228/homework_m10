//ищем кнопку
const initBtn = document.querySelector(".btn");

//добавляем обработчик для кнопки
initBtn.addEventListener('click', function(){
//ищем иконки
    const iconOne = document.querySelector(".icon1");
    const iconTwo = document.querySelector(".icon2");
//если первая иконка скрыта, тогда ее делаем активной, 2ю скрываем. если она активна, то скрывает, активируем 2ю
    if (iconOne.classList.contains("non_active")){ 
        iconOne.classList.remove("non_active");
        iconTwo.classList.add("non_active");
    } else {
        iconOne.classList.add("non_active");
        iconTwo.classList.remove("non_active");
    }
})
