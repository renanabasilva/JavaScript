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
  carro.style.left = parseInt(carro.style.left) - (1*dir) + 'px'
  anima = setTimeout(mover, 10, dir)
}

btn_parar.addEventListener('click', () =>{
  clearInterval(anima)
})

btn_esquerda.addEventListener('click', () =>{
  clearTimeout(anima)
  mover(1)  
})

btn_direita.addEventListener('click', () =>{
  clearTimeout(anima)
  mover(-1)  
})

window.onload=init
// window.addEventListener('load', init())