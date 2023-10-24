const p_temp = document.querySelector('#p_temp')
const p_nivel = document.querySelector('#p_nivel')
const p_pressao = document.querySelector('#p_pressao')
const btn_texto = document.querySelector('#btn_texto')

const obterDados = () => {
  const endpoint = 'https://estudo.renanabadev.repl.co/'
  fetch(endpoint)
    .then(res => res.json())
    .then(dados => {
      console.log(dados)
      p_temp.innerHTML = `Temperatura: ${dados.temperatura}`
      p_nivel.innerHTML = `Nivel: ${dados.nivel}`
      p_pressao.innerHTML = `Pressão: ${dados.pressao}`
    })
}

obterDados()

// let intervalo = setInterval(obterDados, 1000)

let dados = {
  nome: 'Renan',
  sobrenome: 'Aba',
  curso: 'Javascript'
}

// Configurações para a API
// O método POST faz o envio de dados para a API
let cabecalho = {
  method: 'POST',
  body: JSON.stringify(dados)
}

const gravarDados = () => {
  const endpoint = 'https://estudo.renanabadev.repl.co'
  fetch(endpoint, cabecalho)
    .then(res => res.json())
    .then(ret => {
      console.log(ret)
    })
}

btn_texto.addEventListener('click', (evt) => {
  gravarDados()
})