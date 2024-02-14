let hora = new Date().getHours();
console.log(`Agora são exatamente ${hora} ${hora == 1 ? "hora" : "horas"}`);

let periodo;

if (hora < 6 || hora == 24) {
  periodo = "MADRUGADA!";
} else if (hora < 12) {
  periodo = "DIA!";
} else if (hora < 18) {
  periodo = "TARDE";
} else {
  periodo = "NOITE";
}

console.log(periodo);
