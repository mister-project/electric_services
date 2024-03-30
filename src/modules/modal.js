//Модуль для вызова и закрытия модального окна
const modal = () => {

    //Получаем модальное окно целиком 
    const modal = document.querySelector('.modal-callback')
    
    //Получаем кнопку закрытия внутри модального окна
    const modalClose = modal.querySelector('.modal-close')
    
    //Получаем тень целиком (overlay)
    const overlay = document.querySelector('.modal-overlay')
    
<<<<<<< HEAD
    //слушаем события во всем документе, через дилегирование отлавливаем  нажатие кнопки классом 'callback-btn' и делаем видимыми модальное окно и тень
=======
    //слушаем события во всем документе и через дилегирование отлавливаем  нажатие кнопки с классом 'callback-btn'  
>>>>>>> slider

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.callback-btn')) return;

        modal.style.display = 'block'
        overlay.style.display = 'block'
    })

    //Закрываем модальное окно и тень при нажатии на тень
    overlay.addEventListener('click', () => {
      
        modal.style.display = 'none'
        overlay.style.display = 'none'
    })
<<<<<<< HEAD

    //Закрываем модальное окно и тень при нажатии на крестик в самом окне
    modalClose.addEventListener('click', () => {
=======

    //Закрываем модальное окно и тень при нажатии на крестик в самом окне
    modalClose.addEventListener('click', () => {

>>>>>>> slider

        modal.style.display = 'none'
        overlay.style.display = 'none'
    })

}


export default modal()