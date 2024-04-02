const sendForm = () => {

    console.log('send')
    const form = document.querySelector('[name="form-callback"]')
    console.log(form)


    //блок извещения об отправке данных
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с Вами свяжется'

    //Функция для валидации полей
    const validate = (list) => {

        let success = true


        // list.forEach(input => {
        //     if (!input.classList.contains('success')) {
        //         success = false
        //     }

        // })

        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            // jsonplaceholder. server.php
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }




    //     // form.forEach((el) => {
    //     // tel = form.querySelector('input[type="tel"]')
    //     // btn = form.querySelector('button[type="submit"]')
    //     // console.log(tel)
    //     // console.log(btn)



    //     // })

    //     console.log('submit');




    // try {

    //     //Еще одна првыаываывоверка (+защита от слома кода при неверном идентификаторе формы или изменении верстки)
    //     if (!form) {
    //         throw new Error('Верните форму на место, пожалуйста)')
    //     }

    form.addEventListener('submit', (e) => {

        e.preventDefault() //отменяем действие браузера по умолчанию при нажатии на кнопку  

        //получаем сразу все поля из формы
        const formData = new FormData(form)
        const formBody = {} //сюда будем собирать инфу из формы 
        //Получаем NodeList из полей ***для валидации***
        const formElements = form.querySelectorAll('.form-control');

        //функция обработки данных, организации и отслеживания отправки формы
        // const submitForm = () => {

        //Оповещения об отправке данных
        statusBlock.textContent = loadText
        form.append(statusBlock)

        // statusBlock.setAttribute('style', 'color: #FFFFFF;')







        //перебираем и формируем заново получившиеся поля из формы
        formData.forEach((val, key) => {
            formBody[key] = val
            console.log(formBody)

        })

        console.log('submit');
        console.log(validate(formElements));



        //вызов функции организации отправки
        // submitForm()


        // } catch (error) {
        //     console.log('catch')
        //     console.log(error.message)
        // }

        //отправка данных формы, если поля прошли валидацию
        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    console.log(data);

                    //Вставка сообщения об успешной отправке
                    // statusBlock.textContent = successText

                    formElements.forEach(input => {
                        console.log(typeof (input.value))


                        input.value = '' //очищаем поля после отправки данных
                    })
                    // })
                    // .catch(error => {
                    //     //Вывод сообщения об ошибке отправки (под формой)
                    //     statusBlock.textContent = errorText
                })
        } else {
            alert('Данные не валидны!!!')
        }
    })

}
export default sendForm