const valores = [10, 8, 9, 2]
const it_valores = valores[Symbol.iterator]()

const texto = "teste"
const it_texto = texto[Symbol.iterator]()

console.log(valores)
console.log(texto)

console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())

console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())
console.log(it_texto.next())