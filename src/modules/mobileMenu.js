//Модуль для вызова и закрытия модального окна
const mobileMenu = () => {

    const mobBtn = document.querySelector('.mob-menu-btn')
    const mobMenu = document.querySelector('.mobile-menu')

    //При нажатии на кнопку меню добавляем класс окну меню для его открытия
    mobBtn.addEventListener('click', () => {
        mobMenu.classList.add("open");

    })
}
export default mobileMenu