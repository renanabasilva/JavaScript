const p_array = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")

// const elementos_array = [10, 5, 8, 2, 9, 15, 20]
const elementos_array = ["HTML", "CSS", "Javascript"]

p_array.innerHTML = "[" + elementos_array + "]"

btnPesquisar.addEventListener("click", (evt) => {
  resultado.innerHTML="Valor não encontrado"
  // const ret = elementos_array.find((elemento) => elemento == txt_pesquisar.value)
  const ret = elementos_array.find((ele, key) => {
    if (ele.toUpperCase() == txt_pesquisar.value.toUpperCase()) {
      resultado.innerHTML = `Valor encontrado ${ele} na posição ${key}`
      return ele
    }
  })
  console.log(ret)
})


// const found = elementos_array.find((element) => element > 9)
// console.log(found)