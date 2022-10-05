/*colocar uma if pra caso tema == claro, document.getElementById("mudaTema"). value = "Tema escuro"  else document.getElementById("mudaTema"). value = "tema claro"
onde está escrito conquistas, vou mudar para linguagens, vou colocar quais linguagens de programação eu sei, e quais pretendo aprender*/
tema();
function mudaTema() {
  document.body.classList.toggle("dark");
  tema();
}
function tema() {
  var btn = document.querySelector("#mudarTema");
  if (document.body.className == "dark") {
    btn.innerHTML = "Tema Claro";
  } else {
    btn.innerHTML = "Tema Escuro";
  }
}