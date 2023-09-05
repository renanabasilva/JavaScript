const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado")
const btnRemoverCurso = document.querySelector("#btnRemoverCurso")

cursos.map((el, chave) => {

  // Criando os elementos do array
  const novoElemento = document.createElement("div")
  novoElemento.setAttribute("id", "c" + [chave + 1])
  novoElemento.setAttribute("class", "curso c1")
  novoElemento.innerHTML = el

  // Criando checkbox com radio
  const comandos = document.createElement("div")
  comandos.setAttribute("class", "comandos")

  const rb = document.createElement("input")
  rb.setAttribute("type", "radio")
  rb.setAttribute("name", "rb_curso")

  // Adicionando criações no html
  comandos.appendChild(rb)

  novoElemento.appendChild(comandos)

  caixaCursos.appendChild(novoElemento)
})

// Selecionar radio
const radioSelecionado = () => {
  const todosRadios = [...document.querySelectorAll("input[type=radio]")]
  let radioSelecionado = todosRadios.filter(element => element.checked)
  return radioSelecionado[0]
}

// Botão 'curso selecionado'
btnCursoSelecionado.addEventListener("click", (evt) => {
  const rs = radioSelecionado()
  try {
    const cursoSelecionado = rs.parentNode.previousSibling.textContent
    alert("Curso selecionado: " + cursoSelecionado)
  } catch(ex) {
    alert("Selecione um curso")
  }
})

// Botão 'Remover curso'
btnRemoverCurso.addEventListener("click", (evt) => {
  const rs = radioSelecionado()
  if (rs != undefined) {
    const cursoSelecionado = rs.parentNode.parentNode
    const resposta = confirm("Remover o curso " + cursoSelecionado.textContent + "?")
    if (resposta) cursoSelecionado.remove()
  } else {
    alert("Selecione um curso")
  }
})


// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// nextSibling
// previousSibling

// cursos.map((el, chave)=>{
//   const novoElemento=document.createElement('div')
//   novoElemento.setAttribute('id', 'c'+chave)
//   novoElemento.setAttribute('class', 'curso c1')
//   novoElemento.innerHTML="<label for=x"+ chave +">" + el + "</label>"
//   const comandos=document.createElement('div')
//   comandos.setAttribute('class', 'comandos')

//   const rb=document.createElement('input')
//   rb.setAttribute('id', 'x'+chave)
//   rb.setAttribute('type', 'radio')
//   rb.setAttribute('name', 'rb_curso')