const data = new Date()

const dia = data.getDate()
const mes = data.getMonth()
let data_dia = dia < 10 ? "0" + dia : dia
let data_mes = mes < 10 ? "0" + mes : mes
const data_string = `${data_dia}/${data_mes}/${data.getFullYear()}`
console.log(data_string)

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