const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado")

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

btnCursoSelecionado.addEventListener("click", (evt) => {
  const todosRadios = [...document.querySelectorAll("input[type=radio]")]
  // let radioSelecionado = todosRadios.filter((ele, key, arr) => {
  //   return ele.checked
  // })
  let radioSelecionado = todosRadios.filter(element => element.checked)    // Modo simplificado da arrow function
  radioSelecionado = radioSelecionado[0]
  // const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent
  const cursoSelecionado = radioSelecionado.parentNode.previousSibling.textContent
  alert("curso selecionado: " + cursoSelecionado)
  console.log(cursoSelecionado)
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