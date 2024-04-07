const slider = () => {
    //Получение слайдера целиком
    const topSlider = document.querySelector(".top-slider");
    //Получение списка слайдов
    const sliderItems = topSlider.querySelectorAll(".item");
    //Интервал переключения
    const timerInterval = 3000;

    let interval;
    let currentItem = 0;
    //Получение точек из верстки
    let dots = topSlider.querySelectorAll(".dot");

    //Создаем точки
    const createDots = () => {
        const slickDots = document.createElement("ul");
        slickDots.className = "slick-dots"; //присвоение класса блоку точек
        topSlider.append(slickDots); //добавляем точки в слайдер
        console.log(topSlider)
        return slickDots;

    };
    //создание точек и присвоение классов
    const addDots = () => {
        const dotBlock = createDots();
        for (let i = 0; i < sliderItems.length; i++) {
            const li = document.createElement("li");
            if (i === 0) {
                li.className = "dot slick-active";
            } else {
                li.className = "dot";
            }
            dotBlock.append(li);
        }
    };

    const addEventDots = () => {
        dots = topSlider.querySelectorAll(".dot");
        topSlider.addEventListener("click", (e) => {
            console.log(e.target)
            if (e.target.matches(".dot")) {
                dots.forEach((dot, index) => {
                    if (e.target === dot) {
                        switchingSlides(index);
                    }
                });
            }
        });
    };

    const prevSlide = (index) => {
        sliderItems[index].style.display = "none";
        sliderItems[index].querySelector(".table").classList.remove("active");
        dots[index].classList.remove("slick-active");
    };

    const nextSlide = (index) => {
        sliderItems[index].style.display = "block";
        dots[index].classList.add("slick-active");
        setTimeout(() => {
            sliderItems[index].querySelector(".table").classList.add("active");
        }, 200);
    };

    const getCurrentItem = (index) => {
        if (index >= sliderItems.length) {
            currentItem = 0;
        } else {
            currentItem++;
        }
    };

    const switchingSlides = (index) => {
        getCurrentItem(currentItem + 1);
        for (let i = 0; i < sliderItems.length; i++) {
            if (i === index) {
                nextSlide(i);
            } else {
                prevSlide(i);
            }
        }
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    const startSlide = () => {
        interval = setInterval(() => {
            switchingSlides(currentItem);
        }, timerInterval);
    };

    topSlider.addEventListener(
        "mouseenter",
        (e) => {
            if (e.target.matches(".dot")) {
                stopSlide();
            }
        },
        true
    );

    topSlider.addEventListener(
        "mouseleave",
        (e) => {
            if (e.target.matches(".dot")) {
                startSlide(timerInterval);
            }
        },
        true
    );

    const init = () => {
        addDots();
        addEventDots();
        switchingSlides(currentItem);
        startSlide();
    };

    init();
};
export default slider;