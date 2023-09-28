const div_data = document.querySelector(".div_data")
const div_relogio = document.querySelector("#div_relogio")
const div_relogio2 = document.querySelector("#div_relogio2")
const div_relogio3 = document.querySelector("#div_relogio3")

const data = new Date()

// Data 
let dia = data.getDate()
let mes = data.getMonth() + 1
dia = dia < 10 ? "0" + dia : dia
mes = mes < 10 ? "0" + mes : mes
const data_string = `${dia}/${mes}/${data.getFullYear()}`
div_data.innerHTML = data_string

// Relógio 1
const relogio = () => {
  const data = new Date()
  let hora = data.getHours()
  let minuto = data.getMinutes()
  let segundo = data.getSeconds()
  hora = hora < 10 ? "0" + hora : hora
  minuto = minuto < 10 ? "0" + minuto : minuto
  segundo = segundo < 10 ? "0" + segundo : segundo
  const hora_completa = `${hora}:${minuto}:${segundo}`
  div_relogio.innerHTML = hora_completa
}

const intervalo = setInterval(relogio, 1000)

// Relógio 2
const relogio2 = () => {
  const data = new Date()
  div_relogio2.innerHTML = data.toLocaleTimeString()
}

setInterval(relogio2, 1000)

// Relógio 3
const relogio3 = () => {
  const data = new Date()
  div_relogio3.innerHTML = data.toLocaleDateString()
}

setInterval(relogio3, 1000)



// console.log(Date.now()) // Timestamp

console.log(data)
console.log(data.getDate())

// getDate() = dia do mês
// getDay() = Dia da Semana (número)
// getFullYear() = Ano com 4 digitos
// getHours = Horas
// getMilliseconds() = Milisegundos
// getMinutes() = Minutos
// getMonth() = Mês
// getSeconds() = Segundos
// getTime() = Timestamp (milisegundos desde 1 de Janeiro de 1970, 00:00:00 UTC)
// Date.now() = Timestamp (milisegundos desde 1 de Janeiro de 1970, 00:00:00 UTC)
// getTimezoneOffset() = Timezone da localidade
// setDate() = Define um dia do mês para a data
// setMonth() = Define um mês para a data
// setFullYear() = Define um ano para a data
// setHours() = Define horas
// setMinutes() = Define minutos
// setSeconds() = Define Segundos
// setMilliseconds = Define milisegundos
// toDateString() = Retorna somente a data