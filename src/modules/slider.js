const slider = () => {

    console.log('slider');
    const slider = document.querySelector('.top-slider')

    const slides = slider.querySelectorAll('.item')
    console.log(slides);
    // slides.forEach(elem => {
    //     elem.style.display = "none"

    // })
    //Переменная для выбора соответствующего слайда
    let currentSlide = 0


    //Функция автоматического переключения слайдов
    const autoSlide = () => {
        slides[currentSlide].style.display = "none";
        currentSlide++

        if(currentSlide >= slides.length) {
            currentSlide = 0
        }

        slides[currentSlide].style.display = "block";
    }


const startSlide = () => {
    setInterval(autoSlide, 3000)

}


startSlide()
}
export default slider()