let nome = new String('Renan Aba da Silva 1992')
let email = 'renan@renan.com'
console.log(nome)

console.log('----Flags (g, i, m)----')
console.log(nome.search(/Silva/))
// (Search) - Retorna o index da string encontrada

console.log(nome.search(/silva/i))
// i = não usa Case sensitive (maiúscula/minúscula)

console.log('---- i ----')

console.log(nome.match(/a/g))   // Retorna só os 'a' minúsculos
// g = modo global, retorna mais de um elemento
// match - O retorno é em forma de array

console.log(nome.match(/A/ig))    // Retorna tanto maiúsculo quanto minúsculo

console.log(nome.replace(/aba/ig, 'Abarath'))


console.log('---- Conjuntos [] ----')

console.log(nome.match(/[av]/ig))
// Ao utilizar colchetes, procura-se por cada elemento individualmente

console.log(nome.match(/[a-m]/ig))
// Ao utilizar o '-' (menos), é retornado os valores do intervalo (range)

console.log('---- Operador Pipe | ----')

console.log(nome.match(/[a-m|h-z|0-9]/ig))
// Ao utilizar '|' (pipe), é possível colocar mais de uma condição, no caso, de 0 a 9. Funciona como o operador lógico 'OU'

console.log('----Conjuntos negados ^ ----')

console.log(nome.match(/[^aeiouáéí]/gi))
// Mostra apenas os elementos que não fazem parte do conjunto.


console.log('---- Metacaracteres ----')

console.log(nome.match(/r.nan/gi))
// O metacaractere '.' (ponto) funciona como um coringa, é capaz de aceitar qualquer caractere.

console.log(nome.match(/\d/ig))
// Ao utilizar '\' (contra-barra), denomina-se um metacaractere.
// metacaractere d = digit = números

console.log(nome.match(/\s/ig))
// metacaractere s = space = espaços

console.log('----Metacaracteres \\b e \\B----')

console.log(nome.match(/\bRenan\b/ig))    // Verifica tanto inicio quanto final da palavra
// metacaractere \b = fronteira dos caracteres (caracteres que estão no inicio ou no final das palavras)
console.log(nome.match(/\bab/ig))    // Com o '\b' ANTES, mostra palavras que começam com o termo
console.log(nome.match(/lva\b/ig))    // Com o '\b' DEPOIS, mostra palavras que terminam com o termo

console.log('---- Quantificadores ----')
let nome1 = new String('Renaaaan Abaaa daa Siiiiilvaaa 1992')
console.log(nome1.match(/a/ig))
console.log(nome1.match(/a+|i+/ig))
// O uso do '+', agrupa os caracteres que se repetem seguidamente

let numeros = '0 ,1, 10, 100, 1001, 1000, 102115004'
console.log(numeros.match(/10/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
// O uso do '*', 

console.log(numeros.match(/10?/ig))
// O uso da '?', 

// console.log('---- Para usar \\\\ \' \" ----')