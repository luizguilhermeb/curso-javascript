var botaoVerificar = document.querySelector('#botao-verificar')
var verificacao = document.querySelector('#verificacao')

botaoVerificar.addEventListener('click', verificar)

function verificar() {
    paisDeOrigem = document.querySelector('#pais-de-origem')

    if (paisDeOrigem.value == 'Brasil') {
        verificacao.innerText = 'Você é Brasileiro'
    } else {
        verificacao.innerText = 'Você é Estrangeiro'
    }
}