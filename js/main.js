function loadPage(pagina) {
  fetch(pagina)
    .then(res => res.text())
    .then(html => {
      document.querySelector(".page").innerHTML = html;

      document.querySelector(".botaovoltar").style.display = "flex";
    });
}

function goHome() {
  location.reload();
}