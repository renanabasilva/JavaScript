const f_texto = document.querySelector("#f_texto");
const p_texto = document.querySelector("#p_texto");
const btn_texto = document.querySelector("#btn_texto");

btn_texto.addEventListener('click', (evt) => {

})

let num = 10
let curso = 'javascript'

window.localStorage.setItem('numero', num)
localStorage.setItem('nome', 'Renan')
localStorage.setItem('idade', '31')
localStorage.setItem('curso', curso)

// alert(localStorage.length)
// alert(localStorage.key(2 ))
// alert(localStorage.getItem(localStorage.key(0)))

// alert (localStorage.getItem('numero'))

localStorage.clear()

sessionStorage.setItem('nome', 'Renan')
sessionStorage.setItem('idade', '31')
sessionStorage.setItem('curso', curso)

alert(sessionStorage.length)