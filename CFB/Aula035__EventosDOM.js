const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const copiar = document.querySelector("#btn_copiar")
const remover = document.querySelector("#btn_remover")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el) => {
  el.addEventListener("click", (evt) => {
    const curso = evt.target
    curso.classList.toggle("selecionados")
  })
})

copiar.addEventListener("click", () => {
  const cursosSelecionados = [...document.querySelectorAll("#caixa1 > .selecionados")]
  cursosSelecionados.map((el) => {
    caixa2.appendChild(el)
    el.classList.toggle("selecionados")
  })
})

remover.addEventListener("click", () => {
  const cursosSelecionados = [...document.querySelectorAll("#caixa2 > .selecionados")]
  cursosSelecionados.map((el) => {
    caixa1.appendChild(el)
    el.classList.toggle("selecionados")
  })
})

// Solução para apenas um botão:

// btn_transferir.addEventListener("click", () => {
//   const cursosSelecionados = [...document.querySelectorAll(".selecionados")]
//   const cursosNaoSelecionados = [...document.querySelectorAll(".curso:not(.selecionados)")]
//   cursosSelecionados.map((el) => {
//     caixa2.appendChild(el)
//   })
//   cursosNaoSelecionados.map((el) => {
//     caixa1.appendChild(el)
//   })
// })