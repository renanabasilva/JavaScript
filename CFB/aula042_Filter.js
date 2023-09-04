const idades = [15, 21, 30, 17, 18, 44, 12, 50]

console.log(idades)

// Modo simplificado

const maiores = idades.filter(elemento => elemento >= 18)

console.log(maiores)

// Modo Completo

const filtroMaior18 = (valor) => {
  if (valor >= 18)
  return valor
}

const maior = idades.filter(filtroMaior18)

console.log(maior)

// const filtroMaior = (valor, indice, arr) => {

// }