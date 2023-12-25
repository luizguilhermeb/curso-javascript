// Variáveis de hora declaradas e executadas
let horaSistema = new Date().getHours()
let minutosSistema = new Date().getMinutes()
let horarioHTML = document.querySelector('#horario')
horarioHTML.innerText = `${horaSistema}:${minutosSistema}`

// Imagem e frase complementar declaradas como variáveis e executadas
let imgHora = document.querySelector('#img-hora')
let frasePositiva = document.querySelector('#frase-positiva')
if (horaSistema < 6) {
    imgHora.src = 'img/madrugada.jpg'
    frasePositiva.innerText = 'Aí não né, vai dormir!'
} else if (horaSistema < 12) {
    imgHora.src = 'img/dia.jpg'
    frasePositiva.innerText = 'Tenha uma linda Manhã!'
} else if (horaSistema < 18) {
    imgHora.src = 'img/tarde.jpg'
    frasePositiva.innerText = 'Tenha uma bela Tarde!'
} else if (horaSistema < 24) {
    imgHora.src = 'img/noite.jpg'
    frasePositiva.innerText = 'Boa noite'
}

// A cada X segundos se mudam as variáveis de acordo com o horário
function mudarHorario() {
    let horaSistema = new Date().getHours()
    let minutosSistema = new Date().getMinutes()
    horarioHTML.innerText = `${horaSistema}:${minutosSistema}`
    if (horaSistema < 6) {
        imgHora.src = 'img/madrugada.jpg'
        frasePositiva.innerText = 'Aí não né, vai dormir!'
    } else if (horaSistema < 12) {
        imgHora.src = 'img/dia.jpg'
        frasePositiva.innerText = 'Tenha uma linda Manhã!'
    } else if (horaSistema < 18) {
        imgHora.src = 'img/tarde.jpg'
        frasePositiva.innerText = 'Tenha uma bela Tarde!'
    } else if (horaSistema < 24) {
        imgHora.src = 'img/noite.jpg'
        frasePositiva.innerText = 'Boa noite'
    }
}
setInterval(mudarHorario, 1000)
