let nome = new String("Renan")
let nomeCompleto = new String("Renan Aba da Silva")
let nomeCompleto2 = new String("Renan Aba da Silva")
let sobrenome = new String("Aba")

console.log(nome)
console.log(nome.charAt(3))

console.log('----charAt----')

console.log(nome.charAt(2))
console.log(nome.charCodeAt(2))

console.log('----Concat----')

console.log(nome.concat(sobrenome))
console.log(nome)
let nomeSobrenome = nome.concat(sobrenome)
console.log(nomeCompleto)

console.log('----IndexOf----')

console.log(nome.indexOf('n'))

console.log('----LastIndexOf----')

console.log(nome.lastIndexOf('n'))

console.log('----Comparação(localeCompare)----')

// Comparação entre OBJETOS string:

let n1 = 'Renan'
let n2 = 'Renan'
console.log(n1==n2)   // True

console.log(nomeCompleto == nomeCompleto2)    // False

console.log(nomeCompleto.localeCompare(nomeCompleto2))
// Retorno do localeCompare: 0 = Strings são iguais ; 1 e -1 = Strings diferentes, com tamanho ou ordem diferentes. Resultados 1 e -1 variam

console.log('----Replace----')

console.log(nomeCompleto.replace('Aba', 'aBa'))

console.log('----Search----')

console.log(nomeCompleto.search('Aba'))

console.log('----Slice----')

console.log(nomeCompleto.slice(10))   // Começa do index 10 e vai até o final
console.log(nomeCompleto.slice(6, 9))
// Caso startposition for maior que o endposition retorna uma string vazia
// Permite utilizar valores negativos, que percorrerá a string de trás pra frente
console.log(nomeCompleto.slice(-5))   // Apenas um termo para incluir o último caractere e obter os últimos 5 caracteres
console.log(nomeCompleto.slice(-5, -1))   // -1 para excluir o último caractere

console.log('----Split----')

let arr_nomeCompleto = nomeCompleto.split(' ')
console.log(arr_nomeCompleto)

console.log('----Substring----')

console.log(nomeCompleto.substring(3))   // Começa do index 3 e vai até o final
console.log(nomeCompleto.substring(6, 9))
// Caso startposition for maior que o endposition, faz a troca função, invertendo
console.log(nomeCompleto.substring(9, 6))

console.log('----Substr----')
console.log('*** Função descontinuada***')
// Pede o start position e a length que irá percorrer
console.log(nomeCompleto.substr(0, 5))

console.log('----toUpperCase----')

console.log(nomeCompleto.toUpperCase())   // Apenas aparente
console.log(nomeCompleto.toLocaleUpperCase())   // Apenas aparente
nomeMaiusc = nomeCompleto.toUpperCase()   // Mudança permanente
console.log(nomeMaiusc)

console.log('----toLowerCase----')

console.log(nomeCompleto.toLowerCase())   // Apenas aparente
console.log(nomeCompleto.toLocaleLowerCase())   // Apenas aparente
nomeMinusc = nomeMaiusc.toLowerCase()   // Mudança permanente
console.log(nomeMinusc)

console.log('----valueOf----')
// Retorna o valor primitivo da string
console.log(nomeCompleto)
console.log(nomeCompleto.valueOf())

console.log('----toString----')
// Faz a conversão para o formato string
let num = 10
console.log(typeof(num))
num = num.toString()
console.log(typeof(num))
