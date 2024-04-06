const scrollMenu = () => {

    console.log('scrollMenu')

    // собираем все якоря; устанавливаем время анимации и количество кадров
    const topMenu = document.querySelector('.top-menu')
    const anchors = topMenu.querySelectorAll('a[href*="#"]')

    anchors.forEach(function (item) {
        // каждому якорю присваиваем обработчик события
        item.addEventListener('click', function (e) {

            // убираем стандартное поведение
            e.preventDefault();
            const blockID = item.getAttribute('href')
            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth',
                block: "start"

            })
        })
    })
}

export default scrollMenu