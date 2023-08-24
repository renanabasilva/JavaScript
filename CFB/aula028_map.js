// O primeiro parâmetro do map é o elemento da coleção que está sendo iterada
// O segundo parâmetro é o índice do array
// O terceiro parâmetro é o array de origem
// Map é o método mais otimizado para quando se quer percorrer o array inteiro, trabalhar com os elementos, ou retornar os elementos sem interrupção

/*
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
console.log(numbers)
console.log(roots)
// roots é [1, 2, 3], numbers ainda é [1, 4, 9]

var numbers1 = [1, 4, 9];
var doubles = numbers.map(function (num) {
  return num * 2;
});
console.log(numbers1)
console.log(doubles)
// doubles é agora [2, 8, 18]. numbers ainda é [1, 4, 9]

--------------

const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React']
let c = cursos.map((elemento, indice)=>{
  return "<div>" + elemento + "</div>"
})

console.log(c)

-------------

let elementos = document.getElementsByTagName("div")
elementos = [...elementos]
console.log(elementos)
elementos.map((e, i) =>{
  e.innerHTML=("Teste " + i)
})

*/

// const elemento = document.getElementsByTagName("div")
// const val = Array.prototype.map.call(el,({innerHTML}) => innerHTML)
// console.log(val)

const converterInt = (e) => parseInt(e)
const dobrar = (e) => e*2

let num = ['1','2','3','4','5'].map(dobrar)

console.log(num)