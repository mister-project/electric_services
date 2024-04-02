const sendForm = () => {

    const form = document.querySelector('[name="form-callback"]')


    //блок извещения об отправке данных
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо! Наш менеджер с Вами свяжется'

    //Функция для валидации полей
    const validate = (list) => {

        let success = true

        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            // jsonplaceholder. server.php
            //phpmailer - плагин отправки
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }


    //функция (основная) обработки данных, организации и отслеживания отправки формы
    const submitForm = () => {

        //получаем сразу все поля из формы
        const formData = new FormData(form)
        const formBody = {} //сюда будем собирать инфу из формы 
        //Получаем NodeList из полей ***для валидации***
        const formElements = form.querySelectorAll('.form-control');


        //Оповещения об отправке данных
        statusBlock.textContent = loadText
        form.append(statusBlock)


        //перебираем и формируем заново получившиеся поля из формы
        formData.forEach((val, key) => {
            formBody[key] = val

        })


        //отправка данных формы, если поля прошли валидацию
        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {


                    // Вставка сообщения об успешной отправке
                    statusBlock.textContent = successText

                    formElements.forEach(input => {


                        input.value = '' //очищаем поля после отправки данных
                    })
                })
                .catch(error => {
                    //Вывод сообщения об ошибке отправки (под формой)
                    statusBlock.textContent = errorText
                })
        } else {
            alert('Данные не валидны!!!')
        }
    }
    try {
        if (!form) {
            throw new Error('Пожаaaлуйста, верните форму на место')
        }


        form.addEventListener('submit', (e) => {

            e.preventDefault() //отменяем действие браузера по умолчанию при нажатии на кнопку  

            submitForm()
        })
    } catch (error) {

        // console.log(error.message)
    }
}
export default sendForm