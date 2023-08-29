// const c1 = document.querySelector("#c1")

// const msg = () => {
//   alert("clicou")
// }

// c1.addEventListener("click", ()=>{
//   alert("clicou")
// })

// c1.addEventListener("click", msg)

// c1.addEventListener("click", ()=>{
//   msg()
// })

// c1.addEventListener("click", (evento)=>{
//   const elemento = evento.target
//   elemento.classList.add("destaque")
// })

// ---------------------

const cursos = [...document.querySelectorAll(".curso")]

cursos.map((elemento) => {
  elemento.addEventListener("click", (evento) =>{
    const elemento = evento.target
    elemento.classList.toggle("destaque")
    console.log(elemento.id)
    console.log(elemento.innerHTML)
  })
})