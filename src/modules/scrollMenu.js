const scrollMenu = () => {

    // собираем все якоря; устанавливаем время анимации и количество кадров

    const anchors = document.querySelectorAll('a[href*="#"]');
    //мобильное меню получаем
    const mobMenu = document.querySelector('.mobile-menu')


    anchors.forEach(function (item) {
        // каждому якорю присваиваем обработчик события
        item.addEventListener('click', function (e) {
            // убираем стандартное поведение
            e.preventDefault();
            //Закрываем мобильное меню
            mobMenu.classList.remove("open");
            const blockID = item.getAttribute('href');
            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: "start"
            })


        })
    })
}
export default scrollMenu