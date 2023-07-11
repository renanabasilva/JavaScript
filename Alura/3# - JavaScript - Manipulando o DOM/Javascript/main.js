const robotron = document.querySelector("#robotron")
const subtrair = document.querySelector("#subtrair");
const somar = document.querySelector("#somar");
const braco = document.querySelector("#braco");

robotron.addEventListener("click", (evento) => {
    console.log(evento)
})

function dizOi(){
    console.log("oi")
}

somar.addEventListener("click", (evento) =>{manipulaDados("somar")})

subtrair.addEventListener("click", (evento) =>{manipulaDados("subtrair")})

function manipulaDados(operacao){
    if (operacao === "subtrair"){
        braco.value = parseInt(braco.value) - 1
    } else {
        braco.value = parseInt(braco.value) + 1
    }
}