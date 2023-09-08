const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_array = [21, 25, 19, 20, 16, 18, 22]
// const elementos_array = ["HTML", "CSS", "Javascript"]

p_array.innerHTML = "[" + elementos_array + "]"

btnVerificar.addEventListener("click", (evt) => {
  resultado.innerHTML = 'Array não conforme'
  const ret = elementos_array.every((ele, key, arr) => {
    if (ele <18){
      resultado.innerHTML = `Array não conforme na posição ${key}`
    }
    return ele >= 18
  })
  if (ret){
    resultado.innerHTML = 'OK'
  }
  console.log(ret)
})
