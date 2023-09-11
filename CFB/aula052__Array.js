const caixa = document.querySelector("#caixa")

let cores = ["Azul", "verde", "vermelho"]
let cursos = ['HTML', 'CSS', 'Javascript', cores]

//cursos[0] = 2023

cursos.push("Python")
cursos.push("C++")
//cursos.pop()
cursos.unshift("React")     // Adiciona no inicio do array
//cursos.shift()            // Remove do inicio do array

console.log(cursos[3][1])

cursos.map((el) => {
  let p = document.createElement("p")
  p.innerHTML = el
  caixa.appendChild(p)
})