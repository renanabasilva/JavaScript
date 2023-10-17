const carro = document.querySelector('#carro')
const btn_parar = document.querySelector('#btn_parar')
const btn_esquerda = document.querySelector('#btn_esquerda')
const btn_direita = document.querySelector('#btn_direita')

const init = () => {
  carro.style.position='relative'
  carro.style.left='0px'

}

let anima = null

const mover = (dir) =>{
  carro.style.left = parseInt(carro.style.left) - (10*dir) + 'px'

}

btn_parar.addEventListener('click', () =>{
  clearInterval(anima)
})

btn_esquerda.addEventListener('click', () =>{
  clearInterval(anima)
  anima = setInterval(mover, 40, 1)
})

btn_direita.addEventListener('click', () =>{
  clearInterval(anima)
  anima = setInterval(mover, 40, -1)
})

window.onload=init
// window.addEventListener('load', init())