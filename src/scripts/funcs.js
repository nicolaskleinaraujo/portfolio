// Change Language Function
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


// Show Help for the Downloaded file (To-do list)
function showHelp() {
    if (actualLang == 'pt-br') {
        window.alert('Execute o arquivo ".exe" na mesma pasta que o arquivo ".csv".')
    } else {
        window.alert('Run the ".exe" file in the same folder as the ".csv" file.')
    }
}