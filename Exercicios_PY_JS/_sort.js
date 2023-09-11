const arr = [6,12,43,21,14,56,3,97]
const arr1 = [...arr]
const arr2 = [...arr]

const cresc = arr1.sort((a,b) => a-b)          //Crescente
const decresc = arr2.sort(function(a,b){return b-a})        //Decrescente

console.log(cresc)
console.log(decresc)