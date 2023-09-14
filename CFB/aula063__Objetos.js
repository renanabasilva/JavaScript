const f_tipoMilitar = document.querySelector("#f_tipoMilitar")
const f_tipoNormal = document.querySelector("#f_tipoNormal")
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")
const f_blindagem = document.querySelector("#f_blindagem")
const f_municao = document.querySelector("#f_municao")
const btn_addCarro = document.querySelector("#btn_addCarro")
const carros = document.querySelector("#carros")

let a_carros = []

f_tipoMilitar.addEventListener("click", (evt) => {
  f_blindagem.removeAttribute("disabled")
  f_municao.removeAttribute("disabled")
})

f_tipoNormal.addEventListener("click", (evt) => {
  f_blindagem.setAttribute("disabled", "disabled")
  f_municao.setAttribute("disabled", "disabled")
  f_blindagem.value = 0
  f_municao.value = 0
})

const gerenciarExibicaoCarros = () => {
  carros.innerHTML = ''
  a_carros.map((car) => {
    const div = document.createElement("div")
    div.setAttribute("class", "carro")
    div.innerHTML = `Nome: ${car.nome} <br>
    Cor: ${car.cor} <br>
    Portas: ${car.portas} <br>
    Blindagem: ${car.blindagem} <br>
    Munição: ${car.municao}`
    carros.appendChild(div)
  })
}

btn_addCarro.addEventListener("click", (evt) => {
  if (f_tipoNormal.checked) {
    const car = new Carro(f_nome.value, f_portas.value)
    a_carros.push(car)
  } else if (f_tipoMilitar.checked) {
    const car = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
    a_carros.push(car)
  }
  gerenciarExibicaoCarros()
})





class Carro {       // Classe PAI / Base
  constructor(nome, portas) {
    this.nome = nome
    this.portas = portas
    this.ligado = false
    this.vel = 0
    this.cor = undefined
  }

  ligar = function () {
    this.ligado = true
  }

  desligar = function () {
    this.ligado = false
  }

  setCor = function (cor) {
    this.cor = cor
  }
}

class Militar extends Carro {     //Classe filho 
  constructor(nome, portas, blindagem, municao) {
    super(nome, portas)
    this.blindagem = blindagem
    this.municao = municao
    this.setCor("Verde")
  }

  atirar = function () {
    if (this.municao > 0) {
      this.municao--
    }
  }
}

class Utilitario extends Carro {
  constructor(nome, portas, lugares) {
    super(nome, portas)
    this.lugares = lugares
  }
}

// const c1 = new Carro("Normal", 4)

// c1.ligar()
// c1.setCor("Preto")

// const c2 = new Militar("Rhino", 1, 100, 50)
// c2.setCor("Cinza")

// console.log(`Nome: ${c1.nome}`)
// console.log(`Portas: ${c1.portas}`)
// console.log(`Ligado: ${(c1.ligado) ? "Sim" : "Não"}`)
// console.log(`Velocidade: ${c1.vel}`)
// console.log(`Cor: ${c1.cor}`)


// console.log(`Nome: ${c2.nome}`)
// console.log(`Portas: ${c2.portas}`)
// console.log(`Ligado: ${(c2.ligado) ? "Sim" : "Não"}`)
// console.log(`Velocidade: ${c2.vel}`)
// console.log(`Cor: ${c2.cor}`)
// console.log(`Blindagem: ${c2.blindagem}`)
// console.log(`Munição: ${c2.municao}`)
