const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.querySelector("#btnCursoSelecionado")
const btnRemoverCurso = document.querySelector("#btnRemoverCurso")
const btnAdicionarCursoAntes = document.querySelector("#btnAdicionarNovoCursoAntes")
const btnAdicionarCursoDepois = document.querySelector("#btnAdicionarNovoCursoDepois")
const nomeCurso = document.querySelector("#nomeCurso")

let indice = 0

const criarNovoCurso = (curso) => {

  // Criando cada elemento do array
  const novoElemento = document.createElement("label")
  novoElemento.setAttribute("id", "c" + indice)
  novoElemento.setAttribute("class", "curso c1")
  novoElemento.innerHTML = curso

  // Criando checkbox com radio
  const comandos = document.createElement("div")
  comandos.setAttribute("class", "comandos")

  const rb = document.createElement("input")
  rb.setAttribute("type", "radio")
  rb.setAttribute("name", "rb_curso")

  // Adicionando criações no curso
  comandos.appendChild(rb)

  novoElemento.appendChild(comandos)

  return novoElemento
}

// Construindo a coluna de cursos a partir do Array
cursos.map((el, chave) => {
  const novoElemento = criarNovoCurso(el)
  caixaCursos.appendChild(novoElemento)
  indice++
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
  } catch (ex) {
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

btnAdicionarCursoAntes.addEventListener("click", (evt) => {
  const rs = radioSelecionado()
  try {
    if (nomeCurso.value != "") {                                    // Verifica se o conteúdo não está vazio
      const cursoSelecionado = rs.parentNode.parentNode
      const novoCurso = criarNovoCurso(nomeCurso.value)         // Curso retirado da caixa de texto
      caixaCursos.insertBefore(novoCurso, cursoSelecionado)     // Fará a inserção do novo curso antes do curso selecionado
    } else {
      alert("Digite o nome do curso")
    }
  } catch (ex) {
    alert("Selecione um curso")
  }

})

btnAdicionarCursoDepois.addEventListener("click", (evt) => {
  const rs = radioSelecionado()
  try {
    if (nomeCurso.value != "") {
      const cursoSelecionado = rs.parentNode.parentNode
      const novoCurso = criarNovoCurso(nomeCurso.value)         // Curso retirado da caixa de texto
      caixaCursos.insertBefore(novoCurso, cursoSelecionado.nextSibling)     // Fará a inserção do novo curso antes do curso selecionado
    } else {
      alert("Digite o nome do curso")
    }
  } catch (ex) {
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