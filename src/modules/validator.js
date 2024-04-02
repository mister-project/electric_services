const validator = () => {
    console.log('validator');

    //Только КИРИЛИЦА -Валидация поля имени в форме вначале, внизу и модальном окне 
    const userName = document.querySelector('[name="fio"]');


    userName.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^\-а-яА-ЯёЁ\s]+$/g, "")
    })


    //валидация телефона (только цифры и + (знак плюс))
    const tel = document.querySelector('[name="tel"]')
    tel.setAttribute("required", true)
    tel.addEventListener('input', (e) => {

        e.target.value = e.target.value.replace(/[^0-9\(\)\+]/g, "");
    })

}
export default validator