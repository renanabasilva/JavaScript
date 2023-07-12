const lista = document.querySelector("ul");
const botao = document.querySelector("#botao")
botao.addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
});

document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
});