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

// Função para manter apenas um elemento selecionado (ao selecionar um novo, desseleciona o antigo)
const tirarSelecao = () => {
  const cursoSelecionados = [...document.querySelectorAll(".selecionados")]
  cursoSelecionados.map((el) => {
    el.classList.remove("selecionados")
  })
}

const criarNovoCurso = (curso) => {

  // Criando cada elemento do array
  const novoElemento = document.createElement("div")
  novoElemento.setAttribute("id", "c" + indice)
  novoElemento.setAttribute("class", "curso c1")
  novoElemento.innerHTML = curso

  // Colocando seleção para os elementos
  novoElemento.addEventListener("click", (evt) => {
    tirarSelecao()
    evt.target.classList.toggle("selecionados")
  })

  return novoElemento
}

// Construindo a coluna de cursos a partir do Array
cursos.map((el, chave) => {
  const novoElemento = criarNovoCurso(el)
  caixaCursos.appendChild(novoElemento)
  indice++
})

// Selecionar curso
const cursoSelecionado = () => {
  const cursoSelecionado = [...document.querySelectorAll(".selecionados")]
  return cursoSelecionado[0]
}

// Botão 'curso selecionado'
btnCursoSelecionado.addEventListener("click", (evt) => {
  try {
    alert("Curso selecionado: " + cursoSelecionado().textContent)
  } catch (ex) {
    alert("Selecione um curso")
  }
})

// Botão 'Remover curso'
btnRemoverCurso.addEventListener("click", () => {
  if (cursoSelecionado() != undefined) {
    const resposta = confirm("Remover o curso " + cursoSelecionado().textContent + "?")
    if (resposta) cursoSelecionado().remove()
  } else {
    alert("Selecione um curso")
  }
})

// Botão 'Adicionar Curso Antes'
btnAdicionarCursoAntes.addEventListener("click", () => {
  try {
    if (nomeCurso.value != "") {                                    // Verifica se o conteúdo não está vazio
      const novoCurso = criarNovoCurso(nomeCurso.value)         // Curso retirado da caixa de texto
      caixaCursos.insertBefore(novoCurso, cursoSelecionado())     // Fará a inserção do novo curso antes do curso selecionado
    } else {
      alert("Digite o nome do curso")
    }
  } catch (ex) {
    alert("Selecione um curso")
  }

})

// Botão 'Adicionar Curso Depois'
btnAdicionarCursoDepois.addEventListener("click", () => {
  try {
    if (nomeCurso.value != "") {
      const novoCurso = criarNovoCurso(nomeCurso.value)         // Curso retirado da caixa de texto
      caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling)     // Fará a inserção do novo curso antes do curso selecionado
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
