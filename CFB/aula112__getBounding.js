const q1 = document.querySelector('#q1')
const q2 = document.querySelector('#q2')
const posx = document.querySelector('#posx')
const posy = document.querySelector('#posy')
const largura = document.querySelector('#largura')
const altura = document.querySelector('#altura')

// A função pertence a classe 'element' Ex: div, p, a, etc...

console.log(q1.getBoundingClientRect())

const info = (el) => {
  let domRect_q = el.getBoundingClientRect()
  posx.innerHTML = `posx: ${domRect_q.x}`
  posy.innerHTML = `posy: ${domRect_q.y}`
  largura.innerHTML = `largura: ${domRect_q.width}`
  altura.innerHTML = `altura: ${domRect_q.height}`
}

q1.addEventListener('click', (evt) => {
  info(evt.target)
})

q2.addEventListener('click', (evt) => {
  info(evt.target)
})