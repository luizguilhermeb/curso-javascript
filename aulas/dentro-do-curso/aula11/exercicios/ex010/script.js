var botaoVerificar = document.querySelector('#botao-verificar')
var verificação = document.querySelector('#verificacao')
botaoVerificar.addEventListener('click', verificar)

function verificar() {
    velocidade = document.querySelector('#velocidade')

    if (velocidade.value <= 0) {
        verificação.innerText = `Você está parado!`    
    } else {
        verificação.innerText = `Você está andando a ${velocidade.value}Km/h`
    }
}
