const q1 = document.querySelector('#q1')
const q2 = document.querySelector('#q2')
const posx = document.querySelector('#posx')
const posy = document.querySelector('#posy')
const largura = document.querySelector('#largura')
const altura = document.querySelector('#altura')

// A função getBoundingClientRect pertence a classe 'element' Ex: div, p, a, etc...

// A propriedade accessKey pertence a classe 'element'

console.log(q1.getBoundingClientRect())

q1.accessKey = 'b'
q2.accessKey = 'n'

console.log(q1.accessKey)

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