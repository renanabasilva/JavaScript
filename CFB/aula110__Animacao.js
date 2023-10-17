const carro = document.querySelector('#carro')
const btn_parar = document.querySelector('#btn_parar')
const btn_esquerda = document.querySelector('#btn_esquerda')
const btn_direita = document.querySelector('#btn_direita')

const init = () => {
  carro.style.position = 'relative'
  carro.style.left = '0px'
  carro.style.width = '100px'
  tamCarro = parseInt(carro.style.width)
  tamMax = window.innerWidth - tamCarro
}

let anima = null
let tamCarro = null
let tamMax = null


const mover = (dir) => {
  if (dir > 0) {
    if(parseInt(carro.style.left) <= tamMax){
      carro.style.left = parseInt(carro.style.left) + (5 * dir) + 'px'
      anima = setTimeout(mover, 10, dir)
    } else {
      clearTimeout(anima)
    }
  } else if (dir < 0) {
    if(parseInt(carro.style.left) >= 0){
      carro.style.left = parseInt(carro.style.left) + (5 * dir) + 'px'
      anima = setTimeout(mover, 10, dir)
    } else {
      clearTimeout(anima)
    }  
  }
  console.log(tamMax)
}

btn_parar.addEventListener('click', () => {
  clearTimeout(anima)
})

btn_esquerda.addEventListener('click', () => {
  clearTimeout(anima)
  mover(-1)
})

btn_direita.addEventListener('click', () => {
  clearTimeout(anima)
  mover(1)
})

// window.onload=init
window.addEventListener('load', init())
window.addEventListener('resize', () => {
  tamMax = window.innerWidth - tamCarro
})