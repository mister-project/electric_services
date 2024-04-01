import Splide from '@splidejs/splide';

export const carousel = () => {
    //Создаем 2 переменные - под наши стрелки. Для навешивания управления на наши (кастомные) стрелки
    const leftArrow = document.querySelector('.arrow-left')
    const rightArrow = document.querySelector('.arrow-right')


    const splide = new Splide('.services-splide', {
        type: 'loop', //задаем циркуляцию слайдов
        //Ниже - классические настройки самого Splider'a
        pagination: false, //убираем точки внизу слайдов

        arrows: false, //отключаем кнопки самого Splider'a
        //Настройки количества слайдов для разных экранов, начиная с Десктопа
        perPage: 3,

        breakpoints: {
            768: {
                perPage: 2,
            },
            640: {
                perPage: 1,
            },
        }
    }).mount();
    //Создаем слушателей для ловли нажатия на наши кнопки
    leftArrow.addEventListener('click', () => {
        splide.go('-1')
    })
    rightArrow.addEventListener('click', () => {
        splide.go('+1')
    })
}