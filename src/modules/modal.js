//Модуль для вызова и закрытия модального окна
const modal = () => {

    //Получаем модальное окно целиком 
    const modal = document.querySelector('.modal-callback')

    //Получаем кнопку закрытия внутри модального окна
    const modalClose = modal.querySelector('.modal-close')

    //Получаем тень целиком (overlay)
    const overlay = document.querySelector('.modal-overlay')

    //Получаем мобильное меню
    const mobMenu = document.querySelector('.mobile-menu')

    //Очистка статуса отправки сообщения, если он не пустой
    const clearSendStatus = () => {
        const sendStatus = document.getElementById('sendStatus')
        if (sendStatus) {
            sendStatus.textContent = ''
        }
    }

    //функция открытия модального окна
    const openModal = () => {
        modal.style.display = 'block'
        overlay.style.display = 'block'
        //   modal.style.z-index: 400
        // 
        clearSendStatus()
    }

    //функция закрытия модального окна
    const closeModal = () => {
        modal.style.display = 'none'
        overlay.style.display = 'none'
        clearSendStatus()

    }

    //слушаем события во всем документе и через дилегирование отлавливаем  нажатие любой из кнопок с классом 'fancyboxModal'  
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.fancyboxModal')) return;
        openModal();
        //Закрываем мобильное меню
        mobMenu.classList.remove("open");
    })

    //Закрываем модальное окно и тень при нажатии на тень
    overlay.addEventListener('click', () => {
        closeModal();
    })

    //Закрываем модальное окно и тень при нажатии на крестик в самом окне
    modalClose.addEventListener('click', () => {
        closeModal();
    })
}
export default modal