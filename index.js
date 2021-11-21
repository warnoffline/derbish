const modal = $.modal({
    title: 'Связь со мной',
    closable: true,
    content: `<p>VK: <a href="https://vk.com/warnoffline" target="_blank">vk.com</a></p>
    <p>Telegram: <a href="https://t.me/joinchat/qVoZkR1fJWIxZmEy" target="_blank">t.me</a></p>
    <p>Instagram: <a href="https://www.instagram.com/warnoffline/" target="_blank">instagram.com</a></p>
    <p>Донат: <a href="https://www.donationalerts.com/r/warnoffline" target="_blank">donationalerts.com</a></p>`,
    width: '400px',
    footerButtons: [
        {text: 'Ok', type: 'primary', handler(){
            modal.close()
        }},
        {text: 'Cancel', type: 'danger', handler(){
            modal.close()
        }}
    ]
})

document.addEventListener('click', event => {
    const btnType = event.target.dataset.btn
    if(btnType === 'price'){
        modal.open()
    }
})