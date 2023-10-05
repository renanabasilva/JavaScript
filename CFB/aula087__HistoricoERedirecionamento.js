const url = document.querySelector("#url")
const btn_url = document.querySelector("#btn_url")

btn_url.addEventListener('click', (evt) => {
  evt.preventDefault()
  // window.location='aula028.html'
  // window.location='https://www.google.com.br'
  // window.location.replace('https://www.google.com.br')      // redireciona removendo a url atual do histórico
  // window.location.assign('https://www.google.com.br')          // redireciona mantendo o histórico
  // window.location.reload()                                     // Recarrega a página
  // window.history.back()
  // window.history.forward()
  // window.history.go(1)                      // Informa para qual pagina do histórico deseja navegar
  // console.log(window.history.length)        //Comprimento do histórico
  window.location = url.value
})