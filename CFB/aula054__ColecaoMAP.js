const caixa = document.querySelector("#caixa")

let mapa = new Map()

mapa.set("curso", "Javascript")
mapa.set(10, "Renaba")
mapa.set(1, 100)
mapa.set("chave", 100)



console.log(mapa)

let pes = 10
if (mapa.has(pes)) {
  res = "A chave existe na coleção com o valor: " + mapa.get(pes)
} else {
  res = "A chave NÃO está na coleção"
}

res += ".<br>O tamanho da coleção é " + mapa.size
caixa.innerHTML = res
// caixa.innerHTML = mapa.get("curso")

mapa.forEach((ele, key)=>{
  console.log(`Chave: ${key} - Elemento: ${ele}`)
})

console.log(mapa.entries())

const clone = new Map(mapa)
mapa.delete(1)

console.log(mapa)
console.log(clone)
