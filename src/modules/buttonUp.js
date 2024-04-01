const buttonUp = () => {

    const btnUp = document.querySelector('.up')
    console.log(btnUp)

    btnUp.addEventListener('click', () => {
        goTop()
    })

    const goTop = () => {
        console.log('ура')
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -10); //вторая цифра определяет скорость скрола
            setTimeout(goTop, 0)
        }

    }

}

export default buttonUp