var area = document.querySelector("#area");
area.addEventListener("click", clicar);
area.addEventListener("mouseenter", entrar);
area.addEventListener("mouseout", sair);

function clicar() {
  area.innerText = "Clicou!";
  area.style.backgroundColor = "blue";
}

function entrar() {
  area.innerText = "Entrou!";
  area.style.backgroundColor = "cyan";
}

function sair() {
  area.innerText = "Saiu!";
  area.style.backgroundColor = "green";
}
