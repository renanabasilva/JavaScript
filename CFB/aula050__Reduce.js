const p_array = document.querySelector("#array")
const btnReduzir = document.querySelector("#btnReduzir")
const resultado = document.querySelector("#resultado")

const elementos_array = [1, 2, 3, 4, 5]
let acc = []
let atual = []

p_array.innerHTML = "[" + elementos_array + "]"

btnReduzir.addEventListener("click", (evt) => {
  resultado.innerHTML = elementos_array.reduce((acumulador, elemento, index, arr) => {
    acc.push(acumulador)
    atual.push(elemento)
    return acumulador + elemento
  }, 0)     // Zero é o valor inicial do acumulador
  resultado.innerHTML += "<br>Acumulador: " + acc + "<br>Elementos: " + atual 
})
