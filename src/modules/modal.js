//Модуль для вызова и закрытия модального окна
const modal = () => {

    //Получаем модальное окно целиком 
    const modal = document.querySelector('.modal-callback')

    //Получаем кнопку закрытия внутри модального окна
    const modalClose = modal.querySelector('.modal-close')

    //Получаем тень целиком (overlay)
    const overlay = document.querySelector('.modal-overlay')

    const fancyboxModal = document.querySelectorAll('.fancyboxModal')
    console.log(fancyboxModal)

    //слушаем события во всем документе и через дилегирование отлавливаем  нажатие любой из кнопок с классом 'fancyboxModal'  

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.fancyboxModal')) return;

        modal.style.display = 'block'
        overlay.style.display = 'block'
    })

    //Закрываем модальное окно и тень при нажатии на тень
    overlay.addEventListener('click', () => {

        modal.style.display = 'none'
        overlay.style.display = 'none'
    })

    //Закрываем модальное окно и тень при нажатии на крестик в самом окне
    modalClose.addEventListener('click', () => {


        modal.style.display = 'none'
        overlay.style.display = 'none'
    })

}


export default modal