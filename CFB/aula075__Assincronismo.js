const numero = document.querySelector("#numero")

let promise = new Promise((resolvido, rejeitado) => {
  let resultado = false
  let tempo = 3000
  setTimeout(() => {
    resultado = true
  }, tempo);
})


numero.innerHTML = "Processando..."


if (resultado) {
  numero.innerHTML = "Deu tudo certo"
  numero.classList.remove('erro')
  numero.classList.add('ok')
} else {
  numero.innerHTML = "Deu tudo errado"
  numero.classList.remove('ok')
  numero.classList.add('erro')
}
