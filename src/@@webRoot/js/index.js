const popup = document.querySelector('.popup')
const popupBtn = document.querySelector('footer__btn--white')

popupBtn.addEventListener('click', () => {
    popup.classList.add('is-active')
})