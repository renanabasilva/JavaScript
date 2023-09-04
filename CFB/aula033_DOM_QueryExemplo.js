const divTodas = [...document.getElementsByTagName("div")]
const cursosTodos = [...document.getElementsByClassName("curso")]     // Transformando o HTML Collection em um array
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementById("c1")

const query_divSimples = document.querySelector("div")      // Pega apenas o primeiro elemento que satisfaça a condição
const query_divTodas1 = [...document.querySelectorAll("div[class]")]      // Pega todos os elemento que satisfazem a condição
const query_divTodas2 = [...document.querySelectorAll("div > p")]        // Pega os elementos 'p' que estão dentro de uma 'div'
const query_selecionados = [...document.querySelectorAll(".curso:not(.c2)")]        // Pega os elementos de .curso com excessão dos .c2
const query_cursosTodos = [...document.querySelectorAll(".cursos")]     // querySelector seleciona os elementos a partir do CSS
const todosRadios = document.querySelectorAll("input[type=radio]")      // Pega todos os inputs do tipo radio
const query_cursosC1 = [...document.querySelectorAll(".c1, p")]
const query_cursosC2 = [...document.querySelectorAll(".c2")]
const query_cursoEspecial1 = document.querySelector("#c6")
const query_cursoEspecial2 = document.querySelectorAll("#c4")[0]      // Ao usar querySelectorAll, ele retorna uma node list, mesmo que seja pelo Id, ao indicar pos 0 [0], ele retorna apenas o elemento+

// Na mesma querySelector, é possivel pegar mais de uma classe 

// ao usar querySelectorAll("div[class]") o class, faz ele pegar apenas as divs que possuem alguma classe

console.log(query_divTodas)
// console.log(cursosTodos)
// console.log(cursosC1)
// console.log(cursosC2)
// console.log(cursoEspecial)

// cursosC2.map((el) => {
//   el.classList.add("destaque")
// })
