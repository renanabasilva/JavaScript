// Uma função geradora tem seu retorno adiado até o momento em que se precisa desse retorno
// São o pilar da programação assincrona
// Funções geradoras a própria função tem o controle de quando irá retornar
// De primeiro momento, a função geradora irá retornar um iterador, e a partir disso, entra em execução sempre que houver yield
// function* é a representação de funções geradoras

function* cores() {
  yield 'Vermelho'
  yield 'Verde'
  yield 'Azul'
}

let itc = cores()
// console.log(itc.next().value)
// console.log(itc.next().value)
// console.log(itc.next().value)


function* perguntas() {
  const nome = yield 'Qual seu nome?'
  const esporte = yield 'Qual seu esporte favorito?'
  return `Seu nome é ${nome}, seu esporte favorito é ${esporte}`
}

const itp = perguntas()
// console.log(itp.next().value)
// console.log(itp.next('Renan').value)
// console.log(itp.next('Tenis').value)


function* contator(){
  let i=0
  while(true){
    yield i++
    if (i>5) break
  }
}

const iterator = contator()
for (let c of iterator){
  console.log(c)
}
