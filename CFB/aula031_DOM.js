// Ao utilizar o getElementById e coloca-los em um array, é possível utilizar métodos de array, como map, push, pop, etc
// Ao utilizar o getElementsByTagName não é possível utilizar os métodos de array, é preciso converter
// getElementsByTagName retorna um HTMLCollection
// É possível utilizar o spread para transformar o HTMLCollection em um array




const dc1 = document.getElementById("c1")
const dc2 = document.getElementById("c2")
const dc3 = document.getElementById("c3")
const dc4 = document.getElementById("c4")
const dc5 = document.getElementById("c5")
const dc6 = document.getElementById("c6")

const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6]

const colecaoHTML = [...document.getElementsByTagName("div")]
// let colecaoHTML = document.getElementsByTagName("div")
// colecaoHTML = [...colecaoHTML]

colecaoHTML.map((e) => {
  console.log(e)
})