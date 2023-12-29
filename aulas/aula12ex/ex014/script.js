// Receber a hora do sistema e injeta-la no elemento HTML
let horaSistema = new Date().getHours()
let minutosSistema = new Date().getMinutes()
let horarioSistema = `${horaSistema}:${minutosSistema}`
let horarioHTML = document.querySelector('#horario')
horarioHTML.innerText = `${String(horaSistema).length == 1 ? `0${horaSistema}` : horaSistema}:${String(minutosSistema).length == 1 ? `0${minutosSistema}` : minutosSistema}` // Se hora ou minuto for um número de 1 digito, é colocado um 0 ao lado. Ex: 6 = 06

// Página é personalizada de acordo com o período do dia, através de elementos HTML
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

// Recebe o periodo do dia
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

// Declara um periodo e horario fixo usado posteriormente na função verificarHorario() 
let periodoDiaFixo = periodoDia
let horarioFixo = `${horaSistema}:${minutosSistema}`

function verificarHorario() {
    // Atualiza as variáveis de hora do sistema
    horaSistema = new Date().getHours()
    minutosSistema = new Date().getMinutes()
    horarioSistema = `${horaSistema}:${minutosSistema}`

    // Atualiza a variável de período do dia
    if (horaSistema < 6) {
        periodoDia = 'madrugada'
    } else if (horaSistema < 12) {
        periodoDia = 'manha'
    } else if (horaSistema < 18) {
        periodoDia = 'tarde'
    } else if (horaSistema < 24) {
        periodoDia = 'noite'
    }

    // compara horário fixo com horário atualizado do sistema, se for um novo horário, muda o horário no HTML e atualiza o horário fixo
    if (horarioSistema != horarioFixo) {
        horarioFixo = `${horaSistema}:${minutosSistema}`
        horaSistema = new Date().getHours()
        minutosSistema = new Date().getMinutes()
        horarioHTML.innerText = `${String(horaSistema).length == 1 ? `0${horaSistema}` : horaSistema}:${String(minutosSistema).length == 1 ? `0${minutosSistema}` : minutosSistema}`
        // Se o período do Dia atualizado for diferente do período do dia fixo, executa as mudanças no HTML
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
