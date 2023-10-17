const carro = document.querySelector('#carro')
const btn_parar = document.querySelector('#btn_parar')
const btn_rodar = document.querySelector('#btn_rodar')

const init = () => {
  carro.style.position = 'relative'
  carro.style.left = '0px'
  carro.style.width = '100px'
  carro.style.height = '50px'
  tamCarro = parseInt(carro.style.width)
  tamMax = window.innerWidth - tamCarro
}

let anima = null
let tamCarro = null
let tamMax = null
let dir = 0

const mover = () => {
  if(parseInt(carro.style.left) >= tamMax){
    dir =-1    
  } else if(parseInt(carro.style.left) <= 0){
    dir = 1
  }
  carro.style.left = parseInt(carro.style.left) + (5 * dir) + 'px'
  anima = setTimeout(mover, 10)
  console.log(tamMax)
}

btn_parar.addEventListener('click', () => {
  clearTimeout(anima)
})

btn_rodar.addEventListener('click', () => {
  clearTimeout(anima)
  mover()
})

// window.onload=init
window.addEventListener('load', init())
window.addEventListener('resize', () => {
  tamMax = window.innerWidth - tamCarro
})

window.addEventListener('keydown', (evt)=>{
  if(evt.code==='ArrowUp'){
    carro.style.width = parseInt(carro.style.width) + 10 + 'px'
    carro.style.height = parseInt(carro.style.height) + 5 + 'px'
  }
  if(evt.code==='ArrowDown'){
    carro.style.width = parseInt(carro.style.width) - 10 + 'px'
    carro.style.height = parseInt(carro.style.height) - 5 + 'px'
  }
  tamCarro = parseInt(carro.style.width)
  tamMax = window.innerWidth - tamCarro
})