const accordion = () => {

    //Получение всего блока аккордеона
    const accorddBlock = document.querySelector('.accordeon');

    //Получение элементов аккордеона
    const accordElements = accorddBlock.querySelectorAll('.element');

    //Открытие выбранного пункта по клику и закрытие остальных
    accorddBlock.addEventListener('click', (e) => {

        //перебираем элементы аккордеона и сопоставляем с тем, по которому был клик -> меняем класс у заголовка и свойство видимости у блока контента
        accordElements.forEach((elem) => {
            if (e.target == elem.querySelector('.title')) {
                elem.className = 'element active';
                elem.querySelector('.element-content').style.display = 'block';
            } else {

                //Закрытие пунктов, по которым не было клика
                elem.className = 'element';
                elem.querySelector('.element-content').style.display = 'none';
            }
        })
    })

}
export default accordion