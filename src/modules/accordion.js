const accordion = () => {
    console.log('accordion')
    //Получение разметки под аккордеон
    const accorddBlock = document.querySelector('.accordeon')
    console.log(accorddBlock)
    //Получение элементов аккордеона
    const accordElements = accorddBlock.querySelectorAll('.element')




    //перебор элементов + окрытие абзацев при срабатывании слушателя по клику
    accordElements.forEach((elem, index) => {
        const elemContent = elem.querySelector('.element-content')
        console.log(elemContent)

        elem.addEventListener('click', (e) => {

            if (elem.className === 'element active' && elemContent.style.display === 'block') {
                elem.className = 'element'
                elemContent.style.display = 'none'
            } else {
                elem.className = 'element active'
                elemContent.style.display = 'block'
            }
        })

    })
}

export default accordion