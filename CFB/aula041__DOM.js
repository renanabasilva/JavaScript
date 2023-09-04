const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]

cursos.map((el, chave) => {

  // Criando os elementos do array
  const novoElemento = document.createElement("div")
  novoElemento.setAttribute("id", "c" + [chave + 1])
  novoElemento.setAttribute("class", "curso c1")
  novoElemento.innerHTML = el

  // Criando icone de lixeira
  const btn_lixeira = document.createElement("img")
  btn_lixeira.setAttribute("src", "./icone_lixeira.png")
  btn_lixeira.setAttribute("class", "btn_lixeira")
  novoElemento.appendChild(btn_lixeira)

  // Removendo o elemento da lista através do icone da lixeira
  btn_lixeira.addEventListener("click", ()=>{
    caixa1.removeChild(btn_lixeira.parentNode)
  })

  //// Removendo o elemento da lista ao clicar nele
  // novoElemento.addEventListener("click", (evt) => {
  //   caixa1.removeChild(evt.target)
  // })

  // Adicionando o elemento a lista
  caixa1.appendChild(novoElemento)
})
