let tg = document.getElementById('tg');

let popup = document.querySelector('.popup');

const successMessage = document.createElement('div');
successMessage.innerText = 'Форма отправлена';


const TOKEN = "6052959542:AAFI0ds2JUH-bIfInQXcAO7f_F6mdxrBKn8";
const CHAT_ID = "-1001501462016";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

popup.addEventListener('click', function()  {
    window.location.href = "https://capcard.ru";
})
tg.addEventListener('submit', function(e) {
    e.preventDefault();

    let message = `<b>Оценка с сайта</b>\n`;
    message += `<b>Отправитель</b> ${ this.name.value }\n`;
    message += `<b>Телефон</b> ${ this.tel.value }\n`;
    message += `<b>Почта</b> ${ this.email.value }\n`;
    message += `<b>Оценка</b> ${ this.quality.value }\n`;
    message += `<b>Скидка</b> ${ this.discont.value }\n`;
    message += `<b>Общая сумма</b> ${ this.cost.value }\n`;
    message += `<b>Комментарий</b> ${ this.comment.value }`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
    })
    .then(() => {
        tg.reset();
        popup.style.display = "block";
    })
})

