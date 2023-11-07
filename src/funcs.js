/* Change Language Function */
const brPage = document.getElementById('pt-br')
const enPage = document.getElementById('en')
var actualLang = 'pt-br'

function changeToPT() {
    if (actualLang == 'en') {
        actualLang = 'pt-br'
        document.documentElement.lang = 'pt-br'
        enPage.style.display = 'none'
        brPage.style.display = 'block'
    }
}

function changeToEN() {
    if (actualLang == 'pt-br') {
        actualLang = 'en'
        document.documentElement.lang = 'en'
        brPage.style.display = 'none'
        enPage.style.display = 'block'
    }
}

/* Hide Scroll Button Function */
const scrollBtn = document.getElementById('scrollBtn')

document.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollBtn.style.display = "flex"
    } else {
        scrollBtn.style.display = "none"
    }
})