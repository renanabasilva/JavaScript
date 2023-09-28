const div_data = document.querySelector("#div_data")
const div_relogio = document.querySelector("#div_relogio")
const btn_ativar = document.querySelector("#btn_ativar")
const btn_parar = document.querySelector("#btn_parar")
const tmp_alarme = document.querySelector("#tmp_alarme")
const hora_alarme = document.querySelector("#hora_alarme")
const timer = document.querySelector("#timer")

let som_alarme = new Audio('musica.mp3');
som_alarme.loop = -1;

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

btn_ativar.addEventListener("click",()=>{
  ts_atual = Date.now()
  ts_alarme = ts_atual + (tmp_alarme.value*1000)
  alarme_ativado = true
  const dt_alarme = new Date(ts_alarme)
  hora_alarme.innerHTML = `Hora do alarme: ${dt_alarme.toLocaleTimeString()}`
  // hora_alarme.innerHTML = `Hora do alarme: ${dt_alarme.getHours()}:${dt_alarme.getMinutes()}:${dt_alarme.getSeconds()}`
})

btn_parar.addEventListener("click",()=>{
  alarme_ativado = false
  alarme_tocando = false
  hora_alarme.innerHTML="Hora do Alarme:"
  tmp_alarme.value = 0
  timer.classList.remove("alarme")
  som_alarme.pause();
  som_alarme.currentTime = 0;
})

const data = new Date()

// Data 
let dia = data.getDate()
let mes = data.getMonth() + 1
dia = dia < 10 ? "0" + dia : dia
mes = mes < 10 ? "0" + mes : mes
const data_string = `${dia}/${mes}/${data.getFullYear()}`
div_data.innerHTML = data_string

// Relógio
const relogio = () => {
  const data = new Date()
  div_relogio.innerHTML = data.toLocaleTimeString()
  if (alarme_ativado && !alarme_tocando){
    if(data.getTime() >= ts_alarme){
      alarme_tocando = true
      som_alarme.play();
      timer.classList.add("alarme")
    }
  }
}

setInterval(relogio, 1000)

// // Relógio 1
// const relogio = () => {
//   const data = new Date()
//   let hora = data.getHours()
//   let minuto = data.getMinutes()
//   let segundo = data.getSeconds()
//   hora = hora < 10 ? "0" + hora : hora
//   minuto = minuto < 10 ? "0" + minuto : minuto
//   segundo = segundo < 10 ? "0" + segundo : segundo
//   const hora_completa = `${hora}:${minuto}:${segundo}`
//   div_relogio.innerHTML = hora_completa
// }

// const intervalo = setInterval(relogio, 1000)

// setInterval(relogio2, 1000)


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