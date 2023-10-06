const btn_alert = document.querySelector("#btn_alert")
const btn_confirm = document.querySelector("#btn_confirm")
const btn_prompt = document.querySelector("#btn_prompt")

btn_alert.addEventListener("click",(evt) =>{
  alert('Olá, como você está?')
})

btn_confirm.addEventListener("click",(evt) =>{
  const ret = window.confirm('Você está pronto?')
  if(ret){
    console.log('Botão Confirm pressionado')
  } else {
    console.log('Botão Cancelar pressionado')
  }
})

btn_prompt.addEventListener("click",(evt) =>{
  const nome = prompt('Digite seu nome:','texto padrão')
  if (nome === null){
    console.log('Botão cancelar pressionado.')
  } else {
    console.log(`Nome digitado: ${nome}`)
  }
})