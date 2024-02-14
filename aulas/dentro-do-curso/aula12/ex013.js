let diaSemana = new Date().getDay()

switch (diaSemana) {
    case 0:
        diaSemana = 'DOMINGO'
        break
    case 1:
        diaSemana = 'SEGUNDA-FEIRA'
        break
    case 2:
        diaSemana = 'TERÇA-FEIRA'
        break
    case 3:
        diaSemana = 'QUARTA-FEIRA'
        break
    case 4:
        diaSemana = 'QUINTA-FEIRA'
        break
    case 5:
        diaSemana = 'SEXTA-FEIRA'
        break
    case 6:
        diaSemana = 'SÁBADO'
        break
    default:
        diaSemana = '[ERRO] Dia Inválido'
}

console.log(diaSemana)
