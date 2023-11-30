var botaoSoma = document.querySelector('#botao-soma')
var resultado = document.querySelector('#resultado')

botaoSoma.addEventListener('click', somar)

function somar() {
    var n1 = Number(document.querySelector('#n1').value)
    var n2 = Number(document.querySelector('#n2').value)
    var soma = n1 + n2
    resultado.innerText = soma
}
