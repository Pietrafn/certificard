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
