const slider = () => {

    //Получение самого блока слайдера и нодлиста из слайдов
    const slider = document.querySelector('.top-slider');
    const slides = slider.querySelectorAll('.item');

    //Переменная для выбора соответствующего слайда
    let currentSlide = 0;

    //Функция автоматического переключения слайдов
    const autoSlide = () => {
        slides[currentSlide].style.display = "none";
        slides[currentSlide].querySelector(".table").classList.remove("active");
        currentSlide++
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        slides[currentSlide].style.display = "block";
        slides[currentSlide].querySelector(".table").classList.add("active");
    }

    const startSlide = () => {
        setInterval(autoSlide, 3000) //период автопрокрутки
    }
    startSlide();
}
export default slider