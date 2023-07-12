// const robotron = document.querySelector("#robotron")
// const subtrair = document.querySelector("#subtrair");
// const somar = document.querySelector("#somar");
// const braco = document.querySelector("#braco");
const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

// robotron.addEventListener("click", (evento) => {
//     console.log(evento)
// })

// function dizOi(){
//     console.log("oi")
// }


// evento.target = mostra onde foi clicado
// evento.target.parentNode = mostra o pai do elemento clicado 
// evento.target.textContent = o conteúdo do texto
// evento.target.dataset.peca = pega o data-set estipulado no html
// braco.value = valor do input

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle)
    })
})

// somar.addEventListener("click", () =>{manipulaDados("somar")})

// subtrair.addEventListener("click", () =>{manipulaDados("subtrair")})

function manipulaDados(operacao, upgrade){
    const peca = upgrade.querySelector("[data-contador]")
    if (operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca, operacao) {
    if (operacao === '+'){
        estatisticas.forEach((elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        })    
    } else {
        estatisticas.forEach((elemento) => {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        })    
    }
    
}