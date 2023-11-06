const scrollBtn = document.getElementById('scrollBtn')
var actualLang = 'pt-br'
const pageHTML = window.document.head

scrollBtn.addEventListener('click', () => {
    window.scrollTo(0, 0)
})

document.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollBtn.style.display = "flex"
    } else {
        scrollBtn.style.display = "none"
    }
})

function changeLang() {
    if (actualLang == 'pt-br') {
        actualLang = 'en'
        HTMLAllCollection
    }
}