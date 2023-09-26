const numero = document.querySelector("#numero")
const btn_promessa = document.querySelector("#btn_promessa")

btn_promessa.addEventListener("click", (evt) => {
  numero.innerHTML = "Processando..."
  promessa()
    .then((retorno) => {
      numero.innerHTML = retorno
      numero.classList.remove('erro')
      numero.classList.add('ok')
    })
    .catch((retorno) => {
      numero.innerHTML = retorno
      numero.classList.remove('ok')
      numero.classList.add('erro')
    })
  })
  
  const promessa = () => {
    let p = new Promise((resolvido, rejeitado) => {
      let resultado = true
      let tempo = 3000
      setTimeout(() => {
        if (resultado) {
          resolvido("Deu tudo certo")
          // numero.innerHTML = "Deu tudo certo"
          // numero.classList.remove('erro')
          // numero.classList.add('ok')
        } else {
          rejeitado("Deu tudo errado")
          // numero.innerHTML = "Deu tudo errado"
          // numero.classList.remove('ok')
          // numero.classList.add('erro')
      }
    }, tempo);
  })
  return p
}
numero.innerHTML = "Aguardando..."
