// Variáveis de hora declaradas e executadas
let horaSistema = new Date().getHours()
let minutosSistema = new Date().getMinutes()
let horarioSistema = `${horaSistema}:${minutosSistema}`
let horarioHTML = document.querySelector('#horario')
horarioHTML.innerText = `${String(horaSistema).length == 1 ? `0${horaSistema}` : horaSistema}:${String(minutosSistema).length == 1 ? `0${minutosSistema}` : minutosSistema}`

// Imagem e frase complementar declaradas como variáveis e executadas
let imgHora = document.querySelector('#img-hora')
let frasePositiva = document.querySelector('#frase-positiva')
if (horaSistema < 6) {
    imgHora.src = 'img/madrugada.jpg'
    frasePositiva.innerText = 'Aí não né, vai dormir!'
    document.body.style.backgroundImage = 'linear-gradient(to top, #000000, #1f1d1d)'
} else if (horaSistema < 12) {
    imgHora.src = 'img/dia.jpg'
    frasePositiva.innerText = 'Tenha uma linda Manhã!'
    document.body.style.backgroundImage = 'linear-gradient(to top, #eeff00, #ffc800)'
} else if (horaSistema < 18) {
    imgHora.src = 'img/tarde.jpg'
    frasePositiva.innerText = 'Tenha uma bela Tarde!'
    document.body.style.backgroundImage = 'linear-gradient(to top, #ffb300, #ff9100)'
} else if (horaSistema < 24) {
    imgHora.src = 'img/noite.jpg'
    frasePositiva.innerText = 'Boa noite'
    document.body.style.backgroundImage = 'linear-gradient(to top, #292626, #3c3838)'
}

// Verificar se o minuto mudou, se mudou, executa as mudanças
let periodoDia

if (horaSistema < 6) {
    periodoDia = 'madrugada'
} else if (horaSistema < 12) {
    periodoDia = 'manha'
} else if (horaSistema < 18) {
    periodoDia = 'tarde'
} else if (horaSistema < 24) {
    periodoDia = 'noite'
}

let periodoDiaFixo = periodoDia
let horarioFixo = `${horaSistema}:${minutosSistema}`
function verificarHorario() {
    horaSistema = new Date().getHours()
    minutosSistema = new Date().getMinutes()
    horarioSistema = `${horaSistema}:${minutosSistema}`

    if (horaSistema < 6) {
        periodoDia = 'madrugada'
    } else if (horaSistema < 12) {
        periodoDia = 'manha'
    } else if (horaSistema < 18) {
        periodoDia = 'tarde'
    } else if (horaSistema < 24) {
        periodoDia = 'noite'
    }
    
    if (horarioSistema != horarioFixo) {
        horarioFixo = `${horaSistema}:${minutosSistema}`
        horaSistema = new Date().getHours()
        minutosSistema = new Date().getMinutes()
        horarioHTML.innerText = `${String(horaSistema).length == 1 ? `0${horaSistema}` : horaSistema}:${String(minutosSistema).length == 1 ? `0${minutosSistema}` : minutosSistema}`
        if (periodoDiaFixo != periodoDia) {
            periodoDiaFixo = periodoDia
            if (horaSistema < 6) {
                imgHora.src = 'img/madrugada.jpg'
                frasePositiva.innerText = 'Aí não né, vai dormir!'
                document.body.style.backgroundImage = 'linear-gradient(to top, #000000, #1f1d1d)'
            } else if (horaSistema < 12) {
                imgHora.src = 'img/dia.jpg'
                frasePositiva.innerText = 'Tenha uma linda Manhã!'
                document.body.style.backgroundImage = 'linear-gradient(to top, #eeff00, #ffc800)'
            } else if (horaSistema < 18) {
                imgHora.src = 'img/tarde.jpg'
                frasePositiva.innerText = 'Tenha uma bela Tarde!'
                document.body.style.backgroundImage = 'linear-gradient(to top, #ffb300, #ff9100)'
            } else if (horaSistema < 24) {
                imgHora.src = 'img/noite.jpg'
                frasePositiva.innerText = 'Boa noite'
                document.body.style.backgroundImage = 'linear-gradient(to top, #292626, #3c3838)'
            }
        }
    }
}

setInterval(verificarHorario, 1000)
