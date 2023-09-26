const numero = document.querySelector("#numero")

let promise = new Promise((resolvido, rejeitado) => {
  let resultado = true
  let tempo = 3000
  setTimeout(() => {
    if(resultado){
      resolvido("Deu tudo certo")
    } else {
      rejeitado("Deu tudo errado")
    }
  }, tempo);
})

promise.then((retorno)=>{
  numero.innerHTML = retorno
  numero.classList.remove('erro')
  numero.classList.add('ok')
})
promise.catch((retorno)=>{
  numero.innerHTML = retorno  
  numero.classList.remove('ok')
  numero.classList.add('erro')
})

numero.innerHTML = "Processando..."
