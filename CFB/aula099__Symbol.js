class Jogador {
  constructor(nome) {
    this.nome = nome
    this.id = Symbol()
  }
}

let jogadores = [
  new Jogador('j1'),
  new Jogador('j2'),
  new Jogador('j3'),
  new Jogador('j4'),
  new Jogador('j1'),
  new Jogador('j3'),
]

let s1 = jogadores[2].id

let simb = []

jogadoresRestantes = jogadores.filter(j => j.id != s1)
j1_jogadores = jogadores.filter(j => j.nome == 'j1')

symbolJ1 = j1_jogadores.map(j => j.id)

console.log(jogadores)
console.log('--------------------')
console.log(jogadoresRestantes)
console.log(s1)
console.log('--------------------')
console.log(j1_jogadores)
console.log(symbolJ1)