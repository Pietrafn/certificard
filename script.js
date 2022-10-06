/*      <a href="https://github.com/Pietrafn" target="_blank">
        <img src="https://media.discordapp.net/attachments/1026231369522745344/1026635318033666049/unknown.png" alt="Pietrafn" class="logo" id="github">
      </a>*/
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