const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_array = [16, 12, 10, 17, 15, 13, 11, 19]
// const elementos_array = ["HTML", "CSS", "Javascript"]

p_array.innerHTML = "[" + elementos_array + "]"

btnVerificar.addEventListener("click", (evt) => {
  resultado.innerHTML = 'Array não conforme'
  const ret = elementos_array.some((ele, key, arr) => {
    if (ele < 18) {
      resultado.innerHTML = `Array não conforme na posição ${key}`
    }
    return ele >= 18
  })
  if (ret) {
    resultado.innerHTML = 'OK'
  }
  console.log(ret)
})
