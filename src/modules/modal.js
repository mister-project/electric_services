//Модуль для вызова и закрытия модального окна
const modal = () => {
    console.log('modal')
    const modal = document.querySelector('.modal-callback')

    const button = document.querySelector('.callback-btn')
    const overlay = document.querySelector('.modal-overlay')
    const body = document.querySelector('body')

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.callback-btn')) return;

        modal.style.display = 'block'
        overlay.style.display = 'block'
    })

    //Закрываем модальное окно и тень при нажатии на тень
    body.addEventListener('click', (e) => {
        if (!e.target.closest('.modal-overlay')) return;

        modal.style.display = 'none'
        overlay.style.display = 'none'
    })
    //Закрываем модальное окно и тень при нажатии на крестик в самом окне
    modal.addEventListener('click', (e) => {

        if (!e.target.classList.contains('modal-close')) {
            modal.style.display = 'none'
            overlay.style.display = 'none'

        }
    })

}


export default modal