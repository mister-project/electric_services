const buttonUp = () => {

    //Находим кнопку .UP
    const btnUp = document.querySelector('.up');

    //Находим блок улуги
    const services = document.getElementById('services');

    //Задаем изначально кнопку .UP невидимой
    btnUp.style.display = 'none';

    //фиксируем изменение скролла
    window.addEventListener('scroll', (e) => {

        //Сравниваем позицию блока с текущей прокруткой и делаем видимой кнопку UP
        const delta = document.documentElement.scrollTop - services.getBoundingClientRect().top
        if (delta > 0) {
            btnUp.style.display = 'block';
        } else {
            btnUp.style.display = 'none';
        }
    });

    const goTop = () => {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -10); //вторая цифра определяет скорость скрола
            setTimeout(goTop, 0);
        }
    }

    //Фиксация клика по кнопке и запуск скрола вверх
    btnUp.addEventListener('click', () => {
        goTop();
    })
}
export default buttonUp