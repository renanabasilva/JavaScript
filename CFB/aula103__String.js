let nome = new String("Renan")
let nomeCompleto = new String("Renan Aba da Silva")
let nomeCompleto2 = new String("Renan Aba da Silva")
let sobrenome = new String("Aba")

console.log(nome)
console.log(nome.charAt(3))

console.log('---------')

console.log(nome.charAt(2))
console.log(nome.charCodeAt(2))

console.log('---------')

console.log(nome.concat(sobrenome))
console.log(nome)
let nomeSobrenome = nome.concat(sobrenome)
console.log(nomeCompleto)

console.log('---------')

console.log(nome.indexOf('n'))

console.log('---------')

console.log(nome.lastIndexOf('n'))

console.log('---------')

// Comparação entre OBJETOS string:

let n1 = 'Renan'
let n2 = 'Renan'
console.log(n1==n2)   // True

console.log(nomeCompleto == nomeCompleto2)    // False

console.log(nomeCompleto.localeCompare(nomeCompleto2))
// Retorno do localeCompare: 0 = Strings são iguais ; 1 e -1 = Strings diferentes, com tamanho ou ordem diferentes. Resultados 1 e -1 variam

console.log('---------')

console.log(nomeCompleto.replace('Aba', 'aBa'))

console.log('---------')

console.log(nomeCompleto.search('Aba'))

console.log('---------')

console.log(nomeCompleto.slice(6, 9))

let arr_nomeCompleto = nomeCompleto.split(' ')
console.log(arr_nomeCompleto)

