const p_temp = document.querySelector('#p_temp')
const p_nivel = document.querySelector('#p_nivel')
const p_pressao = document.querySelector('#p_pressao')

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

let intervalo = setInterval(obterDados, 1000)