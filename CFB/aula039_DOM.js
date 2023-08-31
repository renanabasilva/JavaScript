const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]

// console.log(caixa1.children[4])
// console.log(caixa1.firstElementChild)
// console.log(caixa1.lastElementChild)
// console.log(document.getRootNode())
// console.log(btn_c[0].ownerDocument)

console.log(caixa1.hasChildNodes())        // Método para verificar se o elemento possui filhos
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)
console.log(btn_c[0].children)

// if (btn_c[0].children.length > 0) {
//   console.log("Possui elementos filhos")
// } else {
//   console.log("Não possui elementos filhos")
// }

console.log(btn_c[0].children.length > 0 ? "Possui Filhos" : "Não possui filhos")

// console.log(caixa1.firstElementChild.innerHTML="Teste")
// console.log(caixa1.children[1].innerHTML="Teste")

console.log(c1_1.parentNode.parentNode.children[4])       // Sobe na árvore, indo para os pais