const validator = () => {

    //Только КИРИЛИЦА -Валидация поля имени в форме вначале, внизу и модальном окне 
    const userName = document.querySelector('[name="fio"]');

    userName.addEventListener('input', (e) => {
        if (e.target.value = e.target.value.replace(/[^\-а-яА-ЯёЁ\s]+$/g, "")) {
            userName.classList.add("success");
        }
    })

    //валидация телефона (только цифры и + (знак плюс))
    const tel = document.querySelector('[name="tel"]')
    tel.setAttribute("required", true)
    tel.addEventListener('input', (e) => {

        if (e.target.value = e.target.value.replace(/[^0-9\(\)\+]/g, "")) {
            tel.classList.add("success");
        };
    })

}
export default validator