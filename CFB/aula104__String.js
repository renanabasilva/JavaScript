let nome = new String("Renan")
let nomeCompleto = new String("Renan Aba da Silva")

console.log('----startsWith----')
// Verifica se a string começa com o termo passado
console.log(nomeCompleto.startsWith('Rennan'))    // false
console.log(nomeCompleto.startsWith('Ren'))    // true

console.log('----endsWith----')
// Verifica se a string termina com o termo passado
console.log(nomeCompleto.endsWith('Silv'))    // false
console.log(nomeCompleto.endsWith('lva'))    // true

console.log('----includes----')
// Verifica se a string contém o termo passado
console.log(nomeCompleto.includes('bada'))    // false
console.log(nomeCompleto.includes('ba da'))    // true

console.log('----repeat----')
// Repete a string com base no número de vezes passado no método
console.log(nomeCompleto.repeat(3))    // Repete x vezes

console.log('----fromCodePoint----')
// Retorna o caractere correspondente ao código da tabela ASCII
console.log(String.fromCodePoint(82, 101, 110, 97, 110))

console.log(String.fromCodePoint(82))
console.log(String.fromCodePoint(101))
console.log(String.fromCodePoint(110))
console.log(String.fromCodePoint(97))
console.log(String.fromCodePoint(110))
console.log(String.fromCodePoint(33))

console.log(nomeCompleto.charCodeAt(0))
console.log(nomeCompleto.charCodeAt(1))
console.log(nomeCompleto.charCodeAt(2))
console.log(nomeCompleto.charCodeAt(3))
console.log(nomeCompleto.charCodeAt(4))
