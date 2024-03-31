const accordion = () => {

    //Получение всего блока аккордеона
    const accorddBlock = document.querySelector('.accordeon')
    //Получение элементов аккордеона
    const accordElements = accorddBlock.querySelectorAll('.element')

    //Запуск закрытия всех пунктов по клику внутри аккордеона

    accorddBlock.addEventListener('click', (e) => {
        accordElements.forEach((elem, index) => {
            elem.className = 'element'
            elem.querySelector('.element-content').style.display = 'none'
        })
        //Так же через слушатель перебираем элементы аккордеона и сопоставляем с тем, по которому был клик и меняем класс у заголовка и свойство видимости у контента
        accordElements.forEach((elem, index) => {
            if (e.target == elem.querySelector('.title')) {

                elem.className = 'element active'
                elem.querySelector('.element-content').style.display = 'block'
            }
        })

    })

}

export default accordion